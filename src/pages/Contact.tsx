import { Mail, MapPin, Phone } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import InquiryForm from '../components/InquiryForm';
import { Eyebrow, Scheduler } from '../components/shared';
import { trackEvent } from '../lib/analytics';
import { site, fullAddress, secondAddress } from '../site';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="contact" consultHref="#inquiry" />

      <main className="pt-36 md:pt-44 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow className="mb-6">Get in touch</Eyebrow>
            <h1 className="reveal font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              Let&rsquo;s see if we&rsquo;re <span className="italic text-[var(--color-olive-700)]">a good fit.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[var(--color-stone-800)]/90 font-light">
              Tell me a little about what you&rsquo;re looking for, then choose a time for a free 15-minute phone
              consultation. It takes about two minutes.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm list-none p-0">
            <li className="flex items-center gap-4 bg-white rounded-xl px-5 py-4">
              <span className="font-serif text-2xl text-[var(--color-olive-700)]">1</span> Send a short inquiry
            </li>
            <li className="flex items-center gap-4 bg-white rounded-xl px-5 py-4">
              <span className="font-serif text-2xl text-[var(--color-olive-700)]">2</span> Pick a consultation time
            </li>
          </ol>

          <section id="inquiry" aria-label="New client inquiry">
            <InquiryForm />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 text-sm">
            <a
              href={`tel:${site.phone.tel}`}
              onClick={() => trackEvent('phone_click', { link_location: 'contact_card' })}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <Phone size={18} strokeWidth={1.5} className="mt-0.5 text-[var(--color-olive-700)]" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70 mb-1">Call</span>
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
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70 mb-1">Email</span>
                {site.email}
              </span>
            </a>
            <div className="bg-white rounded-2xl p-6 flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.5} className="mt-0.5 text-[var(--color-olive-700)]" aria-hidden="true" />
              <span className="space-y-3">
                <span className="block text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70">
                  Offices · {site.address.neighborhood}
                </span>
                <a href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                  {fullAddress}
                </a>
                <a href={site.secondOffice.mapUrl} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                  {site.secondOffice.name}
                  <span className="block">{secondAddress}</span>
                </a>
              </span>
            </div>
          </div>

          <section id="schedule" aria-label="Book a consultation directly" className="mt-20">
            <div className="text-center mb-10">
              <Eyebrow className="mb-4">Already ready to talk?</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">Book a consultation directly</h2>
            </div>
            <Scheduler />
          </section>
        </div>
      </main>

      <SiteFooter consultHref="#inquiry" />
    </div>
  );
}
