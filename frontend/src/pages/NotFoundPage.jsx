import { Link } from "react-router-dom";
import Section from "../components/common/Section";

export default function NotFoundPage() {
  return (
    <Section title="Page not found">
      <div className="center">
        <Link to="/" className="btn">Back to home</Link>
      </div>
    </Section>
  );
}
