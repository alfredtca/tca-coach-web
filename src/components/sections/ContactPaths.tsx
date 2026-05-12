import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/content";

export function ContactPaths() {
  return (
    <Section tone="ink" pad="default" grain>
      <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/5 md:grid-cols-3">
        {contact.paths.map((path, i) => (
          <Reveal as="li" key={path.id} delay={i * 110} className="h-full">
            <Card
              tone="ink"
              as="article"
              className="h-full p-9 lg:p-11"
              highlight={path.id === "athletes"}
            >
              <p className="eyebrow text-coolGrey">{path.eyebrow}</p>
              <span className="display tabular mt-8 block text-[18px] tracking-[0.16em] text-coolGrey">
                {`0${i + 1}`}
              </span>
              <h3 className="display-section mt-3 text-h2 text-bone">
                {path.title}
              </h3>
              <p className="mt-6 text-body text-coolGrey-soft pretty">{path.body}</p>
              <span aria-hidden className="mt-auto block pt-12" />
              <div>
                <Button
                  href={path.cta.href}
                  variant={path.id === "athletes" ? "primary" : "ghost"}
                  size="md"
                  withArrow
                >
                  {path.cta.label}
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={400}>
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-coolGrey">{contact.office.title}</p>
            <p className="display mt-4 text-h2 text-bone">
              {contact.office.body}
            </p>
          </div>
          <div className="md:col-span-7 md:pl-10 md:border-l md:border-white/10">
            <p className="eyebrow text-coolGrey">Direct</p>
            <ul className="mt-5 grid gap-3 text-body text-coolGrey-soft">
              <li>
                Athletes —{" "}
                <a href="mailto:hello@thecommercialathlete.com.au" className="link-teal">
                  hello@thecommercialathlete.com.au
                </a>
              </li>
              <li>
                Sports organisations —{" "}
                <a
                  href="mailto:partnerships@thecommercialathlete.com.au"
                  className="link-teal"
                >
                  partnerships@thecommercialathlete.com.au
                </a>
              </li>
              <li>
                Press —{" "}
                <a href="mailto:press@thecommercialathlete.com.au" className="link-teal">
                  press@thecommercialathlete.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
