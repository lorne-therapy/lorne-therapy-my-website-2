import { ArrowRight } from 'lucide-react';
import siteContent from '../content/data.json';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { ConsultationCTA, Eyebrow, Faq, GoodFaithLine, RatesTable } from '../components/shared';
import { homeFaqs } from '../content/faqs';
import { site } from '../site';

const services = [
  {
    id: 'individual',
    title: siteContent.service1Title,
    desc: siteContent.service1Description,
    href: '/contact/',
    cta: 'Schedule a Consultation',
    dedicated: false,
  },
  {
    id: 'couples',
    title: siteContent.service2Title,
    desc: siteContent.service2Description,
    href: '/couples-therapy/',
    cta: 'Explore Couples Therapy',
    dedicated: true,
  },
  {
    id: 'trauma',
    title: siteContent.service3Title,
    desc: siteContent.service3Description,
    href: '/trauma-emdr-therapy/',
    cta: 'Explore Trauma & EMDR',
    dedicated: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="home" />

      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
              {siteContent.heroLocationLabel}
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 lg:min-h-[100dvh]">
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
              <h1 className="reveal font-serif text-[11vw] sm:text-5xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-tight font-light">
                {siteContent.heroTitleLine1} <br />
                <span className="italic text-[var(--color-olive-700)] block ml-4 md:ml-6 lg:ml-8">
                  {siteContent.heroTitleLine2}
                </span>
              </h1>

              <p className="reveal reveal-delay-1 mt-8 lg:mt-10 max-w-md text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                {siteContent.heroDescription}
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
                <ConsultationCTA location="hero" href={siteContent.heroCtaUrl} label={siteContent.heroCtaText} />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70 hover:text-[var(--color-stone-900)] border-b border-[var(--color-stone-900)]/15 pb-1 self-start sm:self-auto"
                >
                  Or call {site.phone.display}
                </a>
              </div>

              <p className="mt-8 text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-[var(--color-stone-800)]/60">
                In person · Los Feliz &nbsp;·&nbsp; Telehealth · California
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[45vh] lg:h-[75vh] w-full flex justify-center items-center">
              <div className="reveal-scale w-full max-w-[360px] sm:max-w-[400px] h-full max-h-[580px] aspect-[2/3] oval-mask vertical-ellipse-mask overflow-hidden relative shadow-2xl">
                <img
                  src={siteContent.heroImageUrl}
                  alt={siteContent.heroImageAlt}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <Eyebrow className="mb-8">{siteContent.philosophyLabel}</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                {siteContent.philosophyTitleLine1}{' '}
                <span className="italic text-[var(--color-olive-700)]">{siteContent.philosophyTitleLine2}</span>{' '}
                {siteContent.philosophyTitleLine3}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                <p>{siteContent.philosophyDescription1}</p>
                <p>{siteContent.philosophyDescription2}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-32 px-6 md:px-12 bg-[var(--color-stone-50)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <img
                  src={site.therapist.portrait}
                  alt="Lorne Lieberman, LMFT, psychotherapist in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <Eyebrow className="mb-8">{siteContent.aboutLabel}</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                {siteContent.aboutTitleLine1}{' '}
                <span className="italic text-[var(--color-olive-700)]">{siteContent.aboutTitleLine2}</span>
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                <p>{siteContent.aboutParagraph1}</p>
                <p>{siteContent.aboutParagraph2}</p>
                <p>{siteContent.aboutParagraph3}</p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.12em] uppercase text-[var(--color-stone-800)]/75">
                {site.credentials.map((c) => (
                  <li key={c.label}>
                    {c.category === 'license' ? `${site.therapist.credential} #${site.license.number}` : c.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <Eyebrow>{siteContent.clinicalFocusLabel}</Eyebrow>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--color-stone-900)]/20">
              {services.map((service, i) => (
                <a
                  key={service.id}
                  id={service.id}
                  href={service.href}
                  className="group border-b md:border-b-0 md:border-r border-[var(--color-stone-900)]/20 last:border-r-0 p-8 md:p-12 hover:bg-white transition-colors duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/50 mb-16 flex items-center justify-between">
                      <span>0{i + 1}</span>
                      {service.dedicated && (
                        <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--color-olive-700)] font-medium">
                          Dedicated Page
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/80">{service.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[var(--color-stone-900)]/10 flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[var(--color-olive-700)] group-hover:translate-x-1 transition-all">
                    <span>{service.cta}</span>
                    <ArrowRight size={12} aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Rates */}
        <section id="rates" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">{siteContent.ratesLabel}</Eyebrow>
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                  {siteContent.ratesTitleLine1}{' '}
                  <span className="italic text-[var(--color-olive-700)]">{siteContent.ratesTitleLine2}</span>
                </h2>
                <RatesTable />
                <div className="mt-12 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light space-y-4">
                  <p>{siteContent.ratesDescription1}</p>
                  <p>{siteContent.ratesDescription2}</p>
                  <GoodFaithLine />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow className="mb-4">05 — Questions</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl font-light">
                Frequently Asked <span className="italic text-[var(--color-olive-700)]">Questions</span>
              </h2>
            </div>
            <Faq items={homeFaqs} analyticsKey="home" />
          </div>
        </section>
      </main>

      <SiteFooter
        ctaTitle={
          <>
            {siteContent.footerTitleLine1} <br />
            <span className="italic text-[var(--color-stone-50)]/70">{siteContent.footerTitleLine2}</span>
          </>
        }
        ctaDescription={siteContent.footerDescription}
      />
    </div>
  );
}
