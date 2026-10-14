# El Mashour — React + Vite Refactor (Phase 3)

Phase 3 introduces a **React host and isolated legacy-runtime bootstrap**. The source entry now mounts `App.jsx`, which loads the preserved V28 React application and its enhancements in a controlled sequence. The legacy app mount point is isolated as `#legacy-app-root`; this avoids a risky rewrite of the six live pages before visual regression testing is available.

The original authoring source was not supplied. Therefore this phase does not claim that the existing production UI has already been decomposed into six independent page components. The route catalog and bootstrap boundary are now prepared for that incremental migration.

## Quickest way to test the included build

The `dist/` folder is included in the ZIP. With Node.js 18+ installed, from this folder run:

```bash
node scripts/serve-build.mjs
```

Then open `http://127.0.0.1:4173`. The preview server supports the single-page app routes and needs no npm packages.

## Build and checks

```bash
npm run build       # offline static production build; does not require npm install
npm run qa          # source/assets/syntax checks
npm run smoke-test  # HTTP smoke tests against the generated dist
```

When npm registry access is available, install the declared dependencies and use `npm run dev` or `npm run build:vite` for the standard Vite development/build pipeline.

## Included

- `src/App.jsx` — React host for the preserved application.
- `src/legacy/loadLegacyRuntime.js` — sequential script loader with timeout and error handling.
- `src/config/routes.js` — canonical route catalog for the six public pages.
- `src/main.jsx` — single React/Vite entry point.
- `src/styles/legacy.css` — preserved visual styles plus the host's loading/error states.
- `public/legacy-app.js` — production React application bundle, with 30 embedded image data URLs externalized and its mount point isolated.
- `public/legacy-enhancements.js` — preserved post-render enhancements.
- `public/assets/` — extracted images and partner logos.
- `dist/` — runnable static production build.
- `QA_REPORT_PHASE3.json`, `SMOKE_TEST_REPORT.json`, `BROWSER_TEST_REPORT.json` — test reports.
- `.htaccess`, `robots.txt`, `QA_REPORT_V28.txt` — deployment/support files from the supplied baseline.

## Verification results and limits

- Source/assets/syntax QA: 14 checks passed.
- HTTP smoke tests: 15 checks passed.
- ZIP integrity and required build files are checked before delivery.
- npm registry DNS was unavailable in this environment, so a standard Vite build could not be executed here. The included `dist/` was produced by the offline builder from the preserved production bundle.
- Headless Chromium could not start even for `about:blank` before timing out in this environment. Browser-rendered visual regression is therefore **blocked, not passed**. The source package and reports state this explicitly.

## One-click launchers

- macOS/Linux: run `./START_PREVIEW.command` (or `sh START_PREVIEW.command`).
- Windows: double-click `START_PREVIEW.bat`.

A current Node.js installation is required. No `npm install` is needed to preview the included `dist/` build.


## Phase 4 modular component preview

The new source modules are in `src/components/`, `src/pages/`, and `src/i18n/siteContent.js`. To inspect the reconstructed shared shell without changing the default production-compatible interface, install dependencies and run Vite, then add `?migrationPreview=1` to any supported route. Details are in `MIGRATION_PREVIEW.md`. The included `dist/` remains the offline production-compatible V28 build until the component preview is verified against the original in a browser.


## Phase 7 — homepage motion and interaction
- The modular homepage now uses intersection-based reveal transitions for the hero, content sections, cards and CTA.
- Cards, navigation, buttons and links have subtle hover/focus feedback; motion respects `prefers-reduced-motion`.
- Motion is implemented without adding a third-party animation dependency.
- These effects apply to the isolated modular preview (`?migrationPreview=1`). The default production-compatible `dist` still preserves the original V28 runtime until the modular UI passes a standard dependency install/build and browser validation.
- Run `npm run qa`, `npm run audit:links`, `npm run build`, and `npm run smoke-test` before packaging.

## Phase 8 update — Spare parts preview
The isolated React preview now includes a bilingual spare-parts inquiry section with broad categories, illustrative imagery, responsive layouts and compatibility-check guidance. These cards are inquiry categories, not a verified SKU catalog or stock listing.

Validation recorded for Phase 8:
- Source QA: 33/33 passed.
- Static link/asset audit: 4/4 passed.
- Offline static build: 47 files generated.
- HTTP smoke tests: 17/17 passed.
- Browser visual QA and standard Vite build: blocked by the current environment; see `BROWSER_TEST_REPORT_PHASE8.json`.

The `dist/` output still preserves the original V28 compatibility runtime. The new React preview remains isolated and is not production-promoted.


### Phase 9 update
The migration preview now includes a dedicated bilingual Services page. Portfolio remains intentionally generic until the owner supplies real project images and project details. The offline `npm run build` preserves the existing production-compatible site; it does not mean the modular React preview is the default production UI. Run `npm run qa`, `npm run audit:links`, `npm run build`, and `npm run smoke-test`. Standard Vite compilation and browser-level visual testing are still release gates.
\n\nPhase 10: About and Contact pages added in bilingual modular preview. See `PHASE10_NOTES.md` and QA reports.\n