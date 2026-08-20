/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import siteContent from './content/data.json';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      if (window.location.hash !== '#schedule') {
        const id = window.location.hash.replace('#', '');
        if (id) {
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash === '#schedule') {
      window.scrollTo(0, 0);
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const menuLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'The Therapist', href: '#therapist' },
    { name: 'Clinical Focus', href: '#clinical-focus' },
    { name: 'Couples Therapy', href: '#couples-therapy' },
    { name: 'Rates & FAQ', href: '#rates' },
    { name: 'Schedule Consultation', href: '#schedule' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-500 text-[var(--color-stone-900)] ${
          isScrolled 
            ? 'py-4 bg-[var(--color-stone-100)]/90 backdrop-blur-md border-b border-[var(--color-stone-900)]/5 shadow-xs' 
            : 'py-6 bg-[var(--color-stone-100)]/80 backdrop-blur-xs'
        }`}
      >
        <a 
          href="#"
          onClick={(e) => {
            if (window.location.hash === '' || window.location.hash === '#') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex flex-col text-left group hover:opacity-80 transition-opacity"
        >
          <span className="text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.22em] font-medium uppercase text-[var(--color-stone-900)] leading-tight">
            DEPTH PSYCHOTHERAPY
          </span>
          <span className="text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.2em] uppercase text-[var(--color-stone-800)]/60 font-light mt-0.5">
            LORNE LIEBERMAN, LMFT
          </span>
        </a>

        {/* Desktop Horizontal Navigation matching header layout */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-[12px] tracking-[0.18em] uppercase font-medium text-[var(--color-stone-800)]/80">
          <a 
            href="#philosophy" 
            className="hover:text-[var(--color-stone-900)] hover:opacity-100 transition-colors"
          >
            Philosophy
          </a>
          <a 
            href="#therapist" 
            className="hover:text-[var(--color-stone-900)] hover:opacity-100 transition-colors"
          >
            Therapist
          </a>
          <a 
            href="#clinical-focus" 
            className="hover:text-[var(--color-stone-900)] hover:opacity-100 transition-colors"
          >
            Clinical Focus
          </a>
          <a 
            href="#couples-therapy" 
            className="hover:text-[var(--color-olive-700)] hover:opacity-100 transition-colors"
          >
            Couples Therapy
          </a>
          <a 
            href="#rates" 
            className="hover:text-[var(--color-stone-900)] hover:opacity-100 transition-colors"
          >
            Rates &amp; FAQ
          </a>
          <a 
            href="#schedule" 
            className="ml-2 px-4 py-2 border border-[var(--color-stone-900)]/70 text-[var(--color-stone-900)] hover:bg-[var(--color-stone-900)] hover:text-white transition-all duration-200"
          >
            Schedule Consultation
          </a>
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

      {/* Full-screen Menu Overlay */}
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
              className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity"
            >
              <span>Close</span>
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-8 md:gap-12">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-4xl md:text-5xl lg:text-7xl font-light hover:italic hover:text-[var(--color-olive-700)] text-center transition-all duration-300"
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

      {currentHash === '#schedule' ? (
        <section className="pt-32 md:pt-40 pb-32 px-6 md:px-12 bg-[var(--color-stone-100)] min-h-screen">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8 border-b border-[var(--color-stone-900)]/10 pb-4 inline-block px-8">Client Portal</h3>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-center leading-tight">
              Request a <span className="italic text-[var(--color-olive-700)]">Consultation</span>
            </h2>
            <p className="max-w-xl mx-auto text-center text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light mb-16">
              Select a time for a complimentary phone consultation to discuss your specific needs and see if we might be a good fit.
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
      ) : (
        <>
          {/* Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="vertical-text text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/60">
            {siteContent.heroLocationLabel}
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 lg:min-h-[100dvh]">
          <div className="lg:col-span-7 flex flex-col justify-center md:pl-16 lg:pl-20 xl:pl-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[11vw] sm:text-5xl md:text-7xl lg:text-[96px] leading-[0.95] tracking-tight font-light"
            >
              {siteContent.heroTitleLine1} <br />
              <span className="italic text-[var(--color-olive-700)] block ml-4 md:ml-6 lg:ml-8">{siteContent.heroTitleLine2}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 lg:mt-10 max-w-md text-sm md:text-base leading-relaxed text-[var(--color-stone-800)]/80 font-light"
            >
              {siteContent.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 lg:mt-12"
            >
              <a href={siteContent.heroCtaUrl} className="group inline-flex items-center gap-4 text-xs tracking-[0.15em] uppercase border-b border-[var(--color-stone-900)]/20 pb-2 hover:border-[var(--color-stone-900)] transition-colors">
                <span>{siteContent.heroCtaText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[45vh] lg:h-[80vh] w-full flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[400px] h-full max-h-[600px] oval-mask overflow-hidden relative"
            >
              <img 
                src={siteContent.heroImageUrl}
                alt={siteContent.heroImageAlt} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-bottom lg:object-center scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[var(--color-olive-700)]/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col justify-between">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">{siteContent.philosophyLabel}</h3>
              <div className="w-24 h-[1px] bg-[var(--color-stone-900)]/20 hidden md:block"></div>
            </div>
            
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                {siteContent.philosophyTitleLine1} <span className="italic text-[var(--color-olive-700)]">{siteContent.philosophyTitleLine2}</span> {siteContent.philosophyTitleLine3}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  {siteContent.philosophyDescription1}
                </p>
                <p>
                  {siteContent.philosophyDescription2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="therapist" className="py-32 px-6 md:px-12 bg-[var(--color-stone-50)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl">
                {/* Placeholder for uploaded photo */}
                <img 
                  src="/lorne-portrait.jpg" 
                  alt="Lorne Lieberman, LMFT" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">{siteContent.aboutLabel}</h3>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-8">
                {siteContent.aboutTitleLine1} <span className="italic text-[var(--color-olive-700)]">{siteContent.aboutTitleLine2}</span>
              </h2>
              <div className="space-y-6 text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light">
                <p>
                  {siteContent.aboutParagraph1}
                </p>
                <p>
                  {siteContent.aboutParagraph2}
                </p>
                <p>
                  {siteContent.aboutParagraph3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="clinical-focus" className="py-32 px-6 md:px-12 bg-[var(--color-stone-100)] border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50">{siteContent.clinicalFocusLabel}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--color-stone-900)]/20">
            {[
              { title: siteContent.service1Title, desc: siteContent.service1Description, href: undefined, cta: undefined },
              { title: siteContent.service2Title, desc: siteContent.service2Description, href: '#couples-therapy', cta: 'Explore Couples Therapy' },
              { title: siteContent.service3Title, desc: siteContent.service3Description, href: undefined, cta: undefined }
            ].map((service, i) => {
              const ContentWrapper = service.href ? 'a' : 'div';
              return (
                <ContentWrapper 
                  key={i} 
                  href={service.href}
                  className="group border-b md:border-b-0 md:border-r border-[var(--color-stone-900)]/20 last:border-r-0 p-8 md:p-12 hover:bg-white transition-colors duration-500 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] tracking-[0.2em] text-[var(--color-stone-800)]/40 mb-16 flex items-center justify-between">
                      <span>0{i + 1}</span>
                      {service.cta && (
                        <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--color-olive-700)] font-medium">
                          Dedicated Page
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-olive-700)] transition-colors">{service.title}</h4>
                    <p className="text-xs leading-relaxed text-[var(--color-stone-800)]/70">{service.desc}</p>
                  </div>
                  {service.cta && (
                    <div className="mt-8 pt-4 border-t border-[var(--color-stone-900)]/10 flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[var(--color-olive-700)] group-hover:translate-x-1 transition-all">
                      <span>{service.cta}</span>
                      <ArrowRight size={12} />
                    </div>
                  )}
                </ContentWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-stone-900)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--color-stone-800)]/50 mb-8">{siteContent.ratesLabel}</h3>
            </div>
            
            <div className="md:col-span-8">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-5xl leading-tight font-light mb-12">
                  {siteContent.ratesTitleLine1} <span className="italic text-[var(--color-olive-700)]">{siteContent.ratesTitleLine2}</span>
                </h2>
                
                <div className="space-y-12">
                  {siteContent.ratesList.map((rate: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-[var(--color-stone-900)]/10 pb-4">
                      <span className="text-sm tracking-wide uppercase">{rate.serviceName}</span>
                      <span className="font-serif text-2xl">{rate.price}</span>
                    </div>
                  ))}
                  
                  <div className="text-sm leading-relaxed text-[var(--color-stone-800)]/80 font-light space-y-4">
                    <p>
                      {siteContent.ratesDescription1}
                    </p>
                    <p>
                      {siteContent.ratesDescription2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-stone-900)] text-[var(--color-stone-50)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8">
              {siteContent.footerTitleLine1} <br />
              <span className="italic text-[var(--color-olive-700)]/80">{siteContent.footerTitleLine2}</span>
            </h2>
            <p className="text-sm text-[var(--color-stone-50)]/60 max-w-sm leading-relaxed mb-12">
              {siteContent.footerDescription}
            </p>
            <a 
              href={siteContent.footerCtaUrl}
              className="inline-block bg-[var(--color-stone-50)] text-[var(--color-stone-900)] px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-olive-700)] hover:text-white transition-colors duration-300"
            >
              {siteContent.footerCtaText}
            </a>
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

            <a href={`mailto:${siteContent.footerEmail}`} className="hover:text-white transition-colors pt-2 inline-block text-stone-300 normal-case">{siteContent.footerEmail}</a>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}
