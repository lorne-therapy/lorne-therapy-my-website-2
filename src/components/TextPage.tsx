import type { ReactNode } from 'react';
import SiteNav from './SiteNav';
import SiteFooter from './SiteFooter';
import { Eyebrow } from './shared';
import type { PageKey } from '../routes';

/** Simple long-form page shell for notices and policies. */
export default function TextPage({
  current,
  eyebrow,
  title,
  children,
}: {
  current: PageKey;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-stone-100)] text-[var(--color-stone-900)] selection:bg-[var(--color-olive-700)] selection:text-white">
      <SiteNav current={current} />
      <main className="pt-36 md:pt-44 pb-24 px-6 md:px-12">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-14 shadow-sm">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-10">{title}</h1>
          <div className="prose-depth space-y-5 text-[15px] md:text-base leading-relaxed text-[var(--color-stone-800)]">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
