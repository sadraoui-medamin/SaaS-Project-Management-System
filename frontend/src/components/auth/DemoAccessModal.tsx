import { useEffect, useState } from "react";
import { pricing, PricingPlan } from "../../data/landing";

export type AuthMode = "signin" | "signup" | "demo";
export type PaymentMethod = "stripe" | "paypal";

export type DemoAccessResult = {
  name: string;
  email: string;
  plan: PricingPlan;
  paymentMethod: PaymentMethod;
};

type Step = "account" | "plan" | "payment" | "success";

type DemoAccessModalProps = {
  mode: AuthMode;
  onClose: () => void;
  onComplete: (result: DemoAccessResult) => void;
};

export function DemoAccessModal({ mode, onClose, onComplete }: DemoAccessModalProps) {
  const [step, setStep] = useState<Step>("account");
  const [activeMode, setActiveMode] = useState<AuthMode>(mode);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("stripe");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setActiveMode(mode);
    setStep("account");
    setSelectedPlan(null);
    setPaymentMethod("stripe");
    setName("");
    setEmail("");
    setPassword("");
  }, [mode]);

  const handleMasterDemo = () => {
    setActiveMode("demo");
    setName("Master Demo");
    setEmail("demo@projectflow.com");
    setPassword("demo");
    setStep("plan");
  };

  const handleAccountNext = () => {
    if (activeMode === "demo") {
      setName(name || "Master Demo");
      setEmail(email || "demo@projectflow.com");
    }
    setStep("plan");
  };

  const handlePlanNext = () => {
    if (!selectedPlan) {
      return;
    }
    setStep("payment");
  };

  const handlePaymentNext = () => {
    if (!selectedPlan) {
      return;
    }
    setStep("success");
  };

  const handleComplete = () => {
    if (!selectedPlan) {
      return;
    }
    onComplete({
      name: name || "Demo User",
      email: email || "demo@projectflow.com",
      plan: selectedPlan,
      paymentMethod,
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">ProjectFlow</p>
            <h3>Access your workspace</h3>
          </div>
          <button className="ghost" onClick={onClose} aria-label="Close modal">
            Close
          </button>
        </div>

        {step === "account" && (
          <div className="modal-step">
            <div className="access-mode">
              <button
                className={`chip ${activeMode === "signin" ? "active" : ""}`}
                onClick={() => setActiveMode("signin")}
              >
                Sign in
              </button>
              <button
                className={`chip ${activeMode === "signup" ? "active" : ""}`}
                onClick={() => setActiveMode("signup")}
              >
                Create account
              </button>
              <button className="chip" onClick={handleMasterDemo}>
                Master demo login
              </button>
            </div>

            {activeMode === "demo" ? (
              <div className="demo-note">
                You will be signed in as <strong>Master Demo</strong> for preview access.
              </div>
            ) : (
              <form className="form">
                {activeMode === "signup" && (
                  <label>
                    Full name
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </label>
                )}
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </form>
            )}

            <div className="modal-actions">
              <button className="outline" onClick={onClose}>
                Cancel
              </button>
              <button className="primary" onClick={handleAccountNext}>
                Continue
              </button>
            </div>
          </div>
        )}

        {step === "plan" && (
          <div className="modal-step">
            <h4>Select a pricing plan</h4>
            <div className="plan-options">
              {pricing.map((plan) => (
                <button
                  key={plan.name}
                  className={`plan-option ${selectedPlan?.name === plan.name ? "active" : ""}`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div>
                    <strong>{plan.name}</strong>
                    <span>{plan.note}</span>
                  </div>
                  <span className="plan-price">{plan.price}</span>
                </button>
              ))}
            </div>
            <div className="modal-actions">
              <button className="ghost" onClick={() => setStep("account")}>
                Back
              </button>
              <button className="primary" onClick={handlePlanNext} disabled={!selectedPlan}>
                Continue to payment
              </button>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="modal-step">
            <h4>Demo payment</h4>
            <p className="hint">Demo only. Enter any numbers and we will accept.</p>
            <div className="payment-methods">
              <button
                className={`chip ${paymentMethod === "stripe" ? "active" : ""}`}
                onClick={() => setPaymentMethod("stripe")}
              >
                Stripe
              </button>
              <button
                className={`chip ${paymentMethod === "paypal" ? "active" : ""}`}
                onClick={() => setPaymentMethod("paypal")}
              >
                PayPal
              </button>
            </div>
            {paymentMethod === "stripe" ? (
              <form className="form">
                <label>
                  Card number
                  <input type="text" placeholder="4242 4242 4242 4242" />
                </label>
                <div className="grid payment-grid">
                  <label>
                    Expiry
                    <input type="text" placeholder="12/30" />
                  </label>
                  <label>
                    CVC
                    <input type="text" placeholder="123" />
                  </label>
                </div>
              </form>
            ) : (
              <form className="form">
                <label>
                  PayPal email
                  <input type="email" placeholder="paypal@company.com" />
                </label>
                <label>
                  Billing name
                  <input type="text" placeholder="Billing owner" />
                </label>
              </form>
            )}
            <div className="modal-actions">
              <button className="ghost" onClick={() => setStep("plan")}>
                Back
              </button>
              <button className="primary" onClick={handlePaymentNext}>
                Complete demo payment
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="modal-step">
            <div className="success-panel">
              <h4>Payment accepted (demo)</h4>
              <p>
                Plan: <strong>{selectedPlan?.name}</strong>
              </p>
              <p>Billing status: Demo mode. No real charges were made.</p>
            </div>
            <div className="modal-actions">
              <button className="primary" onClick={handleComplete}>
                Enter workspace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
