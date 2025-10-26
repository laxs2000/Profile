import Head from 'next/head';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile — Lax Seshan</title>
      </Head>
      <main className="container">
        <header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 96, height: 96, borderRadius: 12, background: '#e9eef8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700 }}>
            LS
          </div>
          <div>
            <h1 style={{ margin: 0 }}>Lax Seshan</h1>
            <p className="muted" style={{ margin: '6px 0 0' }}>Frontend Engineer · Next.js · React</p>
          </div>
        </header>

        <section className="card" style={{ marginTop: 20 }}>
          <h2>About</h2>
          <p>
            I build performant, accessible web applications using React and Next.js. I enjoy turning
            product ideas into polished user experiences and shipping incremental improvements that
            make people’s lives easier. My focus areas are frontend architecture, component design,
            and developer DX.
          </p>
          <p>
            Recent work includes building small-company dashboards, marketing sites optimized for
            SEO and performance, and prototyping interactive UI components.
          </p>
        </section>

        <section className="card" style={{ marginTop: 20 }}>
          <h2>Core skills</h2>
          <ul>
            <li>Next.js & React (SSR, SSG, incremental static regeneration)</li>
            <li>TypeScript, CSS Modules, Tailwind / modern CSS</li>
            <li>Accessibility (WCAG), performance optimization, web vitals</li>
            <li>Testing (Jest, React Testing Library), CI/CD</li>
          </ul>
        </section>

        <section className="card" style={{ marginTop: 20 }}>
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href="mailto:hello@example.com">hello@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/lax-seshan-334786/" target="_blank" rel="noreferrer">linkedin.com/in/lax-seshan-334786</a></li>
            <li>GitHub: <a href="https://github.com/laxs2000" target="_blank" rel="noreferrer">github.com/laxs2000</a></li>
          </ul>
        </section>

      </main>
    </>
  );
}
