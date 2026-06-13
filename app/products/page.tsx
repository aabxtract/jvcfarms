import { products } from '../../lib/data';
import ProductCard from '../../components/ProductCard';
import './products.css';

export default function ProductsPage() {
  return (
    <div className="products-page-wrapper">
      <div className="page-header-spacing">
        <div className="container">
          <div className="page-header text-center">
            <span className="pill-tag mb-4">Our Produce</span>
            <h1>Fresh Farm Produce<br/><span className="serif">For You</span></h1>
            <p className="page-subtitle">Explore our top-grade selection of catfish, palm oil, grains, and livestock available for both retail and wholesale.</p>
          </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
