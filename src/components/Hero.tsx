export default function Hero() {
  const bg = `${import.meta.env.BASE_URL}assets/images/hero-ce-office.webp?v=5`;

  return (
    <section
      id="hero"
      className="hero"
      style={{
        background: `linear-gradient(to bottom, rgba(10,10,10,.38), rgba(10,10,10,.38)), url('${bg}') center/cover no-repeat`,
      }}
    >
      <div className="container">
        <h1>Guiding Businesses Into the AI Era.</h1>
        <p>
          We help organizations streamline operations, connect systems, and leverage AI — using the tools they already
          have, without heavy investments.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <a href="#contact" className="btn btn--primary">Talk to us</a>
          <a href="#services" className="btn">View services</a>
        </div>
      </div>
    </section>
  );
}
