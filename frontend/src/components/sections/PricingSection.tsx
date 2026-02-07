import { accessMatrix, pricing } from "../../data/landing";

type PricingSectionProps = {
  onOpenSignUp: () => void;
  currentPlanName?: string;
};

export function PricingSection({ onOpenSignUp, currentPlanName }: PricingSectionProps) {
  return (
    <section id="pricing" className="section pricing">
      <div className="section-title">
        <h2>Pricing that grows with your teams</h2>
        <p>Start simple, scale when you need more power and control.</p>
      </div>
      <div className="grid">
        {pricing.map((plan) => (
          <article key={plan.name} className={`card price ${plan.highlight ? "highlight" : ""}`}>
            <span className="plan-chip">{plan.highlight ? "Most popular" : "Plan"}</span>
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
            <button
              className={plan.highlight ? "primary" : "outline"}
              onClick={onOpenSignUp}
              disabled={currentPlanName === plan.name}
            >
              {currentPlanName === plan.name ? "Current plan" : "Choose plan"}
            </button>
          </article>
        ))}
      </div>
      <div className="access-table">
        <div className="access-header">
          <h3>Access by plan</h3>
          <p>Match features to the teams and compliance you need today.</p>
        </div>
        <div className="access-grid">
          <div className="access-row header">
            <span>Feature</span>
            <span>Starter</span>
            <span>Growth</span>
            <span>Enterprise</span>
          </div>
          {accessMatrix.map((row) => (
            <div key={row.feature} className="access-row">
              <span>{row.feature}</span>
              <span>{row.starter ? "Included" : "—"}</span>
              <span>{row.growth ? "Included" : "—"}</span>
              <span>{row.enterprise ? "Included" : "—"}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
