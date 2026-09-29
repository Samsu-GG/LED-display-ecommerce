import { Link } from "react-router-dom";
import { productService } from "../../services/productService";
import { useFetch } from "../../hooks/useFetch";
import ProductGrid from "../../components/product/ProductGrid";
import Section from "../../components/common/Section";
import Loader from "../../components/common/Loader";
import ErrorMessage from "../../components/common/ErrorMessage";

export default function FeaturedProducts() {
  const { data, loading, error } = useFetch(() => productService.getFeatured(4));
  return (
    <Section title="Featured Products" alt>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {data && <ProductGrid products={data} />}
      <div className="center">
        <Link to="/product" className="btn">See all products</Link>
      </div>
    </Section>
  );
}
