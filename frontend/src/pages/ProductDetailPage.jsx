import { Link, useParams } from "react-router-dom";
import { productService } from "../services/productService";
import { assetUrl } from "../services/httpClient";
import { useFetch } from "../hooks/useFetch";
import { contact } from "../data/siteContent";
import Section from "../components/common/Section";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: p, loading, error } = useFetch(() => productService.getById(id), [id]);

  return (
    <Section>
      <Link to="/product">← Back to products</Link>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {p && (
        <div className="detail">
          <img src={assetUrl(p.picture)} alt={p.product_name} />
          <div>
            <h1>{p.product_name}</h1>
            <p className="rating">★ {p.rating}</p>
            <p className="price">${p.price.toFixed(2)}</p>
            <p><strong>{p.summary}</strong></p>
            <p>{p.description}</p>
            <a
              className="btn"
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry: ${p.product_name}`)}`}
            >
              Contact us for a quote
            </a>
            <p className="muted">Or call {contact.phone}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
