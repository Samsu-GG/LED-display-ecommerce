import { Link } from "react-router-dom";
import Section from "../../components/common/Section";
import { aboutIntro, stats } from "../../data/siteContent";

export default function AboutSummary() {
  return (
    <Section title="About Us">
      <p className="lead">{aboutIntro}</p>
      <div className="grid grid-4">
        {stats.map((s) => (
          <div className="card stat" key={s.title}>
            <div className="stat-value">{s.value}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="center">
        <Link to="/about-us" className="btn">Learn more</Link>
      </div>
    </Section>
  );
}
