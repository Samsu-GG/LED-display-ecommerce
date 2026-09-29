import { Link } from "react-router-dom";
import { hero } from "../../data/siteContent";

export default function Hero() {
  return (
    <section className="hero">
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <Link to="/product" className="btn">View Products</Link>
    </section>
  );
}
