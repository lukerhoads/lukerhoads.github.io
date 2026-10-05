---
title: FSAE Drivetrain
order: 1
featured: true
summary: "Torque path from the engine sprocket to the rear wheels: a Drexler limited-slip differential, a two-piece mount, and an eccentric chain tensioner, sized from point-mass runs of the 2025 tracks."
role: Drivetrain Lead
organization: Brown Formula Racing
location: Providence, RI
dates: October 2024 – May 2025
tools:
  - SolidWorks
  - ANSYS Mechanical
  - Fusion 360 CAM
  - CNC milling
  - MATLAB
media:
  - kind: FEA
    src: /images/fsae-drivetrain/fea-diff-mounts.svg
    alt: Ansys FEA of the differential mounts
    caption: Ansys FEA of the differential mounts. Minimum factor of safety is 1.39.
  - kind: Photo
    src: /images/fsae-drivetrain/assembled-on-car.svg
    alt: Drivetrain assembled on the car
    caption: The full system assembled on the car.
  - kind: Simulation
    src: /images/fsae-drivetrain/matlab-fdr.svg
    alt: Normalized event time against final drive ratio
    caption: Normalized event time against final drive ratio, assuming a 150 ms shift. The simulated optimum is about 4.48.
  - kind: CAD
    src: /images/fsae-drivetrain/chain-tensioner.svg
    alt: SolidWorks render of the eccentric chain tensioner
    caption: Eccentric chain tensioner, 0.61 kg, with 28 settings.
---

## Overview

The drivetrain runs from the countershaft sprocket to the rear wheel packages. Critical interfaces include two chassis mounts shared with the engine. Torque goes from the countershaft sprocket to the differential casing, then is biased to the two wheels.

The system has to multiply engine torque for the dynamic events, let the differential decouple the two driveshafts, stay light with a real factor of safety, and remain easy to maintain and tune.

A Drexler limited-slip differential was chosen for a compact package and straightforward tuning and maintenance. Ramp angle is meant to be set from testing. Final drive came from point-mass simulations of the 2025 competition tracks. The simulated optimum is about 4.48, and packaging kept the hardware short of that ratio. Autocross and endurance put less weight on shift time, so shift duration was a smaller part of the choice than the ratio itself.

## Role

I owned the two differential mounts, the chain tensioning system, the countershaft sprocket, the axle sprocket, the COTS differential, the inboard tulip assembly, the CV bearings, the driveshafts, and the chain.

I also owned the suspension and chassis integration, including driveshaft clearance in every chain-tension configuration, and the final drive ratio from the MATLAB lap simulations.

## Approach

- Position the system from the suspension and chassis hardpoints and the chain-tension needs. Axial position is set so tensioning the chain does not raise ride height through the jacking bar.
- The driving load is a sudden clutch release. Engine torque of 64 Nm is amplified through the reduction, and the mounts see that force along the shared tangent of the engine sprocket and the rear sprocket. The left mount carries more of it. The minimum factor of safety is 1.39, including the clutch-dump transient, a no-tire-slip assumption, in-house machining tolerance, and the tensioner's range of axial positions.
- The differential mount is a two-piece assembly at 0.57 kg. The eccentric tensioner is 0.61 kg and can take up to 1.5 links of chain in 28 settings, which keeps adjustment simple.
- Driveshafts are RCV FSAE parts, 0.75 in outside diameter and 0.375 in inside diameter, sized for reversed bending. In the tensioned position the CV joints sit at 3.45° laterally and 6.328° fore and aft, so the shafts stay in line as the car accelerates. The chain is a standard 520, lighter than the OEM 525 and strong enough for a power-limited car. Bearings are deep-groove NSK units, with RCV inboard and outboard tripod housings.
- Final drive was checked in MATLAB point-mass lap simulations, then confirmed against the differential position the package would actually allow.

## Outcomes

- Drexler limited-slip differential selected for compactness and simple tuning. Ramp angle and preload are still to be compared with Motec wheel-speed data and driver feedback.
- Final drive set from the 2025 track simulations, short of the 4.48 optimum because of packaging. Planned acceleration tests cover a 4:1 ratio and a 3.63 ratio using 10- and 11-tooth engine sprockets.
- Two-piece differential mounts manufactured at 0.57 kg, with a minimum factor of safety of 1.39 under the clutch-dump case. Ansys FEA covers those mounts.
- Eccentric chain tensioner manufactured and installed at 0.61 kg, with 28 settings covering up to 1.5 links.
- Integrated with suspension and chassis, with driveshaft clearance across the tension configurations, and without using the jacking bar to recover chain slack.
