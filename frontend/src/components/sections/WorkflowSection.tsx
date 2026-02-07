import { workflow } from "../../data/landing";

export function WorkflowSection() {
  return (
    <section id="workflow" className="section split">
      <div>
        <p className="eyebrow">Workflow</p>
        <h2>Designed for clarity at every stage.</h2>
        <p className="lead">
          Track every milestone and dependency without losing sight of the bigger picture. Your teams move
          faster when the system moves with them.
        </p>
        <button className="outline">Explore workflows</button>
      </div>
      <div className="stack">
        {workflow.map((item) => (
          <div key={item.step} className="step">
            <span>{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
