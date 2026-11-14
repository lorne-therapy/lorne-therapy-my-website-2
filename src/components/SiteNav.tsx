import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { site } from '../site';
import { trackEvent } from '../lib/analytics';
import type { PageKey } from '../routes';

const NAV_LINKS: { label: string; href: string; page?: PageKey }[] = [
  { label: 'About', href: '/#about' },
  { label: 'Individual', href: '/#individual' },
  { label: 'Couples', href: '/couples-therapy/', page: 'couples' },
  { label: 'Trauma & EMDR', href: '/trauma-emdr-therapy/', page: 'trauma' },
  { label: 'Creatives', href: '/therapy-for-creatives/', page: 'creatives' },
  { label: 'Rates & FAQ', href: '/#rates' },
];

export function Wordmark() {
  return (
    <a
      href="/"
      aria-label={`${site.brandName}, home`}
      className="flex flex-col text-left hover:opacity-80 transition-opacity"
    >
      <span className="text-[15px] md:text-[17px] tracking-[0.42em] font-medium uppercase text-[var(--color-stone-900)] leading-none">
        {site.brand}
      </span>
      <span className="text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap text-[var(--color-stone-800)]/70 mt-1.5">
        {site.brandTagline}
      </span>
    </a>
  );
}

export default function SiteNav({
  current,
  consultHref = '/contact/',
}: {
  current: PageKey;
  /** Where the "Free Consultation" button points (an in-page #schedule on landing pages). */
  consultHref?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const consultClick = (location: string) => () => {
    trackEvent('consultation_cta_click', { cta_location: location, page_key: current });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main"
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center gap-6 transition-all duration-500 text-[var(--color-stone-900)] ${
          isScrolled
            ? 'py-4 bg-[var(--color-stone-100)]/95 backdrop-blur-md border-b border-[var(--color-stone-900)]/5 shadow-xs'
            : 'py-6 bg-[var(--color-stone-100)]/85 backdrop-blur-xs'
        }`}
      >
        <Wordmark />

        <div className="hidden xl:flex items-center gap-6 2xl:gap-7 text-[11px] 2xl:text-[12px] tracking-[0.16em] uppercase font-medium whitespace-nowrap text-[var(--color-stone-800)]/85">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.page === current ? 'page' : undefined}
              className={`transition-colors hover:text-[var(--color-stone-900)] ${
                link.page === current ? 'text-[var(--color-olive-700)]' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.tel}`}
            onClick={() => trackEvent('phone_click', { link_location: 'header', page_key: current })}
            className="hidden 2xl:inline-flex items-center gap-2 normal-case tracking-[0.06em] text-[13px] hover:text-[var(--color-stone-900)]"
          >
            <Phone size={13} strokeWidth={1.5} aria-hidden="true" />
            {site.phone.display}
          </a>
          <a
            href={consultHref}
            onClick={consultClick('header')}
            className="ml-1 inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-olive-700)] text-white hover:bg-[var(--color-olive-800)] transition-colors"
          >
            Free Consultation <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-5">
          <a
            href={`tel:${site.phone.tel}`}
            onClick={() => trackEvent('phone_click', { link_location: 'header_mobile', page_key: current })}
            aria-label={`Call ${site.phone.display}`}
            className="p-1 hover:opacity-70"
          >
            <Phone size={17} strokeWidth={1.5} />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
          >
            <span>Menu</span>
            <Menu size={16} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[var(--color-stone-900)] text-[var(--color-stone-50)] flex flex-col justify-center items-center px-6 overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity cursor-pointer"
            >
              <span>Close</span>
              <X size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center gap-6 md:gap-9 py-20">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={link.page === current ? 'page' : undefined}
                  className={`font-serif text-4xl md:text-6xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300 ${
                    link.page === current ? 'italic text-[var(--color-olive-700)]' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={consultHref}
                onClick={consultClick('menu')}
                className="mt-4 inline-flex items-center gap-3 bg-[var(--color-stone-50)] text-[var(--color-stone-900)] px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[var(--color-olive-700)] hover:text-white transition-colors"
              >
                Schedule a Free Consultation <ArrowRight size={14} aria-hidden="true" />
              </a>
              <a
                href={`tel:${site.phone.tel}`}
                onClick={() => trackEvent('phone_click', { link_location: 'menu', page_key: current })}
                className="text-sm tracking-[0.08em] text-[var(--color-stone-50)]/80 hover:text-white"
              >
                {site.phone.display}
              </a>
              {site.clientPortalUrl && (
                <a
                  href={site.clientPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-50)]/60 hover:text-white"
                >
                  Client Portal (existing clients)
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
