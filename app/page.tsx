'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '../lib/data';
import ProductCard from '../components/ProductCard';
import './page.css';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      icon: "🌿",
      title: "100% Organic & Fresh",
      content: "Our produce is carefully grown and processed to maintain maximum nutrients without the use of artificial preservatives."
    },
    {
      icon: "🚚",
      title: "Reliable Supply",
      content: "We maintain a robust distribution network ensuring that your orders reach you on time, every time, across major locations in Nigeria."
    },
    {
      icon: "💵",
      title: "Competitive Pricing",
      content: "By cutting out the middlemen and sourcing directly from our farms, we offer the best market rates for both retail and wholesale buyers."
    }
  ];

  return (
    <div className="home-page-wrapper">
      
      {/* HERO SECTION */}
      <div className="hero-container">
        <section className="hero-section">
          {/* Background image could be a Next Image or CSS background */}
          <div className="hero-bg-overlay"></div>
          <Image 
            src="/61160-8sbe5pbpfw-1200x480-1.jpg" 
            alt="JVC Farms - Fresh Farm Produce" 
            fill 
            priority
            className="hero-image-bg"
            unoptimized
          />
          
          <div className="hero-content">
            <h1 className="hero-headline">
              Fresh Farm Produce<br/>Directly From <span className="serif">Source</span>
            </h1>
            <p className="hero-subtext">
              High-quality fish, palm oil, and grains delivered fresh and reliably across Nigeria.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn btn-primary">View Products</Link>
              <Link href="/contact" className="btn btn-outline">Send Inquiry</Link>
            </div>
            
            <div className="hero-stats-mini">
              <div className="stat-avatars">
                <div className="avatar">🐟</div>
                <div className="avatar">🌿</div>
                <div className="avatar">🌽</div>
              </div>
              <span className="stat-text">Premium Nigerian Output</span>
            </div>
          </div>
        </section>
      </div>

      {/* PRODUCT PREVIEW */}
      <section className="cards-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="pill-tag">Our Products</span>
              <h2 className="section-title">Fresh Produce Built on<br/><span className="serif">Quality and Reliability</span></h2>
            </div>
            <p className="section-desc-right">Explore our top-grade selection of catfish, palm oil, and maize available for both retail and wholesale at competitive rates.</p>
          </div>
          
          <div className="solutions-grid">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="btn btn-dark">View All Products</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - ACCORDION FEATURES SPLIT */}
      <section className="split-features-section">
        <div className="container split-container">
          <div className="split-left">
            <span className="pill-tag mb-4">Why Choose Us</span>
            <h2 className="section-title">
              Farm to Table<br/><span className="serif">That Delivers Real Results</span>
            </h2>
            <p className="section-desc">We prioritize natural farming practices, ensuring no harmful chemicals touch your food, while providing seamless distribution to your doorstep.</p>
            
            <div className="accordion-list">
              {accordionItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="accordion-header">
                    <span className={`acc-icon ${activeIndex === index ? 'active-icon' : ''}`}>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <span className="acc-arrow">{activeIndex === index ? '▲' : '▼'}</span>
                  </div>
                  <div className={`accordion-collapse ${activeIndex === index ? 'open' : ''}`}>
                    <div className="accordion-body">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="split-right">
            <div className="image-wrapper-rounded">
              <Image 
                src="/farmer.jpg" 
                alt="Farmer harvesting" 
                fill
                className="cover-image farmer-image"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="pill-tag">Testimonials</span>
              <h2 className="section-title">Real Stories Shared<br/><span className="serif">by Our Partners</span></h2>
            </div>
            <p className="section-desc-right">See why restaurants, retailers, and families across the country trust JVC Farms for their daily supply.</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="test-quote-icon">"</div>
              <p className="test-quote">"The catfish we received was of exceptional quality! The delivery was prompt, and the packaging was super neat. We've found our permanent supplier."</p>
              <div className="test-author-row">
                <div>
                  <h5 className="test-name">Amina T.</h5>
                  <span className="test-role">Restaurant Owner</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="test-quote-icon">"</div>
              <p className="test-quote">"Their palm oil is genuinely 100% natural. It has the authentic taste you remember from childhood. Buying in bulk from them has saved my retail business a lot."</p>
              <div className="test-author-row">
                <div>
                  <h5 className="test-name">Chinedu O.</h5>
                  <span className="test-role">Market Distributor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS CTA */}
      <section className="cta-banner">
        <div className="container text-center">
          <span className="pill-tag mb-4">Wholesale</span>
          <h2 className="cta-headline">Partner with us for<br/><span className="serif">steady, bulk supply</span></h2>
          <p className="cta-sub">Are you a restaurant, retailer, or bulk buyer? We offer special wholesale rates and priority logistics.</p>
          <div className="cta-actions">
            <Link href="/partners" className="btn btn-primary mt-4">Become a Partner</Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
