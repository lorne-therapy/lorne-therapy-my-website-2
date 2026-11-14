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
  {
    id: 'creatives',
    title: siteContent.service4Title,
    desc: siteContent.service4Description,
    href: '/therapy-for-creatives/',
    cta: 'Explore Creatives',
    dedicated: true,
  },
];

const bodyText = 'text-[15px] md:text-base leading-relaxed text-[var(--color-stone-800)]/90 font-light';

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
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-16 xl:pl-20">
              <Eyebrow className="mb-6 md:mb-8">{siteContent.heroEyebrow}</Eyebrow>
              <h1 className="reveal font-serif text-[10.5vw] sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[1.02] tracking-tight font-light [text-wrap:balance]">
                {siteContent.heroTitleLine1}{' '}
                <span className="italic text-[var(--color-olive-700)] block">{siteContent.heroTitleLine2}</span>
              </h1>

              <p className="reveal reveal-delay-1 mt-8 lg:mt-10 max-w-lg text-base md:text-lg leading-relaxed text-[var(--color-stone-800)]/90 font-light">
                {siteContent.heroDescription}
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
                <ConsultationCTA location="hero" href={siteContent.heroCtaUrl} label={siteContent.heroCtaText} />
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/75 hover:text-[var(--color-stone-900)] border-b border-[var(--color-stone-900)]/15 pb-1 self-start sm:self-auto"
                >
                  Or call {site.phone.display}
                </a>
              </div>
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

        {/* Who I work with */}
        <section id="who" className="py-28 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <Eyebrow className="mb-8">{siteContent.whoLabel}</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">{siteContent.whoTitle}</h2>
              <p className={`${bodyText} max-w-2xl mb-10`}>{siteContent.whoIntro}</p>
              <p className="text-xs tracking-[0.18em] uppercase text-[var(--color-olive-700)] font-medium mb-6">
                {siteContent.whoListLabel}
              </p>
              <ul className="space-y-5 list-none p-0 m-0 max-w-2xl">
                {siteContent.whoList.map((item) => (
                  <li key={item} className={`flex items-start gap-4 ${bodyText}`}>
                    <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-[var(--color-olive-700)] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Fit */}
        <section id="fit" className="py-24 md:py-28 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <Eyebrow className="mb-4">{siteContent.fitLabel}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-12">{siteContent.fitTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="bg-white rounded-2xl p-8 md:p-10">
                <h3 className="font-serif text-2xl font-light mb-6">{siteContent.fitYesLabel}</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {siteContent.fitYesList.map((item) => (
                    <li key={item} className={`flex items-start gap-3 ${bodyText}`}>
                      <span className="text-[var(--color-olive-700)] font-medium" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-8 md:p-10 border border-[var(--color-stone-900)]/15">
                <h3 className="font-serif text-2xl font-light mb-6">{siteContent.fitNoLabel}</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  {siteContent.fitNoList.map((item) => (
                    <li key={item} className={`flex items-start gap-3 ${bodyText}`}>
                      <span className="text-[var(--color-stone-800)]/50" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <ConsultationCTA location="fit" compact label="See if we're a fit" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I work */}
        <section id="approach" className="py-28 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <Eyebrow className="mb-8">{siteContent.approachLabel}</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-10">
                <span className="italic text-[var(--color-olive-700)]">{siteContent.approachTitle}</span>
              </h2>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 ${bodyText}`}>
                <p>{siteContent.approachParagraph1}</p>
                <p>{siteContent.approachParagraph2}</p>
              </div>
              <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-[var(--color-stone-900)]/15 list-none p-0 m-0">
                {siteContent.approachPillars.map((pillar, i) => (
                  <li
                    key={pillar}
                    className="py-6 sm:pr-6 border-b sm:border-b-0 border-[var(--color-stone-900)]/10 font-serif text-xl md:text-2xl font-light"
                  >
                    <span className="block text-[10px] font-sans tracking-[0.2em] text-[var(--color-stone-800)]/50 mb-3">0{i + 1}</span>
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-28 md:py-32 px-6 md:px-12 bg-[var(--color-stone-50)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-28">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <img
                  src={site.therapist.portrait}
                  alt="Lorne Lieberman, LMFT, psychotherapist in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8">
              <Eyebrow className="mb-8">{siteContent.aboutLabel}</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                {siteContent.aboutTitleLine1}{' '}
                <span className="italic text-[var(--color-olive-700)]">{siteContent.aboutTitleLine2}</span>
              </h2>
              <div className={`space-y-6 ${bodyText}`}>
                <p>{siteContent.aboutParagraph1}</p>
                <p>{siteContent.aboutParagraph2}</p>
                <p>{siteContent.aboutParagraph3}</p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[var(--color-stone-900)]/15 pt-8">
                <div>
                  <h3 className="text-xs tracking-[0.18em] uppercase text-[var(--color-olive-700)] font-medium mb-4">
                    License &amp; Training
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-stone-800)]/90 list-none p-0 m-0">
                    {site.credentials.map((c) => (
                      <li key={c.label}>
                        {c.label}
                        <span className="text-[var(--color-stone-800)]/65">{c.detail ? ` · ${c.detail}` : ''}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.18em] uppercase text-[var(--color-olive-700)] font-medium mb-4">
                    Education &amp; Experience
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-stone-800)]/90 list-none p-0 m-0">
                    {site.education.map((e) => (
                      <li key={e.degree}>
                        {e.degree}
                        <span className="block text-[var(--color-stone-800)]/65">
                          {e.school}, {e.year}
                        </span>
                      </li>
                    ))}
                    {site.experience.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-28 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <Eyebrow>{siteContent.clinicalFocusLabel}</Eyebrow>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[var(--color-stone-900)]/20 border-y border-[var(--color-stone-900)]/20">
              {services.map((service, i) => (
                <a
                  key={service.id}
                  id={service.id}
                  href={service.href}
                  className="group bg-[var(--color-stone-100)] p-8 md:p-10 hover:bg-white transition-colors duration-500 flex flex-col justify-between"
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
                    <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/85">{service.desc}</p>
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
        <section id="rates" className="py-28 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
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
                <div className={`mt-12 space-y-4 ${bodyText}`}>
                  <p>{siteContent.ratesDescription1}</p>
                  <p>{siteContent.ratesDescription2}</p>
                </div>

                <div id="out-of-network" className="mt-12 bg-[var(--color-stone-100)] rounded-2xl p-8 md:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-light mb-8">{siteContent.oonTitle}</h3>
                  <ol className="space-y-6 list-none p-0 m-0">
                    {siteContent.oonSteps.map((step, i) => (
                      <li key={step.title} className="flex gap-5">
                        <span className="font-serif text-2xl text-[var(--color-olive-700)] shrink-0 w-6" aria-hidden="true">
                          {i + 1}
                        </span>
                        <p className={bodyText}>
                          <strong className="font-medium text-[var(--color-stone-900)]">{step.title}</strong> {step.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-8 text-sm leading-relaxed text-[var(--color-stone-800)]/80">{siteContent.oonNote}</p>
                </div>

                <div className="mt-8">
                  <GoodFaithLine />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-28 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow className="mb-4">{siteContent.faqLabel}</Eyebrow>
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
