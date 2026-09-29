import { Link } from "react-router-dom";
import { assetUrl } from "../../services/httpClient";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card product-card">
      <img src={assetUrl(product.picture)} alt={product.product_name} />
      <h3>{product.product_name}</h3>
      <p>{product.summary}</p>
      <div className="meta">
        <span>${product.price.toFixed(2)}</span>
        <span>★ {product.rating}</span>
      </div>
    </Link>
  );
}
