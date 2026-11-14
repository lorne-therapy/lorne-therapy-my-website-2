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
    message: '', // TODO: entry ID for "Anything you would like me to know?" (not in the pre-filled link yet)
    ackPrivatePay: '2101989631',
    ackEmergency: '1910770532',
  } as Record<string, string>,
  /** Exact checkbox text from the Google Form's two acknowledgment questions. */
  ackText: {
    ackPrivatePay:
      'I understand sessions booked directly are private pay ($250 individual, $300 couples, $500 90-minute extended session), and that superbills are available for out-of-network plans.',
    ackEmergency:
      "I understand this form isn’t monitored for emergencies. If I am in a crisis I'll call or text 988, or call 911.",
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
    { label: 'Family therapy', value: 'Family' },
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
    { label: 'Mornings', value: 'Morning' },
    { label: 'Afternoons', value: 'Afternoons' },
    { label: 'Evenings', value: 'Evenings' },
  ],
  source: [
    { label: 'Google search', value: 'Google search' },
    { label: 'Psychology Today', value: 'Psychology Today' },
    { label: 'Word of mouth (friend or family)', value: 'Word of mouth' },
    { label: 'Professional referral', value: 'Professional referral' },
    { label: 'Other', value: 'Other' },
  ],
};

/** ?service=… on /contact/ preselects a service (used by the landing pages). */
export const serviceFromQuery: Record<string, string> = {
  individual: 'Individual therapy',
  couples: 'Couples therapy',
  trauma: 'Trauma focus / EMDR',
  family: 'Family',
};
