import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
const port = 4187;
const child = spawn(process.execPath, ['scripts/serve-build.mjs'], { env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
const base = `http://127.0.0.1:${port}`;
const results = [];
const record = (name, pass, detail='') => results.push({ name, result: pass ? 'PASS' : 'FAIL', detail });
try {
  let ready = false;
  for (let i=0; i<30; i++) { try { const r=await fetch(base); if (r.ok) { ready=true; break; } } catch {} await delay(250); }
  record('preview server starts', ready);
  if (!ready) throw new Error('Preview server did not start');
  const html = await (await fetch(base)).text();
  record('homepage HTML served', html.includes('<div id="root"></div>') && html.includes('application/ld+json'));
  record('production stylesheet linked', html.includes('/assets/legacy.css'));
  const entry = await (await fetch(base + '/main.js')).text();
  record('offline bootstrap loads isolated legacy mount', entry.includes('legacy-app-root') && entry.includes('/legacy-app.js') && entry.includes('/legacy-enhancements.js'));
  for (const route of ['/about','/portfolio','/spare-parts','/services','/contact']) {
    const r = await fetch(base + route); const body = await r.text();
    record(`SPA fallback ${route}`, r.status===200 && body.includes('<div id="root"></div>'), `HTTP ${r.status}`);
  }
  for (const asset of ['/main.js','/legacy-app.js','/legacy-enhancements.js','/assets/legacy.css','/assets/embedded/embedded-01.png','/assets/embedded/embedded-30.jpg','/assets/partners/01_La_Pomme.png','/robots.txt']) {
    const r=await fetch(base+asset, { method:'HEAD' });
    record(`asset ${asset}`, r.status===200, `HTTP ${r.status}; ${r.headers.get('content-type')||'no content-type'}`);
  }
} catch (e) { record('smoke test execution', false, String(e)); }
finally { child.kill('SIGTERM'); }
const report={createdAt:new Date().toISOString(),checks:results,summary:{passed:results.filter(x=>x.result==='PASS').length,failed:results.filter(x=>x.result==='FAIL').length}};
console.log(JSON.stringify(report,null,2));
await (await import('node:fs/promises')).writeFile('SMOKE_TEST_REPORT_PHASE10.json',JSON.stringify(report,null,2));
if(report.summary.failed) process.exitCode=1;
