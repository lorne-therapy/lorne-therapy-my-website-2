import type { FaqItem } from '../components/shared';
import { site, fullAddress } from '../site';

/* Homepage FAQ: logistics only. Voice is refined in Step 2. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'What do sessions cost?',
    answer:
      'Individual sessions are $250 and couples sessions are $300, both 55 minutes. Extended 90-minute (double) sessions are $500 for individuals or couples. The first 15-minute phone consultation is free.',
  },
  {
    question: 'Do you take insurance?',
    answer:
      'Sessions booked directly through DEPTH are private pay. If your plan has out-of-network benefits, each month I provide a superbill, an itemized receipt with the diagnosis and service codes insurers ask for, that you can submit for possible reimbursement. If you would prefer to use insurance, we can talk through your options during the free consultation.',
  },
  {
    question: 'How does out-of-network reimbursement work?',
    answer:
      'If your plan includes out-of-network mental health benefits (common with PPO plans), you pay for sessions directly, submit the monthly superbill, and your insurer reimburses part of the fee once any deductible is met. Calling your insurer and asking about "out-of-network outpatient mental health benefits" will tell you your deductible and reimbursement rate. I\'m glad to walk you through it during the consultation.',
  },
  {
    question: 'Do you offer in-person sessions or telehealth?',
    answer: `Both. I see clients in person at my Los Feliz office (${fullAddress}) and by secure video for clients located anywhere in California.`,
  },
  {
    question: 'What is a Good Faith Estimate?',
    answer:
      'If you are paying privately rather than using insurance, you have the right to a written estimate of expected charges before services begin, and I provide one at the start of our work.',
    link: { href: '/good-faith-estimate/', label: 'Read the full notice.' },
  },
];

export const couplesFaqs: FaqItem[] = [
  {
    question: 'Do both partners need to attend every session?',
    answer:
      'Couples therapy is fundamentally relational work, so the vast majority of sessions are conducted together. During the initial assessment phase, I typically schedule one individual session with each partner to gather personal history, after which ongoing work is conducted together as a couple.',
  },
  {
    question: 'What if my partner is skeptical or reluctant about therapy?',
    answer:
      "It is very common for one partner to feel hesitant or worried about being blamed. My role is never to take sides or declare who is 'right.' The client in the room is the relationship itself, and I make sure both partners feel equally heard, respected, and supported from day one.",
  },
  {
    question: 'How long does couples therapy typically take?',
    answer:
      "Every couple's situation is unique, but meaningful de-escalation often occurs within the first 8 to 12 sessions. Many couples choose to continue for 6 to 12 months to do deeper attachment repair and build long-term resilience.",
  },
  {
    question: 'Can couples therapy help if there has been an affair or infidelity?',
    answer:
      'Yes. Rebuilding after betrayal is challenging, but structured couples therapy provides a contained, secure space to process grief and hurt, establish transparency, understand what made the relationship vulnerable, and gradually restore trust.',
  },
  {
    question: 'Are sessions held in person or online?',
    answer: `I offer in-person couples sessions at my Los Feliz office (${fullAddress}), as well as secure telehealth sessions for couples located anywhere in California.`,
  },
  {
    question: 'How do fees and out-of-network reimbursement work?',
    answer: `Couples sessions are $300 for 55 minutes, and extended 90-minute (double) sessions are $500. ${site.insuranceStatement}`,
  },
];

export const traumaFaqs: FaqItem[] = [
  {
    question: 'What is EMDR therapy?',
    answer:
      'EMDR is a structured psychotherapy approach used to work with distressing experiences and the emotions, beliefs, and body responses connected to them. In my practice, EMDR is integrated with relational, attachment, somatic, mindfulness, and depth-oriented psychotherapy depending on your needs.',
  },
  {
    question: 'Do I need a PTSD diagnosis to work on trauma?',
    answer:
      'No. People seek trauma-focused therapy for many reasons, including difficult childhood experiences, attachment wounds, betrayal, recurring relationship patterns, emotional neglect, or events that still feel active in the present.',
  },
  {
    question: 'Do you use EMDR in every session?',
    answer:
      'No. EMDR is one part of a broader treatment approach. Whether and when it is used depends on your goals, history, readiness, and what is clinically appropriate.',
  },
  {
    question: 'Can EMDR and trauma therapy be done online?',
    answer: `Secure telehealth is available to clients located anywhere in California, and in-person sessions are available at my Los Feliz office (${fullAddress}). Whether a particular intervention suits telehealth is something we can discuss during the consultation.`,
  },
  {
    question: 'How much is individual therapy?',
    answer: `Individual sessions are $250 for 55 minutes. Extended 90-minute (double) sessions, which can be helpful for EMDR processing, are $500. ${site.insuranceStatement} The first 15-minute consultation is free.`,
  },
];
