---
title: FSAE Drivetrain
date: 2025-07-21
image: /images/fsae-drivetrain/IMG_3247.JPG
excerpt: Drivetrain for ICE FSAE competition car.
---

## Project Overview

In my role as the Lead Drivetrain Engineer for my school's FSAE team, I designed and manufactured the drivetrain subsystem of the car. The purporse of this system is to transmit power from the engine to the wheels at a fixed final drive ratio and to safely house the differential behind the engine, all while remaining lightweight and minimizing drivetrain efficiency losses.

## Process

I designed the pillow blocks over the Fall of 2024, experimenting with NTop to inform further design decisions. While I ultimately ditched the organic shapes output by complex topology optimization software, it prepared me for the FEA simulation that I would later do.

First designing a pillow block based on approximations of the load they experience, I used Solidworks FEA to determine where material could be removed. After multiple iterations, I designed pillow blocks lighter than previous year's designs.

Most of the rest of the system was staying constant - presenting the real hurdle of manufacturing. Luckily, the CNC mill students have access to is very capable of cutting aluminum to satisfactory tolerances. This is how I made every in-house component of the drivetrain including the pillow blocks, eccentric disks, and sprockets.

One hurdle I ran into later in the year was designing an engine sprocket to test out a higher final drive ratio that would provide more torque to the wheels. Due to the performance characteristics of the engine, a 10-tooth front sprocket was not available for purchase. I ultimately manufactured the shape in the CNC mill, and had the spline cut in an EDM machine. Getting the female hub to fit was a challenge, as there were limited online resources detailing the specifications of the required JIS spline.

## Key Achievements

* Used first-principles calculations to inform FEA simulations that were used to iterate on pillow block, eccentric disk, and rear sprocket designs
* Leveraged lap simulation to optimize the final drive ratio
* Manufactured various components of the system including the pillow blocks, eccentric disks, and 
* Reverse engineered a JIS spline to fit our CBR600RR engine

## Part Drawings / Renderings

![Right Pillowblock](/images/fsae-drivetrain/0000126-003_DRV_pillowblockRight-1.png)

![Sprocket Adapter](/images/fsae-drivetrain/0000116-001_DRV_sprocketAdapter-1.png)

![Left Eccentric Disk](/images/fsae-drivetrain/0000118-001_DRV_eccentricDiskLeft-1.png)

![Rear Sprocket](/images/fsae-drivetrain/IMG_3264.JPG)

![Front Sprocket](/images/fsae-drivetrain/IMG_3364.JPG)

## Lessons Learned

Over the year we learned as a team that a better design justification is expected. For the drivetrain system, that means establishing bounds on important design parameters such as final drive ratio, a major factor in the overall performance of the car. Ways to do this would include wheel speed analysis over competition events and tire slip models. A better understanding of drivetrain efficiency would also be a worthwhile investment for the team.

I look forward to oversee the evolution of the subsystem on the car, using my experience to help new subsystem leads better justify the system. As the intake and dyno lead for the 2025-2026 season, the drivetrain subsystem will remain a priority and helping whoever is in charge will be one of my highest priorities.