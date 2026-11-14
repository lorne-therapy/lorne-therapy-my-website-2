import TextPage from '../components/TextPage';
import { site, fullAddress } from '../site';

const EFFECTIVE_DATE = 'November 14, 2026';

export default function Privacy() {
  return (
    <TextPage
      current="privacy"
      eyebrow="Website Privacy Notice"
      title={
        <>
          How this website <span className="italic text-[var(--color-olive-700)]">handles your information</span>
        </>
      }
    >
      <p className="text-sm text-[var(--color-stone-800)]/75">Effective {EFFECTIVE_DATE}</p>
      <p>
        This notice covers the depth.la website, operated by {site.legalName}, dba {site.dba} ({site.brandName}). It
        is separate from the HIPAA Notice of Privacy Practices you receive when you begin therapy, which governs your
        clinical records.
      </p>

      <h2 className="font-serif text-2xl font-light pt-4">Information collected</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Analytics.</strong> The site uses Google Analytics to understand how pages are used (for example,
          which pages are visited and which buttons are clicked). Google Analytics uses cookies and collects device,
          browser, approximate location, and usage information. Advertising personalization and Google signals are
          turned off, and the site does not send names, emails, phone numbers, or anything you type to Google
          Analytics.
        </li>
        <li>
          <strong>Scheduling.</strong> When you book a consultation, the booking tool (Google Calendar appointment
          scheduling) collects the name, email, and any details you enter so the appointment can be arranged.
        </li>
        <li>
          <strong>Contact and inquiries.</strong> If you call, email, or send the inquiry form, the information you
          choose to share is used only to respond to you and arrange services. Inquiry form responses are stored in the
          practice&rsquo;s Google Workspace account, which is covered by a HIPAA business associate agreement.
        </li>
      </ul>

      <h2 className="font-serif text-2xl font-light pt-4">How it&rsquo;s used and shared</h2>
      <p>
        Information is used to operate and improve the website, respond to inquiries, and schedule appointments. It is
        not sold or shared for advertising. Service providers that host the site, scheduling, and analytics process
        information on the practice&rsquo;s behalf.
      </p>

      <h2 className="font-serif text-2xl font-light pt-4">Your choices</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          You can block or delete cookies in your browser settings, or install Google&rsquo;s{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Analytics opt-out add-on
          </a>
          .
        </li>
        <li>
          Do Not Track: browsers&rsquo; &ldquo;Do Not Track&rdquo; signals are not currently acted on, because there is
          no common standard for them. The cookie and opt-out choices above are available instead.
        </li>
        <li>
          To ask what information you have shared through the site, or to request a correction or deletion, email{' '}
          <a href={`mailto:${site.email}`} className="underline underline-offset-2">
            {site.email}
          </a>
          .
        </li>
      </ul>

      <h2 className="font-serif text-2xl font-light pt-4">Please don&rsquo;t send sensitive details online</h2>
      <p>
        Email and website forms aren&rsquo;t the right place for clinical details. Please keep messages brief and save
        personal health information for the consultation or session. If you are in crisis, call or text 988 or call 911.
      </p>

      <h2 className="font-serif text-2xl font-light pt-4">Changes and contact</h2>
      <p>
        If this notice changes, the updated version and its effective date will be posted on this page. Questions:{' '}
        <a href={`mailto:${site.email}`} className="underline underline-offset-2">
          {site.email}
        </a>
        ,{' '}
        <a href={`tel:${site.phone.tel}`} className="underline underline-offset-2">
          {site.phone.display}
        </a>
        , or by mail to {fullAddress}.
      </p>
    </TextPage>
  );
}
