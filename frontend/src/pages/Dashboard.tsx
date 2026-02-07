export type DashboardMetric = { label: string; value: string };
export type DashboardHighlight = { title: string; detail: string; status: string };

export type DashboardProps = {
  title: string;
  owner: string;
  sprint: string;
  metrics: DashboardMetric[];
  highlights: DashboardHighlight[];
};

export function Dashboard({ title, owner, sprint, metrics, highlights }: DashboardProps) {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Workspace</p>
          <h2>{title}</h2>
          <p className="lead">Owner: {owner}</p>
        </div>
        <span className="badge">{sprint}</span>
      </div>
      <div className="grid dashboard-metrics">
        {metrics.map((metric) => (
          <article key={metric.label} className="card">
            <h3>{metric.value}</h3>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
      <div className="grid dashboard-highlights">
        {highlights.map((item) => (
          <article key={item.title} className="card">
            <div className="highlight-row">
              <h3>{item.title}</h3>
              <span className="pill">{item.status}</span>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
