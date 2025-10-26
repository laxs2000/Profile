import Head from 'next/head';
import Layout from '../components/Layout';

export default function Education() {
  return (
    <Layout>
      <Head>
        <title>Education — Lax Seshan</title>
        <meta name="description" content="Lax Seshan's Educational Background" />
      </Head>
      <main className="container">
        <div className="executive-content">
          <h1 className="gradient-text">Education</h1>
          
          <div className="education-section">
            <div className="education-item">
              <h2>Master of Business Administration (MBA)</h2>
              <h3>Harvard Business School</h3>
              <p className="date">2010 - 2012</p>
              <ul>
                <li>Focus on Strategic Management and Leadership</li>
                <li>Member of Technology and Innovation Club</li>
                <li>Graduate with Honors</li>
              </ul>
            </div>

            <div className="education-item">
              <h2>Bachelor of Science in Computer Science</h2>
              <h3>Stanford University</h3>
              <p className="date">2006 - 2010</p>
              <ul>
                <li>Major in Computer Science with focus on AI and Machine Learning</li>
                <li>Minor in Business Administration</li>
                <li>Dean's List all semesters</li>
              </ul>
            </div>

            <div className="education-item">
              <h2>Professional Certifications</h2>
              <ul>
                <li>Project Management Professional (PMP)</li>
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional Architect</li>
                <li>ITIL v4 Foundation</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}