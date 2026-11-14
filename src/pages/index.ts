import type { ComponentType } from 'react';
import type { PageKey } from '../routes';
import Home from './Home';
import Couples from './Couples';
import Trauma from './Trauma';
import Contact from './Contact';
import GoodFaithEstimate from './GoodFaithEstimate';
import Privacy from './Privacy';
import NotFound from './NotFound';

export const pages: Record<PageKey, ComponentType> = {
  home: Home,
  couples: Couples,
  trauma: Trauma,
  contact: Contact,
  gfe: GoodFaithEstimate,
  privacy: Privacy,
  notfound: NotFound,
};
