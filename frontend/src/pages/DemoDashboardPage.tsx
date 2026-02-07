import { Dashboard } from "./Dashboard";
import type { PricingPlan } from "../data/landing";
import type { PaymentMethod } from "../components/auth/DemoAccessModal";

type DemoDashboardPageProps = {
  accountName: string;
  plan: PricingPlan;
  paymentMethod: PaymentMethod;
  onManagePlan: () => void;
};

export function DemoDashboardPage({ accountName, plan, paymentMethod, onManagePlan }: DemoDashboardPageProps) {
  return (
    <main>
      <section className="section">
        <div className="section-title">
          <h2>Welcome back, {accountName}</h2>
          <p>Your workspace is active with a demo billing profile.</p>
        </div>
        <div className="grid dashboard-summary">
          <article className="card">
            <p className="eyebrow">Current plan</p>
            <h3>{plan.name}</h3>
            <p>{plan.note}</p>
            <button className="outline" onClick={onManagePlan}>
              Change plan
            </button>
          </article>
          <article className="card">
            <p className="eyebrow">Payment</p>
            <h3>{paymentMethod === "stripe" ? "Stripe" : "PayPal"}</h3>
            <p>Demo payment accepted · No real charges.</p>
            <button className="ghost" onClick={onManagePlan}>
              Update billing
            </button>
          </article>
          <article className="card">
            <p className="eyebrow">Workspace health</p>
            <h3>All systems green</h3>
            <p>Last synced 2 minutes ago.</p>
          </article>
        </div>
        <Dashboard
          title="ProjectFlow Demo Workspace"
          owner={accountName}
          sprint="Sprint 12"
          metrics={[
            { label: "Active projects", value: "8" },
            { label: "Open tasks", value: "142" },
            { label: "Velocity", value: "+18%" },
          ]}
          highlights={[
            {
              title: "Launch readiness",
              detail: "All critical milestones are on track for next Thursday.",
              status: "On track",
            },
            {
              title: "Risk review",
              detail: "2 dependencies need confirmation from legal by Monday.",
              status: "Watch",
            },
            {
              title: "Customer sync",
              detail: "CS team preparing demo deck for beta cohort.",
              status: "Planned",
            },
          ]}
        />
      </section>
    </main>
  );
}
