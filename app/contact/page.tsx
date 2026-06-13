import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header text-center">
          <span className="pill-tag mb-4">Support</span>
          <h1>Get In <span className="serif">Touch</span></h1>
          <p className="contact-subtitle">Have questions or want to make an inquiry? We're here to help.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-info-desc">Reach out to JVC Farms directly. We aim to respond to all inquiries within 24 hours.</p>
            
            <div className="info-block">
              <h3>📍 Location</h3>
              <p>JVC Farms Headquarters<br/>Lagos, Nigeria</p>
            </div>
            
            <div className="info-block">
              <h3>📞 Phone & WhatsApp</h3>
              <p>+234 913 336 74241</p>
              <p className="mt-1">+234 806 056 1215</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', maxWidth: '280px' }}>
                <a href="https://wa.me/23491333674241" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ textAlign: 'center', display: 'block' }}>
                  Chat on WhatsApp (Line 1)
                </a>
                <a href="https://wa.me/2348060561215" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ textAlign: 'center', display: 'block' }}>
                  Chat on WhatsApp (Line 2)
                </a>
              </div>
            </div>

            <div className="info-block">
              <h3>✉️ Email</h3>
              <p>jvcfarmsltd@gmail.com</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="card contact-form" action="https://formspree.io/f/placeholder" method="POST">
              <h3>Send an Inquiry</h3>
              <p className="form-sub">Use the form below to request a quote or ask about our products.</p>
              
              <div className="form-group mt-4">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactPhone">Phone Number</label>
                <input type="tel" id="contactPhone" name="contactPhone" className="form-input" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="product">Product of Interest</label>
                <input type="text" id="product" name="product" className="form-input" placeholder="e.g., Catfish, Palm Oil..." required />
              </div>

              <div className="form-layout-split">
                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">Quantity Required</label>
                  <input type="text" id="quantity" name="quantity" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="location">Delivery Location</label>
                  <input type="text" id="location" name="location" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Additional Details</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Any specific requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-large">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
