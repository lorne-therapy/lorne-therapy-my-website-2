import { site } from '../site';
import type { FaqItem } from '../components/shared';

const PRACTICE_ID = `${site.url}/#practice`;
const PERSON_ID = `${site.url}/#lorne`;
const WEBSITE_ID = `${site.url}/#website`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

export function practiceSchema() {
  return {
    '@type': 'MedicalBusiness',
    '@id': PRACTICE_ID,
    name: site.brandName,
    alternateName: [...site.formerNames],
    legalName: site.legalName,
    description:
      'Private-pay depth psychotherapy, couples therapy, and trauma and EMDR therapy in Los Feliz, Los Angeles, with secure telehealth throughout California. Led by Lorne Lieberman, LMFT.',
    url: `${site.url}/`,
    telephone: site.phone.schema,
    email: site.email,
    image: `${site.url}/og-image.jpg`,
    priceRange: '$250–$500',
    currenciesAccepted: 'USD',
    address: postalAddress,
    hasMap: site.googleBusinessUrl,
    location: [
      { '@type': 'Place', name: `${site.brandName}, Los Feliz`, address: postalAddress },
      {
        '@type': 'Place',
        name: site.secondOffice.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.secondOffice.street,
          addressLocality: site.secondOffice.city,
          addressRegion: site.secondOffice.region,
          postalCode: site.secondOffice.postalCode,
          addressCountry: site.secondOffice.country,
        },
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Los Feliz, Los Angeles, CA' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'State', name: 'California' },
    ],
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Individual psychotherapy' },
      { '@type': 'MedicalTherapy', name: 'Couples therapy', url: `${site.url}/couples-therapy/` },
      { '@type': 'MedicalTherapy', name: 'Trauma therapy and EMDR', url: `${site.url}/trauma-emdr-therapy/` },
      { '@type': 'MedicalTherapy', name: 'Therapy for artists and entertainment professionals', url: `${site.url}/therapy-for-creatives/` },
      { '@type': 'MedicalTherapy', name: 'Telehealth psychotherapy (California)' },
    ],
    makesOffer: site.rates
      .filter((r) => r.priceValue > 0)
      .map((r) => ({
        '@type': 'Offer',
        name: `${r.service} (${r.duration})`,
        price: r.priceValue,
        priceCurrency: 'USD',
      })),
  };
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.therapist.name,
    honorificSuffix: site.therapist.credential,
    jobTitle: site.therapist.jobTitle,
    image: `${site.url}${site.therapist.portrait}`,
    worksFor: { '@id': PRACTICE_ID },
    workLocation: { '@id': PRACTICE_ID },
    address: postalAddress,
    telephone: site.phone.schema,
    email: site.email,
    url: `${site.url}/#about`,
    knowsAbout: [
      'Depth psychotherapy',
      'Relational Gestalt therapy',
      'Relational psychoanalysis',
      'EMDR therapy',
      'Trauma therapy',
      'Couples therapy',
      'Gottman Method',
      'Attachment-informed somatic emotional processing',
      'Relational mindfulness',
      'Buddhist psychology and mindfulness',
      'Therapy for artists and entertainment professionals',
    ],
    alumniOf: site.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    hasCredential: [
      ...site.education.map((e) => ({
        '@type': 'EducationalOccupationalCredential',
        name: `${e.degree} (${e.year})`,
        credentialCategory: 'degree',
        recognizedBy: { '@type': 'CollegeOrUniversity', name: e.school },
      })),
      ...site.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.detail && c.category !== 'license' ? `${c.label} (${c.detail})` : c.label,
      credentialCategory: c.category,
      ...(c.category === 'license'
        ? {
            identifier: `${site.license.type} ${site.license.number}`,
            recognizedBy: { '@type': 'Organization', name: site.license.board, url: site.license.boardUrl },
          }
        : {}),
      })),
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.brandName,
    publisher: { '@id': PRACTICE_ID },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceSchema(opts: { name: string; path: string; description: string; serviceType: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { '@id': PRACTICE_ID },
    areaServed: { '@type': 'State', name: 'California' },
  };
}

/** Wraps nodes in a single @graph document. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
