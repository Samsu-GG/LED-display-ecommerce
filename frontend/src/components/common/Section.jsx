export default function Section({ title, alt = false, id, children }) {
  return (
    <section className={`section-wrap${alt ? " alt" : ""}`} id={id}>
      <div className="section">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
