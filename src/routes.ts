import { site } from './site';
import { homeFaqs, couplesFaqs, traumaFaqs, creativesFaqs } from './content/faqs';
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  personSchema,
  practiceSchema,
  serviceSchema,
  websiteSchema,
} from './seo/schema';

export type PageKey = 'home' | 'couples' | 'trauma' | 'creatives' | 'contact' | 'gfe' | 'privacy' | 'notfound';

export interface RouteDef {
  key: PageKey;
  /** Public URL path (trailing slash, as GitHub Pages serves directories). */
  path: string;
  /** HTML template, relative to the project root (also the Vite build input). */
  template: string;
  title: string;
  description: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  inSitemap: boolean;
  priority?: number;
  jsonLd: object[];
}

const DEFAULT_OG = '/og-image.jpg';
const DEFAULT_OG_ALT = 'Depth Therapy, Lorne Lieberman, LMFT. Psychotherapy in Los Feliz, Los Angeles and telehealth across California.';

export const routes: RouteDef[] = [
  {
    key: 'home',
    path: '/',
    template: 'index.html',
    title: 'Depth Therapy | Lorne Lieberman, LMFT | Therapist in Los Feliz, Los Angeles',
    description:
      'Depth psychotherapy, couples therapy, and trauma & EMDR therapy with Lorne Lieberman, LMFT. In person on Hillhurst Ave. in Los Feliz, Los Angeles, and secure telehealth across California. Free 15-minute consultation.',
    inSitemap: true,
    priority: 1.0,
    jsonLd: [graph(practiceSchema(), personSchema(), websiteSchema(), faqSchema(homeFaqs))],
  },
  {
    key: 'couples',
    path: '/couples-therapy/',
    template: 'couples-therapy/index.html',
    title: 'Couples Therapy in Los Feliz, Los Angeles | Gottman-Trained | Depth Therapy',
    description:
      'Depth-oriented couples therapy in Los Feliz with Lorne Lieberman, LMFT: Gottman Method trained and anchored in Relational Gestalt, including conscious uncoupling for partners who are separating. In person in Los Angeles or telehealth across California.',
    ogImage: '/couples-sunset-og.jpg',
    ogImageAlt: 'A couple sitting side by side on the shore at sunset',
    inSitemap: true,
    priority: 0.9,
    jsonLd: [
      graph(
        practiceSchema(),
        personSchema(),
        serviceSchema({
          name: 'Couples Therapy',
          path: '/couples-therapy/',
          serviceType: 'Couples therapy',
          description:
            'Depth-oriented couples therapy integrating the Gottman Method and attachment-informed somatic emotional processing, anchored in Relational Gestalt.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Couples Therapy', path: '/couples-therapy/' },
        ]),
        faqSchema(couplesFaqs),
      ),
    ],
  },
  {
    key: 'trauma',
    path: '/trauma-emdr-therapy/',
    template: 'trauma-emdr-therapy/index.html',
    title: 'Trauma & EMDR Therapy in Los Feliz, Los Angeles | Depth Therapy',
    description:
      'Trauma therapy and EMDR with Lorne Lieberman, LMFT, EMDR trained through an EMDRIA-approved program. In person in Los Feliz, Los Angeles, and secure telehealth across California. Free 15-minute consultation.',
    ogImage: '/trauma-storm-og.jpg',
    ogImageAlt: 'Storm clouds over the ocean with the setting sun glowing beneath them',
    inSitemap: true,
    priority: 0.9,
    jsonLd: [
      graph(
        practiceSchema(),
        personSchema(),
        serviceSchema({
          name: 'Trauma & EMDR Therapy',
          path: '/trauma-emdr-therapy/',
          serviceType: 'Trauma therapy and EMDR',
          description:
            'Trauma-focused psychotherapy and EMDR integrated with relational, attachment, somatic, and depth-oriented work.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Trauma & EMDR Therapy', path: '/trauma-emdr-therapy/' },
        ]),
        faqSchema(traumaFaqs),
      ),
    ],
  },
  {
    key: 'creatives',
    path: '/therapy-for-creatives/',
    template: 'therapy-for-creatives/index.html',
    title: 'Therapy for Artists, Creatives & Entertainment Professionals | Los Feliz, Los Angeles | Depth Therapy',
    description:
      'Depth therapy for artists, musicians, actors, comedians, writers, directors, and crew with Lorne Lieberman, LMFT, who grew up in a Los Angeles film and TV family. In person in Los Feliz and telehealth across California.',
    ogImage: '/hollywood-hills-og.jpg',
    ogImageAlt: 'The Hollywood sign on the hills above Los Angeles at sunset',
    inSitemap: true,
    priority: 0.9,
    jsonLd: [
      graph(
        practiceSchema(),
        personSchema(),
        serviceSchema({
          name: 'Therapy for Artists, Creatives & Entertainment Professionals',
          path: '/therapy-for-creatives/',
          serviceType: 'Psychotherapy for artists and entertainment professionals',
          description:
            'Depth-oriented, existential, and relational psychotherapy for artists, performers, and entertainment-industry professionals, including identity and worth, rejection, creative block, burnout, narcissistic wounding, and relationships.',
        }),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Therapy for Creatives', path: '/therapy-for-creatives/' },
        ]),
        faqSchema(creativesFaqs),
      ),
    ],
  },
  {
    key: 'contact',
    path: '/contact/',
    template: 'contact/index.html',
    title: 'Contact & Free Consultation | Depth Therapy, Los Feliz',
    description: `Send a short inquiry and book a free 15-minute phone consultation with Lorne Lieberman, LMFT, or call ${site.phone.display}. Offices at 1708 and 2150 Hillhurst Ave., Los Feliz, Los Angeles; telehealth across California.`,
    inSitemap: true,
    priority: 0.8,
    jsonLd: [
      graph(
        practiceSchema(),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact/' },
        ]),
      ),
    ],
  },
  {
    key: 'gfe',
    path: '/good-faith-estimate/',
    template: 'good-faith-estimate/index.html',
    title: 'Good Faith Estimate Notice | Depth Therapy',
    description:
      'Your right to a Good Faith Estimate under the No Surprises Act if you are uninsured or not using insurance for therapy with Depth Therapy.',
    inSitemap: true,
    priority: 0.3,
    jsonLd: [],
  },
  {
    key: 'privacy',
    path: '/privacy/',
    template: 'privacy/index.html',
    title: 'Website Privacy Notice | Depth Therapy',
    description: 'How depth.la collects and uses information, including analytics, scheduling, and contact messages.',
    inSitemap: true,
    priority: 0.2,
    jsonLd: [],
  },
  {
    key: 'notfound',
    path: '/404.html',
    template: '404.html',
    title: 'Page Not Found | Depth Therapy',
    description: 'This page could not be found.',
    noindex: true,
    inSitemap: false,
    jsonLd: [],
  },
];

export function routeFor(key: PageKey): RouteDef {
  return routes.find((r) => r.key === key) ?? routes[0];
}

export function ogImageFor(r: RouteDef) {
  return { src: r.ogImage ?? DEFAULT_OG, alt: r.ogImageAlt ?? DEFAULT_OG_ALT };
}
