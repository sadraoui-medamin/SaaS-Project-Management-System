type CtaSectionProps = {
  onOpenSignUp: () => void;
};

export function CtaSection({ onOpenSignUp }: CtaSectionProps) {
  return (
    <section id="contact" className="section cta">
      <div>
        <h2>Ready to organize every launch?</h2>
        <p>
          Get a guided walkthrough, or spin up a workspace and start planning right away. We will help you
          move fast.
        </p>
      </div>
      <div className="cta-actions">
        <button className="primary" onClick={onOpenSignUp}>
          Book a demo
        </button>
        <button className="ghost">Download overview</button>
      </div>
    </section>
  );
}
