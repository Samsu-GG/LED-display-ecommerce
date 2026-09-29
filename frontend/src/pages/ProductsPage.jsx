import { productService } from "../services/productService";
import { useFetch } from "../hooks/useFetch";
import ProductGrid from "../components/product/ProductGrid";
import Section from "../components/common/Section";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

export default function ProductsPage() {
  const { data, loading, error } = useFetch(() => productService.getAll());
  return (
    <Section title="Our Products">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {data && <ProductGrid products={data} />}
    </Section>
  );
}
