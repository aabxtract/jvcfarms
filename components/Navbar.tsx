'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const showScrolled = isScrolled || pathname !== '/';

  return (
    <div className={`navbar-wrapper ${showScrolled ? 'scrolled' : ''}`}>

      <header className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-icon">🌿</div>
          <span className="logo-text">JVC Farms</span>
        </Link>
        
        <nav className="navbar-pill-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`nav-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="navbar-cta">
          Contact Us
        </Link>
      </header>
    </div>
  );
}
