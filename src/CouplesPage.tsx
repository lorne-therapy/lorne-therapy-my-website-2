import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import siteContent from "./content/data.json";

export default function CouplesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToMain = (e: MouseEvent, targetHash = "") => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);

    window.history.pushState(null, "", "/" + targetHash);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.dispatchEvent(new HashChangeEvent("hashchange"));

    if (!targetHash || targetHash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToAnchor = (e: MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const menuLinks = [
    { name: "Philosophy", onClick: (e: MouseEvent) => navigateToMain(e, "#philosophy") },
    { name: "The Therapist", onClick: (e: MouseEvent) => navigateToMain(e, "#therapist") },
    { name: "Clinical Focus", onClick: (e: MouseEvent) => navigateToMain(e, "#clinical-focus") },
    {
      name: "Couples Therapy",
      isActive: true,
      onClick: (e: MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    { name: "Rates & FAQ", onClick: (e: MouseEvent) => navigateToMain(e, "#rates") },
    { name: "Schedule Consultation", onClick: (e: MouseEvent) => scrollToAnchor(e, "schedule") },
  ];

  const commonChallenges = [
    {
      number: "01",
      title: "The Same Argument on Repeat",
      desc: "Getting stuck in recurring, exhausting loops where small triggers rapidly spiral into familiar gridlock and hurt feelings.",
    },
    {
      number: "02",
      title: "Loss of Intimacy & Connection",
      desc: "Feeling more like roommates or co-parents than lovers, wondering where the mutual curiosity, warmth, and physical spark went.",
    },
    {
      number: "03",
      title: "Rebuilding Trust After Betrayal",
      desc: "Navigating the painful aftermath of infidelity, emotional affairs, hidden behaviors, or broken promises with structured guidance.",
    },
    {
      number: "04",
      title: "Communication Shutdowns",
      desc: "When one partner pursues with criticism or frustration while the other withdraws into silence, defensiveness, or stonewalling.",
    },
    {
      number: "05",
      title: "Major Life Transitions & Strain",
      desc: "Managing the intense relational pressure of welcoming a new baby, career shifts, blending families, or evolving life phases.",
    },
    {
      number: "06",
      title: "Deepening an Existing Partnership",
      desc: "Proactively strengthening emotional vulnerability, communication, and shared values through premarital or enrichment therapy.",
    },
  ];

  const modalities = [
    {
      number: "01",
      title: "Emotionally Focused Therapy (EFT)",
      tagline: "Attachment & Core Bonding",
      desc: "Identifies the core attachment vulnerabilities beneath anger or withdrawal, guiding couples to create safe emotional bonding moments.",
    },
    {
      number: "02",
      title: "The Gottman Method",
      tagline: "Research-Backed De-escalation",
      desc: "Disarms harmful conflict styles (criticism, contempt, defensiveness, stonewalling) while systematically building shared meaning.",
    },
    {
      number: "03",
      title: "Relational Psychodynamic",
      tagline: "Unconscious Blueprints",
      desc: "Explores how family of origin experiences and past trauma unconsciously shape relational expectations, defenses, and triggers.",
    },
    {
      number: "04",
      title: "Somatic Co-Regulation",
      tagline: "Nervous System Grounding",
      desc: "Helps partners recognize physiological fight-or-flight activations in real time, slowing down reactivity to communicate with clarity.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Relational & Attachment Assessment",
      desc: "We begin with a comprehensive joint session followed by individual history consultations to thoroughly understand each partner's perspective, relationship history, and recurring conflict cycles.",
    },
    {
      step: "02",
      title: "De-escalating the Negative Cycle",
      desc: "We map out your unique conflict dance in real time during sessions. Partners learn to recognize when their nervous systems are triggered and step off the defensive escalator.",
    },
    {
      step: "03",
      title: "Vulnerable Reconnection & Repair",
      desc: "As emotional safety is restored, we facilitate direct, vulnerable conversations about underlying attachment needs, fears, and desires, creating authentic moments of repair and intimacy.",
    },
    {
      step: "04",
      title: "Integration & Long-Term Resilience",
      desc: "We consolidate new relational habits, shared rituals of connection, and proactive repair strategies so your relationship thrives with enduring vitality and mutual trust.",
    },
  ];

  const faqs = [
    {
      question: "Do both partners need to attend every session?",
      answer:
        "Couples therapy is fundamentally relational work, so the vast majority of our sessions are conducted together. During the initial assessment phase, I typically schedule one individual session with each partner to gather personal developmental history, after which all ongoing work is conducted collaboratively as a couple.",
    },
    {
      question: "What if my partner is skeptical or reluctant about therapy?",
      answer:
        "It is very common for one partner to feel hesitant or worried about being blamed. My role is never to take sides or declare who is 'right.' Instead, the client in the room is the relationship itself. I ensure both partners feel equally heard, respected, and supported from day one.",
    },
    {
      question: "How long does couples therapy typically take?",
      answer:
        "While every couple's situation is unique, meaningful de-escalation and symptom relief often occur within the first 8 to 12 sessions. Many couples choose to continue for 6 to 12 months to do deeper attachment repair and solidify long-term resilience.",
    },
    {
      question: "Can couples therapy help if there has been an affair or infidelity?",
      answer:
        "Yes. While rebuilding after betrayal is challenging, structured couples therapy provides a contained, secure environment to process grief and trauma, establish transparency, understand the factors that contributed to the vulnerability, and systematically restore trust.",
    },
    {
      question: "Are sessions held in-person or virtually?",
      answer:
        "I offer in-person couples sessions at my private practice office in Los Angeles, as well as secure HIPAA-compliant telehealth sessions for couples located anywhere throughout the state of California.",
    },
    {
      question: "How do fees and out-of-network insurance reimbursement work?",
      answer:
        "Couples sessions are $300 per 60-minute session. While I am an out-of-network provider, I provide detailed monthly superbills with standard clinical diagnostic and procedure codes that you may submit to your PPO insurance for potential reimbursement.",
    },
  ];

  const ratesList = [
    { serviceName: "Couples Therapy (In-Person / Telehealth)", price: "$300 / 60 min" },
    { serviceName: "Initial Clinical Phone Consultation", price: "Complimentary (15 min)" },
    { serviceName: "Insurance Billing", price: "Out-of-Network (Superbills Provided)" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      {/* ─── Top Navigation Bar (Header layout matching design) ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 text-[var(--color-stone-900)] ${
          isScrolled
            ? "py-4 bg-[var(--color-stone-100)]/90 backdrop-blur-md border-b border-[var(--color-stone-900)]/5 shadow-xs"
            : "py-6 bg-[var(--color-stone-100)]/80 backdrop-blur-xs"
        }`}
      >
        <a
          href="/"
          onClick={(e) => navigateToMain(e, "")}
          className="flex flex-col text-left group hover:opacity-80 transition-opacity"
        >
          <span className="text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.22em] font-medium uppercase text-[var(--color-stone-900)] leading-tight">
            DEPTH PSYCHOTHERAPY
          </span>
          <span className="text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.2em] uppercase text-[var(--color-stone-800)]/60 font-light mt-0.5">
            LORNE LIEBERMAN, LMFT
          </span>
        </a>

        {/* Desktop Horizontal Navigation for Couples Therapy */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-[12px] tracking-[0.18em] uppercase font-medium text-[var(--color-stone-800)]/80">
          <button
            onClick={(e) => scrollToAnchor(e, "experience")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "approach")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Approach
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "modalities")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Foundation
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "process")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Process
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "therapist")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Therapist
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "faq")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "rates")}
            className="hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
          >
            Rates
          </button>
          <button
            onClick={(e) => scrollToAnchor(e, "schedule")}
            className="ml-2 px-4 py-2 border border-[var(--color-stone-900)]/70 text-[var(--color-stone-900)] hover:bg-[var(--color-stone-900)] hover:text-white transition-all duration-200 cursor-pointer"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span>Menu</span>
          <Menu size={16} strokeWidth={1.5} />
        </button>
      </nav>

      {/* ─── Full-Screen Menu Overlay (Exact depth.la design & transitions) ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--color-stone-900)] text-[var(--color-stone-50)] flex flex-col justify-center items-center px-6"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span>Close</span>
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-8 md:gap-12">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={link.onClick}
                  className={`font-serif text-4xl md:text-5xl lg:text-7xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300 ${
                    link.isActive ? "italic text-[var(--color-olive-700)]" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={siteContent.clientPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-4xl md:text-5xl lg:text-7xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300 mt-4 md:mt-8"
              >
                Client Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Section 1: Hero Section ─── */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
            LOS ANGELES, CA &amp; ONLINE
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 lg:min-h-[100dvh]">
          <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-6 md:mb-8">
              Couples Therapy &amp; Relationship Counseling
            </h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[11vw] sm:text-5xl md:text-7xl lg:text-[90px] leading-[0.95] tracking-tight font-light"
            >
              Moving Beyond <br />
              <span className="italic text-[var(--color-olive-700)] block ml-4 md:ml-6 lg:ml-8">
                the Surface of Conflict
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 lg:mt-10 max-w-lg text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light"
            >
              Depth-oriented couples therapy in Los Angeles for partners seeking to break repetitive conflict cycles, heal attachment wounds, and cultivate profound intimacy, trust, and mutual understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 lg:mt-12 flex flex-wrap items-center gap-8"
            >
              <button
                onClick={(e) => scrollToAnchor(e, "schedule")}
                className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors cursor-pointer"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={(e) => scrollToAnchor(e, "approach")}
                className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/60 hover:text-[var(--color-stone-900)] transition-colors cursor-pointer"
              >
                Explore Our Approach
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[45vh] lg:h-[80vh] w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[420px] h-full max-h-[600px] oval-mask overflow-hidden relative shadow-2xl"
            >
              <img
                src="/couples-heart-hands.jpg"
                alt="Silhouetted hands forming a heart shape with the warm golden sun shining through the center"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: The Core Relational Reality ─── */}
      <section id="experience" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">
                01 — The Experience
              </h3>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block"></div>
            </div>

            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                You can love each other deeply and still feel{" "}
                <span className="italic text-[var(--color-olive-700)]">profoundly disconnected.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  Most couples don&apos;t struggle because they lack love; they struggle because they get caught in entrenched defensive patterns that leave both partners feeling misunderstood, exhausted, or alone.
                </p>
                <p>
                  When the same disagreements repeat or silence replaces closeness, therapy offers a safe space to slow down, understand what is really happening beneath the reactivity, and systematically chart a new path forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Relational Challenges We Address ─── */}
      <section id="challenges" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-2">
                Common Dynamics
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                What Brings Couples to Therapy
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[var(--color-stone-900)]/20">
            {commonChallenges.map((challenge, i) => (
              <div
                key={i}
                className="group border-b border-[var(--color-stone-900)]/20 md:border-r last:border-r-0 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:md:border-r lg:[&:nth-child(3n)]:border-r-0 p-8 md:p-12 hover:bg-white transition-colors duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/40 mb-12 flex items-center justify-between">
                    <span>{challenge.number}</span>
                    <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--color-olive-700)] font-medium">
                      FOCUS
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {challenge.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70 font-light">
                    {challenge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Our Approach & The Sanctuary Room ─── */}
      <section id="approach" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/couples-therapy-seating.jpg"
                  alt="A peaceful, comfortable psychotherapy consulting couch prepared for couples therapy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">
                02 — The Approach
              </h3>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                A Relational, <span className="italic text-[var(--color-olive-700)]">Depth-Oriented</span> Approach
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  Lasting change rarely comes from memorizing communication scripts or surface-level conflict hacks. When emotions run high, intellect takes a back seat to our nervous system and unconscious defenses.
                </p>
                <p>
                  In our work together, we look at the underlying attachment wounds, emotional patterns, and protective strategies that keep you stuck. By bringing awareness to these dynamics in real time, we create the conditions for authentic repair, mutual empathy, and enduring security.
                </p>
                <div className="pt-4">
                  <button
                    onClick={(e) => scrollToAnchor(e, "schedule")}
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors cursor-pointer"
                  >
                    <span>Begin Clinical Engagement</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Core Frameworks & Modalities ─── */}
      <section id="modalities" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-2">
                Clinical Foundation
              </h3>
              <h2 className="font-serif text-3xl md:text-4xl font-light">
                Core Frameworks &amp; Modalities
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-stone-900)]/20">
            {modalities.map((framework, i) => (
              <div
                key={i}
                className="group border-b lg:border-b-0 border-[var(--color-stone-900)]/20 lg:border-r last:border-r-0 p-8 md:p-10 hover:bg-white transition-colors duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/40 mb-12 flex items-center justify-between">
                    <span>{framework.number}</span>
                  </div>
                  <h4 className="font-serif text-xl mb-2 group-hover:text-[var(--color-olive-700)] transition-colors">
                    {framework.title}
                  </h4>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-[var(--color-olive-700)] font-medium mb-4">
                    {framework.tagline}
                  </p>
                  <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70 font-light">
                    {framework.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: How Couples Therapy Works (Process) ─── */}
      <section id="process" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">
                03 — The Process
              </h3>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-6">
                How We Work <br />
                <span className="italic text-[var(--color-olive-700)]">Together</span>
              </h2>
              <p className="text-sm text-[var(--color-stone-800)]/70 font-light leading-relaxed mb-8">
                A structured, clinical trajectory designed to take you from reactive conflict to collaborative, lasting intimacy.
              </p>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block"></div>
            </div>

            <div className="md:col-span-8 space-y-12">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="border-b border-[var(--color-stone-900)]/10 pb-8 flex flex-col sm:flex-row gap-6 sm:gap-10"
                >
                  <span className="font-serif text-3xl text-[var(--color-olive-700)]/80 shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-2xl font-light mb-3">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: Meet Lorne Lieberman, LMFT ─── */}
      <section id="therapist" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lorne-portrait.jpg"
                  alt="Lorne Lieberman, LMFT"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">
                04 — The Therapist
              </h3>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                Meet Lorne Lieberman, <span className="italic text-[var(--color-olive-700)]">LMFT</span>
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  I work with couples who are ready to look honestly at their dynamic and do the meaningful work of reconnecting. My approach is warm, active, and grounded—creating a supportive, non-judgmental space where both partners feel equally seen, challenged, and supported.
                </p>
                <p>
                  Whether you are in crisis, navigating a pivotal transition, or simply longing for greater emotional and physical intimacy, we will work collaboratively to build a relationship that feels secure, vital, and deeply fulfilling.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <a
                    href="#"
                    onClick={(e) => navigateToMain(e, "#therapist")}
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors"
                  >
                    <span>Read Full Background</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={(e) => scrollToAnchor(e, "schedule")}
                    className="text-xs tracking-[0.15em] uppercase text-[var(--color-olive-700)] font-medium hover:underline cursor-pointer"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Frequently Asked Questions ─── */}
      <section id="faq" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-4">
              Questions &amp; Clarity
            </h3>
            <h2 className="font-serif text-3xl md:text-5xl font-light">
              Frequently Asked <span className="italic text-[var(--color-olive-700)]">Questions</span>
            </h2>
          </div>

          <div className="divide-y divide-[var(--color-stone-900)]/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left py-2 group cursor-pointer"
                  >
                    <span className="font-serif text-xl md:text-2xl font-light text-[var(--color-stone-900)] group-hover:text-[var(--color-olive-700)] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[var(--color-stone-800)]/50 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[var(--color-olive-700)]" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Section 9: Rates & Practice Logistics ─── */}
      <section id="rates" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">
                05 — Investment &amp; Details
              </h3>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block"></div>
            </div>

            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                  Session Fees &amp; <span className="italic text-[var(--color-olive-700)]">Practice Details</span>
                </h2>

                <div className="space-y-12">
                  {ratesList.map((rate, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-baseline border-b border-[var(--color-stone-900)]/10 pb-4"
                    >
                      <span className="text-sm tracking-wide uppercase">{rate.serviceName}</span>
                      <span className="font-serif text-2xl">{rate.price}</span>
                    </div>
                  ))}

                  <div className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light space-y-4">
                    <p>
                      Couples sessions are 60 minutes in length and structured for in-depth relational inquiry. Sessions are conducted in-person at my Los Angeles office or virtually throughout California via secure HIPAA-compliant telehealth.
                    </p>
                    <p>
                      While I am an out-of-network provider, I provide detailed monthly superbills that you can submit to your PPO insurance plan for potential reimbursement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 10: Schedule Consultation ─── */}
      <section id="schedule" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">
            Consultation
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
            Request a <span className="italic text-[var(--color-olive-700)]">Consultation</span>
          </h2>
          <p className="max-w-xl mx-auto text-center text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light mb-16">
            Select a time for a complimentary 15-minute phone consultation to discuss what you and your partner are experiencing and determine if working together is the right fit.
          </p>

          <div className="w-full bg-white border border-[var(--color-stone-900)]/5 rounded-2xl overflow-hidden h-[750px] relative shadow-sm ring-1 ring-black/5 ring-inset">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-stone-900)]/10 border-t-[var(--color-olive-700)] animate-spin"></div>
              </div>
              <iframe
                src={siteContent.clientPortalUrl}
                style={{ border: 0 }}
                width="100%"
                height="100%"
                className="w-full h-full absolute inset-0 z-10"
                title="Google Calendar Scheduling"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 11: Footer (Matching depth.la) ─── */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-stone-900)] text-[var(--color-stone-50)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
              {siteContent.footerTitleLine1} <br />
              <span className="italic text-[var(--color-olive-700)]/80">
                {siteContent.footerTitleLine2}
              </span>
            </h2>
            <p className="text-sm text-[var(--color-stone-50)]/60 max-w-sm leading-relaxed mb-12">
              {siteContent.footerDescription}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={(e) => scrollToAnchor(e, "schedule")}
                className="inline-block bg-[var(--color-stone-50)] text-[var(--color-stone-900)] px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-olive-700)] hover:text-white transition-colors duration-300 cursor-pointer font-medium"
              >
                {siteContent.footerCtaText}
              </button>
              <a
                href="/"
                onClick={(e) => navigateToMain(e, "")}
                className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-50)]/70 hover:text-white transition-colors"
              >
                Return to Main Practice
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end text-xs tracking-[0.1em] text-[var(--color-stone-50)]/60 space-y-3">
            <p className="uppercase font-medium text-white/90">{siteContent.footerName}</p>
            <p>{siteContent.footerLicense}</p>
            <p className="text-white/80">{siteContent.footerLocation}</p>

            <div className="pt-2 text-left md:text-right space-y-1">
              <p className="normal-case font-medium text-stone-300 text-xs tracking-normal">
                {siteContent.footerInPersonHeading || "In-person sessions:"}
              </p>
              {siteContent.footerNeighborhoods && siteContent.footerNeighborhoods.length > 0 && (
                <ul className="normal-case tracking-normal text-[var(--color-stone-50)]/70 text-xs space-y-0.5">
                  {siteContent.footerNeighborhoods.map((hood: string, index: number) => (
                    <li key={index}>{hood}</li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href={`mailto:${siteContent.footerEmail}`}
              className="hover:text-white transition-colors pt-2 inline-block text-stone-300 normal-case"
            >
              {siteContent.footerEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
