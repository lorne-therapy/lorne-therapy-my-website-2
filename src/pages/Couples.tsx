import { ArrowRight } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import { ConsultationCTA, Eyebrow, Faq, GoodFaithLine, RatesTable, Scheduler } from '../components/shared';
import { couplesFaqs } from '../content/faqs';
import { site } from '../site';

const commonChallenges = [
  {
    title: 'The Same Argument on Repeat',
    desc: 'Getting stuck in recurring, exhausting loops where small triggers rapidly spiral into familiar gridlock and hurt feelings.',
  },
  {
    title: 'Loss of Intimacy & Connection',
    desc: 'Feeling more like roommates or co-parents than lovers, wondering where the mutual curiosity, warmth, and physical spark went.',
  },
  {
    title: 'Rebuilding Trust After Betrayal',
    desc: 'Navigating the painful aftermath of infidelity, emotional affairs, hidden behaviors, or broken promises with structured guidance.',
  },
  {
    title: 'Communication Shutdowns',
    desc: 'When one partner pursues with criticism or frustration while the other withdraws into silence, defensiveness, or stonewalling.',
  },
  {
    title: 'Major Life Transitions & Strain',
    desc: 'Managing the intense relational pressure of welcoming a new baby, career shifts, blending families, or evolving life phases.',
  },
  {
    title: 'Deepening an Existing Partnership',
    desc: 'Proactively strengthening emotional vulnerability, communication, and shared values through premarital or enrichment therapy.',
  },
];

const modalities = [
  {
    title: 'Relational Gestalt',
    tagline: 'The Foundation · Here-and-Now Contact',
    desc: 'Grounds the work in what is happening between you in the moment, bringing unspoken patterns into the room where they can be seen, felt, and changed.',
  },
  {
    title: 'The Gottman Method',
    tagline: 'Research-Based De-escalation',
    desc: 'Disarms harmful conflict styles (criticism, contempt, defensiveness, stonewalling) while systematically building friendship and shared meaning.',
  },
  {
    title: 'Somatic Emotional Processing',
    tagline: 'Attachment-Informed · Body-Centered',
    desc: 'Helps each partner notice fight-or-flight activation in real time, feel what lives underneath anger or withdrawal, and reach for each other with clarity.',
  },
  {
    title: 'Relational Psychodynamic',
    tagline: 'Unconscious Blueprints',
    desc: 'Explores how family-of-origin experiences and past hurts unconsciously shape relational expectations, defenses, and triggers.',
  },
];

const processSteps = [
  {
    title: 'Relational & Attachment Assessment',
    desc: "We begin with a comprehensive joint session followed by individual history sessions to understand each partner's perspective, relationship history, and recurring conflict cycles.",
  },
  {
    title: 'De-escalating the Negative Cycle',
    desc: 'We map your unique conflict dance in real time during sessions. Partners learn to recognize when their nervous systems are triggered and step off the defensive escalator.',
  },
  {
    title: 'Vulnerable Reconnection & Repair',
    desc: 'As emotional safety returns, I guide direct, vulnerable conversations about underlying attachment needs, fears, and desires, creating authentic moments of repair and intimacy.',
  },
  {
    title: 'Integration & Long-Term Resilience',
    desc: 'We consolidate new relational habits, shared rituals of connection, and repair strategies so your relationship can thrive with lasting vitality and mutual trust.',
  },
];

export default function Couples() {
  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current="couples" consultHref="#schedule" />

      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
              Los Feliz, Los Angeles &amp; Telehealth California
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 lg:min-h-[100dvh]">
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
              <Eyebrow className="mb-6 md:mb-8">Couples Therapy &amp; Relationship Counseling · Los Feliz</Eyebrow>

              <h1 className="reveal font-serif text-[11vw] sm:text-5xl md:text-7xl lg:text-[90px] leading-[0.95] tracking-tight font-light">
                Moving Beyond <br />
                <span className="italic text-[var(--color-olive-700)] block ml-4 md:ml-6 lg:ml-8">the Surface of Conflict</span>
              </h1>

              <p className="reveal reveal-delay-1 mt-8 lg:mt-10 max-w-lg text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                Depth-oriented couples therapy in Los Angeles for partners seeking to break repetitive conflict cycles,
                heal attachment wounds, and cultivate intimacy, trust, and mutual understanding.
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-12 flex flex-wrap items-center gap-8">
                <ConsultationCTA location="couples_hero" href="#schedule" label="Request a Free Consultation" />
                <a
                  href="#approach"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/70 hover:text-[var(--color-stone-900)] transition-colors"
                >
                  Explore My Approach
                </a>
              </div>

              <p className="mt-8 text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-[var(--color-stone-800)]/60">
                $300 / 55 min &nbsp;·&nbsp; 90-min double sessions &nbsp;·&nbsp; Gottman Method Trained
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[45vh] lg:h-[80vh] w-full flex justify-center items-center">
              <div className="reveal-scale w-full max-w-[360px] sm:max-w-[420px] h-full max-h-[580px] aspect-[2/3] oval-mask vertical-ellipse-mask overflow-hidden relative shadow-2xl">
                <img
                  src="/couples-heart-hands.jpeg"
                  alt="Two silhouettes facing each other in warm window light"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <Eyebrow className="mb-8">01 — The Experience</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                You can love each other deeply and still feel{' '}
                <span className="italic text-[var(--color-olive-700)]">profoundly disconnected.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                <p>
                  Most couples don&apos;t struggle because they lack love; they struggle because they get caught in
                  entrenched defensive patterns that leave both partners feeling misunderstood, exhausted, or alone.
                </p>
                <p>
                  When the same disagreements repeat or silence replaces closeness, therapy offers a safe space to slow
                  down, understand what is really happening beneath the reactivity, and chart a new path forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className="py-16 md:py-20 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-10">
              <Eyebrow className="mb-2">Common Dynamics</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">What Brings Couples to Therapy</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-7 md:gap-y-8 list-none p-0 m-0">
              {commonChallenges.map((c) => (
                <li key={c.title} className="flex items-start gap-4 text-left">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-[var(--color-olive-700)] shrink-0" aria-hidden="true" />
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl lg:text-[22px] font-medium text-[var(--color-stone-900)] leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-sm md:text-[14.5px] leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                      {c.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/couples-therapy-seating.jpeg"
                  alt="A calm, comfortable therapy room with a sofa and leather armchair"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <Eyebrow className="mb-8">02 — My Approach</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                A Relational, <span className="italic text-[var(--color-olive-700)]">Depth-Oriented</span> Approach
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                <p>
                  Lasting change rarely comes from memorizing communication scripts or surface-level conflict hacks. When
                  emotions run high, intellect takes a back seat to our nervous system and unconscious defenses.
                </p>
                <p>
                  In our work together, we look at the underlying attachment wounds, emotional patterns, and protective
                  strategies that keep you stuck. My work is anchored in Relational Gestalt and informed by the Gottman
                  Method and attachment-informed somatic emotional processing. By bringing awareness to these dynamics in
                  real time, we create the conditions for authentic repair, mutual empathy, and enduring security.
                </p>
                <div className="pt-4">
                  <a
                    href="#schedule"
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Begin Clinical Engagement</span>
                    <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section id="modalities" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <Eyebrow className="mb-2">Clinical Foundation</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">Core Frameworks &amp; Modalities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-stone-900)]/20">
              {modalities.map((m, i) => (
                <div
                  key={m.title}
                  className="group border-b lg:border-b-0 border-[var(--color-stone-900)]/20 lg:border-r last:border-r-0 p-8 md:p-10 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/50 mb-12">0{i + 1}</div>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-[var(--color-olive-700)] font-medium mb-4">
                    {m.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">03 — The Process</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-6">
                How We Work <br />
                <span className="italic text-[var(--color-olive-700)]">Together</span>
              </h2>
              <p className="text-sm text-[var(--color-stone-800)]/80 font-light leading-relaxed mb-8">
                A structured, clinical path from reactive conflict to collaborative, lasting intimacy.
              </p>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <ol className="md:col-span-8 space-y-12 list-none p-0 m-0">
              {processSteps.map((step, i) => (
                <li key={step.title} className="border-b border-[var(--color-stone-900)]/10 pb-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <span className="font-serif text-3xl text-[var(--color-olive-700)]/80 shrink-0" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-light mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Therapist */}
        <section id="therapist" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={site.therapist.portrait}
                  alt="Lorne Lieberman, LMFT, couples therapist in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <Eyebrow className="mb-8">04 — The Therapist</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                Meet Lorne Lieberman, <span className="italic text-[var(--color-olive-700)]">LMFT</span>
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light">
                <p>
                  I work with couples who are ready to look honestly at their dynamic and do the meaningful work of
                  reconnecting. My approach is warm, active, and grounded, creating a supportive, non-judgmental space where
                  both partners feel equally seen, challenged, and supported.
                </p>
                <p>
                  Whether you are in crisis, navigating a pivotal transition, or simply longing for greater emotional and
                  physical intimacy, we will work collaboratively to build a relationship that feels secure, vital, and
                  deeply fulfilling.
                </p>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[var(--color-stone-800)]/75">
                  LMFT #{site.license.number} · Gottman Method Trained (2025) · Relational Gestalt Trained · EMDR Trained (EMDRIA-Approved)
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <a
                    href="/#about"
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Read Full Background</span>
                    <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#schedule"
                    className="text-xs tracking-[0.15em] uppercase text-[var(--color-olive-700)] font-medium hover:underline"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Eyebrow className="mb-4">Questions &amp; Clarity</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl font-light">
                Frequently Asked <span className="italic text-[var(--color-olive-700)]">Questions</span>
              </h2>
            </div>
            <Faq items={couplesFaqs} analyticsKey="couples" />
          </div>
        </section>

        {/* Rates */}
        <section id="rates" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">05 — Investment &amp; Details</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                  Session Fees &amp; <span className="italic text-[var(--color-olive-700)]">Practice Details</span>
                </h2>
                <RatesTable services={['Couples Therapy', 'Extended Double Session', 'Initial Phone Consultation']} />
                <div className="mt-12 text-sm leading-relaxed text-[var(--color-stone-800)]/85 font-light space-y-4">
                  <p>
                    Couples sessions are 55 minutes, with 90-minute double sessions available for deeper relational
                    work. Sessions take place in person at my Los Feliz office or by secure telehealth anywhere in
                    California.
                  </p>
                  <p>{site.insuranceStatement}</p>
                  <GoodFaithLine />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Eyebrow className="mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">Consultation</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
              Request a <span className="italic text-[var(--color-olive-700)]">Consultation</span>
            </h2>
            <p className="max-w-xl mx-auto text-center text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/85 font-light mb-6">
              Select a time for a complimentary 15-minute phone consultation to discuss what you and your partner are
              experiencing and whether working together is the right fit.
            </p>
            <p className="text-sm text-[var(--color-stone-800)]/80 mb-12">
              Prefer to talk first? Call{' '}
              <a href={`tel:${site.phone.tel}`} className="underline underline-offset-2">
                {site.phone.display}
              </a>
              .
            </p>
            <Scheduler title="Schedule a free couples therapy consultation with Lorne Lieberman, LMFT" />
          </div>
        </section>
      </main>

      <SiteFooter consultHref="#schedule" showHomeLink />
    </div>
  );
}
