---
title: FSAE Modular Air Intake
order: 3
featured: true
summary: Intake for a naturally aspirated Formula SAE car, with a ribbed nylon plenum and fixed runners aimed at smooth torque from 9,000 to 13,000 rpm.
role: Intake Lead
organization: Brown Formula Racing
location: Providence, RI
dates: June 2025 – May 2026
tools:
  - ANSYS Mechanical
  - Ricardo WAVE
media:
  - kind: CAD
    src: /images/fsae-air-intake/ribbed-plenum.svg
    alt: Ribbed nylon intake plenum
    caption: Ribbed nylon plenum, 60 g lighter than plain walls.
  - kind: CAD
    src: /images/fsae-air-intake/oring-runners.svg
    alt: Swappable intake runners and integrated bellmouths
    caption: Plenum-integrated bellmouths and swappable runners.
  - kind: FEA
    src: /images/fsae-air-intake/ansys.svg
    alt: ANSYS Mechanical result for the plenum ribbing
    caption: ANSYS Mechanical check of the plenum ribbing.
  - kind: Simulation
    src: /images/fsae-air-intake/wave.svg
    alt: Demand-weighted power across runner length and plenum volume
    caption: Demand-weighted power for runner lengths from 70 mm to 250 mm and plenum volumes from 1,700 cc to 5,000 cc.
---

## Overview

The intake controls how air enters the engine. It has to make smooth torque from 9,000 to 13,000 rpm, stay tunable, fit the powertrain and the structure, and keep the mass down.

The two knobs are runner length, from 70 mm to 250 mm, and plenum volume, from 1,700 cc to 5,000 cc. Those ranges were the packaging limits set at the start of the design.

## Role

I designed and manufactured a rules-compliant system: the throttle body, restrictor, plenum, and runners.

The plenum is ribbed nylon, with the bellmouths integrated into it and the runners swappable. The injector block is SLA-printed and coated for UV protection.

## Approach

- Shorter runners pick up torque at higher rpm, so the study closed in on the short end. At a fixed plenum volume, lap simulation scored 70 mm runners highest: 467 points, against 458 points at 250 mm.
- Demand-weighted power uses a histogram of 2024 endurance data, counting the rpm where throttle was above 80%. Weighting the torque curve by that histogram favors a larger plenum with a shorter runner. At 70 mm the weighted power is 39.2 kW with a 1,700 cc plenum and 41.2 kW with a 5,000 cc plenum.
- A larger plenum adds torque across the range and fills more slowly: about 6 ms at 1,700 cc, 24 ms at 3,400 cc, and 32 ms at 5,000 cc, relative to no plenum. That extra filling time was treated as something an FSAE driver would not feel. Lap simulation of the aero and mass penalty still preferred 5,000 cc. CLA falls from 4.17 to 4.12 and the plenum grows from 362 g to 668 g, and the score moves from 467 points to 469.
- Variable-length runners were checked against the same 2024 throttle demand. The high-rpm gain was small, so the runners are a fixed length.
- Ribs in the nylon plenum save 60 g versus plain walls. The SLA injector block saves 0.4 kg versus an aluminum block.
- Realis WAVE covered the steady runner-length and plenum-volume trades, and the plenum ribbing was checked in ANSYS Mechanical. The dyno plan is torque curves for each runner and plenum, mass airflow estimated from lambda and fuel flow, response time at 1,700 cc and 5,000 cc, and cylinder filling from EGT.

## Outcomes

- Fixed 70 mm runners and a 5,000 cc plenum, chosen for smooth torque in the dynamic events.
- Ribbed nylon plenum, 60 g lighter than plain walls, with integrated bellmouths. SLA injector block, 0.4 kg lighter than aluminum, with a UV-protective coating.
- An O-ring seal between the plenum and the runners, so runner length and plenum volume can change in a session. It saw little use without a working dyno.
- Manufactured and run on the 2026 car, Ever True, at the Michigan IC competition.
