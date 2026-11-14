import { Mail, MapPin, Phone } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { CrisisNotice, Eyebrow, Scheduler } from '../components/shared';
import { trackEvent } from '../lib/analytics';
import { site, fullAddress } from '../site';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="contact" consultHref="#schedule" />

      <main className="pt-36 md:pt-44 pb-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow className="mb-6">Free 15-Minute Consultation</Eyebrow>
            <h1 className="reveal font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Request a <span className="italic text-[var(--color-olive-700)]">Consultation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light">
              Choose a time for a complimentary phone consultation to talk about what you&rsquo;re looking for and whether
              working together feels like a good fit. You&rsquo;re also welcome to call or email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-sm">
            <a
              href={`tel:${site.phone.tel}`}
              onClick={() => trackEvent('phone_click', { link_location: 'contact_card' })}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <Phone size={18} strokeWidth={1.5} className="mt-0.5 text-[var(--color-olive-700)]" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/60 mb-1">Call</span>
                {site.phone.display}
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() => trackEvent('email_click', { link_location: 'contact_card' })}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <Mail size={18} strokeWidth={1.5} className="mt-0.5 text-[var(--color-olive-700)]" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/60 mb-1">Email</span>
                {site.email}
              </span>
            </a>
            <a
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 text-[var(--color-olive-700)]" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/60 mb-1">
                  Office · {site.address.neighborhood}
                </span>
                {fullAddress}
              </span>
            </a>
          </div>

          <p className="text-center text-xs text-[var(--color-stone-800)]/70 max-w-2xl mx-auto mb-10">
            Please don&rsquo;t include personal health details in email or voicemail. We can talk about what brings you in
            during the consultation.
          </p>

          <div className="max-w-2xl mx-auto mb-14">
            <CrisisNotice />
          </div>

          <section id="schedule" aria-label="Book a consultation">
            <Scheduler />
          </section>
        </div>
      </main>

      <SiteFooter consultHref="#schedule" />
    </div>
  );
}
