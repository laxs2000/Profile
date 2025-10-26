import Head from 'next/head';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile — Profile Site</title>
      </Head>
      <main className="container">
        <h1>John Doe</h1>
        <p className="muted">Frontend Developer</p>
        <section className="card">
          <p>
            Passionate developer building simple, accessible web apps. This sample profile shows how to structure a
            small Next.js site for quick deployment to Vercel.
          </p>
          <ul>
            <li>Email: hello@example.com</li>
            <li>Location: Remote</li>
          </ul>
        </section>
      </main>
    </>
  );
}
