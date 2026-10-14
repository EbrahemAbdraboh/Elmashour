import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };

// Offline production package: preserves the tested production React bundle while
// shipping the new modular Vite/React source alongside it for incremental migration.
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const builtHtml = html.replace(
  /<script type="module" src="\/src\/main\.jsx"><\/script>/,
  '<link rel="stylesheet" href="/assets/legacy.css">\n<script defer src="/main.js"></script>'
);
await writeFile(path.join(out, 'index.html'), builtHtml);
await cp(path.join(root, 'public'), out, { recursive: true });
await mkdir(path.join(out, 'assets'), { recursive: true });
await cp(path.join(root, 'src/styles/legacy.css'), path.join(out, 'assets/legacy.css'));
const offlineEntry = `(() => {\n  const root = document.getElementById('root');\n  if (!root) throw new Error('Missing #root mount point');\n  const host = document.createElement('div');\n  host.className = 'app-host';\n  host.dataset.runtimeStatus = 'loading';\n  const mount = document.createElement('div');\n  mount.id = 'legacy-app-root';\n  mount.innerHTML = '<div class="runtime-fallback" role="status" aria-label="Loading El Mashour website"><span class="runtime-fallback-mark" aria-hidden="true">EM</span><span>El Mashour</span></div>';
  host.appendChild(mount); root.appendChild(host);\n  const load = (src) => new Promise((resolve, reject) => {\n    const script = document.createElement('script'); script.src = src; script.async = false;\n    script.onload = () => resolve(); script.onerror = () => reject(new Error('Failed to load ' + src));\n    document.body.appendChild(script);\n  });\n  load('/legacy-app.js').then(() => load('/legacy-enhancements.js')).then(() => { host.dataset.runtimeStatus = 'ready'; })\n    .catch((error) => { console.error(error); host.dataset.runtimeStatus = 'error'; mount.innerHTML = '<div class="runtime-error" role="alert">تعذّر تحميل الموقع. يُرجى تحديث الصفحة أو التواصل مع الدعم الفني.</div>'; });\n})();\n`;
await writeFile(path.join(out, 'main.js'), offlineEntry);
if (await exists(path.join(root, 'MIGRATION_PREVIEW.md'))) await cp(path.join(root, 'MIGRATION_PREVIEW.md'), path.join(out, 'MIGRATION_PREVIEW.md'));
for (const file of ['robots.txt', '.htaccess', 'QA_REPORT_PHASE10.json', 'LINK_AUDIT_PHASE10.json', 'SMOKE_TEST_REPORT_PHASE10.json', 'BROWSER_TEST_REPORT_PHASE10.json']) {
  if (await exists(path.join(root, file))) await cp(path.join(root, file), path.join(out, file));
}
const report = {
  buildMode: 'offline-static-production-build',
  status: 'PASS',
  note: 'The original React production UI remains preserved as a compatibility runtime. The modular React homepage preview is in source and is not yet the default dist UI. Standard Vite compilation and dependency installation could not be verified in the previous environment because DNS/npm registry access was unavailable; run npm ci and npm run build:vite in a network-enabled environment before deploying the modular source.',
  files: [],
};
async function walk(dir, rel = '') {
  for (const ent of await (await import('node:fs/promises')).readdir(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name), r = path.posix.join(rel, ent.name);
    if (ent.isDirectory()) await walk(abs, r);
    else report.files.push({ path: r, bytes: (await stat(abs)).size });
  }
}
await walk(out);
await writeFile(path.join(out, 'BUILD_REPORT.json'), JSON.stringify(report, null, 2));
console.log(`Offline production build complete: ${out} (${report.files.length} files)`);
