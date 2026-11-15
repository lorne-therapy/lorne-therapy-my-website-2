import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { pages } from './pages';
import { routes, type RouteDef } from './routes';
import { renderHead } from './seo/head';
import { site } from './site';

export { routes, site };

/** Renders one route to { head, html } for scripts/prerender.mjs. */
export function render(route: RouteDef) {
  const Page = pages[route.key];
  const html = renderToString(
    <StrictMode>
      <Page />
    </StrictMode>,
  );
  return { head: renderHead(route), html };
}
