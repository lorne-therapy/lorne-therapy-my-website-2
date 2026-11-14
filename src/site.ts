/**
 * Single source of truth for practice facts.
 * Change a fact here and it updates the nav, footer, rates tables,
 * structured data (JSON-LD), llms.txt-style summaries and every page.
 */

export const site = {
  url: 'https://depth.la',

  // Brand
  brand: 'DEPTH',
  brandName: 'DEPTH Therapy',
  brandTagline: 'Therapy · Lorne Lieberman, LMFT',

  // Legal identity (shown in the footer)
  legalName: 'Lorne Matthew Lieberman, LMFT',
  dba: 'Now Here Therapy',
  formerNames: ['Now Here Therapy', 'Depth Psychotherapy'],

  therapist: {
    name: 'Lorne Lieberman',
    fullName: 'Lorne Matthew Lieberman',
    credential: 'LMFT',
    jobTitle: 'Licensed Marriage and Family Therapist',
    portrait: '/lorne-portrait.webp',
  },

  license: {
    type: 'LMFT',
    number: '159526',
    state: 'California',
    board: 'California Board of Behavioral Sciences',
    boardUrl: 'https://www.bbs.ca.gov/',
    verifyUrl: 'https://search.dca.ca.gov/',
  },

  /** Displayed in the footer and in structured data. Edit wording here only. */
  credentials: [
    { label: 'Licensed Marriage & Family Therapist', detail: 'California LMFT #159526', category: 'license' },
    { label: 'EMDR Trained', detail: 'EMDRIA-approved, Dec 2025', category: 'training' },
    { label: 'Gottman Method Trained', detail: '2025', category: 'training' },
    { label: 'Relational Gestalt Trained', detail: '2023', category: 'training' },
  ],

  education: [
    { degree: 'M.A., Clinical Psychology', school: 'Antioch University Los Angeles', year: '2023' },
    { degree: 'B.A., Psychology, Summa Cum Laude', school: 'CUNY School of Professional Studies', year: '2020' },
  ],

  experience: ['Three years as a suicide and crisis hotline counselor'],

  phone: { display: '(323) 505-9006', tel: '+13235059006', schema: '+1-323-505-9006' },
  email: 'lorne@depth.la',

  address: {
    street: '1708 Hillhurst Ave.',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90027',
    country: 'US',
    neighborhood: 'Los Feliz',
  },
  googleBusinessUrl: 'https://share.google/sbhYfsSekA7OAcVvr',

  /** Second in-person location. */
  secondOffice: {
    name: 'Wellness Spaces Los Feliz',
    street: '2150 Hillhurst Ave.',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90027',
    country: 'US',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Wellness+Spaces+Los+Feliz+2150+Hillhurst+Ave+Los+Angeles+CA+90027',
  },

  /** Free 15-minute consultation booking (Google Calendar appointment schedule). */
  schedulerUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-BR9H8P55PMOTUWQ1EXakhptHvRCMm0JG-vjIxGP7yQtqiOYXBjulziKNF4-1TGyQcDbeCFvw?gv=true',

  /**
   * Existing-client portal. Leave empty to hide the "Client Portal" link everywhere.
   * Paste the EHR portal URL here once it is set up.
   */
  clientPortalUrl: '',

  gaMeasurementId: 'G-EX27PK75GX',

  rates: [
    { service: 'Individual Therapy', duration: '55 min', price: '$250', priceValue: 250 },
    { service: 'Couples Therapy', duration: '55 min', price: '$300', priceValue: 300 },
    { service: 'Extended Double Session', duration: '90 min', price: '$500', priceValue: 500 },
    { service: 'Initial Phone Consultation', duration: '15 min', price: 'Complimentary', priceValue: 0 },
  ],

  insuranceStatement:
    'Sessions booked directly through DEPTH are private pay. If your plan has out-of-network benefits, I provide monthly superbills you can submit for possible reimbursement. If you would prefer to use insurance, we can talk through your options during the free consultation.',

  /** Confirmed wording for the contemplative background, first and third person. */
  monkSentence:
    'I spent over a decade living as a renunciate Buddhist monk, immersed in contemplative yogic practice and daily meditation.',
  monkSentenceThirdPerson:
    'Lorne spent over a decade living as a renunciate Buddhist monk, immersed in contemplative yogic practice and daily meditation.',
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
export const secondAddress = `${site.secondOffice.street}, ${site.secondOffice.city}, ${site.secondOffice.region} ${site.secondOffice.postalCode}`;
/** Short phrase naming both offices, for running copy. */
export const officesPhrase = `my two Los Feliz offices on Hillhurst Avenue (1708 Hillhurst, and ${site.secondOffice.name} at 2150 Hillhurst)`;

export function rate(service: string) {
  return site.rates.find((r) => r.service === service);
}
