# Bitpan E-commerce Next.js Template — Netlify deployment

This repo is a Next.js app using the App Router. To deploy on Netlify we use the official Netlify Next.js plugin which handles build output and server functions.

Quick setup (what this repo already contains)

- `netlify.toml` — config enabling `@netlify/plugin-nextjs` and publishing to `.netlify/output`.
- Build command: `npm run build` (runs `next build`).

Recommended Netlify site settings

1. In Netlify UI → Sites → (your site) → Site settings → Build & deploy → Continuous Deployment → Build settings:
   - Build command: `npm run build`
   - Branch: `main` (or your chosen branch)
   - Publish directory: leave empty (the plugin controls output) — or set to `.netlify/output` if you prefer repo-controlled setting.
2. No extra publish directory pointing at the repo root (e.g. `/opt/build/repo`). If a publish dir equals the repo root the plugin will fail with: "Your publish directory cannot be the same as the base directory of your site." If you see that error, clear the Publish directory in the UI or use `.netlify/output` in `netlify.toml`.

What to look for in Netlify deploy logs

- Plugin install / start: references to `@netlify/plugin-nextjs`.
- Next build: `Creating an optimized production build ...` and `Compiled successfully`.
- Plugin output / publish: `.netlify/output prepared`, `Copying files to deployment`, or `Publish directory: .netlify/output`.
- Final result: `Deploy succeeded` / `Site is live`.

Troubleshooting

- If the build fails with "Your publish directory cannot be the same as the base directory of your site", clear the Publish directory in Netlify UI or set `publish = ".netlify/output"` in `netlify.toml` (this repo already uses `.netlify/output`).
- If the build fails with TypeScript or runtime errors, check the Netlify build log for the specific error and fix it locally (run `npm run build`) before re-deploying.
- If you see Next.js image warnings like `@next/next/no-img-element`, these are lint warnings only — they don't typically stop the deploy, but consider switching to `next/image` for better optimization.

Triggering a redeploy

- Push any commit to the branch Netlify tracks (e.g., `main`), or use the Netlify UI to trigger a deploy manually.

If you'd like, I can also include these steps in a small CI checklist or add a Netlify health-check note to the README.

---
If you want me to run any follow-ups (check new deploy logs, add a health-check page, or centralize currency formatting), reply and I’ll continue.
# Bitpan Demo

To run the Bitpan demo, first install the npm dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
