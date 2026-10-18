# Arnav Hooda — Frontend & AI Engineer

Arnav's text, résumé, portraits, and achievement photographs customized inside the existing Bhumi portfolio UI. The original `style.css` and `portfolio.css` are preserved byte for byte, including the black and lavender palette, typography, floating navigation, hero arrangement, photo galleries, project shelf, draggable achievement board, and footer.

Built with the original HTML, CSS, and JavaScript structure. No framework installation, build step, API key, or backend is required. The original Google Fonts, skill icons, and Spotify player use external services.

## Run locally

With Node.js installed:

```sh
npm run dev
```

Open http://127.0.0.1:5176/. To change the port, run `npm run dev -- --port 5177` or set `PORT`.

```sh
npm run check
```

## Edit

- `dist/index.html`: original page structure with Arnav's content, photographs, captions, and links.
- `dist/style.css` and `dist/portfolio.css`: original design and responsive styles, preserved exactly.
- `dist/script.js`: original mobile navigation and reveal interactions.
- `dist/portfolio.js`: original galleries, project shelf, filters, draggable photo board, project dialogs, and email draft form, with Arnav's project and achievement data.
- `dist/project-data.json`: project summaries for the current catalog and five case studies.
- `dist/assets/`: optimized copies of the supplied photos and the résumé PDF. The downloadable résumé preserves the original appearance and text; its embedded LinkedIn links and document metadata have been corrected for Arnav.
- `CONTENT-SOURCES.md`: content provenance and date decisions.

Project thumbnail images are portfolio illustrations rather than screenshots. Their descriptions identify them as illustrations. Project detail dialogs describe the work recorded in the résumé; no live demo or source repository was supplied for those projects.

The original contact form prepares a `mailto:` draft to arnavhooda@gmail.com in the visitor's email application. It does not send or save messages. A direct email link is also available.

## Hosting

Serve `dist` with any static host. The included `vercel.json` configures a static deployment with no build or install step.

For Vercel, import `PRABHMANNAT/Arnav-bro-portfolio` and use the repository root as the Root Directory (`.`), Framework Preset **Other**, and Output Directory **dist**. Keep the Build Command and Install Command disabled as configured in `vercel.json`. No environment variables are required. The static files are committed and ready to serve; `serve.cjs` is only the local preview server. The included `.vercelignore` excludes local test output and dependency folders from CLI uploads.

## Accessibility

Preserves the original skip link, native project dialogs, visible focus states, form validation, mobile menu, keyboard gallery controls, keyboard movement of achievement photos, and reduced motion support.

Two interaction fixes preserve the existing appearance: the project shelf captures a pointer only once a drag starts so card clicks open correctly, and the dialog close button sits above its image header.

The project shelf contains 17 cards. Smart Gig, Virtual Simulation Labs, and DriveSense were removed at the owner’s request. Concept descriptions remain labeled as concepts. The Webstell card reflects the supplied founder and frontend engineer role.

Testimonials use one fictional Bengaluru sample persona and two named draft quotes awaiting approval. The generated reviewer portrait and exact prompt are documented in `IMAGE-GENERATION.md`.
