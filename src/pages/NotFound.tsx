import TextPage from '../components/TextPage';
import { ConsultationCTA } from '../components/shared';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/couples-therapy/', label: 'Couples Therapy' },
  { href: '/trauma-emdr-therapy/', label: 'Trauma & EMDR Therapy' },
  { href: '/#rates', label: 'Rates & FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export default function NotFound() {
  return (
    <TextPage
      current="notfound"
      eyebrow="404"
      title={
        <>
          This page <span className="italic text-[var(--color-olive-700)]">couldn&rsquo;t be found.</span>
        </>
      }
    >
      <p>The page may have moved when the site was updated. These are the main pages:</p>
      <ul className="space-y-2">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="underline underline-offset-4 hover:text-[var(--color-olive-700)]">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="pt-4">
        <ConsultationCTA location="404" />
      </div>
    </TextPage>
  );
}
