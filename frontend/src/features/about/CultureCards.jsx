import Section from "../../components/common/Section";
import { culture } from "../../data/siteContent";

export default function CultureCards() {
  return (
    <Section title="Our Company Culture">
      <div className="col">
        {culture.map((c) => (
          <div className="card" key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
