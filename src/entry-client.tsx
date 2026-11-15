import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { pages } from './pages';
import type { PageKey } from './routes';
import { initSiteAnalytics } from './lib/analytics';
import './index.css';

const container = document.getElementById('root')!;
const key = (container.dataset.page || 'home') as PageKey;
const Page = pages[key] ?? pages.home;

const app = (
  <StrictMode>
    <Page />
  </StrictMode>
);

// Production pages are prerendered at build time, so hydrate them.
// In `vite dev` the root is empty, so render from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

initSiteAnalytics(key);
