import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-bg"></div>
      
      <div className="container">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">JVC <span>Farms</span></h3>
              <p className="footer-desc">
                High-quality catfish, palm oil, and grains delivered fresh and reliably across Nigeria.
              </p>
              <div className="footer-socials">
                <span>📘</span>
                <span>🐦</span>
                <span>📸</span>
              </div>
            </div>
            
            <div className="footer-links-col">
              <h4>Platform</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Our Products</Link></li>
                <li><Link href="/partners">Wholesale</Link></li>
                <li><Link href="/contact">Support</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-col">
              <h4>Contact</h4>
              <ul>
                <li>hello@jvcfarms.com.ng</li>
                <li>+234 800 000 0000</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
            
            <div className="footer-action">
              <a href="https://wa.me/2348000000000" className="btn btn-dark">Chat on WhatsApp</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} JVC Farms. All rights reserved.</p>
            <div className="footer-legal">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
