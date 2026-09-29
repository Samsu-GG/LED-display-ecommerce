import Section from "../../components/common/Section";
import { contact } from "../../data/siteContent";

export default function ContactSection() {
  return (
    <Section title="Contact Us" id="contact">
      <div className="contact">
        <p>Interested in our products? Get in touch and we will reply quickly.</p>
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Phone / WhatsApp: <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></p>
        <p>Address: {contact.address}</p>
      </div>
    </Section>
  );
}
