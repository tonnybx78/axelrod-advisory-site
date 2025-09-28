export default function About() {
  return (
    <section className="section reveal">
      <div className="container">
        <h2>About</h2>
        <p className="lead">
          Axelrod Advisory is a boutique consulting firm focused on practical transformation. We redesign processes,
          integrate existing software, and apply AI where it truly multiplies value. Our approach is hands-on,
          transparent, and measurable.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Efficiency', 'Innovation', 'Simplicity', 'Sustainability', 'Governance'].map(x => (
            <span
              key={x}
              style={{
                border: '1px solid var(--line)',
                padding: '6px 10px',
                borderRadius: 999,
                fontSize: 14,
                background: '#fff',
              }}
            >
              {x}
            </span>
          ))}
        </div>

        <p style={{ marginTop: 16, color: '#6F6F6F' }}>Less Complexity. More Results.</p>
      </div>
    </section>
  );
}
