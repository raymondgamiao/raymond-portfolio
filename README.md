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

### Content and data

- [x] **Formspree form ID.** Set to `mjgnwbpd` in `src/data/site.js`.
- [x] **GitHub link.** Set to https://github.com/raymondgamiao in `src/data/site.js`.
- [x] **LinkedIn link.** Set to https://www.linkedin.com/in/raymond-gamiao-2b1213115/ in `src/data/site.js`.
- [x] **Email.** Set to raymondgamiao@gmail.com in `src/data/site.js`.
- [x] **Case study.** The private-deployment case study was scrapped in favor of public, clickable projects. The work section now shows only the projects grid.

### Assets

- [x] **OG image.** A 1200x630 `og-image.png` lives in `public/`, designed to match the editorial brand (Fraunces, paper, brick red accent).
- [ ] **Favicon.** `public/favicon.svg` is a simple "RG" placeholder. Replace it with your own logo if you have one.

### Meta tags and deployment

- [x] **og:url.** Set to https://mondi.vercel.app in `index.html`.
- [x] **Absolute image URLs.** `og:image` and `twitter:image` in `index.html` point to https://mondi.vercel.app/og-image.png. The image file itself still needs to be created (see Assets).
- [x] **Demo links.** The reporting dashboard is live with `demoUrl` and `repoUrl` set in `src/data/projects.js`. Repeat for the triage bot and document processing demos when they launch.

### Pre-launch verification

- [ ] **Contact form.** Submit the form for real and confirm the error state renders when submission fails.
- [ ] **Production build.** Run `npm run build` and click through the built site.
- [ ] **Link preview.** Run https://mondi.vercel.app through an OG checker (for example opengraph.xyz) and confirm the card renders with the image.
- [ ] **Deploy.** Commit, push, and confirm Vercel redeploys clean.

## Roadmap

- [x] **Personality redesign.** Shipped: centered hero with a portrait slot, name centerpiece, and social icon row; image-led project cards with one-sentence descriptions; services folded into About; skills as chips; sections renumbered 01 to 04.
- [ ] **Portrait photo.** Drop the real photo at `src/assets/portrait.jpg` (or .jpeg/.png/.webp). The hero shows an RG monogram until the file exists, then swaps automatically on the next build.
- [ ] **Ship the AI Support Ticket Triage Bot demo.** Public, clickable, linked from the projects grid.
- [ ] **Ship the Document and Email Processing Automation demo.** Same treatment.
- [ ] **Fourth major showcase project.** One more substantial public project that demonstrates the full skill set. Scope to be defined.
- [ ] **Updated resume.** Draft the new resume, export as `resume.pdf`, drop it into `public/`, and flip `resumeAvailable` to `true` in `src/data/site.js`. The nav hides the Resume links while it is false so nothing 404s.

## Project structure

- `src/data/` holds all editable content: projects and case study, skills, certifications, and site-wide links. Most content updates never touch a component.
- `src/components/` holds the section components: NavBar, HeroSection, AboutSection (includes the services strip), CaseStudiesSection, ProjectCard, SkillsSection, ContactSection, SiteFooter, plus the shared SectionHeading used by every numbered section.
- `src/assets/projects/` holds the project card images (1200x750 webp), imported from `src/data/projects.js`.
- Typography is Fraunces (serif, headlines) and Instrument Sans (body), self-hosted via @fontsource. Theme colors and easing live in the `@theme` block in `src/assets/main.css`.
- `src/views/` holds the two routed pages: HomeView (the one-page site) and CertificationsView.
- `src/stores/theme.js` manages the light/dark toggle. The hero section stays dark in both themes on purpose.
