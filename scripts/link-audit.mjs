import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const results=[];
const add=(name,ok,detail='')=>results.push({name,result:ok?'PASS':'FAIL',detail});
const routes=['/','/about','/portfolio','/spare-parts','/services','/contact'];
const files=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()){if(e.name==='node_modules'||e.name==='dist')continue;await walk(p)}else if(/\.(jsx?|html|css)$/.test(e.name))files.push(p)}}
await walk(path.join(root,'src')); files.push(path.join(root,'index.html'));
const missingInternal=[], badExternal=[], missingAssets=[], unsafeTargets=[], links=[];
for(const file of files){const src=await readFile(file,'utf8');
 for(const m of src.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)){const url=m[1]; links.push({file:path.relative(root,file),url});
  if(url.startsWith('/')&&!url.startsWith('//')){const pathname=url.split(/[?#]/)[0]; if(pathname.startsWith('/assets/')){try{await stat(path.join(root,'public',pathname.slice(1)))}catch{try{await stat(path.join(root,'src',pathname.slice(1)))}catch{missingAssets.push(`${path.relative(root,file)} -> ${url}`)}}}else if(pathname==='/'||routes.includes(pathname)){}else if(!pathname.startsWith('/api/') && !pathname.startsWith('/src/'))missingInternal.push(`${path.relative(root,file)} -> ${url}`)}
  if(/^https?:/.test(url)){try{const u=new URL(url);if(!u.hostname.includes('.'))badExternal.push(`${path.relative(root,file)} -> ${url}`)}catch{badExternal.push(`${path.relative(root,file)} -> ${url}`)}}
 }
 if(/target\s*=\s*["']_blank["']/.test(src)&&!/(rel\s*=\s*["'][^"']*(?:noopener|noreferrer))/.test(src))unsafeTargets.push(path.relative(root,file));
}
add('all internal navigation paths map to declared routes',missingInternal.length===0,missingInternal.length?missingInternal.join('; '):`${routes.length} declared routes; ${links.length} literal href/src references inspected`);
add('all local asset references resolve',missingAssets.length===0,missingAssets.length?missingAssets.join('; '):'No missing local asset references found');
add('external URLs are syntactically valid',badExternal.length===0,badExternal.length?badExternal.join('; '):'External URLs parse correctly');
add('new-tab links include noopener/noreferrer protection',unsafeTargets.length===0,unsafeTargets.length?unsafeTargets.join('; '):'No unsafe target=_blank patterns detected');
const report={createdAt:new Date().toISOString(),scope:'Static source/link audit. External destination availability is not inferred from URL syntax.',checks:results,summary:{passed:results.filter(x=>x.result==='PASS').length,failed:results.filter(x=>x.result==='FAIL').length,linksInspected:links.length}};
await writeFile(path.join(root,'LINK_AUDIT_PHASE10.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(report.summary.failed)process.exitCode=1;
