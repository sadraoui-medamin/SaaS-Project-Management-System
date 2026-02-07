import { stats } from "../../data/landing";

export function StatsSection() {
  return (
    <section className="section stats">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
