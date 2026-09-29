import { contact } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="footer">
      <p>{contact.email} · {contact.phone}</p>
      <p>© {new Date().getFullYear()} EagerLED. All rights reserved.</p>
    </footer>
  );
}
