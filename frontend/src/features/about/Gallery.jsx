import Section from "../../components/common/Section";
import { gallery } from "../../data/siteContent";

export default function Gallery() {
  return (
    <Section title="Gallery" alt>
      <div className="grid grid-4">
        {gallery.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i + 1}`} className="gallery-img" />
        ))}
      </div>
    </Section>
  );
}
