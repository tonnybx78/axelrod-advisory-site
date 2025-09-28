export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2>Contact</h2>
        <p className="lead">Tell us about your challenge — we’ll reply within 1 business day.</p>

        <form
          action="https://formspree.io/f/ENDPOINT_ID"  /* ← nahraď svým Formspree/Getform ID */
          method="POST"
          className="grid"
          onSubmit={(e) => {
            // jednoduché potvrzení + vyčištění
            setTimeout(() => (e.target as HTMLFormElement).reset(), 0);
            alert('Thanks! We’ll get back within 1 business day.');
          }}
        >
          <div className="col6">
            <label>Name*</label>
            <input name="name" required style={inputStyle} />
          </div>
          <div className="col6">
            <label>Work Email*</label>
            <input name="email" type="email" required style={inputStyle} />
          </div>
          <div className="col6">
            <label>Company*</label>
            <input name="company" required style={inputStyle} />
          </div>
          <div className="col6">
            <label>Message*</label>
            <textarea name="message" required rows={4} style={inputStyle} />
          </div>

          <div className="col12" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" required />
              <span className="muted" style={{ fontSize: 14 }}>
                I agree to the processing of my personal data for the purpose of handling this inquiry.
              </span>
            </label>
            <button className="btn btn--primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  background: '#fff',
  border: '1px solid var(--line)',
  borderRadius: 12,
  outline: 'none',
};
