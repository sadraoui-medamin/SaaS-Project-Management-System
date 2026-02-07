type HeroSectionProps = {
  onOpenSignUp: () => void;
};

export function HeroSection({ onOpenSignUp }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Built for modern product teams</p>
        <h1>Project management that keeps every team in flow.</h1>
        <p className="lead">
          ProjectFlow blends the clarity of structured planning with the flexibility of agile work. Keep
          deliverables, people, and data aligned across every initiative.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={onOpenSignUp}>
            Start free workspace
          </button>
          <button className="outline">See product tour</button>
        </div>
        <div className="hero-meta">
          <div>
            <strong>99.99%</strong>
            <span>uptime</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>support</span>
          </div>
          <div>
            <strong>SOC 2</strong>
            <span>compliant</span>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <div className="card-header">
          <span>Today</span>
          <span className="badge">Sprint 12</span>
        </div>
        <div className="card-body">
          <div className="task">
            <div>
              <h3>Ship onboarding refresh</h3>
              <p>Design + Engineering · Due Friday</p>
            </div>
            <span className="pill">In progress</span>
          </div>
          <div className="task">
            <div>
              <h3>Billing workflow QA</h3>
              <p>Platform · 4 checks remaining</p>
            </div>
            <span className="pill light">Review</span>
          </div>
          <div className="task">
            <div>
              <h3>Customer success rollout</h3>
              <p>Ops · 8 playbooks</p>
            </div>
            <span className="pill dark">Planned</span>
          </div>
        </div>
        <div className="card-footer">
          <div>
            <strong>Velocity</strong>
            <span>+18% vs last sprint</span>
          </div>
          <button className="ghost">Open board</button>
        </div>
      </div>
    </section>
  );
}
