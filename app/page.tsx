import { Entry } from "@/components/Entry";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { StatRow } from "@/components/StatRow";
import { Tag } from "@/components/Tag";
import { awards } from "@/content/awards";
import { education } from "@/content/education";
import { experience, experienceHeader } from "@/content/experience";
import { leadership } from "@/content/leadership";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { research } from "@/content/research";
import { scholarships } from "@/content/scholarships";
import { skills } from "@/content/skills";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  description: profile.summary,
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:text-accent"
      >
        Skip to content
      </a>
      <Nav />
      <Hero />

      <main id="main" className="col">
        <Section id="research" number="01" title="Research" className="gap-10 py-12">
          {research.map((r) => (
            <article key={r.title} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="m-0 text-lg font-bold">{r.title}</h3>
                <Tag>{r.badge}</Tag>
              </div>
              <p className="m-0 text-[13px] text-muted">{r.meta}</p>
              <p className="mx-0 mt-1 mb-0 text-[17px] leading-[1.6] italic">{r.finding}</p>
              <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </Section>

        <Section id="experience" number="02" title="Experience" className="gap-9 py-12">
          <div className="flex flex-col gap-1.5">
            <p className="m-0 text-lg font-bold">{experienceHeader.org}</p>
            <p className="m-0 text-[13px] text-muted">{experienceHeader.meta}</p>
          </div>
          {experience.map((e) => (
            <Entry
              key={e.date}
              label={e.date}
              className={e.separated ? "gap-y-2 border-t border-border pt-3" : "gap-y-2"}
            >
              <h3 className="m-0 text-[17px] font-bold">
                {e.title}
                {e.titleSuffix && <span className="font-normal text-muted"> {e.titleSuffix}</span>}
              </h3>
              {e.subtitle && <p className="m-0 text-[13px] text-muted">{e.subtitle}</p>}
              <p className="m-0">{e.description}</p>
              {e.stats && <StatRow parts={e.stats} className="text-[13px]" />}
              {e.stack && <p className="m-0 text-sm text-muted">{e.stack}</p>}
            </Entry>
          ))}
        </Section>

        <Section id="projects" number="03" title="Projects" className="gap-10 py-12">
          {projects.map((p, i) => (
            <FeaturedProject key={p.name} project={p} className={i > 0 ? "border-t border-border pt-10" : ""} />
          ))}
        </Section>

        <Section id="leadership" number="04" title="Leadership">
          {leadership.map((l) => (
            <Entry key={l.title} label={l.date} bodyClassName="flex flex-col gap-2.5">
              <h3 className="m-0 text-[17px] font-bold">{l.title}</h3>
              <StatRow parts={l.stats} className="text-[13px]" />
              <p className="m-0">{l.description}</p>
            </Entry>
          ))}
        </Section>

        <Section id="education" number="05" title="Education">
          {education.map((e) => (
            <Entry key={e.institution} label={e.date}>
              <h3 className="m-0 text-[17px] font-bold">{e.institution}</h3>
              <p className="m-0">{e.degree}</p>
              <StatRow parts={e.stats} className="text-[13px]" />
              <p className="m-0 text-sm text-muted">{e.modules}</p>
            </Entry>
          ))}
        </Section>

        <Section id="scholarships" number="06" title="Scholarships">
          {scholarships.map((s) => (
            <Entry key={s.title} label={s.date}>
              <h3 className="m-0 text-[17px] font-bold">{s.title}</h3>
              <p className="m-0">{s.description}</p>
            </Entry>
          ))}
        </Section>

        <Section id="awards" number="07" title="Awards">
          <div className="flex flex-col">
            {awards.map((a, i) => (
              <Entry
                key={a.title}
                label={a.date}
                className={`gap-y-1 border-t border-border py-[14px] ${i === awards.length - 1 ? "border-b" : ""}`}
                labelClassName="pt-0.5"
                bodyClassName=""
              >
                <p className="m-0 font-bold">{a.title}</p>
                <p className="m-0 text-sm text-muted">{a.detail}</p>
              </Entry>
            ))}
          </div>
        </Section>

        <Section id="skills" number="08" title="Skills">
          {skills.map((s) => (
            <Entry key={s.label} label={s.label} labelClassName="" bodyClassName="">
              <p className="m-0">{s.items}</p>
            </Entry>
          ))}
        </Section>

        <Section id="contact" title="Contact" className="gap-5 pt-20 pb-12">
          <p className="m-0 text-muted">{profile.contactBlurb}</p>
          <a
            href={`mailto:${profile.email}`}
            className="text-[30px] leading-[1.3] font-bold break-words text-accent [overflow-wrap:anywhere]"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-x-6 text-[15px] font-medium">
            <a href={profile.github} className="flex min-h-11 items-center">
              GitHub
            </a>
            <a href={profile.linkedin} className="flex min-h-11 items-center">
              LinkedIn
            </a>
            <a href={profile.cv} download className="flex min-h-11 items-center">
              Download CV
            </a>
          </div>
        </Section>
      </main>

      <Footer />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
