"use client";

import { useState } from "react";

const priorities = [
  {
    number: "01",
    title: "Economic Opportunity",
    text: "Creating an economy where opportunity, dignity and prosperity are accessible to every Kenyan.",
  },
  {
    number: "02",
    title: "Social Justice",
    text: "Advancing equality, fairness and the protection of every citizen's rights and dignity.",
  },
  {
    number: "03",
    title: "Education",
    text: "Building a future where quality education opens doors for every generation.",
  },
  {
    number: "04",
    title: "Healthcare",
    text: "Supporting accessible, equitable and people-centered healthcare across Kenya.",
  },
  {
    number: "05",
    title: "Environment",
    text: "Protecting Kenya's natural resources while advancing sustainable development.",
  },
  {
    number: "06",
    title: "Good Governance",
    text: "Promoting accountable leadership, transparency and citizen-centered governance.",
  },
];

const values = ["Equality", "Justice", "Opportunity", "Dignity"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="/" className="brand" aria-label="The Equitable Party home">
            <span className="brand-mark">TEP</span>
            <span className="brand-name">
              THE EQUITABLE
              <strong>PARTY</strong>
            </span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#agenda" onClick={() => setMenuOpen(false)}>Our Agenda</a>
            <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
            <a href="#news" onClick={() => setMenuOpen(false)}>News</a>
            <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
          </nav>

          <a className="nav-cta" href="#join">Join TEP</a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-pattern" />

        <div className="container hero-content">
          <p className="eyebrow light">
            THE EQUITABLE PARTY · KENYA
          </p>

          <h1>
            A FAIRER
            <span>KENYA.</span>
          </h1>

          <p className="hero-copy">
            Building a just, sustainable and prosperous society where every
            Kenyan has the opportunity to thrive.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#agenda">
              Explore our agenda
              <span>↗</span>
            </a>
            <a className="button button-outline" href="#join">
              Join the movement
            </a>
          </div>

          <div className="hero-bottom">
            <span>01 — OUR VISION</span>
            <div className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      <section className="statement" id="about">
        <div className="container statement-grid">
          <div>
            <p className="eyebrow">01 / WHO WE ARE</p>
          </div>

          <div>
            <h2>
              Politics should create
              <em> opportunity,</em> not obstacles.
            </h2>

            <p className="large-copy">
              The Equitable Party is built around a simple belief: Kenya can
              become a fairer, more inclusive and prosperous society when every
              citizen has the opportunity to participate and succeed.
            </p>

            <a className="text-link" href="#agenda">
              Discover our vision <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">WHAT WE STAND FOR</p>
            <h2>Four principles.<br />One movement.</h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={value}>
                <span>0{index + 1}</span>
                <h3>{value}</h3>
                <div className="value-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agenda-section" id="agenda">
        <div className="container">
          <div className="agenda-top">
            <div>
              <p className="eyebrow">02 / OUR AGENDA</p>
              <h2>
                The Kenya
                <br />
                <em>we believe in.</em>
              </h2>
            </div>

            <p className="section-intro">
              Our national priorities focus on the issues that shape the
              everyday lives and future of Kenyans.
            </p>
          </div>

          <div className="priority-grid">
            {priorities.map((item) => (
              <article className="priority-card" key={item.number}>
                <span className="priority-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>

          <div className="agenda-footer">
            <a className="button button-dark" href="#resources">
              Explore our policies <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="impact-section" id="impact">
        <div className="container impact-inner">
          <div className="impact-heading">
            <p className="eyebrow light">03 / OUR IMPACT</p>
            <h2>
              Change is
              <br />
              <em>measurable.</em>
            </h2>
          </div>

          <div className="stats-grid">
            <div className="stat">
              <strong>50<span>+</span></strong>
              <p>Active community projects</p>
            </div>

            <div className="stat">
              <strong>100<span>+</span></strong>
              <p>Completed projects</p>
            </div>

            <div className="stat">
              <strong>3M<span>+</span></strong>
              <p>Nationwide members</p>
            </div>

            <div className="stat">
              <strong>15</strong>
              <p>Awards &amp; recognitions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section" id="leadership">
        <div className="container">
          <div className="leadership-top">
            <div>
              <p className="eyebrow">04 / LEADERSHIP</p>
              <h2>Leadership with<br /><em>purpose.</em></h2>
            </div>

            <a className="text-link" href="#leadership">
              Meet our leadership <span>→</span>
            </a>
          </div>

          <div className="leader-placeholder">
            <div className="leader-photo">
              <span>TEP</span>
            </div>
            <div className="leader-copy">
              <p className="eyebrow">THE EQUITABLE PARTY</p>
              <h3>People-centered<br />leadership.</h3>
              <p>
                Meet the people responsible for advancing the Party's vision,
                values and national agenda.
              </p>
              <a className="text-link" href="#leadership">
                View leadership profiles <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="container join-inner">
          <p className="eyebrow">05 / JOIN THE MOVEMENT</p>
          <h2>
            Kenya's future
            <br />
            needs <em>you.</em>
          </h2>
          <p>
            Be part of a movement working towards a fairer, more inclusive
            and prosperous Kenya.
          </p>
          <a className="button button-light" href="#contact">
            Join TEP <span>↗</span>
          </a>
        </div>
      </section>

      <section className="resources-section" id="resources">
        <div className="container resources-grid">
          <div>
            <p className="eyebrow">06 / RESOURCES</p>
            <h2>
              Everything you
              <br />
              need to <em>know.</em>
            </h2>
          </div>

          <div className="resource-list">
            <a href="#resources">
              <span>01</span>
              Party Constitution
              <strong>↗</strong>
            </a>
            <a href="#resources">
              <span>02</span>
              Election &amp; Nomination Rules
              <strong>↗</strong>
            </a>
            <a href="#resources">
              <span>03</span>
              Party Ideology
              <strong>↗</strong>
            </a>
            <a href="#resources">
              <span>04</span>
              Official Publications
              <strong>↗</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">07 / CONNECT</p>
            <h2>
              Let's build a
              <br />
              <em>fairer Kenya.</em>
            </h2>
          </div>

          <div className="contact-details">
            <p>
              Stay connected with The Equitable Party and follow our latest
              activities, announcements and community initiatives.
            </p>

            <a href="mailto:info@theequitableparty.org">
              info@theequitableparty.org
            </a>

            <a href="#contact">Contact the Party →</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="brand-mark">TEP</span>
            <div>
              <strong>THE EQUITABLE PARTY</strong>
              <p>TUSAWAZISHE.</p>
            </div>
          </div>

          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#agenda">Agenda</a>
            <a href="#leadership">Leadership</a>
            <a href="#impact">Impact</a>
            <a href="#resources">Resources</a>
            <a href="#join">Join TEP</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} The Equitable Party. Kenya.</span>
          <span>Built for a more equitable future.</span>
        </div>
      </footer>
    </main>
  );
}
