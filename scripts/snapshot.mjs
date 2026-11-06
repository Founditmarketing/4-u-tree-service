// Prerender for Google: this repo ships only the compiled app (public/assets), not its source,
// so pages are rendered in a headless browser and saved as static HTML per route.
// Each saved page = the SPA shell + that route's rendered markup inside #root + its own
// title/description/canonical. The app's createRoot() replaces the markup on load, so
// visitors see exactly the same site as before.
//
// Run after any change to public/assets or the routes below:
//   PLAYWRIGHT=/path/to/node_modules/playwright node scripts/snapshot.mjs
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pages, SITE } from './pages.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
const shell = fs.readFileSync(path.join(root, 'scripts', 'spa-shell.html'), 'utf8');
const pw = process.env.PLAYWRIGHT ? pathToFileURL(path.join(process.env.PLAYWRIGHT, 'index.mjs')).href : 'playwright';
const { chromium } = await import(pw);

const types = { '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = path.join(pub, p);
  if (p !== '/' && fs.existsSync(file) && fs.statSync(file).isFile()) {
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
    return fs.createReadStream(file).pipe(res);
  }
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(shell);
});
await new Promise((r) => server.listen(0, r));
const base = `http://127.0.0.1:${server.address().port}`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const browser = await chromium.launch(process.env.CHROME_CHANNEL ? { channel: process.env.CHROME_CHANNEL } : {});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
// The quote-form script only wires up forms in the browser; keep it out of the snapshot.
await page.route('**/lead-form-v*.js', (r) => r.abort());
let failed = 0;
for (const [route, meta] of Object.entries(pages)) {
  try {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForSelector('#root > *');
    // let entrance animations settle, then scroll so in-view content renders
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(800);
    let html = await page.$eval('#root', (el) => el.innerHTML);
    html = html.replace(/opacity:\s*0(?![.\d])/g, 'opacity: 1');
    const url = SITE + (route === '/' ? '/' : route);
    const t = esc(meta.title), d = esc(meta.description);
    let out = shell
      .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>\n    <link rel="canonical" href="${url}" />`)
      .replace(/(<meta name="title" content=")[^"]*/, `$1${t}`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${t}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${d}`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    const file = route === '/' ? path.join(pub, 'index.html') : path.join(pub, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, out);
    console.log(route, out.length);
  } catch (e) { failed++; console.error('snapshot failed', route, e.message); }
}
await browser.close();
server.close();
if (failed) process.exit(1);
