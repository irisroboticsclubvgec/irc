# VGEC Robotics Club — Website

A single-page, dark futuristic showcase site for the VGEC Robotics Club — with an
interactive 3D robot hero, scroll animations, and a fully config-driven content model.

Built with **Vite + React + TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and
**React Three Fiber** (three.js).

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## ✏️ Editing content — the one file you need

**Everything on the site is driven by [`src/data/site.ts`](src/data/site.ts).**
You never need to touch the components — just edit the data.

That file contains, in one place:

- Club name, tagline, email, phone, location, socials
- `nav` — the navbar links (also controls scroll order)
- `stats`, `about`, `domains`, `projects`, `teams`
- `gallery`, `members`, `mentors`, `achievements`
- `events`, `sponsors`, `join`, `contact`

Change any string/array there and it updates on the site immediately.

### Swapping images

Placeholder images currently come from `picsum.photos`. To use your own:

1. Drop your files into `public/images/` (e.g. `public/images/team/aarav.jpg`).
2. In `src/data/site.ts`, replace the image URL with the path, e.g.
   `image: "/images/team/aarav.jpg"`.

### Swapping the 3D robot

The hero robot is built procedurally (no asset needed) in
[`src/components/fx/RobotScene.tsx`](src/components/fx/RobotScene.tsx). To use a real
model instead, drop a `robot.glb` into `public/models/` and load it with drei's
`useGLTF` inside that file — the camera, lights, and controls are already set up.
If a visitor's device has no WebGL, the hero automatically falls back to a static robot.

### Re-skinning colors / fonts

Design tokens (neon colors, fonts, surfaces) live at the top of
[`src/index.css`](src/index.css) in the `@theme` block. Change them once to restyle
the whole site.

---

## Wiring up the contact form

The contact form is UI-only by default. To make it send, connect it to a free form
service (e.g. Formspree, Web3Forms) or an email backend in
[`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx).

---

## Deploying

This is a static site — it builds to `dist/` and can be hosted free on **GitHub Pages**,
**Vercel**, Netlify, Cloudflare Pages, or Firebase Hosting.

### GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings and enable GitHub Pages with the "GitHub Actions"
   source.
3. The included workflow will build and publish the site automatically on every push to
   `main`.

The deployment workflow uses the repository name in the asset base path, so the site
will load correctly at `https://<username>.github.io/<repo-name>/`.

---

## Project structure

```
src/
  data/site.ts            ← ALL content lives here
  App.tsx                 ← composes the sections in order
  index.css               ← design tokens + base styles
  lib/icons.tsx           ← maps icon names used in site.ts
  components/
    layout/               ← Navbar, Footer, Preloader
    fx/                   ← Reveal, Section, AnimatedBackground, RobotScene, ErrorBoundary
    sections/             ← one file per page section
```
