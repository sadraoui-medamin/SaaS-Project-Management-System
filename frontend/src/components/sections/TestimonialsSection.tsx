import { testimonials } from "../../data/landing";

export function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="section-title">
        <h2>Teams moving faster with ProjectFlow</h2>
        <p>Trusted by product, engineering, and operations teams worldwide.</p>
      </div>
      <div className="grid">
        {testimonials.map((item) => (
          <article key={item.name} className="quote">
            <p>“{item.quote}”</p>
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
