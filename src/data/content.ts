/**
 * Portfolio copy is limited to Luke Rhoads's resume.
 * Do not add metrics, employers, dates, or results that are not on that resume.
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
  lede: "Mechanical engineering student at Brown University. Prior experience includes a mechanical engineering internship at SpaceX, drivetrain and intake/dyno leadership on Brown Formula Racing, a mechanical engineering internship at Chicago Cutting Die, and research assistance in the PROBE Lab.",
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

export interface Bullet {
  text: string;
  children?: string[];
}

export interface ExperienceGroup {
  label?: string;
  links?: { href: string; label: string }[];
  bullets: Bullet[];
}

export interface Experience {
  organization: string;
  title: string;
  location: string;
  dates: string;
  groups: ExperienceGroup[];
}

export interface MediaSlot {
  kind: "Photo" | "CAD" | "Simulation" | "Write-up";
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  navLabel: string;
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

export function projectHref(slug: string): string {
  return `/projects/${slug}`;
}

export const projects: Project[] = [
  {
    slug: "fsae-drivetrain",
    title: "FSAE Drivetrain",
    navLabel: "Drivetrain",
    sheet: "01",
    featured: true,
    summary:
      "Rear differential mounting system and chain tension adjustment for Brown Formula Racing, designed in SolidWorks and manufactured with Fusion 360 CAM and CNC milling.",
    role: "Drivetrain Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "October 2024 – May 2025",
    tools: ["SolidWorks", "Fusion 360 CAM", "CNC milling", "MATLAB"],
    overview: [
      "Drivetrain work for Brown Formula Racing covering a rear differential mounting system, a chain tension adjustment system, and integration with suspension and chassis.",
      "The mount was iterated in SolidWorks for minimum weight under calculated loading conditions. Final drive ratio selection was justified with point-mass lap simulations in MATLAB.",
    ],
    roleNotes: [
      "Drivetrain Lead on Brown Formula Racing from October 2024 to May 2025, in Providence, RI.",
      "Brown Formula Racing involvement runs September 2024 through the present. This page covers the drivetrain lead scope only.",
    ],
    approach: [
      "Designed a rear differential mounting system using Solidworks, iterating for minimum weight under calculated loading conditions.",
      "Manufactured rear-differential mounting system and chain tension adjustment system components using Fusion 360 CAM and CNC milling.",
      "Collaborated with suspension and chassis teams to successfully integrate the drivetrain while ensuring driveshaft clearance across all chain tensioning configurations.",
      "Ran point-mass lap simulations in MATLAB to justify final drive ratio selection.",
    ],
    outcomes: [
      "Rear differential mounting system designed for minimum weight under calculated loading conditions.",
      "Rear-differential mounting system and chain tension adjustment system components manufactured.",
      "Drivetrain integrated with the suspension and chassis teams, with driveshaft clearance across all chain tensioning configurations.",
      "Final drive ratio selection justified with point-mass lap simulations in MATLAB.",
    ],
    mediaNote:
      "Photos, CAD, simulation output, and a longer write-up will be added here.",
    media: [
      {
        kind: "CAD",
        caption:
          "SolidWorks model of the rear differential mounting system. Not yet added.",
      },
      {
        kind: "Photo",
        caption:
          "Manufactured rear-differential mount and chain tension adjustment components. Not yet added.",
      },
      {
        kind: "Simulation",
        caption:
          "MATLAB point-mass lap simulation used for final drive ratio selection. Not yet added.",
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
    navLabel: "Dyno",
    sheet: "02",
    featured: true,
    summary:
      "Water-brake engine dynamometer for Brown Formula Racing, built to validate steady-state powertrain simulations and quantify engine performance.",
    role: "Intake/Dyno Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – May 2026",
    tools: ["Aluminum extrusion frame", "Gear reduction", "Water pump", "PID control"],
    overview: [
      "A water-brake engine dynamometer designed and manufactured for Brown Formula Racing, to be used to validate steady-state powertrain simulations and quantify engine performance.",
      "The same Intake/Dyno Lead role includes the modular air intake, documented on its own page.",
    ],
    roleNotes: [
      "Intake/Dyno Lead on Brown Formula Racing from June 2025 to May 2026, in Providence, RI.",
      "This page covers the water-brake dynamometer. The modular air intake from the same role is a separate project.",
    ],
    approach: [
      "Designed and fabricated an aluminum extrusion frame adhering to strict budget constraints.",
      "Collaborated with the electrical subteam to integrate an engine wiring harness.",
      "Implemented a gear-reduction system enabling testing across the full range of engine loading conditions.",
      "Debugged insufficient flow rate by integrating a higher capacity water pump.",
      "Rewired the load-control motor and currently tuning a PID control system to match engine load.",
    ],
    outcomes: [
      "Water-brake engine dynamometer designed and manufactured to validate steady-state powertrain simulations and quantify engine performance.",
      "Aluminum extrusion frame fabricated under strict budget constraints.",
      "Engine wiring harness integrated with the electrical subteam.",
      "Gear-reduction system implemented for the full range of engine loading conditions.",
      "Higher-capacity water pump integrated after insufficient flow rate.",
      "Load-control motor rewired. A PID control system is currently being tuned to match engine load.",
    ],
    mediaNote:
      "Photos, CAD, and a longer write-up will be added here. Measured power and torque figures are not included.",
    media: [
      {
        kind: "CAD",
        caption: "Aluminum extrusion frame. Not yet added.",
      },
      {
        kind: "Photo",
        caption:
          "Water-brake dynamometer, gear reduction, and water pump. Not yet added.",
      },
      {
        kind: "Photo",
        caption: "Load-control motor wiring and harness. Not yet added.",
      },
      {
        kind: "Write-up",
        caption: "Extended build and control notes. Not yet added.",
      },
    ],
  },
  {
    slug: "fsae-air-intake",
    title: "FSAE Modular Air Intake",
    navLabel: "Intake",
    sheet: "03",
    featured: true,
    summary:
      "Modular air intake with mass reduced through ribbing, a split pressure chamber, hot-swappable runner lengths, and ANSYS Mechanical and Ricardo WAVE studies.",
    role: "Intake/Dyno Lead",
    organization: "Brown Formula Racing",
    location: "Providence, RI",
    dates: "June 2025 – May 2026",
    tools: ["ANSYS Mechanical", "Ricardo WAVE"],
    overview: [
      "A modular air intake system for Brown Formula Racing dynamometer testing, designed under the Intake/Dyno Lead role.",
      "Mass was optimized with ribbing strategies validated in ANSYS Mechanical. Plenum volume and runner length tradeoffs were quantified with steady-state and transient throttle-response simulations in Ricardo WAVE. The skills list names this package Realis WAVE.",
    ],
    roleNotes: [
      "Intake/Dyno Lead on Brown Formula Racing from June 2025 to May 2026, in Providence, RI.",
      "This page covers the modular air intake. The water-brake dynamometer from the same role is a separate project.",
    ],
    approach: [
      "Optimized intake mass using ribbing strategies validated in ANSYS Mechanical.",
      "Verified structural integrity against vibration-induced failure across the engine operating range using ANSYS Mechanical.",
      "Split the pressure chamber, enabling volume and bellmouth testing.",
      "Integrated a static sealing mechanism enabling hot-swappable runner lengths for dynamometer testing.",
      "Ran steady-state and transient throttle-response simulations with Ricardo WAVE to quantify plenum volume and runner length tradeoffs.",
    ],
    outcomes: [
      "Intake mass optimized with ribbing strategies validated in ANSYS Mechanical.",
      "Structural integrity checked against vibration-induced failure across the engine operating range.",
      "Pressure chamber split so volume and bellmouth geometry can be tested.",
      "Static sealing mechanism integrated for hot-swappable runner lengths on the dynamometer.",
      "Steady-state and transient throttle-response simulations run to quantify plenum volume and runner length tradeoffs.",
    ],
    mediaNote:
      "CAD, simulation plots, photos, and a longer write-up will be added here.",
    media: [
      {
        kind: "CAD",
        caption:
          "Split pressure chamber and static runner seal. Not yet added.",
      },
      {
        kind: "Simulation",
        caption:
          "ANSYS Mechanical ribbing and vibration results. Not yet added.",
      },
      {
        kind: "Simulation",
        caption:
          "Ricardo WAVE steady-state and transient throttle-response results. Not yet added.",
      },
      {
        kind: "Write-up",
        caption: "Extended intake design notes. Not yet added.",
      },
    ],
  },
  {
    slug: "windsurfing-sup-board",
    title: "Windsurfing/SUP Board",
    navLabel: "Board",
    sheet: "04",
    featured: false,
    summary:
      "EPS foam plug shaped with a custom-built hot-wire cutter, skinned in carbon fiber and epoxy, with resin-infusion experiments for a composite fin.",
    role: "Personal project",
    tools: ["Hot-wire foam cutter", "EPS foam", "Carbon fiber", "Epoxy", "Resin infusion"],
    overview: [
      "A windsurfing and stand-up paddle board built by shaping EPS foam to a plug, then bonding and curing carbon fiber and epoxy over that plug to achieve a high strength/weight ratio.",
      "Resin infusion layups were also used in experiments toward a lightweight composite fin. No team, location, or date is given for this project.",
    ],
    roleNotes: [
      "Personal project, separate from the internships and Brown Formula Racing roles.",
      "No team title, organization, location, or dates are given.",
    ],
    approach: [
      "Shaped EPS foam to a plug using a custom-built hot-wire foam cutter.",
      "Bonded and cured carbon fiber and epoxy over the foam plug to achieve a high strength/weight ratio.",
      "Experimented with resin infusion layup techniques to produce a lightweight composite fin.",
    ],
    outcomes: [
      "EPS foam shaped to a plug with a custom-built hot-wire foam cutter.",
      "Carbon fiber and epoxy bonded and cured over the foam plug to achieve a high strength/weight ratio.",
      "Resin infusion layups used in experiments toward a lightweight composite fin.",
    ],
    mediaNote: "Photos and a longer write-up will be added here.",
    media: [
      {
        kind: "Photo",
        caption: "EPS foam plug and hot-wire cutter. Not yet added.",
      },
      {
        kind: "Photo",
        caption: "Carbon fiber and epoxy skin. Not yet added.",
      },
      {
        kind: "Photo",
        caption: "Resin infusion fin experiments. Not yet added.",
      },
      {
        kind: "Write-up",
        caption: "Extended process notes. Not yet added.",
      },
    ],
  },
];

function openProject(slug: string): { href: string; label: string } {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }
  return {
    href: projectHref(project.slug),
    label: `Open ${project.title}`,
  };
}

export const experience: Experience[] = [
  {
    organization: "SpaceX",
    title: "Mechanical Engineering Intern",
    location: "Starbase, TX",
    dates: "May 2026 – August 2026",
    groups: [
      {
        bullets: [
          {
            text: "Reduced payload attach times by 49% in labor hours and $60k per ship by introducing temporary work access platforms",
          },
          {
            text: "Designed permanent work access platforms for payload attach operations and tension connections for safe payload transport",
          },
          {
            text: "Designed and implemented bumpers to prevent damage to climber tools when fully retracted",
          },
          {
            text: "Iterated quickly to design hardware and processes for payload build and attach for upcoming Gigabay operations",
          },
          {
            text: "Collaborated with build team to verify safety of test article operations taking place on payload transport tool",
          },
        ],
      },
    ],
  },
  {
    organization: "Brown Formula Racing",
    title: "Drivetrain Lead and Intake/Dyno Lead",
    location: "Providence, RI",
    dates: "September 2024 – Present",
    groups: [
      {
        label: "Drivetrain Lead (October 2024 – May 2025)",
        links: [openProject("fsae-drivetrain")],
        bullets: [
          {
            text: "Designed a rear differential mounting system using Solidworks, iterating for minimum weight under calculated loading conditions",
          },
          {
            text: "Manufactured rear-differential mounting system and chain tension adjustment system components using Fusion 360 CAM and CNC milling",
          },
          {
            text: "Collaborated with suspension and chassis teams to successfully integrate the drivetrain while ensuring driveshaft clearance across all chain tensioning configurations",
          },
          {
            text: "Ran point-mass lap simulations in MATLAB to justify final drive ratio selection",
          },
        ],
      },
      {
        label: "Intake/Dyno Lead (June 2025 – May 2026)",
        links: [openProject("fsae-dynamometer"), openProject("fsae-air-intake")],
        bullets: [
          {
            text: "Designed and manufactured a water brake engine dynamometer that will be used to validate steady-state powertrain simulations and quantify engine performance",
            children: [
              "Designed and fabricated an aluminum extrusion frame adhering to strict budget constraints",
              "Collaborated with the electrical subteam to integrate an engine wiring harness",
              "Implemented a gear-reduction system enabling testing across the full range of engine loading conditions",
              "Debugged insufficient flow rate by integrating a higher capacity water pump",
              "Rewired the load-control motor and currently tuning a PID control system to match engine load",
            ],
          },
          {
            text: "Designed a modular air intake system",
            children: [
              "Optimized intake mass using ribbing strategies validated in ANSYS Mechanical",
              "Verified structural integrity against vibration-induced failure across the engine operating range using ANSYS Mechanical",
              "Split the pressure chamber enabling volume and bellmouth testing",
              "Integrated a static sealing mechanism enabling hot-swappable runner lengths for dynamometer testing",
              "Ran steady-state and transient throttle-response simulations with Ricardo WAVE to quantify plenum volume and runner length tradeoffs",
            ],
          },
        ],
      },
    ],
  },
  {
    organization: "Chicago Cutting Die",
    title: "Mechanical Engineering Intern",
    location: "Northbrook, IL",
    dates: "May 2025 – August 2025",
    groups: [
      {
        bullets: [
          {
            text: "Digitized tooling assembly designs using SolidWorks for manufacturing documentation",
          },
          {
            text: "Programmed CNC milling operations for tool and die manufacturing using MasterCAM",
          },
          {
            text: "Managed incoming work requests while synchronizing digital and physical work records",
          },
        ],
      },
    ],
  },
  {
    organization: "PROBE Lab",
    title: "Research Assistant",
    location: "Providence, RI",
    dates: "September 2025 – December 2025",
    groups: [
      {
        bullets: [
          {
            text: "Designed and manufactured optical mounting system to improve mechanical stability in nanoscale 3D printing",
          },
        ],
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
