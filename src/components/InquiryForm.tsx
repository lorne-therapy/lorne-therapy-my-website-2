import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { inquiryConfig, inquiryOptions, serviceFromQuery, type InquiryOption } from '../content/inquiry';
import { trackEvent } from '../lib/analytics';
import { site } from '../site';
import { CrisisNotice, Scheduler } from './shared';

type Values = {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  service: string;
  format: string;
  california: string;
  insurance: string;
  availability: string[];
  source: string;
  message: string;
  ackPrivatePay: boolean;
  ackEmergency: boolean;
  company: string; // honeypot: real people never see or fill this
};

const EMPTY: Values = {
  name: '',
  email: '',
  phone: '',
  contactMethod: 'Email',
  service: '',
  format: '',
  california: '',
  insurance: '',
  availability: [],
  source: '',
  message: '',
  ackPrivatePay: false,
  ackEmergency: false,
  company: '',
};

const label = 'block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/80 mb-2';
const input =
  'w-full bg-white border border-[var(--color-stone-900)]/20 rounded-lg px-4 py-3 text-base text-[var(--color-stone-900)] placeholder:text-[var(--color-stone-800)]/40 focus:outline-none focus:border-[var(--color-olive-700)] focus:ring-2 focus:ring-[var(--color-olive-700)]/20';

function Choice({
  name,
  options,
  value,
  onChange,
  type = 'radio',
  selected = [],
}: {
  name: string;
  options: InquiryOption[];
  value?: string;
  onChange: (v: string) => void;
  type?: 'radio' | 'checkbox';
  selected?: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map(({ label: optLabel, value: opt }) => {
        const checked = type === 'radio' ? value === opt : selected.includes(opt);
        return (
          <label
            key={opt}
            className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm transition-colors ${
              checked
                ? 'bg-[var(--color-olive-700)] border-[var(--color-olive-700)] text-white'
                : 'bg-white border-[var(--color-stone-900)]/20 text-[var(--color-stone-900)] hover:border-[var(--color-olive-700)]'
            }`}
          >
            <input
              type={type}
              name={name}
              value={opt}
              checked={checked}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            {optLabel}
          </label>
        );
      })}
    </div>
  );
}

function Field({ id, title, hint, required, children }: { id: string; title: string; hint?: string; required?: boolean; children: ReactNode }) {
  return (
    <fieldset id={`field-${id}`} className="min-w-0">
      <legend className={label}>
        {title}
        {required && <span className="text-[var(--color-olive-700)]"> *</span>}
      </legend>
      {hint && <p className="text-sm text-[var(--color-stone-800)]/70 -mt-1 mb-3">{hint}</p>}
      {children}
    </fieldset>
  );
}

export default function InquiryForm() {
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'unconfigured' | 'error'>('idle');
  const started = useRef(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('service');
    if (s && serviceFromQuery[s]) setV((prev) => ({ ...prev, service: serviceFromQuery[s] }));
  }, []);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    if (!started.current) {
      started.current = true;
      trackEvent('inquiry_form_start');
    }
    setV((prev) => ({ ...prev, [key]: value }));
    const errKey = key === 'ackPrivatePay' || key === 'ackEmergency' ? 'acknowledgments' : (key as string);
    setErrors((prev) => (prev.includes(errKey) ? prev.filter((x) => x !== errKey) : prev));
  };

  const toggleAvailability = (opt: string) =>
    set('availability', v.availability.includes(opt) ? v.availability.filter((a) => a !== opt) : [...v.availability, opt]);

  const validate = () => {
    const e: string[] = [];
    if (!v.name.trim()) e.push('name');
    if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.push('email');
    if (!v.format) e.push('format');
    if (!v.california) e.push('california');
    if (!v.ackPrivatePay || !v.ackEmergency) e.push('acknowledgments');
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (e.length) {
      trackEvent('inquiry_form_invalid', { missing_count: e.length });
      document.getElementById(`field-${e[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (v.company) {
      setStatus('sent'); // honeypot tripped: quietly pretend success
      return;
    }
    if (!inquiryConfig.googleFormId) {
      setStatus('unconfigured');
      return;
    }

    // Values for choice questions are the Google Form's exact answer texts (see content/inquiry.ts).
    const values: [string, string][] = [
      ['name', v.name.trim()],
      ['email', v.email.trim()],
      ['phone', v.phone.trim()],
      ['contactMethod', v.contactMethod],
      ['service', v.service],
      ['format', v.format],
      ['california', v.california],
      ...v.availability.map((a): [string, string] => ['availability', a]), // checkbox question: one entry per choice
      ['insurance', v.insurance.trim()],
      ['source', v.source],
      ['message', v.message.trim()],
      ['ackPrivatePay', inquiryConfig.ackText.ackPrivatePay],
      ['ackEmergency', inquiryConfig.ackText.ackEmergency],
    ];
    const body = new URLSearchParams();
    values.forEach(([k, val]) => {
      const entry = inquiryConfig.entries[k];
      if (entry && val) body.append(`entry.${entry}`, val);
    });

    setStatus('sending');
    try {
      await fetch(`https://docs.google.com/forms/d/e/${inquiryConfig.googleFormId}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body,
      });
      setStatus('sent');
      trackEvent('generate_lead', { lead_source: 'inquiry_form', service_interest: v.service || 'unspecified', session_format: v.format });
      setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } catch {
      setStatus('error');
      trackEvent('inquiry_form_error');
    }
  };

  const err = (key: string) => errors.includes(key);
  const errText = 'mt-2 text-sm text-[#9b2c2c]';
  const firstName = v.name.trim().split(/\s+/)[0];

  if (status === 'sent') {
    return (
      <div ref={topRef} className="scroll-mt-28 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-olive-700)] mb-4">Inquiry received</p>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-6">
          Thank you{firstName ? `, ${firstName}` : ''}. <span className="italic text-[var(--color-olive-700)]">Next, pick a time.</span>
        </h2>
        <p className="text-base leading-relaxed text-[var(--color-stone-800)]/90 font-light max-w-2xl mb-10">
          I&rsquo;ll read your note before we speak. Choose a time below for your free 15-minute phone consultation. If
          none of the times work, I&rsquo;ll follow up using your preferred contact method.
        </p>
        <Scheduler />
      </div>
    );
  }

  return (
    <div ref={topRef} className="scroll-mt-28">
    <form onSubmit={onSubmit} noValidate className="relative bg-white/60 rounded-2xl p-6 md:p-10 border border-[var(--color-stone-900)]/10 space-y-9">
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" value={v.company} onChange={(e) => set('company', e.target.value)} />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="field-name">
          <label htmlFor="inq-name" className={label}>
            Name <span className="text-[var(--color-olive-700)]">*</span>
          </label>
          <input id="inq-name" className={input} autoComplete="name" value={v.name} onChange={(e) => set('name', e.target.value)} aria-invalid={err('name')} />
          {err('name') && <p className={errText}>Please add your name.</p>}
        </div>
        <div id="field-email">
          <label htmlFor="inq-email" className={label}>
            Email <span className="text-[var(--color-olive-700)]">*</span>
          </label>
          <input id="inq-email" type="email" className={input} autoComplete="email" value={v.email} onChange={(e) => set('email', e.target.value)} aria-invalid={err('email')} />
          {err('email') && <p className={errText}>Please add a valid email address.</p>}
        </div>
        <div>
          <label htmlFor="inq-phone" className={label}>
            Phone <span className="normal-case tracking-normal text-[var(--color-stone-800)]/60">(optional)</span>
          </label>
          <input id="inq-phone" type="tel" className={input} autoComplete="tel" value={v.phone} onChange={(e) => set('phone', e.target.value)} />
        </div>
        <Field id="contactMethod" title="Best way to reach you">
          <Choice name="contactMethod" options={inquiryOptions.contactMethod} value={v.contactMethod} onChange={(o) => set('contactMethod', o)} />
        </Field>
      </div>

      <Field id="service" title="What are you looking for?">
        <Choice name="service" options={inquiryOptions.service} value={v.service} onChange={(o) => set('service', o)} />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        <Field id="format" title="Session format" required>
          <Choice name="format" options={inquiryOptions.format} value={v.format} onChange={(o) => set('format', o)} />
          {err('format') && <p className={errText}>Please choose a format.</p>}
        </Field>
        <Field id="california" title="Are you located in California?" required>
          <Choice name="california" options={inquiryOptions.california} value={v.california} onChange={(o) => set('california', o)} />
          {err('california') && <p className={errText}>Please choose one.</p>}
          {v.california === 'No' && (
            <p className="mt-3 text-sm text-[var(--color-stone-800)]/85">
              My license covers clients located in California, so telehealth is only available while you&rsquo;re in the
              state. In-person sessions in Los Feliz are open to anyone.
            </p>
          )}
        </Field>
      </div>

      <Field id="availability" title="General availability">
        <Choice name="availability" type="checkbox" options={inquiryOptions.availability} selected={v.availability} onChange={toggleAvailability} />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inq-insurance" className={label}>
            Insurance carrier <span className="normal-case tracking-normal text-[var(--color-stone-800)]/60">(optional)</span>
          </label>
          <input
            id="inq-insurance"
            className={input}
            placeholder="e.g. Aetna, Cigna, Blue Shield"
            value={v.insurance}
            onChange={(e) => set('insurance', e.target.value)}
          />
          <p className="mt-2 text-sm text-[var(--color-stone-800)]/70">Helpful if you plan to use out-of-network benefits.</p>
        </div>
        <div>
          <label htmlFor="inq-source" className={label}>
            How did you find me?
          </label>
          <select id="inq-source" className={input} value={v.source} onChange={(e) => set('source', e.target.value)}>
            <option value="">Select…</option>
            {inquiryOptions.source.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="inq-message" className={label}>
          Anything you&rsquo;d like me to know? <span className="normal-case tracking-normal text-[var(--color-stone-800)]/60">(optional)</span>
        </label>
        <textarea
          id="inq-message"
          rows={5}
          className={input}
          placeholder="A few lines is plenty. We can go into detail during the consultation."
          value={v.message}
          onChange={(e) => set('message', e.target.value)}
        />
      </div>

      <div id="field-acknowledgments" className="space-y-4">
        <label className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed text-[var(--color-stone-800)] cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--color-olive-700)]"
            checked={v.ackPrivatePay}
            onChange={(e) => set('ackPrivatePay', e.target.checked)}
          />
          <span>
            I understand that sessions booked directly are private pay ($250 individual, $300 couples, $500 for a
            90-minute extended session), and that superbills are available for out-of-network plans.{' '}
            <span className="text-[var(--color-olive-700)]">*</span>
          </span>
        </label>
        <label className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed text-[var(--color-stone-800)] cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-[var(--color-olive-700)]"
            checked={v.ackEmergency}
            onChange={(e) => set('ackEmergency', e.target.checked)}
          />
          <span>
            I understand this form is not monitored for emergencies. If I am in a crisis I will call or text 988, or call
            911. <span className="text-[var(--color-olive-700)]">*</span>
          </span>
        </label>
        {err('acknowledgments') && <p className={errText}>Please check both boxes to continue.</p>}
      </div>

      {status === 'unconfigured' && (
        <p className="rounded-lg bg-[var(--color-stone-100)] p-4 text-sm text-[var(--color-stone-800)]">
          The inquiry form is being set up. Please call{' '}
          <a href={`tel:${site.phone.tel}`} className="underline">
            {site.phone.display}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          , or book directly below.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-[#fbeaea] p-4 text-sm text-[#7a2222]">
          Something went wrong sending your inquiry. Please try again, or call {site.phone.display}.
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex items-center justify-center gap-4 px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium bg-[var(--color-olive-700)] text-white hover:bg-[var(--color-olive-800)] transition-colors disabled:opacity-60 cursor-pointer"
        >
          {status === 'sending' ? 'Sending…' : 'Send & choose a consultation time'}
          <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70 max-w-sm">
          Your answers go securely to my practice account and are never shared. See the{' '}
          <a href="/privacy/" className="underline">
            privacy notice
          </a>
          .
        </p>
      </div>

      <CrisisNotice />
    </form>
    </div>
  );
}
