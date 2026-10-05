/**
 * Portfolio copy. Project narratives follow Luke's edited notes.
 * Do not add metrics he did not provide.
 */

export const site = {
  name: "Luke Rhoads",
  email: "luke_rhoads@brown.edu",
  school: "Brown University",
  degree: "Sc.B. Mechanical Engineering",
  gpa: "4.0/4.0",
  location: "Providence, RI",
  graduation: "Expected graduation December 2027",
  priorSchool: "Highland Park High School, Highland Park, class of 2024",
  portrait: "/images/placeholders/portrait.svg",
  intro:
    "Hey! I'm a Junior studying MechE at Brown. In my free time, I spend time in the Brown Design Workshop as the Brown Formula Racing Engine Lead. Along the way, I've been glad to have worked as the following:",
  experience: [
    "Mechanical Engineering Intern at SpaceX",
    "Mechanical Engineering Intern at Chicago Cutting Die",
    "Research Assistant at PROBE Lab",
  ],
};

export const skills = {
  qualifier: "Proficient",
  tools: [
    "SolidWorks",
    "MasterCAM",
    "MATLAB",
    "ANSYS Mechanical",
    "Realis WAVE",
    "Siemens NX",
    "Teamcenter",
  ],
  language: "English",
};

export interface MediaSlot {
  kind: "Photo" | "CAD" | "Simulation" | "FEA" | "Hand Calculations" | "Write-up";
  caption: string;
  src?: string;
  alt?: string;
}

export interface Project {
  slug: string;
  title: string;
  sheet: string;
  featured: boolean;
  summary: string;
  role: string;
  organization?: string;
  location?: string;
  dates?: string;
  tools: string[];
  overview: string[];
  roleNotes: string[];
  approach: string[];
  outcomes: string[];
  mediaNote: string;
  media: MediaSlot[];
}

export const projects: Project[] = [
  {
    slug: "fsae-drivetrain",
    title: "FSAE Drivetrain",
    sheet: "01",
    featured: true,
    summary:
      "The system that transmits torque from the engine countershaft to the rear axle, where a clutch-type limited-slip differential biases it between the wheels.",
    role: "Drivetrain Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "October 2024 – May 2025",
    tools: ["SolidWorks", "Fusion 360 CAM", "CNC milling", "MATLAB"],
    overview: [
      "The drivetrain runs from the countershaft sprocket to the rear wheel packages. Critical interfaces include two chassis mounts shared with the engine. Torque goes from the countershaft sprocket to the differential casing, then is biased to the two wheels.",
      "A good system transmits that torque efficiently and sends more of it to the wheel with traction. It also includes the rear sprocket, which sets the final drive ratio and strongly affects car performance.",
    ],
    roleNotes: [
      "I owned the two differential mounts, the chain tensioning system, the countershaft sprocket, the axle sprocket, the COTS differential, the inboard tulip assembly, the CV bearings, the driveshafts, and the chain.",
      "I also owned the suspension and chassis integration, including driveshaft clearance in every chain-tension configuration, and the final drive ratio from the MATLAB lap simulations.",
    ],
    approach: [
      "Position the system from the suspension and chassis hardpoints and the chain-tension needs.",
      "Define the driving load cases, including a clutch dump at max-torque RPM.",
      "Design the differential mounts and the chain tensioner for those loads.",
      "Select the final drive ratio with MATLAB point-mass lap simulations.",
      "Confirm the chosen ratio packages with the selected differential position.",
    ],
    outcomes: [
      "Differential mounts designed and manufactured for minimum weight under the calculated loads.",
      "Chain tension hardware manufactured and installed with the mounts.",
      "Integrated with suspension and chassis, with driveshaft clearance across the tension configurations.",
      "Final drive ratio selected from the MATLAB point-mass lap simulations.",
    ],
    mediaNote:
      "Each frame is a placeholder. Replace the file at the same path under public/images/placeholders/.",
    media: [
      {
        kind: "FEA",
        src: "/images/placeholders/drivetrain-fea-diff-mounts.svg",
        alt: "Placeholder drawing labeled FEA — Diff mounts",
        caption: "FEA of the differential mounts.",
      },
      {
        kind: "Photo",
        src: "/images/placeholders/drivetrain-assembled-on-car.svg",
        alt: "Placeholder drawing labeled Photo — System on car",
        caption: "The full system assembled on the car.",
      },
      {
        kind: "Simulation",
        src: "/images/placeholders/drivetrain-matlab-fdr.svg",
        alt: "Placeholder drawing labeled MATLAB — Final drive",
        caption: "MATLAB point-mass lap simulation used for the final drive ratio.",
      },
      {
        kind: "Hand Calculations",
        src: "/images/placeholders/drivetrain-hand-calcs.svg",
        alt: "Placeholder drawing labeled Hand calcs",
        caption: "Hand calculations for the driving load cases.",
      },
    ],
  },
  {
    slug: "fsae-dynamometer",
    title: "FSAE Dynamometer",
    sheet: "02",
    featured: true,
    summary: "An in-house engine dyno that remains in progress.",
    role: "Dyno Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – present",
    tools: ["Arduino", "SolidWorks"],
    overview: [
      "Without an in-house dyno, the team often treats the powertrain as plug-and-play. The goal is to change that by testing on a dyno: steady-state tuning for engine performance, and better digital-twin engine models.",
    ],
    roleNotes: [
      "As Dyno Lead, I am responsible for building a budget-oriented engine dyno for steady-state tuning.",
    ],
    approach: [
      "Rev 1: an engine-out aluminum extrusion frame with a fuel tank, radiator, water tank and pump, and a water brake. The engine ran, but the water system could not load-match. The pump was sized from the dyno manual — about 8 psi dynamic at the brake inlet, and 20 psi static maximum. The tank was sized by hand calculation for about 10 minutes of runtime, which came out to 26 gallons. Water-brake control turned out to be hard, and attaching the rig to the car would avoid a separate fuel and cooling system.",
      "Rev 2: reused many Rev 1 parts. A roll-up frame goes to the rear of the car, attaches to the suspension hardpoints, and chains to the engine sprocket. The frame held the water brake, the drain tank, and the electronics. It was built and tested once. Two small sprockets and a long chain blocked sustained running. A new dyno controller is meant to replace the antiquated outputs in software.",
      "Rev 3: an eddy brake looks more viable — a power supply and minimal cooling, instead of water management. I am exploring that path now.",
    ],
    outcomes: [
      "Rev 1 ran, but the water system never met load.",
      "Rev 2 never produced a sustained run, which made the switch to an eddy brake clearer.",
      "Rev 3, the eddy brake, is underway.",
    ],
    mediaNote:
      "Each frame is a placeholder. Replace the file at the same path under public/images/placeholders/. No measured power or torque figures are included.",
    media: [
      {
        kind: "Photo",
        src: "/images/placeholders/dyno-rev1-frame-build.svg",
        alt: "Placeholder drawing labeled Rev 1 — Frame build",
        caption: "Rev 1 aluminum extrusion frame during the build.",
      },
      {
        kind: "Photo",
        src: "/images/placeholders/dyno-rev1-water-pump-wiring.svg",
        alt: "Placeholder drawing labeled Rev 1 — Pump wiring",
        caption: "Rev 1 water pump wiring.",
      },
      {
        kind: "CAD",
        src: "/images/placeholders/dyno-rev1-electronics-board.svg",
        alt: "Placeholder drawing labeled Rev 1 — Electronics",
        caption: "Rev 1 electronics board.",
      },
      {
        kind: "Photo",
        src: "/images/placeholders/dyno-rev1-mechanical.svg",
        alt: "Placeholder drawing labeled Rev 1 — Mechanical",
        caption: "Rev 1 mechanical assembly.",
      },
    ],
  },
  {
    slug: "fsae-air-intake",
    title: "FSAE Modular Air Intake",
    sheet: "03",
    featured: true,
    summary: "Air intake system for a naturally aspirated Formula SAE car.",
    role: "Intake Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – May 2026",
    tools: ["ANSYS Mechanical", "Ricardo WAVE"],
    overview: [
      "The intake controls how air enters the engine. Geometry can help the engine breathe better at competition operating points and make more power on track.",
    ],
    roleNotes: [
      "I designed and manufactured a rules-compliant system: the throttle body, restrictor, plenum, and runners.",
    ],
    approach: [
      "Run Realis WAVE simulations for how runner length and plenum volume affect engine outputs.",
      "Choose lengths and volumes from those simulations.",
      "Package the intake from those choices.",
      "Iterate the plenum to minimize vacuum compliance within the rules.",
    ],
    outcomes: [
      "Plenum ribbing validated in ANSYS Mechanical.",
      "An O-ring seal between the plenum and the runners, so runner length and plenum volume can change in a session. It saw little use without a working dyno.",
      "Manufactured and run on the 2026 car, Ever True, at the Michigan IC competition.",
    ],
    mediaNote:
      "Each frame is a placeholder. Replace the file at the same path under public/images/placeholders/.",
    media: [
      {
        kind: "CAD",
        src: "/images/placeholders/intake-ribbed-plenum.svg",
        alt: "Placeholder drawing labeled CAD — Ribbed plenum",
        caption: "Ribbed plenum.",
      },
      {
        kind: "CAD",
        src: "/images/placeholders/intake-oring-runners.svg",
        alt: "Placeholder drawing labeled CAD — O-ring runners",
        caption: "O-ring seal between the plenum and the runners.",
      },
      {
        kind: "FEA",
        src: "/images/placeholders/intake-ansys.svg",
        alt: "Placeholder drawing labeled ANSYS — Plenum ribbing",
        caption: "ANSYS Mechanical ribbing and vibration results.",
      },
      {
        kind: "Simulation",
        src: "/images/placeholders/intake-wave.svg",
        alt: "Placeholder drawing labeled WAVE — Volume and length",
        caption: "Realis WAVE study of plenum volume and runner length.",
      },
    ],
  },
  {
    slug: "windsurfing-sup-board",
    title: "Windsurfing/SUP Board",
    sheet: "04",
    featured: false,
    summary:
      "EPS board with a mast box, two layers of 3K carbon and marine epoxy, shaped late May through early June 2025. The infused fin was replaced with a molded plastic fin.",
    role: "Personal project",
    dates: "Late May – early June 2025",
    tools: ["Hot-wire cutter", "3K carbon", "Marine structural epoxy", "Resin infusion"],
    overview: [
      "During late May and early June 2025 I fabricated a windsurfing and SUP board with a mast box. The core is EPS foam, shaped with a hot wire and wrapped in two layers of 3K carbon fiber and marine-grade structural epoxy.",
      "The layup, the cutter’s power supply, and an infused fin each failed in a specific way. The board works. The fin on it is a pre-built plastic injection-molded part. It was a good lesson in composite manufacturing.",
    ],
    roleNotes: [
      "I owned the build: the hot-wire cutter and how it was powered, the foam shape, the carbon and epoxy layup, the mast box, and the decision to drop the infused fin.",
      "The deliverable is the board, plus a record of why the fin attempt did not hold. There was no team title on this one.",
    ],
    approach: [
      "Glue the EPS blanks and shape the plug with a custom hot-wire cutter, including the mast-box pocket.",
      "Lay up two layers of 3K carbon with marine-grade structural epoxy over the core, then clean up the surface.",
      "Try a lightweight composite fin with resin infusion in 3D-printed molds.",
      "Fit a pre-built plastic injection-molded fin after the infused part would not hold rigidity.",
    ],
    outcomes: [
      "A functional board: EPS core, mast box, and two layers of 3K carbon and marine structural epoxy, built in late May and early June 2025.",
      "Creases in the carbon, and no tape on the underside, left sharp fiber strands that had to be post-processed.",
      "The hot-wire power supply blew repeatedly because Nichrome current was not regulated. A new supply and short cuts finished the shape. A CNC router would have made the plug less painful.",
      "The infused fin failed: resin voids, the layup schedule, surface finish, and trouble with consumables. The 3D-printed molds were relatively smooth, but tiny voids on them left a fin that lacked rigidity.",
      "I used a pre-built plastic injection-molded fin instead.",
    ],
    mediaNote: "Photos from the build.",
    media: [
      {
        kind: "Photo",
        src: "/images/surfboard/Glueing.jpg",
        alt: "Gluing the EPS foam blanks together",
        caption: "Gluing the EPS blanks together.",
      },
      {
        kind: "Photo",
        src: "/images/surfboard/Shaping.jpg",
        alt: "Shaping the board with a hot wire",
        caption: "Shaping the board with a hot wire.",
      },
      {
        kind: "Photo",
        src: "/images/surfboard/Mastbox-Drying.jpg",
        alt: "Mast box inserted and drying in epoxy",
        caption: "Inserting the mast box with epoxy.",
      },
      {
        kind: "Photo",
        src: "/images/surfboard/Result.jpg",
        alt: "Finished windsurfing and SUP board",
        caption: "Final functional result.",
      },
    ],
  },
];

export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}
