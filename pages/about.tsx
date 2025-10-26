import PageLayout from '../components/Layout';

export default function About() {
  return (
    <PageLayout>
      <section className="hero-card">
        <div className="profile-avatar" aria-hidden>
          L
        </div>
        <div className="hero-content">
          <h1>Lax Seshan</h1>
          <p className="lead">Chief Financial Officer (PRA Approved: SMF2) | Strategic Finance Leader</p>

          <p>
            Visionary financial executive with over two decades of distinguished leadership in global banking and wealth management. As CFO of SBI UK Limited, I drive strategic growth initiatives while ensuring robust regulatory compliance and risk management. Known for transforming financial operations and delivering sustainable shareholder value through strategic capital optimization and innovative governance frameworks.
          </p>

          <p style={{ marginTop: 8 }}>
            Track record of successful strategic initiatives includes: orchestrating a £500M+ branch-to-subsidiary transformation, achieving 40% improvement in RoCE through strategic capital reallocation, and establishing industry-leading governance frameworks recognized by the PRA. Expert in navigating complex regulatory landscapes while driving business growth and operational excellence.
          </p>

          <p style={{ marginTop: 8 }}>
            Currently serving on the Bank of England's Practitioner Panel, providing strategic insights on UK banking sector policy and regulatory frameworks. Proven ability to lead transformative change while maintaining strong relationships with boards, regulators, and stakeholders across the financial services ecosystem.
          </p>

          <p style={{ marginTop: 12 }} className="muted">
            ACMA, CGMA (CIMA, UK) • MBA (Finance), Krannert School of Management, Purdue University • Board Member, UK Finance
          </p>

          <div style={{ marginTop: 12 }}>
            <a href="/resume.docx" className="btn-primary" download>Download resume</a>
            <a href="/contact" className="btn-ghost">Contact</a>
          </div>
        </div>
      </section>

      <div className="container">
        <section style={{ marginTop: 20 }}>
          <div className="card">
            <h2>Strategic Leadership & Expertise</h2>
            <div style={{ marginTop: 12 }}>
              <h3 style={{ fontSize: '1.1em', marginBottom: '8px' }}>Executive Leadership</h3>
              <div style={{ marginBottom: '16px' }}>
                <span className="tech-badge">Strategic Planning & Execution</span>
                <span className="tech-badge">Board & Stakeholder Management</span>
                <span className="tech-badge">Regulatory Leadership</span>
                <span className="tech-badge">Change Management</span>
                <span className="tech-badge">Risk & Governance</span>
              </div>
              
              <h3 style={{ fontSize: '1.1em', marginBottom: '8px' }}>Financial Strategy</h3>
              <div style={{ marginBottom: '16px' }}>
                <span className="tech-badge">Capital Optimization</span>
                <span className="tech-badge">Treasury Management</span>
                <span className="tech-badge">M&A Integration</span>
                <span className="tech-badge">Business Planning</span>
                <span className="tech-badge">Performance Analytics</span>
              </div>

              <h3 style={{ fontSize: '1.1em', marginBottom: '8px' }}>Regulatory & Governance</h3>
              <div>
                <span className="tech-badge">PRA/FCA Relations</span>
                <span className="tech-badge">ICAAP/ILAAP</span>
                <span className="tech-badge">Basel Framework</span>
                <span className="tech-badge">Corporate Governance</span>
                <span className="tech-badge">Risk Management</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="card">
            <h2>Experience</h2>

            <div className="section-divider" />

            <h3 className="experience-heading" style={{ marginTop: 12 }}>
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M10 2H14V4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H10V2ZM5 8V20H19V8H5Z" />
                </svg>
              </span>
              State Bank of India (SBI UK Limited)
            </h3>
            <p className="muted">Finance Head / Chief Financial Officer (SMF2) — 2018 – Present</p>
            <ul>
              <li>Spearheaded £500M+ branch-to-subsidiary transformation, securing PRA authorization and establishing new governance framework while maintaining business continuity</li>
              <li>Achieved 40% improvement in Return on Capital Employed through strategic capital allocation and treasury optimization initiatives</li>
              <li>Led development of industry-recognized regulatory frameworks, earning commendation from PRA for innovative approach to risk management</li>
              <li>Drive strategic decision-making as key member of Executive Committee, with direct oversight of £2B+ balance sheet</li>
              <li>Transformed financial operations through digitization, reducing reporting cycle by 45% and enhancing data quality</li>
              <li>Successfully navigated complex regulatory landscape, maintaining zero material audit findings while supporting 25% business growth</li>
            </ul>

            <div className="section-divider" />

            <h3 className="experience-heading" style={{ marginTop: 12 }}>
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" />
                </svg>
              </span>
              State Bank of India — Head of Finance Workstream &amp; Program Manager — 2015 – 2018
            </h3>
            <ul>
              <li>Led Finance &amp; Tax workstreams for the UK subsidiary programme; managed governance, business planning and regulatory reporting deliverables.</li>
              <li>Designed MI and Board packs to streamline decision-making for the new bank launch and ensured timely regulatory submissions.</li>
              <li>Coordinated the customer migration into the new bank via Part VII process.</li>
            </ul>

            <div className="section-divider" />

            <h3 className="experience-heading" style={{ marginTop: 12 }}>
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L2 7V17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7L12 2ZM12 4.2L18 8V9H6V8L12 4.2Z" />
                </svg>
              </span>
              State Bank of India (London Branch) — Heads of Departments (Business Planning, MI/Analytics, Credit &amp; Products) — 2011 – 2015
            </h3>
            <ul>
              <li>Transformed the business towards digital channels, increasing online contribution significantly and launching buy-to-let and commercial mortgage platforms.</li>
              <li>Improved operational efficiency and customer satisfaction through end-to-end product and journey improvements.</li>
            </ul>

            <div className="section-divider" />

            <h3 className="experience-heading" style={{ marginTop: 12 }}>
              <span className="icon" aria-hidden>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 2L15 8H9L12 2ZM4 22H20L12 12L4 22Z" />
                </svg>
              </span>
              Citibank International Personal Bank, London — Products Director &amp; Head of Strategic Development — 2006 – 2011
            </h3>
            <ul>
              <li>Managed product P&amp;L and a team of 15+ specialists across wealth, lending and investment services.</li>
              <li>Launched advisory services for fixed income and treasury products, launched UCITS funds, and expanded product distribution through cross-selling strategies.</li>
            </ul>

            <div className="section-divider" />

            <h3 className="experience-heading" style={{ marginTop: 12 }}>Other Experience</h3>
            <p className="muted">Sr. Consultant — Banking &amp; Wealth Management (OrbiTech/Polaris); Executive — Wealth (Netfinex.com)</p>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <div className="card">
            <h2>Education &amp; Governance</h2>
            <p className="muted">ACMA, CGMA (CIMA, UK) • MBA (Finance &amp; Accounting), Krannert School of Management, Purdue University • BE</p>
            <div style={{ marginTop: 12 }}>
              <h3>Governance &amp; Non-Executive Roles</h3>
              <ul>
                <li>Member, Bank of England's Practitioner Panel (representing UK Finance members).</li>
                <li>Non-Executive Director / Governor, Cannon Lane Primary School, London.</li>
                <li>Non-Executive Director, Citigroup (UK) Pension Plan, London.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
