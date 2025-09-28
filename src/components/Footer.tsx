export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="muted">Privacy</a>
          <span className="muted">•</span>
          <a href="#terms" onClick={(e) => e.preventDefault()} className="muted">Terms</a>
          <span className="muted">•</span>
          <a
            className="muted"
            href="https://www.linkedin.com/in/antoninraizl"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="muted">© Axelrod Advisory, {year}</div>
      </div>
    </footer>
  );
}
