import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Blend,
  CalendarDays,
  Check,
  Clock,
  Flower2,
  Leaf,
  Lock,
  Sparkle,
  UserRound,
  Waves,
  type LucideIcon,
} from "lucide-react";
import siteContent from "./content/data.json";

const navLinks = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "Therapist", href: "#therapist" },
  { name: "Clinical Focus", href: "#clinical-focus" },
  { name: "Rates & FAQ", href: "#rates" },
];

const heroHighlights: { icon: LucideIcon; text: string }[] = [
  { icon: CalendarDays, text: "$300 per 50-minute couples session" },
  { icon: Clock, text: "Free 15-minute consultation" },
  { icon: Lock, text: "Private pay and out-of-network eligible" },
];

// Ordered for a two-column, row-major grid.
const checklistItems = [
  "The same arguments keep happening",
  "Trust has been broken",
  "Communication shuts down or turns into criticism",
  "You're navigating a major life transition",
  "Emotional and physical intimacy has faded",
  "Parenting conflict and blended families create stress",
  "You feel more alone together",
  "You want a stronger, more connected relationship",
];

const modalities: { icon: LucideIcon; name: string }[] = [
  { icon: Blend, name: "Gottman Method" },
  { icon: UserRound, name: "Attachment-Focused" },
  { icon: Leaf, name: "Emotionally Focused" },
  { icon: Waves, name: "Somatic & Body-Oriented" },
  { icon: Flower2, name: "Mindfulness-Informed" },
  { icon: Sparkle, name: "Existential & Depth-Oriented" },
];

const feeItems = [
  "$300 per 50-minute couples therapy session",
  "Private pay",
  "Out-of-network benefits may be available with eligible insurance plans",
  "HSA/FSA accepted",
  "Free 15-minute phone consultation",
];

const heroImage = {
  src: "/couples-hero.png",
  alt: "Sunlit interior with a ceramic vase and olive branch",
};

const label =
  "text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50";
const sectionTitle = "font-serif text-3xl md:text-5xl leading-tight font-light";
const bodyText =
  "text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light";

function StarDivider() {
  return (
    <div className="flex items-center gap-6" aria-hidden="true">
      <div className="h-px flex-1 bg-[var(--color-stone-900)]/12" />
      <Sparkle
        size={14}
        strokeWidth={1}
        className="text-[var(--color-olive-700)]/70 shrink-0"
      />
      <div className="h-px flex-1 bg-[var(--color-stone-900)]/12" />
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 bg-[var(--color-olive-700)] text-white px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-olive-800)] transition-colors duration-300"
    >
      <span>{children}</span>
      <ArrowRight
        size={13}
        className="group-hover:translate-x-1 transition-transform"
      />
    </a>
  );
}

function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-block border border-[var(--color-stone-900)]/25 px-7 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-stone-900)] hover:text-white hover:border-[var(--color-stone-900)] transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default function CouplesTherapyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-stone-50)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-12 py-4 md:py-7 bg-[var(--color-stone-50)]/90 backdrop-blur-md border-b border-[var(--color-stone-900)]/5 flex items-center justify-between gap-4">
        <a href="/" className="uppercase hover:opacity-70 transition-opacity">
          <span className="block text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] font-medium whitespace-nowrap">
            Depth Psychotherapy
          </span>
          <span className="block mt-1 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.14em] text-[var(--color-stone-800)]/60 whitespace-nowrap">
            Lorne Lieberman, LMFT
          </span>
        </a>

        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-[0.16em] uppercase text-[var(--color-stone-800)]/70 hover:text-[var(--color-stone-900)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="/#schedule"
            className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase whitespace-nowrap border border-[var(--color-stone-900)]/25 px-3.5 sm:px-4 py-2 sm:py-2.5 hover:bg-[var(--color-stone-900)] hover:text-white transition-colors"
          >
            <span className="sm:hidden">Consultation</span>
            <span className="hidden sm:inline">Schedule Consultation</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-12 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`${label} mb-5 md:mb-7`}
            >
              Couples Therapy in Los Angeles
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[11vw] sm:text-5xl md:text-7xl lg:text-[86px] leading-[0.95] tracking-tight font-light"
            >
              Therapy for Relationships
              <span className="block italic text-[var(--color-olive-700)]">
                That Feel Stuck
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`mt-6 md:mt-9 max-w-2xl ${bodyText}`}
            >
              Depth-oriented couples therapy for partners who want to understand
              each other more deeply, communicate more clearly, and build a
              stronger, more secure connection.
            </motion.p>

            {/* Mobile-only band: the oval in the side column would push the headline below the fold. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-9 -mx-6 sm:mx-0"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-[30vh] max-h-[240px] object-cover object-center sm:rounded-3xl"
              />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-9 md:mt-12 space-y-4 md:space-y-5"
            >
              {heroHighlights.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 text-base font-light text-[var(--color-stone-800)]/85"
                >
                  <Icon
                    size={16}
                    strokeWidth={1.2}
                    className="text-[var(--color-olive-700)]/80 shrink-0"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-9 md:mt-10"
            >
              <PrimaryButton href="/#schedule">
                Request a Free Consultation
              </PrimaryButton>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-[min(80vw,400px)] aspect-[4/5] rounded-[50%] overflow-hidden"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT BRINGS COUPLES IN */}
      <section
        id="philosophy"
        className="px-6 md:px-12 pb-14 md:pb-16 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <StarDivider />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-14">
            <div className="md:col-span-6">
              <h2 className={sectionTitle}>
                You may love each other
                <span className="block italic text-[var(--color-olive-700)]">
                  and still feel disconnected
                </span>
              </h2>
              <p className={`mt-9 max-w-sm ${bodyText}`}>
                Many couples find themselves repeating the same disagreements,
                feeling more like roommates than partners, or struggling to
                repair after conflict. Therapy can help you understand these
                patterns and create a new way forward — together.
              </p>
            </div>

            <div className="md:col-span-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[var(--color-olive-700)]/45 text-[var(--color-olive-700)]">
                      <Check size={9} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-12 md:py-5 px-6 md:px-12 bg-[var(--color-stone-100)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-[min(62vw,400px)] aspect-square rounded-full overflow-hidden">
              <img
                src="/couples-approach.png"
                alt="Two people holding hands in a warmly lit room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className={`${label} mb-6`}>
              A Deeper Approach to Couples Therapy
            </p>
            <h2 className={sectionTitle}>
              Understand. Connect.
              <span className="block italic text-[var(--color-olive-700)]">
                Create the relationship you want.
              </span>
            </h2>
            <p className={`mt-9 max-w-md ${bodyText}`}>
              My approach goes beyond managing conflict. We look at the deeper
              attachment patterns, emotional wounds, and protective strategies
              that keep you stuck, so you can relate to each other in a new way.
            </p>
            <div className="mt-9">
              <GhostButton href="#clinical-focus">
                Learn More About My Approach
              </GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* MODALITIES */}
      <section
        id="clinical-focus"
        className="py-11 md:py-12 px-6 md:px-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto">
          <p className={`${label} text-center mb-9`}>
            An Integrative, Relational Approach
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 divide-[var(--color-stone-900)]/10 sm:divide-x">
            {modalities.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center gap-4 px-4"
              >
                <Icon
                  size={26}
                  strokeWidth={1}
                  className="text-[var(--color-olive-700)]"
                />
                <span className="text-[11px] tracking-[0.1em] uppercase leading-relaxed text-[var(--color-stone-800)]/70">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPIST */}
      <section
        id="therapist"
        className="pt-12 pb-12 md:pb-10 px-6 md:px-12 border-t border-[var(--color-stone-900)]/5 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className={`${label} mb-6`}>Meet Lorne Lieberman, LMFT</p>
            <h2 className={`${sectionTitle} max-w-2xl`}>
              I help couples move from disconnection and conflict toward deeper
              understanding, trust, and intimacy.
            </h2>
            <p className="mt-7 text-base tracking-[0.04em] font-medium">
              Licensed Marriage and Family Therapist
            </p>
            <p className={`mt-3 max-w-md ${bodyText}`}>
              Over a decade of experience helping individuals and couples build
              more meaningful relationships.
            </p>
            <div className="mt-7">
              <GhostButton href="/#therapist">
                Learn More About Lorne
              </GhostButton>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-[min(72vw,340px)] aspect-[5/7] overflow-hidden">
              <img
                src="/lorne-portrait.jpg"
                alt="Lorne Lieberman, LMFT"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEES + CTA */}
      <section id="rates" className="pb-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-[var(--color-stone-100)]/60 border border-[var(--color-stone-900)]/10 p-8 md:p-11">
            <p className={`${label} mb-4`}>Investment</p>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight font-light mb-5">
              Fees &amp; Payment
            </h3>
            <ul className="space-y-2">
              {feeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light"
                >
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-[var(--color-olive-700)]/70 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="consultation"
            className="bg-[var(--color-stone-100)]/60 border border-[var(--color-stone-900)]/10 p-8 md:p-11 flex flex-col justify-center scroll-mt-24"
          >
            <p className={`${label} mb-4`}>Ready to take the next step?</p>
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-5">
              Let&apos;s talk.
            </h3>
            <p className={`max-w-sm mb-7 ${bodyText}`}>
              A free 15-minute consultation is a chance to talk about what
              you&apos;re looking for and see if working together feels like a
              fit.
            </p>
            <div>
              <PrimaryButton href="/#schedule">
                Schedule Your Free Consultation
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 bg-[var(--color-stone-900)] text-[var(--color-stone-50)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div>
            <p className="uppercase text-[11px] tracking-[0.2em] mb-2">
              Depth Psychotherapy
            </p>
            <p className="text-[11px] text-white/50">
              {siteContent.footerName} · {siteContent.footerLicense} ·{" "}
              {siteContent.footerLocation}
            </p>
          </div>
          <a
            href={`mailto:${siteContent.footerEmail}`}
            className="text-[11px] text-white/60 hover:text-white transition-colors"
          >
            {siteContent.footerEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}
