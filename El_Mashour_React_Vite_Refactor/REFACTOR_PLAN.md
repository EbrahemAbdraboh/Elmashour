# El Mashour React/Vite Refactor Plan

## Phase 5 — Homepage structure and validation
- Added bilingual homepage solution cards and a contact call-to-action in the isolated modular preview.
- Pinned direct dependency versions (React 19.2.5, React DOM 19.2.5, Vite 7.1.7, @vitejs/plugin-react 5.0.4); lockfile generation remains pending due registry/DNS timeout.
- Added static link and asset audit covering internal route paths, local assets, external URL syntax and `target="_blank"` protections.
- Re-ran source QA, offline production packaging and HTTP smoke tests.
- Important: `dist/` continues to serve the preserved V28 compatibility runtime. The modular homepage is currently a development preview (`?migrationPreview=1`) and is not yet promoted to the production build.

## Validation limits
- External link URLs are syntactically valid, but live destination reachability could not be checked because DNS was unavailable.
- Chromium headless visual inspection timed out; no visual/browser pass is claimed.
- npm registry access timed out; no lockfile and no standard Vite build are claimed. Before migrating the modular preview into production, run `npm install`/`npm ci`, `npm run build:vite`, then browser tests in a network-enabled environment.

## Next phase
Reconstruct the remaining homepage content against the original V28 production UI, validate every route and interactive control in a browser, and only then decide whether to promote the new homepage to production.


## Phase 7 — Homepage structure
- Added a bilingual, three-step process section below the solution cards and above the contact CTA.
- Added responsive layouts for tablet and mobile widths, keeping existing reduced-motion support.
- Expanded automated source QA to check the process section and responsive CSS.
- Scope remains an isolated migration preview (`?migrationPreview=1`); the offline `dist` still serves the preserved V28 production runtime by design.
- Browser visual inspection and standard Vite compilation are not marked complete unless those tools run successfully in the delivery environment.

## Phase 8 — Spare-parts inquiry page
- Added a dedicated bilingual spare-parts landing section to the isolated React migration preview.
- Added three broad inquiry categories (packaging machine parts, production-line components, maintenance/support) with illustrative existing site imagery; these are not represented as verified SKU photographs or inventory listings.
- Added an explicit compatibility check note asking visitors to provide the machine model and a clear photo or part number; availability and lead time are not promised by the page.
- Added responsive desktop/tablet/mobile layouts, lazy loading for category images, and reduced-motion support.
- Automated source QA: 33/33 passed. Static link/asset audit: 4/4 passed. Offline static build: completed with 47 files. HTTP smoke test: 17/17 passed, including all six routes and key assets.
- Limitations remain: Chromium visual testing and standard Vite build are blocked in this environment. The offline `dist` intentionally remains the preserved V28 compatibility runtime; the new React page is available only in the isolated modular preview and is not yet production-promoted.


## Phase 9 — Services page (2026-10-11)
- Added bilingual service-area cards for production-line setup, packaging solutions, maintenance/spare parts, and technical consultation.
- Added responsive layouts and reduced-motion support.
- Kept claims qualified: no unverified delivery, stock, warranty, or performance guarantees.
- Validation: source QA, static link audit, offline build, and HTTP smoke tests are run for this phase.
- Remaining release blockers: standard Vite compilation and browser visual interaction test in a compatible environment.
- Portfolio imagery/content remains intentionally pending until the user supplies actual project images.
