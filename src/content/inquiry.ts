/**
 * New-client inquiry form → Google Form in the practice's Google Workspace (covered by the BAA).
 *
 * To connect: in the Google Form, make every question "Short answer" (Message = "Paragraph")
 * and turn "Required" OFF (this website does the validation). Then use ⋮ → Get pre-filled link,
 * type the field name into each question (e.g. "name", "email" …), click Get link, and copy:
 *   • the form ID from …/forms/d/e/<FORM_ID>/viewform  → googleFormId
 *   • each entry.NNNNNNN number next to its field name   → entries
 * Leave googleFormId empty to keep the form disconnected (it then asks visitors to call or email).
 */
export const inquiryConfig = {
  googleFormId: '',
  entries: {
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    service: '',
    format: '',
    california: '',
    insurance: '',
    availability: '',
    source: '',
    message: '',
    acknowledgments: '',
  } as Record<string, string>,
};

export const inquiryOptions = {
  contactMethod: ['Email', 'Phone call', 'Text message'],
  service: ['Individual therapy', 'Couples therapy', 'Trauma & EMDR', 'Not sure yet'],
  format: ['In person (Los Feliz)', 'Telehealth (Zoom)', 'Either'],
  california: ['Yes', 'No'],
  availability: ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends'],
  source: [
    'Google search',
    'AI assistant (ChatGPT, Claude, etc.)',
    'Google Maps',
    'Psychology Today or another directory',
    'Referral from a friend or colleague',
    'Referral from a health professional',
    'Instagram or social media',
    'Other',
  ],
};
