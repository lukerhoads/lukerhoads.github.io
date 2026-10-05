# Luke Rhoads

Static portfolio for Luke Rhoads, built with [Astro](https://astro.build) and published to GitHub Pages from the `master` branch only.

Live site: [lukerhoads.com](https://lukerhoads.com)

## Pages

| Path | Page |
| --- | --- |
| `/` | Home: education, a short experience note, skills, project cards |
| `/projects` | Project index |
| `/projects/fsae-drivetrain` | FSAE Drivetrain (Drivetrain Lead) |
| `/projects/fsae-dynamometer` | FSAE Dynamometer (Intake/Dyno Lead) |
| `/projects/fsae-air-intake` | FSAE Modular Air Intake (Intake/Dyno Lead) |
| `/projects/windsurfing-sup-board` | Windsurfing/SUP Board |

`/projects/surfboard` redirects to the windsurfing/SUP page. `/contact` redirects home. Copy is taken from the resume. Photo, CAD, and write-up slots are empty on purpose.

Earlier project images are still in `public/images/` and are not shown on the pages.

## Preview without publishing

GitHub Pages for this repo deploys **one** production site. `.github/workflows/deploy.yml` runs only on a push to `master` (and on manual dispatch). Do not merge a branch into `master` if `lukerhoads.com` should stay unchanged. A pull-request deployment through `actions/deploy-pages` would replace that live site, so this repo does not enable one.

### Run locally in Cursor

Running the dev server only serves the site on your computer. It does not publish `lukerhoads.com`.

1. Open this repository in Cursor.
2. Check out `cursor/portfolio-rebuild-b14f` (the pull request branch). Leave `master` as it is.
3. Open the integrated terminal with **Terminal → New Terminal**, or press **Ctrl+`** (Mac: **Cmd+`**).
4. From the repository root, install dependencies and start the dev server:

```sh
npm ci
npm run dev
```

5. The terminal prints a local address, usually `http://localhost:4321`. Ctrl-click or Cmd-click that URL. You can also open the Command Palette (**Ctrl+Shift+P** / **Cmd+Shift+P**), run **Simple Browser: Show**, and enter the same address.
6. Edit Markdown in `src/content/` and save. The home page is `src/content/home.md`. Each project is a file in `src/content/projects/`. Photos for a project go in `public/images/` followed by that project's folder name. The page reloads on its own.
7. Stop the server with **Ctrl+C** in that terminal.

Node.js 20 or newer is required. If `npm` is not found, install Node from [nodejs.org](https://nodejs.org/) and open a new terminal.

To preview the production build instead of the dev server:

```sh
npm run build
npm run preview
```

### Static preview

```sh
npm ci
npm run build
npm run preview
```

`npm run build` writes the site to `./dist`. `npm run preview` serves that folder. You can also open `dist/index.html` directly, or upload the `dist/` folder to any static host other than this repository's GitHub Pages environment.

### Pull request artifact

`.github/workflows/preview.yml` runs on pull requests. It installs, builds, and uploads `dist/` as the `static-site-preview` artifact. It does not have Pages write permission and does not call `actions/deploy-pages`.

Download that artifact from the PR's Actions run and open it locally:

```sh
npx serve dist
```

## Stack

Astro static output, IBM Plex Sans and IBM Plex Mono (SIL Open Font License, via Fontsource). `CNAME` and `public/CNAME` are left as they were.
