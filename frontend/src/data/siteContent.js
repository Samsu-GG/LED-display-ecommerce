// Placeholder copy - replace with real EagerLED content.
export const contact = {
  email: "sales@example.com",
  phone: "+86 000 0000 0000",
  address: "Your factory address here",
};

export const hero = {
  title: "Professional LED Display Manufacturer",
  subtitle: "Indoor, outdoor and rental LED screens, built to last.",
};

export const aboutIntro =
  "We are a professional LED display manufacturer providing reliable, high-quality screens for advertising, stages, retail and more.";

export const stats = [
  { value: "15+ Years", title: "LED Display Industry Experience", text: "More than a decade of R&D and manufacturing expertise." },
  { value: "10,000 m²", title: "Production Workshop", text: "Modern dust-free workshops with automated production lines." },
  { value: "5,000 m²", title: "Monthly Production Capacity", text: "Stable capacity for both large and urgent orders." },
  { value: "100+", title: "Used in Countries / Areas", text: "Our displays are running in projects across the globe." },
];

export const features = [
  { title: "Variety of LED Displays", text: "Indoor, outdoor, rental, transparent and custom LED screens for every scenario." },
  { title: "Strict Quality Control", text: "Every unit is aged and tested before it leaves the factory." },
  { title: "Professional Certification", text: "CE, RoHS, FCC and ISO certified products and processes." },
  { title: "Advanced LED Display Factory", text: "Automated SMT lines and modern testing equipment." },
  { title: "Embrace the World", text: "We export to customers in many countries and regions." },
  { title: "Long-term Customer Relationships", text: "Dependable after-sales support and partnership." },
];

export const culture = [
  { title: "Company Vision", text: "To be a trusted global leader in LED display solutions." },
  { title: "Company Mission", text: "Deliver reliable, innovative displays that create value for our customers." },
  { title: "Company Values", text: "Integrity, quality, innovation and teamwork." },
];

// Placeholder gallery images generated locally; replace with real photos.
const placeholder = (n) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280"><rect width="400" height="280" fill="#cbd5e1"/><text x="200" y="145" font-family="Arial" font-size="24" fill="#334155" text-anchor="middle">Photo ${n}</text></svg>`
  );

export const gallery = Array.from({ length: 8 }, (_, i) => placeholder(i + 1));
