import { features } from "../../data/landing";

export function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="section-title">
        <h2>Everything teams need to deliver on time</h2>
        <p>
          From sprint planning to executive reporting, ProjectFlow keeps workflows structured, visible, and
          adaptable.
        </p>
      </div>
      <div className="grid features">
        {features.map((feature) => (
          <article key={feature.title} className="card">
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
