import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { projects } from "@/data/projects";
import { skillsByCategory } from "@/data/skills";

const mainLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const projectMeta: Record<
  string,
  { kind: string; number: string; liveUrl?: string }
> = {
  salaryCalculator: {
    kind: "Web app",
    number: "01",
    liveUrl: "https://calculator.voxxai.nl",
  },
  PirateGame: { kind: "Game prototype", number: "02" },
  ProjectC: { kind: "Full-stack platform", number: "03" },
  Django_Project: { kind: "Learning build", number: "04" },
  PongGame: { kind: "Game prototype", number: "05" },
  SpaceDefence: { kind: "Game prototype", number: "06" },
};

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  );
}

export default function HomePage() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Voxxai, back to top">
          VOXXAI<span className="wordmark-mark">//</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {mainLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <span className="header-role">SOFTWARE ENGINEER · NL</span>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="section-label">01 / GILIAN KRANENDONK</p>
            <h1 id="hero-title">
              I build software
              <span>that earns its place.</span>
            </h1>
            <p className="hero-intro">
              Software Engineer at Spaux. I work across web apps, APIs and
              product systems—then spend the rest of my screen time on games,
              anime and whatever tech rabbit hole wins that week.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
              <ExternalLink
                href="https://github.com/Voxxai"
                className="button button-secondary"
              >
                GitHub
              </ExternalLink>
            </div>

            <dl className="quick-facts">
              <div>
                <dt>Currently</dt>
                <dd>Building at Spaux</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>
                  <MapPin aria-hidden="true" size={14} /> Spijkenisse, NL
                </dd>
              </div>
              <div>
                <dt>Off-hours</dt>
                <dd>Games · anime · homelab</dd>
              </div>
            </dl>
          </div>

          <figure className="profile-block">
            <div className="profile-offset" aria-hidden="true" />
            <div className="profile-image-wrap">
              <Image
                src="/jinx-avatar.webp"
                alt="Jinx artwork used as Voxxai's profile image"
                fill
                priority
                sizes="(max-width: 900px) 82vw, 420px"
                className="profile-image"
              />
            </div>
            <figcaption>
              <span>VØXX⟁I</span>
              <span>PLAYER_01</span>
            </figcaption>
          </figure>
        </section>

        <section className="work-section section-frame" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / SELECTED WORK</p>
              <h2>Useful builds, not filler.</h2>
            </div>
            <p>
              A mix of shipped tools, full-stack school work and game
              prototypes. Every project taught me something I still use.
            </p>
          </div>

          <article className="featured-project">
            <div className="project-index">
              <span>{projectMeta[featuredProject.name]?.number}</span>
              <span>{projectMeta[featuredProject.name]?.kind}</span>
            </div>
            <div className="featured-project-copy">
              <div className="project-title-row">
                <h3>{featuredProject.name}</h3>
                <span className="status-badge">ACTIVE</span>
              </div>
              <p>{featuredProject.description}</p>
              <div className="project-footer">
                <span>{featuredProject.language}</span>
                <div className="project-links">
                  {projectMeta[featuredProject.name]?.liveUrl && (
                    <ExternalLink
                      href={projectMeta[featuredProject.name].liveUrl!}
                      className="text-link"
                    >
                      Live app
                    </ExternalLink>
                  )}
                  <ExternalLink
                    href={featuredProject.html_url}
                    className="text-link"
                  >
                    Source
                  </ExternalLink>
                </div>
              </div>
            </div>
          </article>

          <div className="project-list">
            {otherProjects.map((project) => {
              const meta = projectMeta[project.name];

              return (
                <ExternalLink
                  key={project.name}
                  href={project.html_url}
                  className="project-row"
                >
                  <span className="project-number">{meta?.number}</span>
                  <div>
                    <span className="project-kind">{meta?.kind}</span>
                    <h3>{project.name.replace("_", " ")}</h3>
                  </div>
                  <p>{project.description}</p>
                  <span className="project-language">{project.language}</span>
                </ExternalLink>
              );
            })}
          </div>
        </section>

        <section className="about-section section-frame" id="about">
          <div className="about-lead">
            <p className="section-label">03 / ABOUT</p>
            <h2>Engineer by trade. Tinkerer by default.</h2>
          </div>
          <div className="about-copy">
            <p className="about-statement">
              I&apos;m Gilian, better known online as Voxxai. I graduated in
              HBO-ICT Informatica and now build software professionally at
              Spaux.
            </p>
            <div className="about-columns">
              <p>
                I like code that is readable, interfaces that get out of the
                way and systems that remain understandable six months later.
                My work sits between frontend, backend and the product choices
                connecting both.
              </p>
              <p>
                Away from work, you&apos;ll usually find me gaming, keeping an eye
                on new hardware and AI, or turning my Raspberry Pi into one
                more thing it probably wasn&apos;t bought for.
              </p>
            </div>
          </div>
        </section>

        <section className="stack-section section-frame" id="stack">
          <div className="section-heading stack-heading">
            <div>
              <p className="section-label">04 / TOOLKIT</p>
              <h2>What I reach for.</h2>
            </div>
            <p>
              The stack changes with the problem. These are the tools and
              patterns I&apos;m most comfortable shipping with today.
            </p>
          </div>

          <div className="stack-grid">
            {skillsByCategory.map((group, index) => (
              <article key={group.category} className="stack-group">
                <span className="stack-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{group.category}</h3>
                <p>{group.items.join(" / ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-frame" id="contact">
          <p className="section-label">05 / SAY HELLO</p>
          <div className="contact-layout">
            <h2>Got something worth building?</h2>
            <div className="contact-copy">
              <p>
                If you want to talk code, a project, or a particularly cursed
                homelab idea, my inbox is open.
              </p>
              <a className="email-link" href="mailto:gilkranendonk@gmail.com">
                gilkranendonk@gmail.com
                <ArrowUpRight aria-hidden="true" size={26} />
              </a>
              <div className="social-links" aria-label="Social links">
                <ExternalLink href="https://github.com/Voxxai">
                  <Github aria-hidden="true" size={18} /> GitHub
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/gilian-kranendonk/">
                  <Linkedin aria-hidden="true" size={18} /> LinkedIn
                </ExternalLink>
                <a href="mailto:gilkranendonk@gmail.com">
                  <Mail aria-hidden="true" size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <span>© {new Date().getFullYear()} Gilian Kranendonk</span>
        <span>Designed &amp; built by Voxxai</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
