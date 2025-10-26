import React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <footer className="site-footer">© {new Date().getFullYear()} Profile Site</footer>
    </div>
  );
}
