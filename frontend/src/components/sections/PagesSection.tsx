import { pages } from "../../data/landing";

export function PagesSection() {
  return (
    <section id="pages" className="section">
      <div className="section-title">
        <h2>Each page has a clear role</h2>
        <p>Every team member knows where to go and why it exists.</p>
      </div>
      <div className="grid pages-grid">
        {pages.map((page) => (
          <article key={page.name} className="card page-card">
            <div>
              <h3>{page.name}</h3>
              <span className="page-role">{page.role}</span>
            </div>
            <p>{page.copy}</p>
          </article>
        ))}
      </div>
      <div className="grid page-preview">
        <div className="preview-panel">
          <span>Dashboard</span>
          <div className="preview-row" />
          <div className="preview-row short" />
          <div className="preview-pills">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="preview-panel">
          <span>Projects</span>
          <div className="preview-row" />
          <div className="preview-row" />
          <div className="preview-row short" />
        </div>
        <div className="preview-panel">
          <span>Tasks</span>
          <div className="preview-row" />
          <div className="preview-row short" />
          <div className="preview-row" />
        </div>
      </div>
    </section>
  );
}
