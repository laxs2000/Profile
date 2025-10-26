import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — Profile Site</title>
        <meta name="description" content="Simple profile site" />
      </Head>
      <main className="container">
        <h1>Welcome to the Profile Site</h1>
        <p>This is a minimal website with a Home, Profile and Contact page — ready for Vercel.</p>
      </main>
    </>
  );
}
