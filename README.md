# Solutions by Pratham Agrawal (Tech Solutions)

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 18](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Production-grade web engineering consultancy platform.** Architected for extreme performance, modern visual craft, and transparent client engagement models.

**Live Deployment:** [https://solutions.agrawalpratham.in](https://solutions.agrawalpratham.in)  
**Engineering Portfolio:** [https://agrawalpratham.in](https://agrawalpratham.in)

---

## Architecture Overview

Tech Solutions is a full-lifecycle digital software engineering and consulting web application built with **Next.js 16 (Turbopack)**, **Tailwind CSS**, and modern reactive animation primitives. The platform offers a complete suite of services, interactive client feedback systems, careers portal, automated lead management, and comprehensive real-user monitoring telemetry.

```
tech_solutions/
├── public/                     # Optimized static assets, favicons & PWA manifests
├── src/
│   ├── components/
│   │   ├── About/              # Heritage timeline, leadership, values & CTA
│   │   ├── Cookie/             # Consent banner with privacy policy link
│   │   ├── Home/
│   │   │   ├── About/          # Value propositions & differentiators
│   │   │   ├── BrowserSupport/ # Cross-browser performance benchmarks
│   │   │   ├── BuildTools/     # Multi-tab code & architecture showcase
│   │   │   ├── Contact/        # Embedded inquiry form with API hook
│   │   │   ├── Footer/         # Complete sitemap, legal & social links
│   │   │   ├── HappyClients/   # Metric counters & review page links
│   │   │   ├── Header/         # Global header container
│   │   │   ├── Hero/           # Dynamic headlines & architecture preview card
│   │   │   ├── Pricing/        # 6-category milestone engagement tiers
│   │   │   └── TestimonialSpotlight.jsx # Curated homepage client reviews
│   │   ├── Services/           # Headline, 6 core offerings, value pillars & FAQs
│   │   └── Shared/
│   │       ├── Navbar/         # Route-aware navigation with drawer & active indicators
│   │       └── ScrollTop/      # Floating back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx    # Persistent Dark/Light theme state
│   ├── lib/
│   │   └── analytics.js        # GA4, Clarity & conversion event dispatcher
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.js      # Lead intake POST API with validation & ref IDs
│   │   ├── _app.js             # Root wrapper, analytics & SpeedInsights
│   │   ├── _document.js        # HTML shell & font optimizations
│   │   ├── index.js            # Revamped homepage
│   │   ├── about.js            # Company heritage & leadership with JSON-LD schema
│   │   ├── services.js         # Full service catalog & pre-filled consult links
│   │   ├── reviews.js          # 4.9/5 rating hub, filters & review submission modal
│   │   ├── careers.js          # Culture, perks, open roles & application portal
│   │   ├── contact-us.js       # Standalone contact page with real-time feedback
│   │   ├── contact.js          # Route alias to /contact-us
│   │   ├── privacy-policy.js   # Structured privacy policy with TOC & GDPR/CCPA
│   │   ├── licensing.js        # IP ownership & open-source disclosures
│   │   ├── terms-and-conditions.js # Terms of service
│   │   └── tnc.js              # Route alias matching footer links
│   └── styles/
│       └── globals.css         # Custom animations & utility classes
├── next-sitemap.config.js      # Automated XML sitemap generation
└── tailwind.config.js          # Design tokens & color system
```

---

## Key Features & Pages

### 1. Homepage (`/`)
- **Hero Architecture Preview**: Dynamic typing headline with layout shift prevention, paired with an interactive live card displaying sub-second LCP (0.6s), 99.99% uptime, and Next.js 14/16 SSR specs.
- **Code & Stack Showcase**: Multi-tab code terminal with syntax highlighting for Next.js Server Actions, Cloud CI/CD workflows, and Python RAG pipelines with one-click copy.
- **Milestone Pricing**: 6 service category tiers (Web Dev, UI/UX, Cloud & DevOps, AI Solutions, Mobile Apps, E-Commerce) with direct *"Get Started"* pre-fill buttons.
- **Testimonial Spotlight**: Curated client reviews with verified ratings linked to `/reviews`.

### 2. About Us (`/about`)
- **Evolution Roadmap (2020–2026+)**: Visual timeline tracking milestones from inception to enterprise scale.
- **Founder & Leadership Spotlight**: Direct profile and verified links for **Pratham Agrawal** (Founder & Principal Solutions Architect).
- **Core Values & Philosophy**: 6 foundational pillars and dual Mission/Vision gradient cards.
- **SEO Schema**: Injected JSON-LD `Organization` metadata for search engine indexing.

### 3. Services (`/services`)
- Comprehensive catalog of 6 core services (Full-Stack Web, UI/UX Systems, Enterprise Cloud, AI Integration, Mobile Apps, Headless E-Commerce).
- Feature checklists, technology badges, timeline estimates, and *"Consult on this"* buttons that pre-select the service on `/contact-us`.
- Interactive FAQ accordion for common prospective client questions.

### 4. Client Reviews & Feedback (`/reviews`)
- 4.9/5 overall aggregate score with star breakdown bars.
- Filter by category pills (*Web Applications, UI/UX & Mobile, Cloud & Backend, E-Commerce*) and live search.
- Interactive **"Write a Review"** modal with dynamic list prepending and conversion tracking.

### 5. Careers & Open Roles (`/careers`)
- Remote-first perks grid (*Flexible hours, global compensation, learning stipends, health coverage*).
- Searchable open positions with expandable responsibilities and requirements.
- Built-in **"Apply Now"** modal with instant application tracking IDs (`APP-######`).

### 6. Functional Contact System (`/contact-us` & `/api/contact`)
- Standalone contact page supporting auto-filled query parameters (`?service=...`).
- Backed by `/api/contact` API route: validates payload, verifies RFC-compliant emails, and generates a formatted reference tracking code (`TS-2026-#####`).

### 7. Legal & Compliance
- **Privacy Policy** (`/privacy-policy`): Structured data collection terms, GDPR/CCPA disclosures, cookie policy, and DPO contact.
- **Licensing** (`/licensing`): Commercial 100% client IP transfer terms and MIT open-source third-party dependencies.
- **Terms & Conditions** (`/terms-and-conditions`, `/tnc`): Full service terms, milestone acceptance, and warranty disclaimers.

---

## Telemetry & Analytics Suite

- **Google Analytics 4 (GA4)**: `G-NLPQCWCG1G` via `@next/third-parties/google`.
- **Microsoft Clarity**: `nfjtkrqli4` configured with `strategy="afterInteractive"`.
- **Vercel Web Analytics**: Real-time traffic and geo monitoring via `@vercel/analytics`.
- **Vercel Speed Insights**: Real user monitoring (RUM) tracking Core Web Vitals (LCP, FID, CLS, INP) via `@vercel/speed-insights`.
- **SPA Navigation Tracking**: Next.js `router.events` listener in `_app.js` synchronizes route transitions with GA4 and Clarity.
- **Custom Conversion Events** (`src/lib/analytics.js`):
  - `contact_form_submitted`
  - `homepage_contact_submitted`
  - `review_submitted`
  - `job_application_submitted`
  - `cookie_consent_accepted`

---

## Getting Started

### Prerequisites
- Node.js >= 18.17.0
- npm / yarn / pnpm

### Installation

1. Clone repository:
   ```bash
   git clone https://github.com/agrawal-pratham/Tech-Solutions.git
   cd Tech-Solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Create production build:
   ```bash
   npm run build
   npm run start
   ```

---

## License

This project is licensed under the [MIT License](LICENSE).  
Copyright (c) 2026 [Pratham Agrawal](https://agrawalpratham.in).
