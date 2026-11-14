import type { ReactNode } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { site } from '../site';
import { trackEvent } from '../lib/analytics';

/* ───────────────────────── Crisis notice ───────────────────────── */

export function CrisisNotice({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <aside
      aria-label="Crisis support"
      className={`text-sm leading-relaxed border-l-2 pl-4 ${
        dark
          ? 'border-[var(--color-stone-50)]/40 text-[var(--color-stone-50)]/85'
          : 'border-[var(--color-olive-700)] text-[var(--color-stone-800)]'
      }`}
    >
      If you&rsquo;re in crisis or thinking about suicide, call or text{' '}
      <a href="tel:988" className="font-semibold underline underline-offset-2">
        988
      </a>{' '}
      (Suicide &amp; Crisis Lifeline) or call{' '}
      <a href="tel:911" className="font-semibold underline underline-offset-2">
        911
      </a>
      . Messages sent through this site aren&rsquo;t monitored for emergencies.
    </aside>
  );
}

/* ─────────────────────── Consultation button ─────────────────────── */

export function ConsultationCTA({
  location,
  href = '/contact/',
  light = false,
  compact = false,
  label = 'Schedule a Free 15-Min Consultation',
}: {
  location: string;
  href?: string;
  light?: boolean;
  compact?: boolean;
  label?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => trackEvent('consultation_cta_click', { cta_location: location, destination: href })}
      className={`group inline-flex items-center justify-center gap-4 text-xs tracking-[0.15em] uppercase transition-all duration-300 font-medium ${
        compact ? 'px-6 py-3' : 'px-8 py-4'
      } ${
        light
          ? 'bg-[var(--color-stone-50)] text-[var(--color-stone-900)] hover:bg-[var(--color-olive-700)] hover:text-white'
          : 'bg-[var(--color-olive-700)] text-white hover:bg-[var(--color-olive-800)]'
      }`}
    >
      <span>{label}</span>
      <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

/* ───────────────────────── Scheduler embed ───────────────────────── */

export function Scheduler({ title = 'Schedule a free consultation with Lorne Lieberman, LMFT' }: { title?: string }) {
  return (
    <div className="w-full bg-white border border-[var(--color-stone-900)]/5 rounded-2xl overflow-hidden h-[750px] relative shadow-sm ring-1 ring-black/5 ring-inset">
      <div className="absolute inset-0 flex items-center justify-center -z-10" aria-hidden="true">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--color-stone-900)]/10 border-t-[var(--color-olive-700)] animate-spin" />
      </div>
      <iframe
        src={site.schedulerUrl}
        style={{ border: 0 }}
        width="100%"
        height="100%"
        loading="lazy"
        className="w-full h-full absolute inset-0 z-10"
        title={title}
        onLoad={() => trackEvent('scheduler_iframe_load', { scheduler_provider: 'google_calendar' })}
      />
    </div>
  );
}

/* ───────────────────────── Rates table ───────────────────────── */

export function RatesTable({ services }: { services?: string[] }) {
  const rows = services ? site.rates.filter((r) => services.includes(r.service)) : site.rates;
  return (
    <div className="space-y-9">
      {rows.map((r) => (
        <div
          key={r.service}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 border-b border-[var(--color-stone-900)]/10 pb-4"
        >
          <span className="text-sm tracking-wide uppercase">
            {r.service} <span className="text-[var(--color-stone-800)]/60 normal-case tracking-normal">· {r.duration}</span>
          </span>
          <span className="font-serif text-2xl">{r.price}</span>
        </div>
      ))}
    </div>
  );
}

export function GoodFaithLine() {
  return (
    <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/75">
      If you&rsquo;re not using insurance, you have the right to receive a{' '}
      <a href="/good-faith-estimate/" className="underline underline-offset-2 hover:text-[var(--color-stone-900)]">
        Good Faith Estimate
      </a>{' '}
      of expected charges.
    </p>
  );
}

/* ───────────────────────── FAQ (crawlable, no JS needed) ───────────────────────── */

export type FaqItem = { question: string; answer: string; link?: { href: string; label: string } };

export function Faq({ items, analyticsKey }: { items: FaqItem[]; analyticsKey?: string }) {
  return (
    <div className="divide-y divide-[var(--color-stone-900)]/10">
      {items.map((faq, index) => (
        <details
          key={faq.question}
          className="group py-6"
          open={index === 0}
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open && analyticsKey) {
              trackEvent('faq_open', { faq_set: analyticsKey, faq_index: index + 1 });
            }
          }}
        >
          <summary className="w-full flex justify-between items-center text-left py-2 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-xl md:text-2xl font-light text-[var(--color-stone-900)] group-hover:text-[var(--color-olive-700)] transition-colors pr-6">
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className="text-[var(--color-stone-800)]/50 transition-transform duration-300 shrink-0 group-open:rotate-180 group-open:text-[var(--color-olive-700)]"
            />
          </summary>
          <p className="pt-4 text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light pr-6">
            {faq.answer}
            {faq.link && (
              <>
                {' '}
                <a href={faq.link.href} className="underline underline-offset-2 hover:text-[var(--color-stone-900)]">
                  {faq.link.label}
                </a>
              </>
            )}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ───────────────────────── Small layout helpers ───────────────────────── */

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/60 ${className}`}>{children}</p>
  );
}
