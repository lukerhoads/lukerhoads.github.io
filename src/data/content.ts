/**
 * Portfolio copy. Project narratives follow Luke's notes.
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
  kind: "Photo" | "CAD" | "Simulation" | "Write-up";
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
      "Rear differential mount, chain tension hardware, suspension and chassis packaging, and the final drive ratio for Brown Formula Racing.",
    role: "Drivetrain Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "October 2024 – May 2025",
    tools: ["SolidWorks", "Fusion 360 CAM", "CNC milling", "MATLAB"],
    overview: [
      "I owned the rear drivetrain: the differential mount, the chain tension hardware, and the packaging against suspension and chassis. Choosing the final drive ratio was part of that job, not a side study.",
      "The ratio came from point-mass lap simulations in MATLAB. The mount was iterated in SolidWorks for minimum weight under the calculated loads, then the mount and tensioner were cut with Fusion 360 CAM and CNC milling.",
    ],
    roleNotes: [
      "I was responsible for the rear differential mount: SolidWorks iterations for minimum weight under calculated loads, then Fusion 360 CAM and CNC manufacture of that mount and the chain tension system.",
      "I also owned the integration with suspension and chassis, including driveshaft clearance in every chain tension configuration, and the final drive ratio decision from the MATLAB lap simulations.",
    ],
    approach: [
      "Set the load assumptions for the rear differential mount.",
      "Iterate the mount in SolidWorks for minimum weight under those calculated loads.",
      "Manufacture the mount and the chain tensioner with Fusion 360 CAM and CNC milling.",
      "Integrate the drivetrain with suspension and chassis.",
      "Select the final drive ratio with point-mass lap simulations in MATLAB.",
      "Check driveshaft clearance across the chain tension configurations that go with that ratio.",
    ],
    outcomes: [
      "Rear differential mount designed for minimum weight under the calculated loads, then machined.",
      "Chain tension adjustment hardware manufactured with the mount.",
      "Drivetrain integrated with suspension and chassis, with driveshaft clearance held across the chain tension configurations.",
      "Final drive ratio selected from the point-mass MATLAB lap simulations.",
    ],
    mediaNote: "CAD, photos, and the lap-simulation output will be added here.",
    media: [
      {
        kind: "CAD",
        caption: "SolidWorks model of the rear differential mounting system. Not yet added.",
      },
      {
        kind: "Photo",
        caption: "Machined mount and chain tension hardware. Not yet added.",
      },
      {
        kind: "Simulation",
        caption: "MATLAB point-mass lap simulation used for the final drive ratio. Not yet added.",
      },
      {
        kind: "Write-up",
        caption: "Extended design and manufacturing notes. Not yet added.",
      },
    ],
  },
  {
    slug: "fsae-dynamometer",
    title: "FSAE Dynamometer",
    sheet: "02",
    featured: true,
    summary:
      "An in-house engine dyno still in progress. Rev 1 ran the engine but could not meet load, rev 2 would not sustain a run, and rev 3 is looking at an eddy brake, possibly with a roller.",
    role: "Intake/Dyno Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – present",
    tools: ["Rev 1 water-brake setup", "Rev 3 eddy brake", "Possible roller"],
    overview: [
      "The team is still trying to make an in-house engine dynamometer. Rev 1 and rev 2 did not work out well, and both need modification. The point of the rig is to check steady-state powertrain simulations and measure the engine, and we do not have that yet.",
      "Rev 3 is in progress. I am looking at an eddy-brake system instead, and possibly a roller, using what the first two builds showed.",
    ],
    roleNotes: [
      "As Intake/Dyno Lead I own the dyno program through these revisions: the architecture of each build, the call that rev 1 and rev 2 need to change, and the hardware that has to be designed for the next one.",
      "Deliverables so far are the rev 1 frame that held the engine outside the car, with fuel, cooling, and the rest of the support systems, and the rev 2 mechanical rework. Rev 3 — an eddy brake, possibly with a roller — is the direction I am driving now. The intake is a separate page.",
    ],
    approach: [
      "Rev 1: house the engine outside the car with fuel, cooling, and support systems, and try to load it with the water supply on hand.",
      "Rev 2: correct the mechanical design so the dyno could run for a sustained test.",
      "Rev 3: move to an eddy-brake system, possibly with a roller, and apply what rev 1 and rev 2 made clear.",
    ],
    outcomes: [
      "Rev 1 ran the engine outside the car. The water supply never met engine load, so the dyno could not hold the test.",
      "Rev 2 did not produce sustained dyno running. Mechanical design mistakes mean that revision still needs modification.",
      "Rev 3 is underway: an eddy brake instead, possibly with a roller. There are no power or torque numbers from this program.",
    ],
    mediaNote:
      "Photos and CAD of the revisions will be added here. No measured power or torque figures are included.",
    media: [
      {
        kind: "Photo",
        caption: "Rev 1 engine-out frame, fuel, and cooling. Not yet added.",
      },
      {
        kind: "Photo",
        caption: "Rev 2 mechanical setup. Not yet added.",
      },
      {
        kind: "CAD",
        caption: "Rev 3 eddy-brake direction, possibly with a roller. Not yet added.",
      },
      {
        kind: "Write-up",
        caption: "Revision notes. Not yet added.",
      },
    ],
  },
  {
    slug: "fsae-air-intake",
    title: "FSAE Modular Air Intake",
    sheet: "03",
    featured: true,
    summary:
      "Rib-reinforced plenum and an O-ring seal so runner length can change in a test. The seal has not seen much use, because there has not been a working dyno.",
    role: "Intake/Dyno Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – present",
    tools: ["ANSYS Mechanical", "Ricardo WAVE"],
    overview: [
      "Two pieces define this intake. I structurally reinforced the plenum with ribbing, checked in ANSYS Mechanical, and I designed an O-ring sealing interface between the plenum and the runners so runner length can change during a test. That seal has not been used much, because there has not been a working dyno.",
      "The pressure chamber is also split so volume and bellmouth geometry can be tested on their own. Steady-state and transient throttle-response studies in Ricardo WAVE compared plenum volume and runner length, and the ANSYS work included vibration across the engine operating range. The skills list names that 1D package Realis WAVE.",
    ],
    roleNotes: [
      "As Intake/Dyno Lead I owned the intake decisions and the parts that came out of them: the ribbed plenum reinforcement, the O-ring joint for changing runner length, the split chamber, and the WAVE comparisons of volume and length.",
      "I did not get a real test campaign on the seal. The interface is built for dyno work, and it waited on a dyno that could run. The dynamometer revisions are on their own page.",
    ],
    approach: [
      "Reinforce the plenum with ribbing and check the structure in ANSYS Mechanical, including vibration-induced failure across the engine operating range.",
      "Design an O-ring sealing interface between the plenum and the runners so length can change during a test.",
      "Split the pressure chamber so volume and bellmouth geometry can be tested as their own variables.",
      "Run Ricardo WAVE steady-state and transient throttle-response simulations to compare plenum volume and runner length.",
    ],
    outcomes: [
      "Plenum structurally reinforced with ribbing validated in ANSYS Mechanical, including a vibration check across the operating range.",
      "O-ring sealing interface between the plenum and the runners, so runner length can change in a test. It was not used much, because there was not a working dyno.",
      "Pressure chamber split for volume and bellmouth testing once a dyno can hold a run.",
      "WAVE comparisons of plenum volume and runner length, steady-state and transient. No dyno measurements sit behind those trades yet.",
    ],
    mediaNote: "CAD, ANSYS and WAVE plots, and photos will be added here.",
    media: [
      {
        kind: "CAD",
        caption: "Ribbed plenum structure. Not yet added.",
      },
      {
        kind: "CAD",
        caption: "O-ring sealing interface between the plenum and the runners. Not yet added.",
      },
      {
        kind: "Simulation",
        caption: "ANSYS Mechanical ribbing and vibration results. Not yet added.",
      },
      {
        kind: "Simulation",
        caption: "Ricardo WAVE plenum volume and runner length comparisons. Not yet added.",
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
