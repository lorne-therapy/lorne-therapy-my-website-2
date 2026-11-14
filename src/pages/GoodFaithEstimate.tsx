import TextPage from '../components/TextPage';
import { site } from '../site';

export default function GoodFaithEstimate() {
  return (
    <TextPage
      current="gfe"
      eyebrow="No Surprises Act"
      title={
        <>
          Your Right to a <span className="italic text-[var(--color-olive-700)]">Good Faith Estimate</span>
        </>
      }
    >
      <p>
        You have the right to receive a &ldquo;Good Faith Estimate&rdquo; explaining how much your medical care will
        cost.
      </p>
      <p>
        Under the law, health care providers need to give patients who don&rsquo;t have insurance or who are not using
        insurance an estimate of the bill for medical items and services.
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or
          services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees.
        </li>
        <li>
          Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before
          your medical service or item. You can also ask your health care provider, and any other provider you choose,
          for a Good Faith Estimate before you schedule an item or service.
        </li>
        <li>If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
        <li>Make sure to save a copy or picture of your Good Faith Estimate.</li>
      </ul>
      <p>
        For questions or more information about your right to a Good Faith Estimate, visit{' '}
        <a
          href="https://www.cms.gov/nosurprises"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          www.cms.gov/nosurprises
        </a>{' '}
        or call{' '}
        <a href="tel:+18009853059" className="underline underline-offset-2">
          1-800-985-3059
        </a>
        .
      </p>

      <h2 className="font-serif text-2xl md:text-3xl font-light pt-6">How this works in my practice</h2>
      <p>
        Psychotherapy is usually an ongoing service, so a Good Faith Estimate for therapy typically reflects the session
        fee and an expected number of sessions over a period of up to 12 months. Current fees:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {site.rates.map((r) => (
          <li key={r.service}>
            {r.service} ({r.duration}): {r.price}
          </li>
        ))}
      </ul>
      <p>
        I provide a written Good Faith Estimate before or at the start of our work, and an updated one whenever the
        expected services change or you ask for one. The actual number of sessions depends on your goals and progress,
        and you can pause or end therapy at any time.
      </p>
      <p className="text-sm text-[var(--color-stone-800)]/75">
        {site.legalName}, dba {site.dba} ({site.brandName}) · {site.license.type} #{site.license.number} ·{' '}
        <a href={`tel:${site.phone.tel}`} className="underline underline-offset-2">
          {site.phone.display}
        </a>
      </p>
    </TextPage>
  );
}
