import { useState } from "react";

export type HeaderProps = {
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
  onLogout: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  signedIn: boolean;
  accountName?: string;
  planName?: string;
};

export function Header({
  onOpenSignIn,
  onOpenSignUp,
  onLogout,
  theme,
  onToggleTheme,
  signedIn,
  accountName,
  planName,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`topbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">ProjectFlow</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#pages">Pages</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav-cta">
        {signedIn ? (
          <>
            <span className="account-chip">{accountName || "Demo user"}</span>
            {planName && <span className="plan-chip">{planName} plan</span>}
            <button className="ghost" onClick={onLogout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <button className="ghost" onClick={onOpenSignIn}>
              Sign in
            </button>
            <button className="primary" onClick={onOpenSignUp}>
              Request a demo
            </button>
          </>
        )}
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <div className="mobile-menu">
        <a href="#features" onClick={() => setMenuOpen(false)}>
          Features
        </a>
        <a href="#workflow" onClick={() => setMenuOpen(false)}>
          Workflow
        </a>
        <a href="#pages" onClick={() => setMenuOpen(false)}>
          Pages
        </a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <div className="mobile-actions">
          {signedIn ? (
            <>
              <span className="account-chip">{accountName || "Demo user"}</span>
              {planName && <span className="plan-chip">{planName} plan</span>}
              <button
                className="ghost"
                onClick={() => {
                  setMenuOpen(false);
                  onLogout();
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                className="ghost"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenSignIn();
                }}
              >
                Sign in
              </button>
              <button
                className="primary"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenSignUp();
                }}
              >
                Request a demo
              </button>
            </>
          )}
          <button className="theme-toggle" onClick={onToggleTheme}>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </header>
  );
}
