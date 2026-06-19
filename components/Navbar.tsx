'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = pathname === '/';
  const showScrolled = isScrolled || !isHome;

  return (
    <div className={`navbar-wrapper ${showScrolled ? 'scrolled' : ''} ${!isHome ? 'no-transition' : ''}`}>
      <header className="navbar-container">
        <Link href="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src={(!isScrolled && isHome) ? "/JVC LOGO WHITE 1.png" : "/JVC LOGO coloured.png"}
            alt="JVC Farms Logo"
            width={200}
            height={50}
            style={{ objectFit: 'contain', transform: 'scale(2.5) translate(-34px, 12px)', transformOrigin: 'left center' }}
            priority
            unoptimized
          />
        </Link>

        <nav className="navbar-pill-nav desktop-only">
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

        <div className="navbar-actions">
          <Link href="/contact" className="navbar-cta desktop-only">
            Contact Us
          </Link>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`mobile-link ${pathname === link.path ? 'active' : ''} ${link.path === '/contact' ? 'contact-highlight' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
