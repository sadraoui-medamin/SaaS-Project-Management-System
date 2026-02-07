import "./styles/index.css";

const features = [
  {
    title: "Unified Workspaces",
    copy: "Keep teams, projects, and docs organized with clear ownership and goals.",
  },
  {
    title: "Agile at Speed",
    copy: "Plan sprints, manage backlogs, and track velocity with zero clutter.",
  },
  {
    title: "Live Collaboration",
    copy: "Presence, comments, and updates in real time across every board.",
  },
  {
    title: "Smart Reporting",
    copy: "Turn raw activity into stakeholder-ready reports in minutes.",
  },
  {
    title: "Secure by Design",
    copy: "Multi-tenant isolation, RBAC, and audit trails built in.",
  },
  {
    title: "Ready to Integrate",
    copy: "Connect to GitHub, Slack, and custom tools through APIs and webhooks.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Plan",
    copy: "Capture ideas, define scope, and align on milestones with clarity.",
  },
  {
    step: "02",
    title: "Build",
    copy: "Ship tasks with momentum using boards, sprints, and dependencies.",
  },
  {
    step: "03",
    title: "Launch",
    copy: "Track progress, share updates, and celebrate outcomes in one place.",
  },
];

const stats = [
  { label: "Active teams", value: "1.2k" },
  { label: "Tasks shipped", value: "48k" },
  { label: "Avg. weekly velocity", value: "+22%" },
];

const testimonials = [
  {
    name: "Leila Morgan",
    role: "Product Lead, Horizon",
    quote:
      "ProjectFlow gave our teams a single source of truth without losing the speed we need.",
  },
  {
    name: "Ravi Singh",
    role: "Engineering Manager, Brightline",
    quote:
      "The sprint dashboards and workload views keep our planning grounded in reality.",
  },
  {
    name: "Nina Alvarez",
    role: "COO, Northstar",
    quote:
      "We onboarded three new departments in a week and never looked back.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$12",
    note: "per user / month",
    features: ["Core boards", "Unlimited tasks", "Basic reporting", "Community support"],
  },
  {
    name: "Growth",
    price: "$24",
    note: "per user / month",
    features: [
      "Everything in Starter",
      "Advanced permissions",
      "Sprint analytics",
      "Email + chat support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "annual billing",
    features: [
      "Dedicated workspace",
      "Custom SLAs",
      "Security reviews",
      "Priority integrations",
    ],
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">ProjectFlow</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-cta">
          <button className="ghost">Sign in</button>
          <button className="primary">Request a demo</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Built for modern product teams</p>
            <h1>Project management that keeps every team in flow.</h1>
            <p className="lead">
              ProjectFlow blends the clarity of structured planning with the flexibility of agile work. Keep
              deliverables, people, and data aligned across every initiative.
            </p>
            <div className="hero-actions">
              <button className="primary">Start free workspace</button>
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

        <section className="section stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>

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

        <section id="pricing" className="section pricing">
          <div className="section-title">
            <h2>Pricing that grows with your teams</h2>
            <p>Start simple, scale when you need more power and control.</p>
          </div>
          <div className="grid">
            {pricing.map((plan) => (
              <article key={plan.name} className={`card price ${plan.highlight ? "highlight" : ""}`}>
                <h3>{plan.name}</h3>
                <div className="price-tag">
                  <strong>{plan.price}</strong>
                  <span>{plan.note}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={plan.highlight ? "primary" : "outline"}>Choose plan</button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section cta">
          <div>
            <h2>Ready to organize every launch?</h2>
            <p>
              Get a guided walkthrough, or spin up a workspace and start planning right away. We will help you
              move fast.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary">Book a demo</button>
            <button className="ghost">Download overview</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>ProjectFlow</strong>
          <p>Modern SaaS project management built for scale.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <span>hello@projectflow.com</span>
          <span>San Francisco · Remote first</span>
        </div>
      </footer>
    </div>
  );
}
