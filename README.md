# Batech.ai — Landing Page

Public marketing site for **Batech** — operational intelligence platform powered by computer vision + AI agents.

## Stack
- React 19 + Vite 6
- TypeScript
- Tailwind CSS
- No backend dependencies (all CTAs link to Calendly)

## Languages
- 🇪🇸 Spanish (default)
- 🇺🇸 English
- 🇧🇷 Portuguese

Switcher in nav. User preference stored in `localStorage`.

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Production build

```bash
npm run build      # → dist/
npm run preview    # serve the build at :4173
```

## Deployment

Auto-deployed to **batech.ai** via Vercel on every push to `main`.

The deployment is **public-only**: this repo does NOT contain the
internal Batech BEO platform (operations dashboard, AI agents,
integrations, etc).
