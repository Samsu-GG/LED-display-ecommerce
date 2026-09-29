import Hero from "../features/home/Hero";
import AboutSummary from "../features/home/AboutSummary";
import FeaturedProducts from "../features/home/FeaturedProducts";
import ContactSection from "../features/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedProducts />
      <ContactSection />
    </>
  );
}
