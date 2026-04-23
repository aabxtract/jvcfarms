import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '../../../lib/data';
import './product-detail.css';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Await the params in Next.js app router to avoid warnings/errors that can happen if params is a Promise in future Next.js
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  const whatsappMsg = `Hello, I want to order ${product.name}, quantity: [X]. Please provide more details.`;
  const whatsappLink = `https://wa.me/2348000000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-layout">
          <div className="product-image-col">
            <div className="detail-image-wrapper">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="detail-image"
                unoptimized
              />
            </div>
          </div>
          <div className="product-info-col">
            <span className="availability-badge">In Stock / Available to Order</span>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-price-note">{product.priceNote}</p>
            
            <div className="detail-description">
              <h3>Description</h3>
              <p>{product.fullDescription}</p>
            </div>
            
            <div className="detail-actions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large w-full">
                Order via WhatsApp
              </a>
              <a href="/contact" className="btn btn-outline btn-large w-full">
                Send Inquiry Form
              </a>
            </div>
            
            <div className="shipping-info">
              <h4>Delivery Information</h4>
              <p>We deliver nationwide across Nigeria. Wholesale orders are handled with dedicated logistics for safe transit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
