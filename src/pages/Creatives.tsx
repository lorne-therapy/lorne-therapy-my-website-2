import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { ConsultationCTA, CrisisNotice, Eyebrow, Faq, GoodFaithLine, RatesTable, Scheduler } from '../components/shared';
import { creativesFaqs } from '../content/faqs';
import { trackEvent } from '../lib/analytics';
import { site } from '../site';

const focusAreas = [
  {
    title: 'Identity & Worth',
    desc: 'Your sense of worth rises and falls with your last job, your numbers, or your next booking, and it’s hard to know who you are when the work stops.',
  },
  {
    title: 'Rejection & Criticism',
    desc: 'A pass, a review, or plain silence hits harder than it “should,” and you replay it for days. Or you’ve stopped putting work out to avoid the sting.',
  },
  {
    title: 'Lost Meaning & Creative Block',
    desc: 'You’ve lost touch with why you started. The work that used to feel alive now feels like output, and the usual ways of getting unstuck don’t work anymore.',
  },
  {
    title: 'Burnout & Uncertainty',
    desc: 'Irregular income, constant pitching, months of nothing followed by eighteen-hour days, and never quite knowing what comes next.',
  },
  {
    title: 'Narcissistic Wounding',
    desc: 'Being valued for how you perform or how you look, or living and working close to big egos, can leave deep marks: swings between grandiosity and shame, a hunger for recognition that never feels satisfied, trouble trusting your own worth. We work with these injuries directly and without judgment.',
  },
  {
    title: 'Fame, Family & Relationships',
    desc: 'Visibility, or proximity to it, can complicate trust, intimacy, and family life. Old wounds show up in how you collaborate and how you love, and schedules pull partners apart.',
  },
];

const pillars = [
  { title: 'Beneath the story', desc: 'From insight to embodied change.' },
  { title: 'The whole person', desc: 'Not just the artist, not just the career.' },
  { title: 'Engaged and direct', desc: 'I’ll challenge you when it counts.' },
];

export default function Creatives() {
  const seenSections = useRef(new Set<string>());

  useEffect(() => {
    trackEvent('landing_page_view', {
      landing_page: 'creatives',
      traffic_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct_or_unset',
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const name = (entry.target as HTMLElement).dataset.analyticsSection;
          if (!name || seenSections.current.has(name)) return;
          seenSections.current.add(name);
          trackEvent('section_view', { landing_page: 'creatives', section_name: name });
          if (name === 'schedule') trackEvent('scheduler_view', { scheduler_provider: 'google_calendar' });
        });
      },
      { threshold: 0.3 },
    );
    document.querySelectorAll<HTMLElement>('[data-analytics-section]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const body = 'text-[15px] md:text-base leading-relaxed text-[var(--color-stone-800)]/90 font-light';

  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="creatives" consultHref="#schedule" />

      <main>
        {/* Hero */}
        <section
          data-analytics-section="hero"
          className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-32 pb-16 overflow-hidden"
        >
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
              Los Feliz, Los Angeles &amp; Telehealth California
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
              <Eyebrow className="mb-5 md:mb-7">Therapy for artists, performers &amp; entertainment professionals · Los Feliz</Eyebrow>

              <h1 className="reveal font-serif text-[10.5vw] sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[1.02] tracking-tight font-light max-w-[900px] [text-wrap:balance]">
                You don&rsquo;t have to explain{' '}
                <span className="italic text-[var(--color-olive-700)] block mt-1">the industry to me.</span>
              </h1>

              <p className={`reveal reveal-delay-1 mt-7 lg:mt-9 max-w-xl ${body}`}>
                Depth therapy for artists, musicians, actors, stage performers, comedians, writers, directors, producers, editors, and crew,
                and anyone building a creative life in Los Angeles. In person in Los Feliz and by telehealth across
                California.
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
                <ConsultationCTA location="hero" href="#schedule" />
                <a
                  href="#inside"
                  className="self-start sm:self-auto text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70 hover:text-[var(--color-stone-900)] transition-colors border-b border-[var(--color-stone-900)]/15 pb-1"
                >
                  About my background
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-[var(--color-stone-800)]/65">
                <span>In Person · Los Feliz</span>
                <span>Telehealth · California</span>
                <span>$250 / 55 min</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[48vh] min-h-[390px] lg:h-[76vh] lg:min-h-[560px] w-full flex justify-center items-center">
              <div className="reveal-scale w-full max-w-[420px] h-full max-h-[610px] oval-mask overflow-hidden relative shadow-xl bg-white">
                <img
                  src="/hollywood-hills.webp"
                  alt="The Hollywood sign on the hills above Los Angeles at sunset"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* From the inside */}
        <section
          id="inside"
          data-analytics-section="background"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lorne-headshot-black.webp"
                  alt="Lorne Lieberman, LMFT, therapist for artists and entertainment professionals in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 lg:pl-12">
              <Eyebrow className="mb-8">01 — From the inside</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                I know this world <span className="italic text-[var(--color-olive-700)]">from the inside.</span>
              </h2>
              <div className={`space-y-6 ${body}`}>
                <p>
                  I grew up in a Los Angeles film and television family; my late father was a film and TV director. I grew
                  up around fame up close, and I know what it does to families. I spent half my life working in film,
                  photography, and theater, on set and behind the camera, before I became a therapist.
                </p>
                <p>
                  So I know what it&rsquo;s like when your work is your identity. Months of nothing, then eighteen-hour
                  days. The audition you replay for a week. The project that defined you, and the quiet after it wraps.
                  The pressure of being seen, and the loneliness of not being known. You won&rsquo;t spend your sessions
                  explaining how it works, so we can get straight to what&rsquo;s underneath.
                </p>
                <p>
                  Over the years I&rsquo;ve worked with writers, directors, music producers, comedians, actors, stage
                  performers, cinematographers, and editors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What brings creatives in */}
        <section
          id="focus"
          data-analytics-section="focus"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <Eyebrow className="mb-2">02 — What brings creatives to my office</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">What we work on</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-stone-900)]/20">
              {focusAreas.map((item, i) => (
                <div
                  key={item.title}
                  className="group border-b border-r border-[var(--color-stone-900)]/20 p-8 md:p-10 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/50 mb-10">0{i + 1}</div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meaning, values, voice */}
        <section
          id="meaning"
          data-analytics-section="meaning"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">03 — Meaning &amp; voice</Eyebrow>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                Finding your voice, <span className="italic text-[var(--color-olive-700)]">and living by it.</span>
              </h2>
              <div className={`space-y-6 max-w-2xl ${body}`}>
                <p>
                  Beyond symptoms, much of our work is existential and, if it speaks to you, spiritual: what gives your life
                  meaning, and whether your choices line up with what you value. We work toward integrity in the fullest
                  sense, becoming whole and aligned, so the way you live, work, and love comes from the same place.
                </p>
                <p>
                  That means learning to stay in the here and now, and to see the worth and the growth in everything you
                  face, including the setbacks. And it means cultivating your passions, your art, and your expression until
                  you find your own voice and can trust it, regardless of how it&rsquo;s received.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I work */}
        <section
          id="approach"
          data-analytics-section="approach"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">04 — How I work</Eyebrow>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                Beyond insight, <span className="italic text-[var(--color-olive-700)]">into lasting change.</span>
              </h2>
              <div className={`space-y-6 max-w-2xl ${body}`}>
                <p>
                  Creative people are often brilliant at insight. You can probably tell the story of your patterns better
                  than most therapists. But understanding why you freeze, spiral, or self-sabotage hasn&rsquo;t stopped it
                  from happening.
                </p>
                <p>
                  In our work we go beneath the story, into your body, your emotions, and what happens between us in the
                  room. That&rsquo;s where change actually takes hold. I draw on Relational Gestalt, relational
                  psychoanalysis, EMDR, and attachment-informed somatic emotional processing, along with more than a decade
                  of contemplative practice as a Buddhist monk. That practice taught me to stay steady with whatever arises,
                  including the parts of you that never make it into the work.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-stone-900)]/15 border-y border-[var(--color-stone-900)]/15">
                {pillars.map((p) => (
                  <div key={p.title} className="bg-[var(--color-stone-100)] py-6 sm:px-6 first:sm:pl-0">
                    <h3 className="font-serif text-xl mb-1">{p.title}</h3>
                    <p className="text-sm text-[var(--color-stone-800)]/80 font-light">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <ConsultationCTA location="approach" href="#schedule" compact />
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & scheduling */}
        <section
          id="privacy-scheduling"
          data-analytics-section="privacy_scheduling"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <Eyebrow className="mb-6">05 — Discretion</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight font-light mb-6">Privacy comes first.</h2>
              <p className={body}>
                Whether you&rsquo;re well known in your field or just starting out, confidentiality is the foundation of
                this work. I see clients in a private office in Los Feliz and by secure, HIPAA-compliant Zoom, and
                I&rsquo;m glad to talk through any specific privacy concerns during your consultation.
              </p>
            </div>
            <div>
              <Eyebrow className="mb-6">06 — Scheduling</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight font-light mb-6">
                Built around a creative schedule.
              </h2>
              <p className={body}>
                Creative work is rarely nine to five. I do my best to accommodate your schedule, and telehealth makes it
                easier to keep our work going through busy production stretches, as long as you&rsquo;re in California for
                the session.
              </p>
            </div>
          </div>
        </section>

        {/* Rates */}
        <section
          id="rates"
          data-analytics-section="rates"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">07 — Fees &amp; Details</Eyebrow>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-10">
                  Session <span className="italic text-[var(--color-olive-700)]">Fees</span>
                </h2>
                <RatesTable />
                <div className={`mt-9 space-y-4 ${body}`}>
                  <p>{site.insuranceStatement}</p>
                  <GoodFaithLine />
                </div>
                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <ConsultationCTA location="rates" href="#schedule" compact />
                  <a
                    href="/#about"
                    className="group inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Read my full background</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          data-analytics-section="faq"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Eyebrow className="mb-4">Therapy for Creatives</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-light">Frequently Asked Questions</h2>
            </div>
            <Faq items={creativesFaqs} analyticsKey="creatives" />
          </div>
        </section>

        {/* Scheduler */}
        <section
          id="schedule"
          data-analytics-section="schedule"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Eyebrow className="mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">
              Free 15-Minute Consultation
            </Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
              Let&rsquo;s talk about what&rsquo;s <span className="italic text-[var(--color-olive-700)]">underneath the work.</span>
            </h2>
            <p className="max-w-xl mx-auto text-center text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light mb-6">
              Choose a time for a complimentary 15-minute phone consultation to talk about what you&rsquo;re looking for
              and whether working together feels like a fit.
            </p>
            <p className="text-sm text-[var(--color-stone-800)]/80 mb-8 text-center">
              Prefer to talk first? Call{' '}
              <a
                href={`tel:${site.phone.tel}`}
                onClick={() => trackEvent('phone_click', { link_location: 'schedule_section' })}
                className="underline underline-offset-2"
              >
                {site.phone.display}
              </a>
              , or{' '}
              <a href="/contact/?service=creatives" className="underline underline-offset-2">
                send a short inquiry
              </a>
              .
            </p>
            <div className="max-w-xl w-full mb-12">
              <CrisisNotice />
            </div>
            <Scheduler title="Schedule a free consultation with Lorne Lieberman, LMFT" />
          </div>
        </section>
      </main>

      <SiteFooter
        consultHref="#schedule"
        showHomeLink
        ctaTitle={
          <>
            Your work is personal. <br />
            <span className="italic text-[var(--color-stone-50)]/70">Your therapy should be too.</span>
          </>
        }
        ctaDescription="Schedule a complimentary 15-minute consultation with Lorne to talk about what you're looking for and whether the practice is a fit."
      />
    </div>
  );
}
