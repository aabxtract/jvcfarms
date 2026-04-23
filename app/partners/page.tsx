import './partners.css';

export default function PartnersPage() {
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
            <p>Fill out the form below to initiate your wholesale partnership with JVC Farms.</p>
          </div>
          
          <form className="card partnership-form" action="https://formspree.io/f/placeholder" method="POST">
            <div className="form-group">
              <label className="form-label" htmlFor="businessName">Business Name</label>
              <input type="text" id="businessName" name="businessName" className="form-input" required />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="contactPerson">Contact Person</label>
              <input type="text" id="contactPerson" name="contactPerson" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="businessType">Business Type</label>
              <select id="businessType" name="businessType" className="form-input" required>
                <option value="">Select an option</option>
                <option value="restaurant">Restaurant / Hotel</option>
                <option value="retailer">Retail Store / Supermarket</option>
                <option value="distributor">Distributor</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="interest">Products of Interest</label>
              <textarea id="interest" name="interest" className="form-textarea" placeholder="e.g., Catfish (Live), Palm Oil (Drums)..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-large mt-4">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
