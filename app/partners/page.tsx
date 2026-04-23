'use client';

import { useState } from 'react';
import './partners.css';

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessType: '',
    interest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMailTo = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Wholesale Partnership Application - ${formData.businessName}`);
    const body = encodeURIComponent(
      `Hello JVC Farms Team,\n\n` +
      `I am interested in becoming a wholesale partner. Below are my business details:\n\n` +
      `-------------------------------------------\n` +
      `BUSINESS INFORMATION\n` +
      `-------------------------------------------\n` +
      `Business Name: ${formData.businessName}\n` +
      `Contact Person: ${formData.contactPerson}\n` +
      `Business Type: ${formData.businessType}\n\n` +
      `CONTACT DETAILS\n` +
      `-------------------------------------------\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `PRODUCTS OF INTEREST\n` +
      `-------------------------------------------\n` +
      `${formData.interest}\n\n` +
      `I look forward to hearing from you soon.\n\n` +
      `Best regards,\n` +
      `${formData.contactPerson}`
    );

    window.location.href = `mailto:info@jvcfarms.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="partners-page">
      <div className="container">
        <div className="partners-hero text-center">
          <span className="pill-tag mb-4">Wholesale</span>
          <h1>Partner With <span className="serif">JVC Farms</span></h1>
          <p className="partners-subtitle">Join our network of retailers, restaurants, and bulk buyers for premium quality agricultural produce at wholesale rates.</p>
        </div>

        <div className="benefits-section">
          <h2>Why Partner With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📦</div>
              <h3>Bulk Pricing</h3>
              <p>Enjoy highly competitive wholesale rates that guarantee you maximum profit margins without compromising on quality.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h3>Priority Supply</h3>
              <p>As a registered partner, your orders take precedence. We ensure consistent supply even during off-seasons.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Our farming and processing standards remain strictly high, ensuring you only sell the best to your own customers.</p>
            </div>
          </div>
        </div>

        <div className="partnership-form-wrapper">
          <div className="text-center form-header">
            <h2>Apply for Partnership</h2>
            <p>Fill out the form below to generate an email application directly to our team.</p>
          </div>
          
          <form className="card partnership-form" onSubmit={handleMailTo}>
            <div className="form-group">
              <label className="form-label" htmlFor="businessName">Business Name</label>
              <input 
                type="text" 
                id="businessName" 
                name="businessName" 
                className="form-input" 
                value={formData.businessName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="contactPerson">Contact Person</label>
              <input 
                type="text" 
                id="contactPerson" 
                name="contactPerson" 
                className="form-input" 
                value={formData.contactPerson}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="businessType">Business Type</label>
              <select 
                id="businessType" 
                name="businessType" 
                className="form-input" 
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Restaurant / Hotel">Restaurant / Hotel</option>
                <option value="Retail Store / Supermarket">Retail Store / Supermarket</option>
                <option value="Distributor">Distributor</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="interest">Products of Interest</label>
              <textarea 
                id="interest" 
                name="interest" 
                className="form-textarea" 
                placeholder="e.g., Catfish (Live), Palm Oil (Drums)..." 
                value={formData.interest}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-large mt-4 btn-mailto">
              <span>Send Email Application</span>
              <span className="btn-icon">📩</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
