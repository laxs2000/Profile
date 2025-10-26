import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name || 'visitor'}`);
    const body = encodeURIComponent(message || '');
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Head>
        <title>Contact — Profile Site</title>
      </Head>
      <main className="container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>
          <label>
            Message
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" />
          </label>
          <button type="submit">Send (opens mail client)</button>
        </form>
      </main>
    </>
  );
}
