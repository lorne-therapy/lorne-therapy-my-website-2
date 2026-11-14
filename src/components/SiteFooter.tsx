import type { ReactNode } from 'react';
import { site, fullAddress } from '../site';
import { trackEvent } from '../lib/analytics';
import { ConsultationCTA, CrisisNotice } from './shared';

export default function SiteFooter({
  ctaTitle,
  ctaDescription = 'Accepting a limited number of new clients for long-term individual and couples therapy.',
  consultHref = '/contact/',
  showHomeLink = false,
}: {
  ctaTitle?: ReactNode;
  ctaDescription?: string;
  consultHref?: string;
  showHomeLink?: boolean;
}) {
  return (
    <footer className="bg-[var(--color-stone-900)] text-[var(--color-stone-50)]">
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
              {ctaTitle ?? (
                <>
                  Ready to <br />
                  <span className="italic text-[var(--color-stone-50)]/70">begin?</span>
                </>
              )}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-stone-50)]/75 max-w-md leading-relaxed mb-10">
              {ctaDescription}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <ConsultationCTA location="footer" href={consultHref} light />
              {showHomeLink && (
                <a
                  href="/"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-50)]/75 hover:text-white transition-colors"
                >
                  Return to Main Practice
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-col md:items-end md:text-right text-sm text-[var(--color-stone-50)]/80 space-y-5">
            <div className="space-y-1">
              <p className="uppercase tracking-[0.3em] font-medium text-white">{site.brandName}</p>
              <p className="text-white/90">
                {site.therapist.name}, {site.therapist.credential}
              </p>
            </div>

            <ul className="space-y-1 text-[13px] text-[var(--color-stone-50)]/75" aria-label="Credentials">
              {site.credentials.map((c) => (
                <li key={c.label}>
                  {c.label}
                  {c.detail && c.category !== 'license' ? ` (${c.detail})` : ''}
                </li>
              ))}
            </ul>

            <address className="not-italic space-y-1">
              <p className="text-white/90">In person in {site.address.neighborhood}</p>
              <a
                href={site.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                {fullAddress}
              </a>
              <p>Secure telehealth throughout California</p>
              <a
                href={`tel:${site.phone.tel}`}
                onClick={() => trackEvent('phone_click', { link_location: 'footer' })}
                className="block pt-2 hover:text-white"
              >
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                onClick={() => trackEvent('email_click', { link_location: 'footer' })}
                className="block hover:text-white"
              >
                {site.email}
              </a>
            </address>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto border-t border-[var(--color-stone-50)]/15 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <CrisisNotice tone="dark" />

          <div className="text-xs leading-relaxed text-[var(--color-stone-50)]/65 space-y-2 md:text-right">
            <p>
              {site.brandName} · {site.legalName} · {site.license.state} License {site.license.type} #
              {site.license.number} (
              <a
                href={site.license.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                verify license
              </a>
              )
            </p>
            <p>
              {site.brandName} is a practice of {site.legalName}, dba {site.dba}.
            </p>
            <p className="space-x-4">
              <a href="/good-faith-estimate/" className="underline underline-offset-2 hover:text-white">
                Good Faith Estimate notice
              </a>
              <a href="/privacy/" className="underline underline-offset-2 hover:text-white">
                Privacy
              </a>
              {site.clientPortalUrl && (
                <a
                  href={site.clientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Client Portal
                </a>
              )}
            </p>
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} {site.legalName}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
