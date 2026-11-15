import { site } from '../site';
import { ogImageFor, type RouteDef } from '../routes';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** JSON for a <script> tag: escape "<" so content can never close the tag. */
const safeJson = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c');

export function renderHead(route: RouteDef): string {
  const canonical = `${site.url}${route.path}`;
  const og = ogImageFor(route);
  const ogUrl = og.src.startsWith('http') ? og.src : `${site.url}${og.src}`;

  const tags = [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    route.noindex
      ? `<meta name="robots" content="noindex, follow" />`
      : `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta name="theme-color" content="#f5f2ed" />`,
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml" />`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`,

    // Open Graph / social previews
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.brandName)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:image" content="${esc(ogUrl)}" />`,
    `<meta property="og:image:alt" content="${esc(og.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(ogUrl)}" />`,

    // Fonts: connect early (the stylesheet itself is imported from index.css)
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,

    ...route.jsonLd.map((d) => `<script type="application/ld+json">${safeJson(d)}</script>`),

    // Old single-page-app links (depth.la/#couples-therapy etc.) → real pages
    ...(route.key === 'home'
      ? [
          `<script>(function(h){var m={'#couples-therapy':'/couples-therapy/','#trauma-emdr-therapy':'/trauma-emdr-therapy/','#schedule':'/contact/'};for(var k in m){if(h.indexOf(k)===0){location.replace(m[k]);}}})(location.hash.toLowerCase());</script>`,
        ]
      : []),

    // Google Analytics 4: no ad personalization, no Google signals
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}"></script>`,
    `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaMeasurementId}',{allow_google_signals:false,allow_ad_personalization_signals:false});</script>`,
  ];

  return tags.join('\n    ');
}
