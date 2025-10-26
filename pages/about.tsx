import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="card hero">
        <div className="profile-avatar" aria-hidden>
          L
        </div>
        <div className="hero-content">
          <h1>Lax Seshan</h1>
          <p className="lead">Chief Financial Officer (PRA Approved: SMF2)</p>

          <p>
            Results-driven finance executive with 20+ years’ experience in banking and wealth management. Experienced in leading Financial Control, FP&A, Regulatory Reporting and Treasury functions. Demonstrated ability to translate strategy into action, simplify governance, and deliver measurable improvements in profitability and regulatory compliance.
          </p>

          <p style={{ marginTop: 8 }}>
            Notable achievements include leading the successful launch of a new UK bank (branch-to-subsidiary migration), consolidating reporting platforms and governance frameworks, and materially improving financial performance through strategic capital and liquidity management.
          </p>

          <p style={{ marginTop: 12 }} className="muted">
            Qualifications: ACMA, CGMA (CIMA, UK) • MBA (Finance), Krannert School of Management, Purdue University • BE
          </p>

          <p style={{ marginTop: 12 }}>
            <a href="/resume.docx" className="nav-link" download>Download resume</a>
          </p>
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="card">
          <h2>Areas of Expertise</h2>
          <div style={{ marginTop: 12 }}>
            <span className="tech-badge">Financial Control</span>
            <span className="tech-badge">FP&amp;A</span>
            <span className="tech-badge">Regulatory Reporting</span>
            <span className="tech-badge">Treasury &amp; Liquidity</span>
            <span className="tech-badge">Business Planning</span>
            <span className="tech-badge">Program &amp; Change Management</span>
            <span className="tech-badge">MI / Product Management</span>
            <span className="tech-badge">Governance &amp; NED roles</span>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 20 }}>
        <div className="card">
          <h2>Experience</h2>

          <h3 style={{ marginTop: 12 }}>State Bank of India (SBI UK Limited)</h3>
          <p className="muted">Finance Head / Chief Financial Officer (SMF2) — 2018 – Present</p>
          <ul>
            <li>Engage with PRA, Board, external auditors and group stakeholders on regulatory, capital and liquidity matters.</li>
            <li>Chair ALCO and serve on ExCo/ManCo, Risk and Investment committees; regular attendee at Board meetings.</li>
            <li>Led launch of a new UK bank (branch to subsidiary), including regulatory authorisation, governance and MI design.</li>
            <li>Consolidated reporting platforms and implemented integrated governance and regulatory reporting processes.</li>
            <li>Delivered a multi-year plan that improved RoCE and key financial metrics (NIM, RoE, RoA) through capital allocation and treasury optimisation.</li>
            <li>Prepared ICAAP, ILAAP and Recovery Plan documents and strengthened risk management and governance frameworks.</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>State Bank of India — Head of Finance Workstream &amp; Program Manager — 2015 – 2018</h3>
          <ul>
            <li>Led Finance &amp; Tax workstreams for the UK subsidiary programme; managed governance, business planning and regulatory reporting deliverables.</li>
            <li>Designed MI and Board packs to streamline decision-making for the new bank launch and ensured timely regulatory submissions.</li>
            <li>Coordinated the customer migration into the new bank via Part VII process.</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>State Bank of India (London Branch) — Heads of Departments (Business Planning, MI/Analytics, Credit &amp; Products) — 2011 – 2015</h3>
          <ul>
            <li>Transformed the business towards digital channels, increasing online contribution significantly and launching buy-to-let and commercial mortgage platforms.</li>
            <li>Improved operational efficiency and customer satisfaction through end-to-end product and journey improvements.</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>Citibank International Personal Bank, London — Products Director &amp; Head of Strategic Development — 2006 – 2011</h3>
          <ul>
            <li>Managed product P&amp;L and a team of 15+ specialists across wealth, lending and investment services.</li>
            <li>Launched advisory services for fixed income and treasury products, launched UCITS funds, and expanded product distribution through cross-selling strategies.</li>
          </ul>

          <h3 style={{ marginTop: 12 }}>Other Experience</h3>
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
              <li>Member, Bank of England’s Practitioner Panel (representing UK Finance members).</li>
              <li>Non-Executive Director / Governor, Cannon Lane Primary School, London.</li>
              <li>Non-Executive Director, Citigroup (UK) Pension Plan, London.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}