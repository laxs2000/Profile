"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname() || '/';

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand">
          <Link href="/">
            <a className="brand-link">Lax Seshan</a>
          </Link>
          <span className="brand-sub muted">SMF2 • Finance Executive</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="socials">
          <a href="#" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6C1.11 6 0 4.88 0 3.5C0 2.12 1.11 1 2.49 1C3.87 1 4.98 2.12 4.98 3.5ZM.5 8.98H4.5V24H.5V8.98ZM8.98 8.98H12.66V11.08H12.71C13.23 10.08 14.67 9 16.77 9C21.16 9 22 11.78 22 15.94V24H18V16.74C18 14.86 17.97 12.44 15.34 12.44C12.67 12.44 12.28 14.53 12.28 16.58V24H8.98V8.98Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
