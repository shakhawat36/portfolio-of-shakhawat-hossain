import { ArrowRight, BadgeCheck, Mail, MapPin, Phone, Star } from "lucide-react";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroScene } from "@/components/hero-scene";
import { InteractiveLink } from "@/components/interactive-link";
import { ProjectShowcase } from "@/components/project-showcase";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SkillsGrid } from "@/components/skills-grid";
import { siteContent } from "@/content/site-content";

function SectionEyebrow({ children, color = "bg-[#FFD93D]" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`sticker ${color} rotate-[-2deg]`}>
      <Star className="h-4 w-4 fill-black stroke-[2.5px]" />
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden pb-12">
      <SiteHeader />

      <section id="home" className="section-shell pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Reveal className="space-y-8">
            <SectionEyebrow color="bg-[#FF6B6B]">{siteContent.eyebrow}</SectionEyebrow>

            <div className="space-y-6">
              <p className="sticker bg-white rotate-[2deg] text-xs">{siteContent.location}</p>
              <div className="space-y-3">
                <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-tight text-black md:text-[6.5rem] lg:text-[7.5rem]">
                  Md. Shakhawat
                </h1>
                <div className="flex flex-wrap items-end gap-3">
                  <span className="neo-outline text-5xl font-black uppercase leading-none md:text-7xl lg:text-[6.5rem]">
                    Hossain
                  </span>
                  <span className="sticker bg-[#C4B5FD] rotate-[3deg] text-lg md:text-xl">SEO</span>
                </div>
              </div>

              <div className="neo-panel-yellow max-w-3xl rotate-[-1deg] p-5 md:p-6">
                <p className="text-2xl font-black uppercase leading-tight text-black md:text-3xl">
                  {siteContent.headline}
                </p>
              </div>

              <div className="sticker bg-white rotate-[2deg] text-sm md:text-base">
                {siteContent.subtitle}
              </div>

              <div className="neo-panel max-w-3xl rotate-[1deg] p-5 md:p-6">
                <p className="text-lg font-bold leading-relaxed text-black md:text-xl">
                  {siteContent.heroCopy}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {siteContent.heroSkills.map((skill, index) => {
                  const colors = ["bg-white", "bg-[#FFD93D]", "bg-[#C4B5FD]", "bg-[#FF6B6B]"];
                  const rotates = ["rotate-[-2deg]", "rotate-[1deg]", "rotate-[3deg]", "rotate-[-1deg]"];
                  return (
                    <span key={skill} className={`sticker ${colors[index % colors.length]} ${rotates[index % rotates.length]}`}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <InteractiveLink className="button-primary w-full sm:w-auto" href="#projects">
                View Selected Work
                <ArrowRight className="h-4 w-4 stroke-[3px]" />
              </InteractiveLink>
              <InteractiveLink className="button-secondary w-full sm:w-auto" href={`mailto:${siteContent.email}`}>
                Contact Me
              </InteractiveLink>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="space-y-6 lg:pt-8">
            <div className="neo-panel rotate-[2deg] p-4">
              <HeroScene />
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {siteContent.heroStats.map((stat, index) => {
                const cardClasses = ["neo-panel-red rotate-[-2deg]", "neo-panel-yellow rotate-[2deg]", "neo-panel-violet rotate-[-1deg]"];
                return (
                  <div key={stat.label} className={`${cardClasses[index]} p-5`}>
                    <p className="text-4xl font-black uppercase leading-none text-black md:text-5xl">{stat.value}</p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-black">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <SectionEyebrow>About</SectionEyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="neo-panel-black rotate-[-1deg] p-6 md:p-8">
              <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">Professional Summary</h2>
            </div>

            <div className="space-y-6">
              {siteContent.aboutParagraphs.map((paragraph, index) => (
                <div key={paragraph} className={`${index % 2 === 0 ? "neo-panel" : "neo-panel-yellow"} p-5`}>
                  <p className="text-lg font-bold leading-relaxed text-black">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="detail-panel rotate-[-2deg]">
              <MapPin className="h-6 w-6 stroke-[3px]" />
              <div>
                <p className="detail-label">Based In</p>
                <p className="detail-value">{siteContent.basedIn}</p>
              </div>
            </div>
            <div className="detail-panel rotate-[2deg] bg-[#FFD93D]">
              <BadgeCheck className="h-6 w-6 stroke-[3px]" />
              <div>
                <p className="detail-label">Education</p>
                <p className="detail-value">
                  {siteContent.education.degree}
                  <span className="block text-sm">{siteContent.education.school}</span>
                </p>
              </div>
            </div>
            <div className="detail-panel rotate-[-1deg] bg-[#C4B5FD]">
              <Mail className="h-6 w-6 stroke-[3px]" />
              <div>
                <p className="detail-label">Email</p>
                <p className="detail-value break-all">{siteContent.email}</p>
              </div>
            </div>
            <div className="detail-panel rotate-[1deg] bg-[#FF6B6B]">
              <Phone className="h-6 w-6 stroke-[3px]" />
              <div>
                <p className="detail-label">Languages</p>
                <p className="detail-value">{siteContent.languages.join(" / ")}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <SectionEyebrow color="bg-[#C4B5FD]">Capabilities</SectionEyebrow>
              <div className="neo-panel-red inline-block rotate-[1deg] p-5">
                <h2 className="section-title">Core Capabilities</h2>
              </div>
            </div>
          </div>
          <SkillsGrid groups={siteContent.skillGroups} />
        </Reveal>
      </section>

      <section id="semantic-seo" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <SectionEyebrow color="bg-[#FFD93D]">Semantic SEO</SectionEyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="neo-panel-violet rotate-[-2deg] p-6 md:p-8">
              <h2 className="text-4xl font-black uppercase leading-[0.95] text-black md:text-6xl">
                {siteContent.semanticBlock.title}
              </h2>
              <p className="mt-5 text-lg font-bold leading-relaxed text-black">
                {siteContent.semanticBlock.blurb}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {siteContent.semanticBlock.skills.map((skill, index) => {
                const colors = ["bg-white", "bg-[#FFD93D]", "bg-[#C4B5FD]", "bg-[#FF6B6B]", "bg-white"];
                const rotates = ["rotate-[-2deg]", "rotate-[1deg]", "rotate-[3deg]", "rotate-[-1deg]", "rotate-[2deg]"];
                return (
                  <div
                    key={skill}
                    className={`border-4 border-black p-5 ${colors[index % colors.length]} ${rotates[index % rotates.length]}`}
                    style={{ boxShadow: "10px 10px 0 0 #000" }}
                  >
                    <p className="text-base font-black uppercase leading-relaxed text-black">{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="supporting-skills" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <SectionEyebrow color="bg-[#FF6B6B]">Supporting Skills</SectionEyebrow>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="neo-panel-yellow rotate-[2deg] p-6 md:p-8">
              <h2 className="text-4xl font-black uppercase leading-[0.95] text-black md:text-6xl">
                {siteContent.supportingSkills.title}
              </h2>
              <p className="mt-5 text-lg font-bold leading-relaxed text-black">
                {siteContent.supportingSkills.blurb}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {siteContent.supportingSkills.skills.map((skill, index) => {
                const colors = ["bg-white", "bg-[#C4B5FD]", "bg-[#FFD93D]", "bg-[#FF6B6B]"];
                const rotates = ["rotate-[-2deg]", "rotate-[1deg]", "rotate-[3deg]", "rotate-[-1deg]"];
                return (
                  <span
                    key={skill}
                    className={`sticker ${colors[index % colors.length]} ${rotates[index % rotates.length]} text-base`}
                    style={{ boxShadow: "8px 8px 0 0 #000" }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="experience" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <SectionEyebrow color="bg-[#FFD93D]">Journey</SectionEyebrow>
          <div className="neo-panel-black inline-block rotate-[-1deg] p-5">
            <h2 className="section-title text-white">Professional Experience</h2>
          </div>
          <ExperienceTimeline items={siteContent.experience} />
        </Reveal>
      </section>

      <section id="projects" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-5">
              <SectionEyebrow color="bg-[#FF6B6B]">Selected Work</SectionEyebrow>
              <div className="neo-panel-yellow inline-block rotate-[2deg] p-5">
                <h2 className="section-title">Projects & Results</h2>
              </div>
            </div>
            <div className="neo-panel-violet max-w-2xl rotate-[-2deg] p-5">
              <p className="text-base font-bold leading-relaxed text-black">
                Each project below comes from the supplied resume and portfolio, with the original supporting visuals preserved.
              </p>
            </div>
          </div>
          <ProjectShowcase projects={siteContent.projects} />
        </Reveal>
      </section>

      <section id="highlights" className="section-shell py-20 md:py-28">
        <Reveal className="space-y-8">
          <SectionEyebrow color="bg-[#C4B5FD]">Highlights</SectionEyebrow>
          <div className="neo-panel inline-block rotate-[1deg] p-5">
            <h2 className="section-title">Performance Snapshot</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.highlights.map((item, index) => {
              const cardClasses = ["bg-white rotate-[-2deg]", "bg-[#FFD93D] rotate-[2deg]", "bg-[#C4B5FD] rotate-[-1deg]", "bg-[#FF6B6B] rotate-[1deg]"];
              return (
                <article key={item.title} className={`highlight-strip ${cardClasses[index]}`}>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-black">{item.title}</p>
                  <p className="mt-6 text-5xl font-black uppercase text-black">{item.metric}</p>
                  <p className="mt-4 text-base font-bold leading-relaxed text-black">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell py-20 md:py-28">
        <Reveal className="neo-panel-black rotate-[-1deg] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-6">
              <SectionEyebrow color="bg-[#FFD93D]">Contact</SectionEyebrow>
              <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
                Open To SEO And Digital Marketing Opportunities
              </h2>
              <p className="max-w-3xl text-lg font-bold leading-relaxed text-white">
                Available for roles where SEO, reporting, and supporting digital marketing skills can contribute to sustainable organic growth.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveLink className="button-secondary w-full sm:w-auto" href={`mailto:${siteContent.email}`}>
                Start A Conversation
                <ArrowRight className="h-4 w-4 stroke-[3px]" />
              </InteractiveLink>
              <div className="neo-panel-yellow p-5 text-black">
                <p className="text-sm font-black uppercase">{siteContent.email}</p>
                <p className="mt-2 text-sm font-black uppercase">{siteContent.phone}</p>
                <p className="mt-2 text-sm font-black uppercase">{siteContent.address}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
