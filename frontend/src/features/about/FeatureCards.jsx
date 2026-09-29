import Section from "../../components/common/Section";
import { features } from "../../data/siteContent";

export default function FeatureCards() {
  return (
    <Section title="Why Choose Us">
      <div className="grid grid-2x3">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
