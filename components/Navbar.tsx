'use client';

import Link from 'next/link';
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
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = pathname === '/';
  const showScrolled = isScrolled || !isHome;

  return (
    <div className={`navbar-wrapper ${showScrolled ? 'scrolled' : ''} ${!isHome ? 'no-transition' : ''}`}>
      <header className="navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-icon">🌿</div>
          <span className="logo-text">JVC Farms</span>
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
