import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
