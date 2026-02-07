export type FooterProps = {
  onOpenSignIn: () => void;
};

export function Footer({ onOpenSignIn }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <strong>ProjectFlow</strong>
        <p>Modern SaaS project management built for scale.</p>
      </div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="#pages">Pages</a>
        <a href="#pricing">Pricing</a>
        <button className="link" onClick={onOpenSignIn}>
          Sign in
        </button>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <span>hello@projectflow.com</span>
        <span>San Francisco · Remote first</span>
      </div>
    </footer>
  );
}
