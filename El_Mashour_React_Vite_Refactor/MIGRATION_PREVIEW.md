# Phase 4 — modular React component preview

The current production-compatible build remains the default and is not replaced by the reconstructed preview.

## Preview the new modular shell

1. Install project dependencies in an environment with npm registry access: `npm install`
2. Start Vite: `npm run dev`
3. Open any supported route with `?migrationPreview=1`, for example `http://localhost:5173/?migrationPreview=1` or `http://localhost:5173/spare-parts?migrationPreview=1`.
4. Use the language toggle and mobile menu to inspect the new shared React components.

This is an isolated component-preview scaffold, not a claim that the original six production pages have already been fully reconstructed. The original V28 UI remains the default until each replacement has passed visual and interaction regression checks.

Phase 6 adds hover/focus feedback and scroll-reveal transitions to the modular preview. Motion is disabled for users who enable reduced motion.
