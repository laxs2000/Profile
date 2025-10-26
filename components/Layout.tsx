import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="container content">{children}</main>
      <footer className="site-footer">© {new Date().getFullYear()} Profile Site</footer>
    </div>
  );
}
