/**
 * Post-build checks (run in CI): every page must ship real, visible content,
 * valid structured data, and the SEO files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const pages = {
  'index.html': 'A Sanctuary',
  'couples-therapy/index.html': 'Moving Beyond',
  'trauma-emdr-therapy/index.html': 'Trauma &amp; EMDR Therapy',
  'contact/index.html': 'Request a',
  'good-faith-estimate/index.html': 'Good Faith Estimate',
  'privacy/index.html': 'handles your information',
  '404.html': 'be found',
};

const errors = [];
const check = (ok, msg) => {
  if (!ok) errors.push(msg);
};

for (const [file, expected] of Object.entries(pages)) {
  const p = path.join(dist, file);
  if (!fs.existsSync(p)) {
    errors.push(`${file}: missing`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*)<\/body>/);
  const body = rootMatch ? rootMatch[1] : '';

  check(!html.includes('<!--app-html-->') && !html.includes('<!--app-head-->'), `${file}: placeholders not replaced`);
  check(body.length > 2000, `${file}: prerendered body is suspiciously small (${body.length} chars)`);
  check(body.includes(expected), `${file}: expected text "${expected}" not found in prerendered HTML`);
  check(/<h1[\s>]/.test(body), `${file}: no <h1>`);
  check(!/opacity:\s*0[;"]/.test(body), `${file}: inline opacity:0 would hide text without JavaScript`);
  check(/<title>[^<]{10,}<\/title>/.test(html), `${file}: missing <title>`);
  check(/name="description"/.test(html), `${file}: missing meta description`);
  check(file === '404.html' || /rel="canonical"/.test(html), `${file}: missing canonical`);
  check(html.includes('988'), `${file}: crisis notice (988) missing`);
  check(html.includes('/good-faith-estimate/'), `${file}: Good Faith Estimate link missing`);
  check(!/picsum\.photos/.test(html), `${file}: placeholder image URL found`);
  check(!/Executive Consultation/i.test(html), `${file}: Executive Consultation still present`);
  check(!/EMDR Certified|EMDR certified/.test(html), `${file}: 'EMDR Certified' wording still present`);
  check(!/50[- ]min/.test(body), `${file}: a 50-minute session length is still listed`);
  check(!/Emotionally Focused Therapy|\bEFT\b/.test(body), `${file}: EFT still listed`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${file}: invalid JSON-LD (${e.message})`);
    }
  }
}

for (const f of ['sitemap.xml', 'robots.txt', 'llms.txt', 'favicon.svg', 'og-image.jpg', 'CNAME']) {
  check(fs.existsSync(path.join(dist, f)), `${f}: missing from dist`);
}
const sitemap = fs.existsSync(path.join(dist, 'sitemap.xml')) ? fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8') : '';
check(sitemap.includes('https://depth.la/trauma-emdr-therapy/'), 'sitemap.xml: trauma page missing');

if (errors.length) {
  console.error('Build verification failed:\n - ' + errors.join('\n - '));
  process.exit(1);
}
console.log(`✓ Build verified: ${Object.keys(pages).length} pages prerendered with content, JSON-LD valid, SEO files present.`);
