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
    title: 'Unspoken Needs',
    desc: 'Each of you expects the other to just know what you need and show up that way, without ever working it out together. When they don’t, it feels like proof they don’t care.',
  },
  {
    title: 'Blame & Walking on Eggshells',
    desc: 'Conversations turn into blame, or one partner pursues while the other shuts down. You edit yourself to avoid setting off your partner’s reactions, and resentment builds quietly.',
  },
  {
    title: 'Stalled Intimacy & Sex',
    desc: 'Feeling more like roommates or co-parents than lovers. Desire has gone quiet, or become a source of tension instead of closeness.',
  },
  {
    title: 'Losing Yourself in the Relationship',
    desc: 'Your mood rises and falls with your partner’s, you over-function or people-please to keep the peace, and your own needs keep slipping out of view.',
  },
  {
    title: 'Rebuilding Trust After Betrayal',
    desc: 'Navigating the painful aftermath of infidelity, emotional affairs, hidden behaviors, or broken promises with structured guidance.',
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

const practices = [
  {
    title: 'Name it, don’t blame it',
    desc: 'Saying “I’m hurt” or “I’m scared” instead of “You always…”. Naming your emotional response rather than holding your partner responsible for it.',
  },
  {
    title: 'Own your reactions',
    desc: 'Taking accountability for your own responses, even when your partner’s behavior set them off, and holding grace for the best in each other.',
  },
  {
    title: 'Stay with the hard feelings',
    desc: 'The heart of the work: learning to feel, express, and stay with the emotions you’d rather not have, without acting them out or shutting down.',
  },
  {
    title: 'Drop the story, find the need',
    desc: 'Coming back to the here and now, letting go of the narrative about who did what, and getting to the need underneath it all.',
  },
  {
    title: 'Clear boundaries, open communication',
    desc: 'Staying grounded, respectful, open, and transparent, and holding boundaries, spoken and unspoken, with yourself and each other.',
  },
  {
    title: 'Advocate for yourself',
    desc: 'Asking clearly for what you need and supporting yourself, instead of waiting to be read or losing yourself in your partner.',
  },
];

const modalities = [
  {
    title: 'Relational Gestalt',
    tagline: 'The Foundation · Here-and-Now Contact',
    desc: 'Grounds the work in what is happening between you in the moment, bringing unspoken patterns into the room where they can be seen, felt, and changed.',
  },
  {
    title: 'Relational Mindfulness',
    tagline: 'Present-Moment Awareness, Together',
    desc: 'Staying present and noting what is arising, dropping the narrative, stepping out of interpretation, and checking your assumptions about each other.',
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
      <SiteNav current="couples" consultHref="/contact/?service=couples" />

      <main>
        {/* Hero */}
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
            <div className="vertical-text text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70">
              Los Feliz, Los Angeles &amp; Telehealth California
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 lg:min-h-[100dvh]">
            <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
              <Eyebrow className="mb-6 md:mb-8">Couples Therapy &amp; Relationship Counseling · Los Feliz</Eyebrow>

              <h1 className="reveal font-serif text-[10vw] sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[64px] 2xl:text-[72px] leading-[1.02] tracking-tight font-light max-w-[900px] [text-wrap:balance]">
                When the same fight keeps happening,{' '}
                <span className="italic text-[var(--color-olive-700)] block mt-1">it&rsquo;s rarely about the fight.</span>
              </h1>

              <p className="reveal reveal-delay-1 mt-8 lg:mt-10 max-w-lg text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                Couples therapy in Los Feliz for partners who want to stop circling the same arguments, find their way back
                to each other, and build a relationship that feels safe and alive again.
              </p>

              <div className="reveal reveal-delay-2 mt-8 lg:mt-12 flex flex-wrap items-center gap-8">
                <ConsultationCTA location="couples_hero" href="/contact/?service=couples" label="Request a Free Consultation" />
                <a
                  href="#approach"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/85 hover:text-[var(--color-stone-900)] transition-colors"
                >
                  Explore My Approach
                </a>
              </div>

              <p className="mt-8 text-[12px] tracking-[0.12em] uppercase font-medium text-[var(--color-stone-800)]/80">
                $300 / 55 min &nbsp;·&nbsp; 90-min double sessions &nbsp;·&nbsp; Gottman Method Trained
              </p>
            </div>

            <div className="lg:col-span-5 relative h-[45vh] lg:h-[80vh] w-full flex justify-center items-center">
              <div className="reveal-scale w-full max-w-[360px] sm:max-w-[420px] h-full max-h-[580px] aspect-[2/3] oval-mask vertical-ellipse-mask overflow-hidden relative shadow-2xl">
                <img
                  src="/couples-sunset.webp"
                  alt="A couple sitting side by side on the shore, watching the sun set over the ocean"
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
              <div className="space-y-6 max-w-2xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  Most couples I see don&rsquo;t lack love. They&rsquo;re caught in a loop: one of you pushes, the other
                  pulls away, and you both end up feeling misunderstood, exhausted, or alone. The topic changes, but the
                  dance stays the same.
                </p>
                <p>
                  Underneath, it&rsquo;s usually the same struggle. Each of you needs something emotionally and expects the
                  other to simply know it and show up that way, without ever really working it out together. Needs go
                  unspoken, blame fills the gap, and before long you&rsquo;re both walking on eggshells, trying not to set
                  off the other&rsquo;s reactions.
                </p>
                <p>
                  In our sessions we slow that loop down until you can both see what&rsquo;s actually happening underneath
                  it: the fear, the hurt, the old protective moves. That&rsquo;s where things start to shift.
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
                    <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">
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
                  src="/office-hillhurst.webp"
                  alt="Lorne Lieberman's therapy office on Hillhurst Avenue in Los Feliz"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <Eyebrow className="mb-8">02 — My Approach</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                Your relationship as <span className="italic text-[var(--color-olive-700)]">a path to growth.</span>
              </h2>
              <div className="space-y-6 text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  Communication scripts and conflict hacks rarely hold up when emotions run high. In the heat of the moment,
                  your nervous system and your oldest defenses take over.
                </p>
                <p>
                  So we work with what&rsquo;s happening between you in real time. I help each of you use the relationship as
                  support for your own growth: taking responsibility for your own reactions, becoming more patient and
                  compassionate with each other, and holding grace for the best in the other person. We remove blame from
                  the conversation while keeping each of you accountable for your part, because both matter.
                </p>
                <p>
                  My work is anchored in Relational Gestalt and informed by relational mindfulness, the Gottman Method, and
                  attachment-informed somatic emotional processing.
                </p>
                <div className="pt-4">
                  <a
                    href="/contact/?service=couples"
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Schedule a free consultation</span>
                    <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we practice */}
        <section id="practice" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <Eyebrow className="mb-2">03 — What We Practice</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-5">What we practice together</h2>
              <p className="text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                Relational presence: coming back to the here and now, again and again, until it becomes how you meet each
                other.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-stone-900)]/20">
              {practices.map((p, i) => (
                <div
                  key={p.title}
                  className="group border-b border-r border-[var(--color-stone-900)]/20 p-8 md:p-10 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70 mb-8">0{i + 1}</div>
                  <h3 className="font-serif text-2xl mb-3 group-hover:text-[var(--color-olive-700)] transition-colors">{p.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conscious decoupling */}
        <section id="decoupling" className="py-20 md:py-24 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-6">Conscious Decoupling</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight font-light mb-8">
                When it&rsquo;s time to part, <span className="italic text-[var(--color-olive-700)]">part well.</span>
              </h2>
              <div className="space-y-6 max-w-2xl text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  Sometimes two people grow into new phases of life that take them in different directions. Conscious
                  decoupling, sometimes called conscious uncoupling, is for partners who want to end their romantic
                  relationship with integrity, continuing to grow in love and respect even as the relationship changes
                  shape. Instead of blame and resentment, we focus on:
                </p>
                <ul className="space-y-2 pl-1">
                  {[
                    'Honest, open conversations',
                    'Owning your emotional responses',
                    'Clear, healthy boundaries',
                    'A co-parenting plan, if you share children',
                    'Room for each of you to grieve, heal, and grow',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-[var(--color-olive-700)] shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  The goal isn&rsquo;t to skip the pain of separating. It&rsquo;s to move through it in a way that teaches
                  you something about yourself, and to leave things in better condition than you found them, with
                  gratitude and love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section id="modalities" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <Eyebrow className="mb-2">My Training</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl font-light">What I draw on</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t border-l border-[var(--color-stone-900)]/20">
              {modalities.map((m, i) => (
                <div
                  key={m.title}
                  className="group border-b border-r border-[var(--color-stone-900)]/20 p-8 xl:p-7 hover:bg-white transition-colors duration-500"
                >
                  <div className="text-[11px] tracking-[0.2em] text-[var(--color-stone-800)]/70 mb-12">0{i + 1}</div>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-[var(--color-olive-700)] font-medium mb-4">
                    {m.tagline}
                  </p>
                  <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]/90">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <Eyebrow className="mb-8">04 — The Process</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-6">
                How We Work <br />
                <span className="italic text-[var(--color-olive-700)]">Together</span>
              </h2>
              <p className="text-[15.5px] text-[var(--color-stone-800)]/90 leading-relaxed mb-8">
                What the work looks like.
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
                    <p className="text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">{step.desc}</p>
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
                  src="/lorne-headshot-black-tilt.webp"
                  alt="Lorne Lieberman, LMFT, couples therapist in Los Feliz, Los Angeles"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <Eyebrow className="mb-8">05 — The Therapist</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                Meet Lorne Lieberman, <span className="italic text-[var(--color-olive-700)]">LMFT</span>
              </h2>
              <div className="space-y-6 text-[15.5px] leading-relaxed text-[var(--color-stone-800)]">
                <p>
                  I&rsquo;m not a therapist who sits back and nods. I&rsquo;m engaged and direct. I&rsquo;ll interrupt the
                  loop when it starts, name what I see, and challenge old patterns that aren&rsquo;t serving either of you,
                  without anyone becoming the villain.
                </p>
                <p>
                  Whether you&rsquo;re in crisis, navigating a big transition, or simply longing to feel close again,
                  we&rsquo;ll work together toward a relationship that feels secure, honest, and alive.
                </p>
                <p className="text-[12px] tracking-[0.12em] uppercase text-[var(--color-stone-800)]/85">
                  LMFT #{site.license.number} · Gottman Method Trained (2025) · Relational Gestalt Trained (2023) · EMDR Trained (EMDRIA-Approved)
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
                    href="/contact/?service=couples"
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
              <Eyebrow className="mb-8">06 — Fees &amp; Details</Eyebrow>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                  Session Fees &amp; <span className="italic text-[var(--color-olive-700)]">Practice Details</span>
                </h2>
                <RatesTable services={['Couples Therapy', 'Extended Double Session', 'Initial Phone Consultation']} />
                <div className="mt-12 text-[15.5px] leading-relaxed text-[var(--color-stone-800)] space-y-4">
                  <p>
                    Couples sessions are 55 minutes, with 90-minute double sessions available for deeper relational
                    work. Sessions take place in person at my offices in Los Feliz or by secure telehealth anywhere in
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
            <p className="max-w-xl mx-auto text-center text-[16.5px] md:text-[17px] leading-relaxed text-[var(--color-stone-800)] mb-6">
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
            <p className="text-sm text-[var(--color-stone-800)]/80 mb-8 -mt-6">
              Prefer to tell me a little first?{' '}
              <a href="/contact/?service=couples" className="underline underline-offset-2">
                Send a short inquiry
              </a>
              .
            </p>
            <Scheduler title="Schedule a free couples therapy consultation with Lorne Lieberman, LMFT" />
          </div>
        </section>
      </main>

      <SiteFooter consultHref="/contact/?service=couples" showHomeLink />
    </div>
  );
}
