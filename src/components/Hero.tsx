export default function Hero(){
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1>Guiding Businesses Into the AI Era.</h1>
        <p>We help organizations streamline operations, connect systems, and leverage AI — using the tools they already have, without heavy investments.</p>
        <div style={{display:'flex',gap:12,marginTop:16}}>
          <a href="#contact" className="btn btn--primary">Talk to us</a>
          <a href="#services" className="btn">View services</a>
        </div>
      </div>
    </section>
  )
}
