import Head from 'next/head';
import Layout from '../components/Layout';

export default function Governance() {
  return (
    <Layout>
      <Head>
        <title>Governance Roles — Lax Seshan</title>
        <meta name="description" content="Lax Seshan's Governance and Board Positions" />
      </Head>
      <main className="container">
        <div className="executive-content">
          <h1 className="gradient-text">Governance Roles</h1>
          
          <div className="governance-section">
            <div className="governance-item">
              <h2>Board of Directors</h2>
              <div className="role">
                <h3>Independent Director - Tech Innovation Corp</h3>
                <p className="date">2020 - Present</p>
                <ul>
                  <li>Chair of the Technology Committee</li>
                  <li>Member of Audit Committee</li>
                  <li>Led digital transformation initiatives</li>
                </ul>
              </div>
            </div>

            <div className="governance-item">
              <h2>Advisory Boards</h2>
              <div className="role">
                <h3>Technology Advisory Board - FinTech Solutions Inc.</h3>
                <p className="date">2018 - Present</p>
                <ul>
                  <li>Strategic technology roadmap development</li>
                  <li>Cybersecurity governance oversight</li>
                  <li>Innovation strategy advisor</li>
                </ul>
              </div>

              <div className="role">
                <h3>Academic Advisory Council - Stanford Computer Science</h3>
                <p className="date">2019 - Present</p>
                <ul>
                  <li>Curriculum development advisor</li>
                  <li>Industry-academia partnership initiatives</li>
                  <li>Mentorship program lead</li>
                </ul>
              </div>
            </div>

            <div className="governance-item">
              <h2>Non-Profit Leadership</h2>
              <div className="role">
                <h3>Board Member - Digital Education Foundation</h3>
                <p className="date">2017 - Present</p>
                <ul>
                  <li>Strategic planning committee chair</li>
                  <li>Fundraising and grants oversight</li>
                  <li>Program effectiveness evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}