import Link from "next/link";
import { footer, site } from "@/lib/content";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-wide px-6 md:px-10 lg:px-14">
        {/* Acknowledgement of Country */}
        <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[2fr_3fr] md:gap-20">
          <p className="eyebrow text-coolGrey">Acknowledgement of Country</p>
          <p className="max-w-prose2 text-body text-coolGrey-soft pretty">
            {footer.acknowledgement}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Wordmark variant="stacked" />
            <p className="mt-6 max-w-prose2 text-ui text-coolGrey-soft pretty">
              {footer.brand.line} {footer.brand.sister}
            </p>
            <address className="mt-8 not-italic text-ui text-coolGrey leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city} {site.address.postcode}
              <br />
              {site.address.country}
            </address>
          </div>

          {(["explore", "contact", "legal"] as const).map((key) => {
            const col = footer.columns[key];
            return (
              <div key={key} className="md:col-span-2">
                <p className="eyebrow text-coolGrey">{col.title}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ui text-coolGrey-soft transition-colors duration-250 ease-editorial hover:text-teal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="md:col-span-2">
            <p className="eyebrow text-coolGrey">Follow</p>
            <ul className="mt-5 flex flex-col gap-3">
              {footer.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ui text-coolGrey-soft transition-colors duration-250 ease-editorial hover:text-teal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sign-off tagline — brand voice line above legal bar */}
        <div className="border-t border-white/10 pt-14 pb-10">
          <p className="eyebrow text-coolGrey-warm">The AI Commercial Department for Athletes</p>
          <p className="display mt-4 max-w-[34ch] text-h1Lg leading-[1.0] text-bone md:max-w-none balance">
            Built for athletes <span className="text-teal">who refuse to wait.</span>
          </p>
        </div>

        {/* Base bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-caption text-white/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.parent.name}. All rights reserved.
          </span>
          <span className="tabular text-[11px] tracking-[0.16em] uppercase">
            coach.thecommercialathlete.com.au
          </span>
        </div>
      </div>
    </footer>
  );
}
