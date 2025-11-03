# Bitpan E-commerce Next.js Template — Vercel deployment

This repository is a Next.js (App Router) application prepared to deploy on Vercel. Vercel supports Next.js natively, so deployments are straightforward.

Quick Vercel setup

1. If you haven't already, create a Vercel account and link your GitHub repository.
2. On Vercel, import the project and select the `main` branch.
3. Default Build Settings (Vercel auto-detects Next.js):
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: (leave blank — Vercel handles Next output automatically)

Redirects and routing

- This repo includes `vercel.json` which defines a redirect from `/` to `/home-fashion` (302). Edit `vercel.json` if you want a permanent redirect (301) or different behavior.

Files changed for Vercel

- Removed Netlify-specific config and plugin to avoid deployment conflicts.
- Added `vercel.json` to declare the Next.js builder and the root redirect.

Local development

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site locally.

Deploy checklist

- Push to `main` — Vercel will build and deploy automatically.
- Confirm the redirect by visiting the Vercel deployment URL root (it should redirect to `/home-fashion`).

Troubleshooting

- If build errors occur on Vercel, run `npm run build` locally and fix any TypeScript or runtime issues before re-deploying.
- If you need a specific Node version in Vercel, keep the `engines.node` field in `package.json` (this repo already requests Node >=18).

Next steps I can take (pick any):

- Watch a Vercel deploy and iterate on errors until green.
- Centralize currency formatting across the codebase.
- Add a small smoke-test script that runs after deploy (optional).

---
Bitpan Demo

To run the Bitpan demo locally, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
