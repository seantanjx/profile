# Profile portfolio revamp – full rebuild

## Current state

- The repo contains **only build output**: no source code (no `package.json`, no `src/`). The live site is a React SPA (CRA-style) with React Router, styled-components, lazy-loaded sections, and data loaded from `profile/*.json` at runtime.
- **Data to keep**: All JSON in profile/ — `about.json`, `education.json`, `experiences.json`, `home.json`, `navbar.json`, `projects.json`, `routes.json`, `skills.json`, `social.json`. Asset paths in JSON point to `images/` (e.g. `images/logo.png`, `images/about/profile.jpg`, `images/skills/*.png`). Only images/404.svg is present in the repo; other images may live elsewhere or in deploy — preserve path structure so you can drop in logo, profile photo, skills icons, project images as needed.
- **Deploy**: Static; base path is `/profile/` in the current build. You'll need to keep or change this depending on where the site is hosted (e.g. `yoursite.com/profile/` vs `yoursite.com/`).

---

## Recommended stack (non-frontend friendly)

| Layer       | Choice                                 | Rationale                                                                                                                                               |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Build**   | **Vite + React + TypeScript**          | Fast dev server and builds; TS helps avoid mistakes when you edit data or components. Industry standard and easy to look up.                            |
| **Styling** | **Tailwind CSS**                       | Change spacing, colors, and layout by editing class names or `tailwind.config.js`; no custom CSS required. Built-in dark mode and responsive utilities. |
| **Routing** | **React Router v6**                    | Same mental model as current site; one SPA with sections.                                                                                               |
| **Data**    | **JSON in `public/profile/`**          | Edit JSON files only to update content; no code changes. Same URL contract as now so you can keep the same hosting paths.                               |
| **Theme**   | **CSS variables + Tailwind dark mode** | Single theme context; toggle stores preference in `localStorage` and sets class on `<html>`. Dark as default; light as optional.                        |

**Not recommended**: Heavy UI libraries (Material, Bootstrap) — they tend to look generic. A custom, Tailwind-based UI will look more distinctive and stay minimal. Optional: use **Radix UI** primitives only for accessible dropdowns or modals if needed later.

**Alternative**: If you prefer a content-first, minimal-JS approach, **Astro** could be used with React islands; that's a larger shift. For a single-page portfolio with your existing JSON-driven structure, Vite + React is the most straightforward and maintainable.

---

## High-level architecture

- **Entry**: `index.html` → `src/main.tsx` → `App.tsx` with Router and theme provider.
- **Data**: App (or a small `useProfile` hook) fetches `profile/routes.json` and other JSON from `public/profile/` (or from `profile/` if base path is `/profile/`). Same structure as today so existing JSON files can stay as-is.
- **Theme**: One context that reads/writes `prefers-color-scheme` or `localStorage` and applies `dark` / `light` class to `document.documentElement`. Tailwind's `dark:` variants handle the rest.
- **Sections**: One route per section (Home, About, Experience, Education, Skills, Projects); 404 for unknown paths. Navbar and optional footer (social links) live in a layout.

---

## What to preserve vs replace

| Action               | Items                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Keep as-is**       | All profile/*.json files (same keys and paths). manifest.json, robots.txt. Folder images/ and path structure so you can add logo.png, about/profile.jpg, skills/*.png, projects/*.png where expected. |
| **Remove**           | static/ (all JS/CSS chunks and maps), asset-manifest.json, current index.html (replaced by Vite's template).                                                                                             |
| **Add (new source)** | package.json, vite.config.ts, tsconfig.json, tailwind.config.js, postcss.config.js, index.html (root template), src/ (main, App, components, pages, hooks, types).                                    |

After the rebuild, deployment remains static: run `npm run build` and upload `dist/` (or connect the repo to Vercel/Netlify/GitHub Pages). If the site is served under `/profile/`, set `base: '/profile/'` in `vite.config.ts`.

---

## Design and UX (aesthetics first)

- **Dark theme default**: Dark background (e.g. near-black or dark slate), light text, one accent color for links and key elements. Avoid pure `#000` for better readability.
- **Light theme**: Same layout; invert to light background and dark text; same accent.
- **Typography**: One clear font for headings (e.g. from Google Fonts or a variable font), one for body. Different enough from "generic" Inter-only sites.
- **Layout**: Single-column on mobile; on desktop, limit line length and use consistent vertical rhythm. Reuse the existing section ideas: hero (home with name/roles), about (photo + bio + dramas), experience/education as timelines or cards, skills as icon grid, projects as cards with tags and links.
- **Mobile**: Responsive navbar (e.g. hamburger + overlay or slide-out drawer), touch-friendly tap targets, no horizontal scroll. Test on small viewports.
- **Polish**: Subtle transitions on theme toggle and route change; visible focus states for keyboard users; optional reduced-motion preference via `prefers-reduced-motion`.

---

## Suggested project structure (new source)

```
profile/
├── index.html              # Vite entry
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── profile/            # move existing profile/*.json here (or keep at repo root and copy in build)
│   │   ├── about.json
│   │   ├── education.json
│   │   ├── experiences.json
│   │   ├── home.json
│   │   ├── navbar.json
│   │   ├── projects.json
│   │   ├── routes.json
│   │   ├── skills.json
│   │   └── social.json
│   ├── images/             # logo, about, skills, projects, 404.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css           # Tailwind directives + CSS variables
│   ├── types/              # TS types for each JSON shape (optional but helpful)
│   ├── hooks/              # useProfileData, useTheme
│   ├── components/         # Layout, Navbar, ThemeToggle, SectionCard, etc.
│   └── pages/              # Home, About, Experience, Education, Skills, Projects, NotFound
└── README.md               # run, build, deploy, how to edit content
```

If you prefer to keep the repo root as the "live" deploy root, `public/` can mirror that (e.g. `public/profile/`, `public/images/`) and the build will output the same structure. The important part is that fetch URLs in the app match where the server serves the JSON (e.g. `/profile/about.json` or `./profile/about.json` with the right base).

---

## Maintainability and scalability

- **Content updates**: You only edit `public/profile/*.json` (and add/replace images under `public/images/`). No React code needed for new roles, jobs, schools, skills, or projects.
- **Adding a section**: Add a new route in `routes.json`, a new JSON file if needed, a new page component in `src/pages/`, and one nav link in `navbar.json`. Document this in the README.
- **Theme/colors**: Change Tailwind theme in `tailwind.config.js` (e.g. `colors.accent`) or CSS variables in `src/index.css`; no need to hunt through components.
- **README**: Include "Run locally" (`npm run dev`), "Build" (`npm run build`), "Deploy" (upload `dist/` or connect to a host), "How to update content" (edit JSON + images), and "Base path" (if using `/profile/`).

---

## Implementation to-dos

1. **Scaffold**: Create `package.json`, Vite + React + TS, Tailwind + PostCSS, `index.html`, and `src/main.tsx` / `App.tsx`. Configure `base` if deploy path is `/profile/`.
2. **Theme**: Add theme context, `useTheme` hook, and theme toggle (navbar); wire Tailwind dark mode and CSS variables.
3. **Data layer**: Add types for profile JSON (at least for the ones you use), and a small `useProfileData` (or similar) that fetches from `profile/*.json`. Ensure paths work with chosen base.
4. **Layout**: Implement Layout with Navbar (and optional footer). Navbar: logo, links from `navbar.json`, theme toggle; mobile hamburger + overlay/drawer.
5. **Routing**: Set up React Router from `routes.json` (or a static route list), lazy-load page components, and 404 route.
6. **Pages**: Implement Home (hero + typewriter or static roles + social from `social.json`), About (bio, image, dramas), Experience (timeline or cards from `experiences.json`), Education (from `education.json`), Skills (intro + icon grid from `skills.json`), Projects (cards from `projects.json`), and NotFound (e.g. use `images/404.svg`).
7. **Styling**: Apply Tailwind and CSS variables across all pages; ensure mobile breakpoints and touch targets; add focus styles and optional reduced-motion.
8. **Preserve assets**: Move or copy `profile/*.json` and `images/` (and manifest, robots) into `public/` so the build outputs them; fix any asset paths in JSON if needed.
9. **Cleanup**: Remove old build artifacts (`static/`, `asset-manifest.json`, old `index.html` at root if Vite's output is `dist/` and you deploy from `dist/`).
10. **Docs**: Write README with run, build, deploy, and "how to update content" instructions.

---

## Clarifications that would help

- **Deploy URL**: Is the site served at the repo root (e.g. `yoursite.com/`) or under a subpath (e.g. `yoursite.com/profile/`)? This decides the Vite `base` and where to put `profile/` and `images/` in `public/`.
- **Projects**: profile/projects.json currently has one project (Caaring). Do you want to keep a "Projects" section and plan to add more later, or temporarily hide it?
- **Skills images**: JSON references many `images/skills/*.png`. Are those files available elsewhere to drop into the repo, or should the new design work without them (e.g. placeholders or text-only) until you add them?

Once these are confirmed, the implementation can follow the plan above and keep your workflow "edit JSON + assets, then build and deploy."
