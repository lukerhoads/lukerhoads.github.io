---
title: My First (successful) Jane Street Puzzle
date: 02/01/2024
author: Luke Rhoads
thumbnail: /images/blog/jane-street/logo.jpg
description: After much struggle, I managed to solve my first Jane Street puzzle.
---

Hello! Its been a while. After a failed attempt, I have finally solved a [Jane Street puzzle](https://www.janestreet.com/puzzles/some-f-squares-index/).

This months puzzle involved rearranging "f-squares", which are a special type of pentomino shape onto a 17x17 grid with certain constraints. These constraints include row-sums, column-sums, and region-sums. The shapes can be reflected/rotated. Each shape contains in every grid square it occupies the factor it was scaled by.

This is what an F-square looks like: 
![F-square](/images/blog/jane-street/2024-1/F-square.png "F-square")

At first, I attempted using Z3. My lack of experience quickly proved to make this strategy very difficult for me. Specifically, I could not find a way to constrain the shapes (though I knew it was possible). 

So, this led to me using [grilops](https://github.com/obijywk/grilops) which has the nice functionality of being able to constrain shapes. With shapes, column-sums, row-sums, and region-sums constrained, it was just about waiting for what satisfied them!

Here is the code:
```python
import grilops
from grilops.shapes import Shape, ShapeConstrainer
from grilops.geometry import Point, Vector
from z3 import If

row_sums = [14, 24, 24, 39, 43, 39, 22, 23, 29, 28, 34, 36, 29, 26, 26, 24, 20]
column_sums = [13, 17, 23, 32, 23, 22, 39, 39, 49, 39, 35, 36, 30, 28, 22, 20, 13]
region_sum = 24
regions = [
 [(1,0),(0,0),(1,1),(2,1),(0,1),(0,2),(0,3),(0,4),(0,5),(0,6),(0,7),(0,8),(0,9),(0,10),(0,11),(0,12),(0,13),(0,14),(0,15),(0,16),(1,16),(2,16),(3,16),(4,16),(5,16),(4,15),(4,14),(5,14),(1,15)],[(1,2),(2,2),(3,2),(2,3),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(2,14),(2,15),(3,15)],[(2,0),(3,0),(3,1),(4,1),(5,1),(6,1),(4,2),(5,2),(6,2),(4,3),(5,3),(6,3),(3,3),(3,4)],[(2,4),(2,5),(3,5),(3,6),(4,6),(4,7),(5,5),(5,6)],[(4,4),(4,5),(5,4),(6,4),(7,4),(7,3),(8,3),(8,2)],[(7,2),(7,1),(8,1),(9,1),(9,2),(9,3),(9,0),(8,0),(7,0),(6,0),(5,0),(4,0)],[(16,0),(15,0),(14,0),(13,0),(12,0),(11,0),(10,0),(15,1),(16,1),(16,2),(16,3),(16,4),(10,1),(10,2),(10,3),(11,3),(12,3),(12,2),(13,2),(11,4),(12,4),(12,5),(11,5),(12,6),(11,6),(11,7)],[(11,2),(11,1),(12,1),(13,1),(14,1),(14,2),(14,3),(13,3),(13,4),(13,5),(14,5),(14,6)],[(15,2),(15,3),(15,4),(14,4),(15,5),(16,5),(15,6),(16,6),(14,7),(15,7),(16,7),(15,8),(16,8),(14,9),(15,9),(16,9),(16,10),(16,11),(16,12),(15,12),(14,12),(14,11),(15,13),(16,13),(16,14),(16,15),(15,15),(14,15),(14,16),(15,16),(16,16)],[(14,8),(13,8),(13,7),(13,6),(13,9),(13,10),(14,10),(15,10),(15,11),(12,10),(11,10),(11,9)],[(9,4),(10,4),(10,5),(10,6),(10,7),(8,8),(9,8),(10,8),(10,9),(11,8),(12,8),(12,7),(12,9)],[(8,9),(9,9),(9,10),(10,10),(10,11),(11,11),(11,12),(12,12)],[(9,11),(9,12),(10,12),(10,13),(8,12),(8,13),(8,14),(7,14)],[(7,15),(8,15),(9,15),(9,13),(9,14),(10,15),(11,15),(12,15),(12,14),(13,14),(13,15),(13,16)],[(13,13),(14,13),(14,14),(15,14),(12,13),(11,13),(11,14),(10,14),(13,12),(13,11),(12,11)],[(12,16),(11,16),(10,16),(9,16),(8,16),(7,16),(6,16),(6,15),(6,14),(5,15)],[(7,13),(6,13),(5,13),(7,12),(8,11),(7,11),(8,10),(7,10),(6,11),(6,12),(5,12),(4,12),(4,13),(3,12),(3,13),(3,14),(2,13)],[(2,12),(2,11),(3,11),(2,10),(3,10),(4,10),(2,9),(3,9),(4,9),(5,9),(4,8),(3,8),(2,8),(2,7),(3,7),(2,6)],[(4,11),(5,11),(5,10),(6,10),(6,9),(7,9),(7,8),(7,7),(8,7),(9,7),(9,6),(9,5)],[(8,5),(7,6),(7,5),(8,6),(8,4),(6,5),(6,6),(6,7),(5,7),(5,8),(6,8)]
]

def link_symbols_to_shapes(sym, sg, sc):
 for p in sg.lattice.points:
 sg.solver.add(
 If(
 sc.shape_type_grid[p] != -1,
 sg.cell_is(p, sc.shape_type_grid[p] + 1),
 sg.cell_is(p, 0)
 )
 )

def get_shape_offsets():
 standard_shape = [(2, 0), (0, -1), (1, -1), (2, -1), (1, -2)]
 shapes = []
 for size in range(6):
 vecs = []
 print("Shape(", end="")
 for offset in standard_shape:
 for i in range(size):
 for j in range(size):
 new_x = offset[0] * size + i
 new_y = offset[1] * size + j
 print('Vector({}, {}),'.format(new_x, new_y), end="")
 vecs.append(Vector(offset[0] * size + i, offset[1] * size + j))
 shapes.append(Shape(vecs))
 print("),\n")
 return shapes

def add_sum_constraints(sg):
 rows = [[sg.grid[Point(y, x)] for x in range(17)] for y in range(17)]
 for i in range(len(row_sums)):
 sg.solver.add(sum(rows[i]) == row_sums[i])
 
 columns = [[sg.grid[Point(y, x)] for y in range(17)] for x in range(17)]
 for i in range(len(column_sums)):
 sg.solver.add(sum(columns[i]) == column_sums[i])
 
 regions_converted = [[sg.grid[Point(elem[0], elem[1])] for elem in region] for region in regions]
 for region in regions_converted:
 sg.solver.add(sum(region) == region_sum) 


# get_shape_offsets()
sym = grilops.make_number_range_symbol_set(0, 9)
lattice = grilops.get_square_lattice(17)
sg = grilops.SymbolGrid(lattice, sym)
sc = ShapeConstrainer(
 lattice,
 [

Shape([Vector(2, 0),Vector(0, -1),Vector(1, -1),Vector(2, -1),Vector(1, -2)]),

Shape([Vector(4, 0),Vector(4, 1),Vector(5, 0),Vector(5, 1),Vector(0, -2),Vector(0, -1),Vector(1, -2),Vector(1, -1),Vector(2, -2),Vector(2, -1),Vector(3, -2),Vector(3, -1),Vector(4, -2),Vector(4, -1),Vector(5, -2),Vector(5, -1),Vector(2, -4),Vector(2, -3),Vector(3, -4),Vector(3, -3)]),

Shape([Vector(6, 0),Vector(6, 1),Vector(6, 2),Vector(7, 0),Vector(7, 1),Vector(7, 2),Vector(8, 0),Vector(8, 1),Vector(8, 2),Vector(0, -3),Vector(0, -2),Vector(0, -1),Vector(1, -3),Vector(1, -2),Vector(1, -1),Vector(2, -3),Vector(2, -2),Vector(2, -1),Vector(3, -3),Vector(3, -2),Vector(3, -1),Vector(4, -3),Vector(4, -2),Vector(4, -1),Vector(5, -3),Vector(5, -2),Vector(5, -1),Vector(6, -3),Vector(6, -2),Vector(6, -1),Vector(7, -3),Vector(7, -2),Vector(7, -1),Vector(8, -3),Vector(8, -2),Vector(8, -1),Vector(3, -6),Vector(3, -5),Vector(3, -4),Vector(4, -6),Vector(4, -5),Vector(4, -4),Vector(5, -6),Vector(5, -5),Vector(5, -4)]),

Shape([Vector(8, 0),Vector(8, 1),Vector(8, 2),Vector(8, 3),Vector(9, 0),Vector(9, 1),Vector(9, 2),Vector(9, 3),Vector(10, 0),Vector(10, 1),Vector(10, 2),Vector(10, 3),Vector(11, 0),Vector(11, 1),Vector(11, 2),Vector(11, 3),Vector(0, -4),Vector(0, -3),Vector(0, -2),Vector(0, -1),Vector(1, -4),Vector(1, -3),Vector(1, -2),Vector(1, -1),Vector(2, -4),Vector(2, -3),Vector(2, -2),Vector(2, -1),Vector(3, -4),Vector(3, -3),Vector(3, -2),Vector(3, -1),Vector(4, -4),Vector(4, -3),Vector(4, -2),Vector(4, -1),Vector(5, -4),Vector(5, -3),Vector(5, -2),Vector(5, -1),Vector(6, -4),Vector(6, -3),Vector(6, -2),Vector(6, -1),Vector(7, -4),Vector(7, -3),Vector(7, -2),Vector(7, -1),Vector(8, -4),Vector(8, -3),Vector(8, -2),Vector(8, -1),Vector(9, -4),Vector(9, -3),Vector(9, -2),Vector(9, -1),Vector(10, -4),Vector(10, -3),Vector(10, -2),Vector(10, -1),Vector(11, -4),Vector(11, -3),Vector(11, -2),Vector(11, -1),Vector(4, -8),Vector(4, -7),Vector(4, -6),Vector(4, -5),Vector(5, -8),Vector(5, -7),Vector(5, -6),Vector(5, -5),Vector(6, -8),Vector(6, -7),Vector(6, -6),Vector(6, -5),Vector(7, -8),Vector(7, -7),Vector(7, -6),Vector(7, -5)]),

Shape([Vector(10, 0),Vector(10, 1),Vector(10, 2),Vector(10, 3),Vector(10, 4),Vector(11, 0),Vector(11, 1),Vector(11, 2),Vector(11, 3),Vector(11, 4),Vector(12, 0),Vector(12, 1),Vector(12, 2),Vector(12, 3),Vector(12, 4),Vector(13, 0),Vector(13, 1),Vector(13, 2),Vector(13, 3),Vector(13, 4),Vector(14, 0),Vector(14, 1),Vector(14, 2),Vector(14, 3),Vector(14, 4),Vector(0, -5),Vector(0, -4),Vector(0, -3),Vector(0, -2),Vector(0, -1),Vector(1, -5),Vector(1, -4),Vector(1, -3),Vector(1, -2),Vector(1, -1),Vector(2, -5),Vector(2, -4),Vector(2, -3),Vector(2, -2),Vector(2, -1),Vector(3, -5),Vector(3, -4),Vector(3, -3),Vector(3, -2),Vector(3, -1),Vector(4, -5),Vector(4, -4),Vector(4, -3),Vector(4, -2),Vector(4, -1),Vector(5, -5),Vector(5, -4),Vector(5, -3),Vector(5, -2),Vector(5, -1),Vector(6, -5),Vector(6, -4),Vector(6, -3),Vector(6, -2),Vector(6, -1),Vector(7, -5),Vector(7, -4),Vector(7, -3),Vector(7, -2),Vector(7, -1),Vector(8, -5),Vector(8, -4),Vector(8, -3),Vector(8, -2),Vector(8, -1),Vector(9, -5),Vector(9, -4),Vector(9, -3),Vector(9, -2),Vector(9, -1),Vector(10, -5),Vector(10, -4),Vector(10, -3),Vector(10, -2),Vector(10, -1),Vector(11, -5),Vector(11, -4),Vector(11, -3),Vector(11, -2),Vector(11, -1),Vector(12, -5),Vector(12, -4),Vector(12, -3),Vector(12, -2),Vector(12, -1),Vector(13, -5),Vector(13, -4),Vector(13, -3),Vector(13, -2),Vector(13, -1),Vector(14, -5),Vector(14, -4),Vector(14, -3),Vector(14, -2),Vector(14, -1),Vector(5, -10),Vector(5, -9),Vector(5, -8),Vector(5, -7),Vector(5, -6),Vector(6, -10),Vector(6, -9),Vector(6, -8),Vector(6, -7),Vector(6, -6),Vector(7, -10),Vector(7, -9),Vector(7, -8),Vector(7, -7),Vector(7, -6),Vector(8, -10),Vector(8, -9),Vector(8, -8),Vector(8, -7),Vector(8, -6),Vector(9, -10),Vector(9, -9),Vector(9, -8),Vector(9, -7),Vector(9, -6)]),
 ],
 solver=sg.solver,
 allow_rotations=True,
 allow_reflections=True,
 allow_copies=True
)

link_symbols_to_shapes(sym, sg, sc)
add_sum_constraints(sg)

if sg.solve():
 sg.print()
```

Thanks for reading! 