/**
 * New-client inquiry form → Google Form "DEPTH Therapy - New Client Inquiry" in the practice's
 * Google Workspace (covered by the Google BAA). Responses land in the linked Google Sheet.
 *
 * IMPORTANT: for choice questions, each `value` below must match the Google Form's answer text
 * EXACTLY (spelling, capitals, punctuation). If you edit an answer in the Google Form, edit the
 * matching value here too, or Google will silently reject submissions.
 *
 * Entry IDs come from the Google Form's ⋮ → "Get pre-filled link".
 */
export const inquiryConfig = {
  googleFormId: '1FAIpQLSftzY_I_PDR2vOFzZ5WCT_Sm_IRyr_ohlBwtj5Bj9odK-WkEA',
  entries: {
    name: '996385382',
    email: '353447015',
    phone: '800380029',
    contactMethod: '1728405382',
    service: '1944276568',
    format: '1411250903',
    california: '1197849476',
    availability: '1669364679',
    insurance: '354813597',
    source: '1165187547',
    message: '1982145974',
    ackPrivatePay: '2101989631',
    ackEmergency: '442060339',
  } as Record<string, string>,
  /** Both acknowledgment questions in the Google Form have a single checkbox answer: "Acknowledged". */
  ackText: {
    ackPrivatePay: 'Acknowledged',
    ackEmergency: 'Acknowledged',
  },
};

export type InquiryOption = { label: string; value: string };

/** label = what visitors see on the website; value = exact Google Form answer text. */
export const inquiryOptions: Record<string, InquiryOption[]> = {
  contactMethod: [
    { label: 'Email', value: 'Email' },
    { label: 'Phone call', value: 'Phone call' },
    { label: 'Text message', value: 'Text Message' },
  ],
  service: [
    { label: 'Individual therapy', value: 'Individual therapy' },
    { label: 'Couples therapy', value: 'Couples therapy' },
    { label: 'Trauma & EMDR', value: 'Trauma focus / EMDR' },
    { label: 'Family therapy', value: 'Family therapy' },
    { label: 'Not sure yet', value: 'Not sure' },
  ],
  format: [
    { label: 'In person (Los Feliz)', value: 'In person (Los Feliz)' },
    { label: 'Telehealth (Zoom)', value: 'Telehealth (Zoom)' },
    { label: 'Either', value: 'Either' },
  ],
  california: [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ],
  availability: [
    { label: 'Weekdays', value: 'Weekdays' },
    { label: 'Weekends', value: 'Weekends' },
    { label: 'Mornings', value: 'Mornings' },
    { label: 'Afternoons', value: 'Afternoons' },
    { label: 'Evenings', value: 'Evenings' },
  ],
  // "How did you hear about me?" is a dropdown in the Google Form: each value must exist there EXACTLY.
  source: [
    { label: 'Google search', value: 'Google search' },
    { label: 'Google Maps', value: 'Google Maps' },
    { label: 'Psychology Today', value: 'Psychology Today' },
    { label: 'Word of mouth (friend or family)', value: 'Word of mouth (friend or family)' },
    { label: 'Referral from a therapist or doctor', value: 'Referral from a therapist or doctor' },
    { label: 'ChatGPT or another AI assistant', value: 'ChatGPT or another AI assistant' },
    { label: 'Instagram', value: 'Instagram' },
    { label: 'YouTube', value: 'YouTube' },
    { label: 'TikTok', value: 'TikTok' },
    { label: 'Podcast, article, or interview', value: 'Podcast, article, or interview' },
    { label: 'Other', value: 'Other' },
  ],
};

/** ?service=… on /contact/ preselects a service (used by the landing pages). */
export const serviceFromQuery: Record<string, string> = {
  individual: 'Individual therapy',
  couples: 'Couples therapy',
  trauma: 'Trauma focus / EMDR',
  creatives: 'Individual therapy',
  family: 'Family therapy',
};
