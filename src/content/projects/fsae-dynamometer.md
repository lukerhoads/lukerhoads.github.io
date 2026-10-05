---
title: FSAE Dynamometer
order: 2
featured: true
summary: An in-house engine dyno that remains in progress.
role: Dyno Lead
organization: Brown Formula Racing
location: Providence, RI
dates: June 2025 – present
tools:
  - Arduino
  - SolidWorks
media:
  - kind: Photo
    src: /images/fsae-dynamometer/rev1-frame-build.svg
    alt: Rev 1 aluminum extrusion frame during the build
    caption: Rev 1 aluminum extrusion frame during the build.
  - kind: Photo
    src: /images/fsae-dynamometer/rev1-water-pump-wiring.svg
    alt: Rev 1 water pump wiring
    caption: Rev 1 water pump wiring.
  - kind: CAD
    src: /images/fsae-dynamometer/rev1-electronics-board.svg
    alt: Rev 1 electronics board
    caption: Rev 1 electronics board.
  - kind: Photo
    src: /images/fsae-dynamometer/rev1-mechanical.svg
    alt: Rev 1 mechanical assembly
    caption: Rev 1 mechanical assembly.
---

## Overview

Without an in-house dyno, the team often treats the powertrain as plug-and-play. The goal is to change that by testing on a dyno: steady-state tuning for engine performance, and better digital-twin engine models.

## Role

As Dyno Lead, I am responsible for building a budget-oriented engine dyno for steady-state tuning.

## Approach

- Rev 1: an engine-out aluminum extrusion frame with a fuel tank, radiator, water tank and pump, and a water brake. The engine ran, but the water system could not load-match. The pump was sized from the dyno manual — about 8 psi dynamic at the brake inlet, and 20 psi static maximum. The tank was sized by hand calculation for about 10 minutes of runtime, which came out to 26 gallons. Water-brake control turned out to be hard, and attaching the rig to the car would avoid a separate fuel and cooling system.
- Rev 2: reused many Rev 1 parts. A roll-up frame goes to the rear of the car, attaches to the suspension hardpoints, and chains to the engine sprocket. The frame held the water brake, the drain tank, and the electronics. It was built and tested once. Two small sprockets and a long chain blocked sustained running. A new dyno controller is meant to replace the antiquated outputs in software.
- Rev 3: an eddy brake looks more viable — a power supply and minimal cooling, instead of water management. I am exploring that path now.

## Outcomes

- Rev 1 ran, but the water system never met load.
- Rev 2 never produced a sustained run, which made the switch to an eddy brake clearer.
- Rev 3, the eddy brake, is underway.
