import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import siteContent from "./content/data.json";

type AnalyticsValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload: Record<string, AnalyticsValue> = {
    landing_page: "trauma_emdr",
    page_path: window.location.pathname,
  };

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) payload[key] = value;
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });
}

export default function TraumaEMDRPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const observedSections = useRef(new Set<string>());
  const observedScrollDepths = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const oldTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const oldDescription = description?.getAttribute("content") || "";

    document.title = "Trauma & EMDR Therapy Los Angeles | Lorne Lieberman, LMFT";
    description?.setAttribute(
      "content",
      "Trauma therapy and EMDR in Los Angeles with Lorne Lieberman, LMFT. In-person psychotherapy in Los Angeles and secure telehealth throughout California. Free 15-minute consultation."
    );

    trackEvent("landing_page_view", {
      page_title: document.title,
      traffic_source: new URLSearchParams(window.location.search).get("utm_source") || "direct_or_unset",
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionName = (entry.target as HTMLElement).dataset.analyticsSection;
          if (!sectionName || observedSections.current.has(sectionName)) return;

          observedSections.current.add(sectionName);
          trackEvent("section_view", { section_name: sectionName });
          if (sectionName === "schedule") {
            trackEvent("scheduler_view", { scheduler_provider: "google_calendar" });
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll<HTMLElement>("[data-analytics-section]").forEach((section) => {
      sectionObserver.observe(section);
    });

    const trackScrollDepth = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);

      [25, 50, 75, 90].forEach((threshold) => {
        if (percent >= threshold && !observedScrollDepths.current.has(threshold)) {
          observedScrollDepths.current.add(threshold);
          trackEvent("landing_scroll_depth", { percent_scrolled: threshold });
        }
      });
    };

    window.addEventListener("scroll", trackScrollDepth, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", trackScrollDepth);
      sectionObserver.disconnect();
      document.title = oldTitle;
      if (description) description.setAttribute("content", oldDescription);
    };
  }, []);

  const navigateToMain = (e: MouseEvent, targetHash = "") => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.history.pushState(null, "", "/" + targetHash);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    if (!targetHash || targetHash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToAnchor = (e: MouseEvent, id: string, analyticsLocation?: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (analyticsLocation) {
      trackEvent("consultation_cta_click", {
        cta_location: analyticsLocation,
        destination: id,
      });
    }
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 82;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const menuLinks = [
    { name: "Philosophy", onClick: (e: MouseEvent) => { trackEvent("navigation_click", { link_name: "philosophy", navigation_location: "menu" }); navigateToMain(e, "#philosophy"); } },
    { name: "The Therapist", onClick: (e: MouseEvent) => { trackEvent("navigation_click", { link_name: "therapist", navigation_location: "menu" }); navigateToMain(e, "#therapist"); } },
    { name: "Clinical Focus", onClick: (e: MouseEvent) => { trackEvent("navigation_click", { link_name: "clinical_focus", navigation_location: "menu" }); navigateToMain(e, "#clinical-focus"); } },
    { name: "Couples Therapy", onClick: (e: MouseEvent) => { e.preventDefault(); trackEvent("navigation_click", { link_name: "couples_therapy", navigation_location: "menu" }); window.history.pushState(null, "", "/couples-therapy"); window.dispatchEvent(new PopStateEvent("popstate")); setIsMenuOpen(false); } },
    {
      name: "Trauma & EMDR",
      isActive: true,
      onClick: (e: MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(false);
        trackEvent("navigation_click", { link_name: "trauma_emdr", navigation_location: "menu" });
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    { name: "Rates & FAQ", onClick: (e: MouseEvent) => { trackEvent("navigation_click", { link_name: "rates_faq", navigation_location: "menu" }); scrollToAnchor(e, "rates"); } },
    { name: "Schedule Consultation", onClick: (e: MouseEvent) => scrollToAnchor(e, "schedule", "menu") },
  ];

  const focusAreas = [
    {
      number: "01",
      title: "Trauma & PTSD",
      desc: "Therapy for experiences that continue to show up through fear, activation, avoidance, intrusive memories, or a persistent sense of threat.",
    },
    {
      number: "02",
      title: "Complex & Developmental Trauma",
      desc: "Work with longstanding patterns shaped by chronic stress, inconsistent safety, or difficult early relational environments.",
    },
    {
      number: "03",
      title: "Attachment Wounds",
      desc: "Explore how earlier relationships can shape trust, closeness, vulnerability, self-protection, and expectations of other people.",
    },
    {
      number: "04",
      title: "Childhood Emotional Neglect",
      desc: "Address patterns connected to emotional absence, parentification, unmet needs, or learning to disconnect from parts of yourself.",
    },
    {
      number: "05",
      title: "Betrayal & Relationship Trauma",
      desc: "Process ruptures involving infidelity, abandonment, broken trust, or other experiences that changed how safety in relationships feels.",
    },
    {
      number: "06",
      title: "Anxiety, Shutdown & Hypervigilance",
      desc: "Understand nervous-system responses that can appear as over-alertness, emotional numbness, withdrawal, or reactions that feel difficult to control.",
    },
  ];

  const modalities = [
    {
      number: "01",
      title: "EMDR",
      desc: "Used when clinically appropriate to work with distressing memories, beliefs, emotions, and body responses connected to past experiences.",
    },
    {
      number: "02",
      title: "Relational & Attachment Therapy",
      desc: "We examine how attachment experiences shape trust, closeness, conflict, vulnerability, and the protective strategies you bring into relationships.",
    },
    {
      number: "03",
      title: "Depth-Oriented Psychotherapy",
      desc: "The work looks beneath immediate symptoms to recurring emotional meanings, defenses, unconscious expectations, and patterns that keep repeating.",
    },
    {
      number: "04",
      title: "Somatic & Mindfulness Work",
      desc: "Attention to body-based cues and present-moment experience can help identify activation, shutdown, fear, and protective responses as they arise.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Understand the Pattern",
      desc: "We begin by clarifying what is happening now, what tends to trigger it, and how earlier experiences may be shaping current emotional or relational responses.",
    },
    {
      step: "02",
      title: "Build Safety & Preparation",
      desc: "Before deeper trauma processing, therapy establishes enough stability, trust, and internal resources to work at a pace that is tolerable and clinically appropriate.",
    },
    {
      step: "03",
      title: "Process What Remains Active",
      desc: "EMDR may be integrated when it fits the work, alongside relational, somatic, and depth-oriented psychotherapy rather than as a one-size-fits-all protocol.",
    },
    {
      step: "04",
      title: "Integrate Change Into the Present",
      desc: "The goal is not simply to understand the past, but to create more choice in how you respond, connect, set boundaries, and move through your life now.",
    },
  ];

  const faqs = [
    {
      question: "What is EMDR therapy?",
      answer:
        "EMDR is a structured psychotherapy approach used to work with distressing experiences and the emotions, beliefs, and body responses connected to them. In this practice, EMDR may be integrated with relational, attachment, somatic, mindfulness, and depth-oriented psychotherapy depending on your needs.",
    },
    {
      question: "Do I need a PTSD diagnosis to work on trauma?",
      answer:
        "No. People seek trauma-focused therapy for many reasons, including difficult childhood experiences, attachment wounds, betrayal, recurring relationship patterns, emotional neglect, or events that still feel active in the present.",
    },
    {
      question: "Do you use EMDR in every session?",
      answer:
        "No. EMDR is one part of a broader treatment approach. Whether and when it is used depends on your goals, history, readiness, and what is clinically appropriate in the course of therapy.",
    },
    {
      question: "Can EMDR and trauma therapy be done online?",
      answer:
        "Secure telehealth is available to clients located throughout California. In-person sessions are also available in Los Angeles. Whether a particular intervention is appropriate by telehealth can be discussed during the consultation and assessment process.",
    },
    {
      question: "How much is individual therapy?",
      answer:
        "Individual sessions are $250. Depth Psychotherapy is a private-pay practice. Questions about scheduling, payment, and potential out-of-network benefits can be discussed during the complimentary consultation.",
    },
  ];

  const ratesList = [
    { serviceName: "Individual Trauma / EMDR Therapy", price: "$250 / session" },
    { serviceName: "Initial Phone Consultation", price: "Complimentary (15 min)" },
    { serviceName: "Insurance Billing", price: "Private Pay / Out-of-Network" },
  ];

  const ConsultationCTA = ({
    location,
    light = false,
    compact = false,
  }: {
    location: string;
    light?: boolean;
    compact?: boolean;
  }) => (
    <button
      onClick={(e) => scrollToAnchor(e, "schedule", location)}
      className={`group inline-flex items-center justify-center gap-4 text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer font-medium ${
        compact ? "px-6 py-3" : "px-8 py-4"
      } ${
        light
          ? "bg-[var(--color-stone-50)] text-[var(--color-stone-900)] hover:bg-[var(--color-olive-700)] hover:text-white"
          : "bg-[var(--color-olive-700)] text-white hover:bg-[var(--color-olive-800)]"
      }`}
    >
      <span>Schedule a Free 15-Min Consultation</span>
      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </button>
  );

  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white pb-16 md:pb-0">
      {/* Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 text-[var(--color-stone-900)] ${
          isScrolled
            ? "py-4 bg-[var(--color-stone-100)]/90 backdrop-blur-md border-b border-[var(--color-stone-900)]/5"
            : "py-5 md:py-6"
        }`}
      >
        <a href="/" onClick={(e) => { trackEvent("navigation_click", { link_name: "brand_home", navigation_location: "header" }); navigateToMain(e, ""); }} className="uppercase font-medium hover:opacity-70 transition-opacity">
          <div className="md:hidden flex flex-col gap-0.5">
            <span className="text-xs tracking-[0.2em]">{siteContent.navigationNameMobile1}</span>
            <span className="text-[8px] tracking-[0.05em] text-[var(--color-stone-800)]/80 sm:text-[9.5px] sm:tracking-[0.1em]">
              {siteContent.navigationNameMobile2}
            </span>
          </div>
          <div className="hidden md:block text-xs tracking-[0.2em]">{siteContent.navigationName}</div>
        </a>

        <div className="flex items-center gap-6">
          <button
            onClick={(e) => scrollToAnchor(e, "schedule", "header")}
            className="hidden md:inline-flex items-center gap-3 bg-[var(--color-olive-700)] text-white px-6 py-3 text-[10px] tracking-[0.17em] uppercase hover:bg-[var(--color-olive-800)] transition-colors cursor-pointer"
          >
            Free Consultation <ArrowRight size={13} />
          </button>
          <button
            onClick={() => {
              trackEvent("menu_open", { navigation_location: "header" });
              setIsMenuOpen(true);
            }}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
          >
            <span>Menu</span>
            <Menu size={16} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

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
              onClick={() => {
                trackEvent("menu_close", { navigation_location: "menu_overlay" });
                setIsMenuOpen(false);
              }}
              className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span>Close</span>
              <X size={16} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col items-center gap-6 md:gap-9">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={link.onClick}
                  className={`font-serif text-3xl md:text-5xl lg:text-6xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300 ${
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
                onClick={() => {
                  trackEvent("client_portal_click", { link_location: "menu" });
                  setIsMenuOpen(false);
                }}
                className="font-serif text-3xl md:text-5xl lg:text-6xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300 mt-2"
              >
                Client Portal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero: exact ad-to-page message match */}
      <section data-analytics-section="hero" className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-32 pb-16 overflow-hidden">
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
            LOS ANGELES, CA &amp; TELEHEALTH CALIFORNIA
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/55 mb-5 md:mb-7">
              Trauma Therapy + EMDR · Los Angeles + Telehealth California
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.94] tracking-tight font-light max-w-[900px]"
            >
              Trauma &amp; EMDR Therapy <br className="hidden sm:block" />
              <span className="italic text-[var(--color-olive-700)] block mt-2 md:ml-6">in Los Angeles.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 lg:mt-9 max-w-xl text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light"
            >
              Trauma and EMDR therapy in Los Angeles with Lorne Lieberman, LMFT, for PTSD, attachment wounds, and other experiences that continue to affect how you feel, relate, and respond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <ConsultationCTA location="hero" />
              <button
                onClick={(e) => {
                  trackEvent("emdr_approach_click", { cta_location: "hero" });
                  scrollToAnchor(e, "emdr");
                }}
                className="self-start sm:self-auto text-xs tracking-[0.15em] uppercase text-[var(--color-stone-800)]/60 hover:text-[var(--color-stone-900)] transition-colors cursor-pointer border-b border-[var(--color-stone-900)]/15 pb-1"
              >
                Learn About EMDR
              </button>
            </motion.div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[9px] md:text-[10px] tracking-[0.14em] uppercase text-[var(--color-stone-800)]/55">
              <span>In Person · Los Angeles</span>
              <span>Telehealth · California</span>
              <span>$250 / Session</span>
              <span>Free 15-Min Consultation</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[48vh] min-h-[390px] lg:h-[76vh] lg:min-h-[560px] w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[420px] h-full max-h-[610px] oval-mask overflow-hidden relative shadow-xl bg-white"
            >
              <img
                src="/trauma-hero-therapy-room.jpg"
                alt="Warm, private psychotherapy room for trauma and EMDR therapy"
                className="w-full h-full object-cover object-center scale-[1.02] hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section id="experience" data-analytics-section="recognition" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">01 — Trauma &amp; EMDR</h3>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-9">
                Trauma &amp; EMDR Therapy for PTSD, Attachment Wounds, and Ongoing Trauma Responses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  Trauma does not always stay in the past. It can show up as hypervigilance, emotional shutdown, anxiety, relationship difficulties, shame, intrusive memories, or reactions that feel larger than the situation in front of you.
                </p>
                <p>
                  Trauma-focused psychotherapy and EMDR can help you work with what remains emotionally or physically activated while also addressing the attachment and relational patterns that may have developed around those experiences.
                </p>
              </div>
              <div className="mt-10">
                <ConsultationCTA location="recognition" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section id="focus" data-analytics-section="clinical_focus" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-2">Common Reasons People Seek Trauma Therapy</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-light">Clinical Focus</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[var(--color-stone-900)]/20">
            {focusAreas.map((item, i) => (
              <div
                key={item.number}
                className="group border-b border-[var(--color-stone-900)]/20 md:border-r last:border-r-0 [&:nth-child(2n)]:md:border-r-0 lg:[&:nth-child(2n)]:md:border-r lg:[&:nth-child(3n)]:border-r-0 p-8 md:p-10 hover:bg-white transition-colors duration-500"
              >
                <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/40 mb-10">
                  <span>{item.number}</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMDR */}
      <section id="emdr" data-analytics-section="emdr" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <img src="/trauma-emdr-kintsugi.jpg" alt="Kintsugi vessel representing integration and repair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 lg:pl-12">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">02 — EMDR Therapy in Los Angeles</h3>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">
                EMDR as part of a <span className="italic text-[var(--color-olive-700)]">deeper therapeutic process.</span>
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  EMDR is a structured psychotherapy approach used to work with distressing experiences and the beliefs, emotions, and body responses connected to them.
                </p>
                <p>
                  Lorne does not treat EMDR as a stand-alone procedure or a one-size-fits-all protocol. When it fits the work, EMDR can be integrated with relational, attachment, somatic, mindfulness-based, and depth-oriented psychotherapy so treatment addresses both the experience itself and the patterns that developed around it.
                </p>
                <div className="pt-4"><ConsultationCTA location="emdr_section" compact /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section id="modalities" data-analytics-section="treatment_approach" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-2">Treatment Approach</h3>
              <h2 className="font-serif text-3xl md:text-4xl font-light">How Trauma &amp; EMDR Therapy Is Integrated</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-stone-900)]/20">
            {modalities.map((framework) => (
              <div key={framework.number} className="group border-b lg:border-b-0 border-[var(--color-stone-900)]/20 lg:border-r last:border-r-0 p-8 md:p-10 hover:bg-white transition-colors duration-500">
                <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/40 mb-10"><span>{framework.number}</span></div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-[var(--color-olive-700)] transition-colors">{framework.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70 font-light">{framework.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" data-analytics-section="process" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">03 — The Process</h3>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-6">
                How Trauma Therapy <br /><span className="italic text-[var(--color-olive-700)]">Can Work</span>
              </h2>
              <p className="text-sm text-[var(--color-stone-800)]/70 font-light leading-relaxed mb-8">A paced process that combines understanding, preparation, trauma processing, and integration.</p>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8 space-y-10">
              {processSteps.map((step) => (
                <div key={step.step} className="border-b border-[var(--color-stone-900)]/10 pb-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <span className="font-serif text-3xl text-[var(--color-olive-700)]/80 shrink-0">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-light mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2"><ConsultationCTA location="process" compact /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist */}
      <section id="therapist" data-analytics-section="therapist" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/lorne-portrait.jpeg"
                  alt="Lorne Lieberman, LMFT"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith(".jpeg")) {
                      target.src = "/lorne-portrait.jpg";
                    }
                  }}
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 lg:pl-12">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">04 — The Therapist</h3>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-8">Meet Lorne Lieberman, <span className="italic text-[var(--color-olive-700)]">LMFT</span></h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  Lorne works with adults through a depth-oriented and relational lens, integrating EMDR, attachment work, somatic awareness, and mindfulness when clinically useful.
                </p>
                <p>
                  Before becoming a therapist, Lorne spent many years immersed in contemplative practice as a Buddhist monk and yogi. That background continues to inform the steadiness and attention he brings to emotionally complex work.
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <a href="#" onClick={(e) => { trackEvent("therapist_background_click", { link_location: "therapist_section" }); navigateToMain(e, "#therapist"); }} className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors">
                    <span>Read Full Background</span><ArrowRight size={14} />
                  </a>
                  <ConsultationCTA location="therapist" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" data-analytics-section="rates" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">05 — Fees &amp; Details</h3>
              <div className="w-24 h-px bg-[var(--color-stone-900)]/20 hidden md:block" />
            </div>
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight font-light mb-10">Trauma &amp; EMDR Therapy <span className="italic text-[var(--color-olive-700)]">Fees</span></h2>
                <div className="space-y-9">
                  {ratesList.map((rate) => (
                    <div key={rate.serviceName} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 border-b border-[var(--color-stone-900)]/10 pb-4">
                      <span className="text-sm tracking-wide uppercase">{rate.serviceName}</span>
                      <span className="font-serif text-2xl">{rate.price}</span>
                    </div>
                  ))}
                  <div className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light space-y-4">
                    <p>Sessions are available in person in Los Angeles and by secure telehealth for clients located throughout California.</p>
                    <p>Questions about payment and possible out-of-network reimbursement can be discussed during the consultation.</p>
                  </div>
                  <ConsultationCTA location="rates" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" data-analytics-section="faq" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-4">Trauma &amp; EMDR Therapy Questions</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-light">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-[var(--color-stone-900)]/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="py-6">
                  <button
                    onClick={() => {
                      if (!isOpen) {
                        trackEvent("faq_open", {
                          faq_index: index + 1,
                          faq_question: faq.question,
                        });
                      }
                      setOpenFaqIndex(isOpen ? null : index);
                    }}
                    className="w-full flex justify-between items-center text-left py-2 group cursor-pointer"
                  >
                    <span className="font-serif text-xl md:text-2xl font-light text-[var(--color-stone-900)] group-hover:text-[var(--color-olive-700)] transition-colors pr-6">{faq.question}</span>
                    <ChevronDown size={20} className={`text-[var(--color-stone-800)]/50 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[var(--color-olive-700)]" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="pt-4 text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light pr-6">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center"><ConsultationCTA location="faq" compact /></div>
        </div>
      </section>

      {/* Scheduler */}
      <section id="schedule" data-analytics-section="schedule" className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">Free 15-Minute Consultation</h3>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">Schedule a <span className="italic text-[var(--color-olive-700)]">Consultation</span></h2>
          <p className="max-w-xl mx-auto text-center text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light mb-12">
            Choose a time for a complimentary 15-minute phone consultation to discuss what you are looking for and whether working together feels like a fit.
          </p>
          <div className="w-full bg-white border border-[var(--color-stone-900)]/5 rounded-2xl overflow-hidden h-[750px] relative shadow-sm ring-1 ring-black/5 ring-inset">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-8 h-8 rounded-full border-2 border-[var(--color-stone-900)]/10 border-t-[var(--color-olive-700)] animate-spin" />
            </div>
            <iframe
              src={siteContent.clientPortalUrl}
              style={{ border: 0 }}
              width="100%"
              height="100%"
              className="w-full h-full absolute inset-0 z-10"
              title="Schedule a free consultation with Lorne Lieberman"
              onLoad={() => trackEvent("scheduler_iframe_load", { scheduler_provider: "google_calendar" })}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-stone-900)] text-[var(--color-stone-50)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">Looking for Trauma or EMDR Therapy? <br /><span className="italic text-[var(--color-olive-700)]/90">Schedule a free consultation.</span></h2>
            <p className="text-sm text-[var(--color-stone-50)]/60 max-w-sm leading-relaxed mb-10">Schedule a complimentary 15-minute consultation with Lorne to discuss trauma therapy, EMDR, and whether the practice is a fit.</p>
            <div className="flex flex-wrap items-center gap-6">
              <ConsultationCTA location="footer" light />
              <a href="/" onClick={(e) => { trackEvent("navigation_click", { link_name: "return_main_practice", navigation_location: "footer" }); navigateToMain(e, ""); }} className="text-xs tracking-[0.15em] uppercase text-[var(--color-stone-50)]/70 hover:text-white transition-colors">Return to Main Practice</a>
            </div>
          </div>
          <div className="flex flex-col md:items-end text-xs tracking-[0.1em] text-[var(--color-stone-50)]/60 space-y-3">
            <p className="uppercase font-medium text-white/90">{siteContent.footerName}</p>
            <p>{siteContent.footerLicense}</p>
            <p className="text-white/80">{siteContent.footerLocation}</p>
            <a href={`mailto:${siteContent.footerEmail}`} onClick={() => trackEvent("email_click", { link_location: "footer" })} className="hover:text-white transition-colors pt-2 inline-block text-stone-300 normal-case">{siteContent.footerEmail}</a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--color-stone-900)] p-3 border-t border-white/10">
        <button onClick={(e) => scrollToAnchor(e, "schedule", "mobile_sticky")} className="w-full bg-[var(--color-olive-700)] text-white px-5 py-4 text-[11px] tracking-[0.14em] uppercase font-medium flex items-center justify-center gap-3">
          Free 15-Min Consultation <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
