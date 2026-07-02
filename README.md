# Raymond Gamiao | Portfolio

Personal portfolio site for Raymond Gamiao, AI-Powered Automation Engineer. Built with Vue 3, Vite, Tailwind CSS 4, Vue Router, and Pinia.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens a local dev server, usually at http://localhost:5173.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this project to a new GitHub repository.
2. In Vercel, click "Add New Project" and import the repository.
3. Vercel detects Vite automatically. Keep the defaults (build command `npm run build`, output directory `dist`) and deploy.

No extra configuration is needed.

## Before going live: placeholder checklist

Work through every item below. Each one is also marked with a comment in the code.

- [ ] **Formspree form ID.** Create a form at https://formspree.io, then replace `YOUR_FORM_ID` in `src/data/site.js`.
- [ ] **Social links.** Replace the GitHub URL, LinkedIn URL, and email address in `src/data/site.js`.
- [ ] **Resume.** Drop your `resume.pdf` into the `public/` folder so the nav link works.
- [ ] **Case study metrics.** Replace the `[X]` placeholders in the `results` array in `src/data/projects.js` with real Phase 1 numbers.
- [ ] **OG image.** Add a 1200x630 `og-image.png` to the `public/` folder, and update the `og:url` meta tag in `index.html` with your real domain.
- [ ] **Favicon.** `public/favicon.svg` is a simple "RG" placeholder. Replace it with your own logo if you have one.
- [ ] **Demo links (later).** When a demo goes live, set `demoUrl` and `repoUrl` on the matching project in `src/data/projects.js`. The buttons appear automatically and the "Demo launching soon" badge disappears.

## Project structure

- `src/data/` holds all editable content: projects and case study, skills, certifications, and site-wide links. Most content updates never touch a component.
- `src/components/` holds the section components: NavBar, HeroSection, AboutSection, ServicesSection, CaseStudiesSection, ProjectCard, SkillsSection, ContactSection, SiteFooter, plus the shared SectionHeading used by every numbered section.
- Typography is Fraunces (serif, headlines) and Instrument Sans (body), self-hosted via @fontsource. Theme colors and easing live in the `@theme` block in `src/assets/main.css`.
- `src/views/` holds the two routed pages: HomeView (the one-page site) and CertificationsView.
- `src/stores/theme.js` manages the light/dark toggle. The hero section stays dark in both themes on purpose.
