import "./styles/index.css";
import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Content } from "./components/layout/Content";
import { DemoAccessModal, DemoAccessResult, AuthMode } from "./components/auth/DemoAccessModal";
import { DemoDashboardPage } from "./pages/DemoDashboardPage";
import type { PricingPlan } from "./data/landing";

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }
  const stored = window.localStorage.getItem("projectflow-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<AuthMode>("signin");
  const [signedIn, setSignedIn] = useState(false);
  const [accountName, setAccountName] = useState("Demo User");
  const [plan, setPlan] = useState<PricingPlan | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<DemoAccessResult["paymentMethod"]>("stripe");
  const [theme, setTheme] = useState<"light" | "dark">(getPreferredTheme());

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("projectflow-theme", theme);
  }, [theme]);

  const openModal = (mode: AuthMode) => {
    setModalMode(mode);
    setModalOpen(true);
  };

  const handleComplete = (result: DemoAccessResult) => {
    setSignedIn(true);
    setAccountName(result.name);
    setPlan(result.plan);
    setPaymentMethod(result.paymentMethod);
    setModalOpen(false);
  };

  return (
    <div className="app">
      <Header
        onOpenSignIn={() => openModal("signin")}
        onOpenSignUp={() => openModal("signup")}
        onLogout={() => {
          setSignedIn(false);
          setPlan(null);
        }}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        signedIn={signedIn}
        accountName={accountName}
        planName={plan?.name}
      />
      {signedIn && plan ? (
        <DemoDashboardPage
          accountName={accountName}
          plan={plan}
          paymentMethod={paymentMethod}
          onManagePlan={() => openModal("signup")}
        />
      ) : (
        <Content onOpenSignUp={() => openModal("signup")} currentPlanName={plan?.name} />
      )}
      <Footer onOpenSignIn={() => openModal("signin")} />
      {modalOpen && (
        <DemoAccessModal
          mode={modalMode}
          onClose={() => setModalOpen(false)}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}
