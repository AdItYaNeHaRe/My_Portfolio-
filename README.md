# Aditya Nehare Portfolio (React + Vite)

A modern, animated portfolio site for **Aditya Nehare** showcasing full-stack MERN work, data/analytics projects, and case studies.

Live sections include:

- Hero (type animation, orbit skills, CTA buttons)
- About
- Skills (categorized)
- Education
- Experience
- Projects (filterable, featured spotlight + case-study routing)
- Certifications
- Contact (form + resume downloads)

---

## Features

### UX / UI

- **Tailwind CSS** theme with custom color system (primary/surface/accent)
- **Dark/Light theme support** via `ThemeContext` with persistence in `localStorage`
- **Sticky navbar** with scroll spy (IntersectionObserver)
- **Mobile menu** with animated backdrop/panel
- **Framer Motion** page transitions (`AnimatePresence`) and component animations
- **Command Palette** (toggle with **Ctrl/⌘ + K**)
- Optimized visuals (lazy loaded images, reduced motion support)

### Portfolio content model

- Project data is driven from `src/data/Projects.js` and rendered by `src/components/sections/Projects.jsx`
- Featured projects can include **case studies** which route to:
  - `/case-study/:id` → `src/pages/CaseStudyPage.jsx`
- Project images are mapped by `src/data/projectImages.js` (with fallback)

### Contact + assets

- Contact form submits to **Formspree** endpoint from `src/components/sections/Contact.jsx`
- Resume downloads included directly from `src/Resume/*.pdf`

---

## Tech Stack

- **Frontend:** React (v19) + React Router
- **Build tooling:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, GSAP (installed; used across components)
- **UI/Icons:** lucide-react, react-icons
- **Testing:** Vitest (script present)

---

## Project Structure (high level)

```text
Main_Project/
  src/
    App.jsx                      # Router + layout shell
    main.jsx                     # React mount + ThemeProvider

    context/
      ThemeContext.jsx           # theme persistence + toggle

    pages/
      Home.jsx                  # portfolio landing page
      CaseStudyPage.jsx         # project case study view

    components/
      layout/
        Navbar.jsx              # sticky scroll-spy navbar + mobile menu
        Footer.jsx              # social links
        CommandPalette.jsx      # Ctrl/⌘+K actions
        CustomCursor.jsx        # hides cursor on touch devices

      sections/
        Hero.jsx
        About.jsx
        Skills.jsx
        EducationSection.jsx
        ExperienceSection.jsx
        Projects.jsx
        Certifications.jsx
        Contact.jsx

      ui/
        Button.jsx, Card.jsx, SectionHeader.jsx

    data/
      Projects.js               # project list + details (features, metrics)
      projectImages.js         # image mapping by project id
      personal.js               # name/title/contact data
      skills.js
      experience.js
      achievements.js
      certifications.js
      config.js                 # feature flags + social links + env hooks
```

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### 3) Production build

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

---

## Scripts

From `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview the built site
- `npm run lint` — run ESLint
- `npm run test` — run Vitest (`vitest run`)

---

## Environment Variables

`src/data/config.js` references Vite env vars (from `.env`) for optional integrations:

- `VITE_GITHUB_TOKEN`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The current UI also uses Formspree directly in `Contact.jsx`:

- `https://formspree.io/f/xzbpknkz`

If you want to switch from Formspree to EmailJS, you can use the configured env vars in `config.js`.

---

## Routing

Defined in `src/App.jsx`:

- `/` → `Home`
- `/case-study/:id` → `CaseStudyPage`
- `*` → 404 fallback

`CaseStudyPage` looks up the project by `id` inside `src/data/Projects.js` and renders:

- project overview
- problem statement
- features list
- tech tags

---

## How to Add a New Project

1. Add the project entry in `src/data/Projects.js`.
   - Provide at minimum: `id`, `title`, `date`, `type`, `category`, `tech`, `overview`
   - Optionally include:
     - `problem`
     - `features`
     - `metrics`
     - `github`, `demo`
     - `caseStudy: true` and `caseStudyId`
2. Add an image for the project:
   - Put the image under `src/project/` (example pattern: `src/project/<id>.jpg`)
   - Import it and map it in `src/data/projectImages.js`
   - If omitted, the page will fall back to `/images/projects/placeholder.svg`

---

## Command Palette

Toggle with:

- **Ctrl + K** on Windows/Linux
- **⌘ + K** on macOS

Actions currently include:

- View Projects
- Contact Me
- Download MERN Resume
- Download Data Resume

---

## Tailwind Customization

Colors, typography, shadows, and animations are configured in `tailwind.config.js`.

If you add new components, prefer using the existing tokens (e.g., `bg-primary`, `text-text-muted`, `border-border`, `text-accent`) for consistent theming.

---

## Deployment

This project is compatible with any static hosting that supports Vite SPA routing.

Recommended options:

- **Vercel** (works well with `npm run build`)
- Netlify
- GitHub Pages (with correct SPA routing setup)

For SPA routing to `/case-study/:id`, ensure the host is configured to serve `index.html` for unknown routes.

---

## Credits & Notes

- Built with React + Vite + Tailwind.
- Animations and polish provided by Framer Motion.
- Contact form uses Formspree.

---
