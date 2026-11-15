import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { ConsultationCTA, CrisisNotice, Eyebrow, Faq, GoodFaithLine, RatesTable, Scheduler } from '../components/shared';
import { traumaFaqs } from '../content/faqs';
import { trackEvent } from '../lib/analytics';
import { site } from '../site';

const focusAreas = [
  {
    title: 'Trauma & PTSD',
    desc: 'Therapy for experiences that continue to show up through fear, activation, avoidance, intrusive memories, or a persistent sense of threat.',
  },
  {
    title: 'Complex & Developmental Trauma',
    desc: 'Work with longstanding patterns shaped by chronic stress, inconsistent safety, or difficult early relational environments.',
  },
  {
    title: 'Attachment Wounds',
    desc: 'Explore how earlier relationships can shape trust, closeness, vulnerability, self-protection, and expectations of other people.',
  },
  {
    title: 'Childhood Emotional Neglect',
    desc: 'Address patterns connected to emotional absence, parentification, unmet needs, or learning to disconnect from parts of yourself.',
  },
  {
    title: 'Betrayal & Relationship Trauma',
    desc: 'Process ruptures involving infidelity, abandonment, broken trust, or other experiences that changed how safety in relationships feels.',
  },
  {
    title: 'Anxiety, Shutdown & Hypervigilance',
    desc: 'Understand nervous-system responses that can appear as over-alertness, emotional numbness, withdrawal, or reactions that feel difficult to control.',
  },
];

const modalities = [
  {
    title: 'EMDR',
    desc: 'Used when clinically appropriate to work with distressing memories, beliefs, emotions, and body responses connected to past experiences.',
  },
  {
    title: 'Relational Gestalt & Attachment Work',
    desc: 'We examine how attachment experiences shape trust, closeness, conflict, and vulnerability, working with what happens between us in the room as it happens.',
  },
  {
    title: 'Depth-Oriented Psychotherapy',
    desc: 'The work looks beneath immediate symptoms to recurring emotional meanings, defenses, unconscious expectations, and patterns that keep repeating.',
  },
  {
    title: 'Somatic Emotional Processing',
    desc: 'Attention to body-based cues and present-moment experience helps identify activation, shutdown, fear, and protective responses as they arise.',
  },
];

const processSteps = [
  {
    title: 'Understand the Pattern',
    desc: 'We begin by clarifying what is happening now, what tends to trigger it, and how earlier experiences may be shaping current emotional or relational responses.',
  },
  {
    title: 'Build Safety & Preparation',
    desc: 'Before deeper trauma processing, therapy establishes enough stability, trust, and internal resources to work at a pace that is tolerable and clinically appropriate.',
  },
  {
    title: 'Process What Remains Active',
    desc: 'EMDR may be integrated when it fits the work, alongside relational, somatic, and depth-oriented psychotherapy rather than as a one-size-fits-all protocol.',
  },
  {
    title: 'Integrate Change Into the Present',
    desc: 'The goal is not simply to understand the past, but to create more choice in how you respond, connect, set boundaries, and move through your life now.',
  },
];

export default function Trauma() {
  const seenSections = useRef(new Set<string>());

  useEffect(() => {
    trackEvent('landing_page_view', {
      landing_page: 'trauma_emdr',
      traffic_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct_or_unset',
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const name = (entry.target as HTMLElement).dataset.analyticsSection;
          if (!name || seenSections.current.has(name)) return;
          seenSections.current.add(name);
          trackEvent('section_view', { landing_page: 'trauma_emdr', section_name: name });
          if (name === 'schedule') trackEvent('scheduler_view', { scheduler_provider: 'google_calendar' });
        });
      },
      { threshold: 0.3 },
    );
    document.querySelectorAll<HTMLElement>('[data-analytics-section]').forEach((s) => observer.observe(s));


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="trauma" consultHref="#schedule" />

      <main>
        {/* Hero */}
        <section
          data-analytics-section="hero"
          className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-32 pb-16 overflow-hidden"
        >
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="vertical-text text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70">
              Los Feliz, Los Angeles &amp; Telehealth California
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
              <Eyebrow className="mb-5 md:mb-7">Trauma Therapy + EMDR · Los Feliz + Telehealth California</Eyebrow>

              <h1 className="reveal font-serif text-[11vw] sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[80px] leading-[0.98] tracking-tight font-light max-w-[900px] [text-wrap:balance]">
                When the past <br className="hidden sm:block" />
                <span className="italic text-[var(--color-olive-700)] block mt-2">still feels present.</span>
              </h1>

              <p className="reveal reveal-delay-1 mt-7 lg:mt-9 max-w-xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                Trauma and EMDR therapy in Los Feliz and across California, for PTSD, attachment wounds, and experiences
                that still shape how you feel, relate, and respond.
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
                <ConsultationCTA location="hero" href="#schedule" />
                <a
                  href="#emdr"
                  onClick={() => trackEvent('emdr_approach_click', { cta_location: 'hero' })}
                  className="self-start sm:self-auto text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/85 hover:text-[var(--color-stone-900)] transition-colors border-b border-[var(--color-stone-900)]/15 pb-1"
                >
                  Learn About EMDR
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[12px] tracking-[0.12em] uppercase font-medium text-[var(--color-stone-800)]/80">
                <span>In Person · Los Feliz</span>
                <span>Telehealth · California</span>
                <span>$250 / 55 min</span>
                <span>EMDRIA-Approved EMDR Training</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[48vh] min-h-[390px] lg:h-[76vh] lg:min-h-[560px] w-full flex justify-center items-center">
              <div className="reveal-scale w-full max-w-[420px] h-full max-h-[610px] oval-mask overflow-hidden relative shadow-xl bg-white">
                <img
                  src="/trauma-storm.webp"
                  alt="Dark storm clouds over the ocean, with the setting sun glowing beneath them at the horizon"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section
          id="experience"
          data-analytics-section="recognition"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <Eyebrow className="mb-8">01 — Trauma &amp; EMDR</Eyebrow>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-9">
                Trauma doesn&rsquo;t always <span className="italic text-[var(--color-olive-700)]">stay in the past.</span>
              </h2>
              <div className="space-y-6 max-w-2xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  It can show up as hypervigilance, shutting down, anxiety, shame, intrusive memories, or reactions that
                  feel bigger than the moment in front of you. You might understand exactly where it comes from and still
                  feel it in your body.
                </p>
                <p>
                  Together we work with what&rsquo;s still activated, and with the relationship patterns that grew up around
                  it, so the past can finally settle into the past.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section
          id="focus"
          data-analytics-section="clinical_focus"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <Eyebrow className="mb-2">Common Reasons</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">What brings people to trauma therapy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-stone-900)]/20">
              {focusAreas.map((item, i) => (
                <div
                  key={item.title}
                  className="group border-b border-r border-[var(--color-stone-900)]/20 p-8 md:p-10 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70 mb-10">0{i + 1}</div>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]/90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMDR */}
        <section
          id="emdr"
          data-analytics-section="emdr"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/kintsugi-bowl.webp"
                  alt="Close-up of a white ceramic bowl repaired with gold kintsugi lines"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 lg:pl-12">
              <Eyebrow className="mb-8">02 — EMDR Therapy in Los Angeles</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                EMDR as part of a <span className="italic text-[var(--color-olive-700)]">deeper therapeutic process.</span>
              </h2>
              <div className="space-y-6 text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  EMDR is a structured psychotherapy approach used to work with distressing experiences and the beliefs,
                  emotions, and body responses connected to them.
                </p>
                <p>
                  I don&rsquo;t use EMDR as a stand-alone procedure or a one-size-fits-all protocol. When it fits, I
                  integrate it with Relational Gestalt, attachment work, somatic emotional processing, and relational mindfulness, so we
                  work with both the memory itself and the patterns that formed around it.
                </p>
                <div className="pt-4">
                  <ConsultationCTA location="emdr_section" href="#schedule" compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section
          id="modalities"
          data-analytics-section="treatment_approach"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <Eyebrow className="mb-2">Treatment Approach</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">How Trauma &amp; EMDR Therapy Is Integrated</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-stone-900)]/20">
              {modalities.map((m, i) => (
                <div
                  key={m.title}
                  className="group border-b lg:border-b-0 border-[var(--color-stone-900)]/20 lg:border-r last:border-r-0 p-8 md:p-10 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70 mb-10">0{i + 1}</div>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]/90">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          data-analytics-section="process"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">03 — The Process</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-6">
                How Trauma Therapy <br />
                <span className="italic text-[var(--color-olive-700)]">Can Work</span>
              </h2>
              <p className="text-[15.5px] text-[var(--color-stone-800)]/90 leading-relaxed mb-8">
                A paced process that combines understanding, preparation, trauma processing, and integration.
              </p>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8 space-y-10">
              <ol className="space-y-10 list-none p-0 m-0">
                {processSteps.map((step, i) => (
                  <li key={step.title} className="border-b border-[var(--color-stone-900)]/10 pb-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                    <span className="font-serif text-3xl text-[var(--color-olive-700)]/80 shrink-0" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-light mb-3">{step.title}</h3>
                      <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Therapist */}
        <section
          id="therapist"
          data-analytics-section="therapist"
          className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lorne-portrait.webp"
                  alt="Lorne Lieberman, LMFT, trauma and EMDR therapist in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 lg:pl-12">
              <Eyebrow className="mb-8">04 — The Therapist</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                Meet Lorne Lieberman, <span className="italic text-[var(--color-olive-700)]">LMFT</span>
              </h2>
              <div className="space-y-6 text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  I work with adults through a depth-oriented, relational lens anchored in Relational Gestalt, bringing in
                  EMDR, somatic emotional processing, and relational mindfulness when they help.
                </p>
                <p>
                  I spent three years as a suicide and crisis hotline counselor, and more than a decade living as a
                  renunciate Buddhist monk. Both taught me to stay steady and present with people in their hardest moments,
                  at whatever pace you need.
                </p>
                <p className="text-[12px] tracking-[0.12em] uppercase text-[var(--color-stone-800)]/85">
                  LMFT #{site.license.number} · EMDR Trained (EMDRIA-Approved, Dec 2025) · Relational Gestalt Trained (2023) · Gottman Method
                  Trained
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <a
                    href="/#about"
                    onClick={() => trackEvent('therapist_background_click', { link_location: 'therapist_section' })}
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Read Full Background</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
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
              <Eyebrow className="mb-8">05 — Fees &amp; Details</Eyebrow>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-10">
                  Trauma &amp; EMDR Therapy <span className="italic text-[var(--color-olive-700)]">Fees</span>
                </h2>
                <RatesTable services={['Individual Therapy', 'Extended Double Session', 'Initial Phone Consultation']} />
                <div className="mt-9 text-[15.5px] leading-relaxed text-[var(--color-stone-800)] space-y-4">
                  <p>
                    Sessions are available in person at my Los Feliz office and by secure telehealth for clients located
                    anywhere in California.
                  </p>
                  <p>{site.insuranceStatement}</p>
                  <GoodFaithLine />
                </div>
                <div className="mt-9">
                  <ConsultationCTA location="rates" href="#schedule" compact />
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
              <Eyebrow className="mb-4">Trauma &amp; EMDR Therapy Questions</Eyebrow>
              <h2 className="font-serif text-4xl md:text-5xl font-light">Frequently Asked Questions</h2>
            </div>
            <Faq items={traumaFaqs} analyticsKey="trauma" />
          </div>
        </section>

        {/* Scheduler */}
        <section
          id="schedule"
          data-analytics-section="schedule"
          className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Eyebrow className="mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">
              Free 15-Minute Consultation
            </Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
              Schedule a <span className="italic text-[var(--color-olive-700)]">Consultation</span>
            </h2>
            <p className="max-w-xl mx-auto text-center text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)] mb-6">
              Choose a time for a complimentary 15-minute phone consultation to discuss what you are looking for and
              whether working together feels like a fit.
            </p>
            <p className="text-sm text-[var(--color-stone-800)]/80 mb-8">
              Prefer to talk first? Call{' '}
              <a
                href={`tel:${site.phone.tel}`}
                onClick={() => trackEvent('phone_click', { link_location: 'schedule_section' })}
                className="underline underline-offset-2"
              >
                {site.phone.display}
              </a>
              .
            </p>
            <div className="max-w-xl w-full mb-12">
              <CrisisNotice />
            </div>
            <p className="text-sm text-[var(--color-stone-800)]/80 mb-8 -mt-4">
              Prefer to tell me a little first?{' '}
              <a href="/contact/?service=trauma" className="underline underline-offset-2">
                Send a short inquiry
              </a>
              .
            </p>
            <Scheduler title="Schedule a free trauma and EMDR therapy consultation with Lorne Lieberman, LMFT" />
          </div>
        </section>
      </main>

      <SiteFooter
        consultHref="#schedule"
        showHomeLink
        ctaTitle={
          <>
            Looking for Trauma or EMDR Therapy? <br />
            <span className="italic text-[var(--color-stone-50)]/70">Schedule a free consultation.</span>
          </>
        }
        ctaDescription="Schedule a complimentary 15-minute consultation with Lorne to discuss trauma therapy, EMDR, and whether the practice is a fit."
      />
    </div>
  );
}
