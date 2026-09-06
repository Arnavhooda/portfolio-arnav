# Interactive portfolio

This checkout continues Arnav Hooda’s portfolio from `afd38fc` on the isolated `codex/portfolio-3d` branch. The original checkout contains the newer Playground Project and remains separate.

## Experience

- Three.js scene with a metallic knot, geometric core, and orbital system. Drag with a mouse, or rotate/reset with keyboard-accessible buttons.
- Automatic rotation and floating satellites; pauses rendering outside the viewport and in hidden tabs.
- A global animation toggle and system reduced-motion support.
- Filterable projects, accessible case-study dialogs, subtle card tilt, and scroll entrance animations.
- Floating section navigation, reading progress, résumé download, and email copying with a failure message.
- The existing portrait appears if 3D cannot initialize. Portfolio content remains usable independently of WebGL.

## Development

Run `npm install`, then `npm run dev`. Build with `npm run build`.

Validation completed: `npx tsc --noEmit`, `npx oxlint app/page.tsx components/neural-scene.tsx components/portfolio-experience.tsx`, and the production build. Browser interaction testing has not been performed.

## Publishing

The inherited `.openai/hosting.json` currently refers to the site that now hosts the public Playground Project. Do not deploy this checkout there without the user selecting that destination. The user has been asked whether to create a separate private portfolio site or replace the public Playground site. Source has not been uploaded to either destination.
