/**
 * Build-time prerendering (static site generation).
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle):
 *   1. renders every route in src/routes.ts to HTML with React,
 *   2. injects that HTML plus per-page <head> tags into dist/<route>/index.html,
 *   3. writes dist/sitemap.xml.
 *
 * Search engines and AI assistants then receive full page content
 * without running JavaScript; the browser hydrates the same markup.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, site } = await import(pathToFileURL(serverEntry).href);

let failures = 0;
for (const route of routes) {
  const file = path.join(dist, route.template);
  if (!fs.existsSync(file)) {
    console.error(`✗ missing built template: ${route.template}`);
    failures++;
    continue;
  }
  const template = fs.readFileSync(file, 'utf8');
  if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
    console.error(`✗ placeholders not found in ${route.template}`);
    failures++;
    continue;
  }
  const { head, html } = render(route);
  const out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  fs.writeFileSync(file, out);
  console.log(`✓ ${route.path.padEnd(24)} ${(out.length / 1024).toFixed(1)} KB`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => r.inSitemap)
  .map(
    (r) =>
      `  <url>\n    <loc>${site.url}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n` +
      (r.priority != null ? `    <priority>${r.priority.toFixed(1)}</priority>\n` : '') +
      `  </url>`,
  )
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log('✓ sitemap.xml');

if (failures) {
  console.error(`Prerender finished with ${failures} error(s).`);
  process.exit(1);
}
