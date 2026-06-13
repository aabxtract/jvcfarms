import Image from 'next/image';
import Link from 'next/link';
import './ProductCard.css';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  priceNote?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const whatsappMsg = `Hello, I want to order ${product.name}. Check my inquiry!`;
  const whatsappLink = `https://wa.me/23491333674241?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="card product-card">
      <div className="product-image-wrapper">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400} 
          height={300} 
          className="product-image"
          unoptimized
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        
        <div className="product-actions">
          <Link href={`/products/${product.id}`} className="btn btn-outline product-btn">
            View Details
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary product-btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
