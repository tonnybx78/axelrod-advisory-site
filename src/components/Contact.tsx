export default function Contact(){
  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2>Contact</h2>
        <p>Tell us about your challenge — we’ll reply within 1 business day.</p>
        <form action="https://formspree.io/f/ENDPOINT_ID" method="POST" className="card" id="contactForm">
          <div className="grid">
            <label className="col6"><span>Name*</span><input name="name" required /></label>
            <label className="col6"><span>Work Email*</span><input name="workEmail" type="email" required /></label>
            <label className="full"><span>Company*</span><input name="company" required /></label>
            <label className="full"><span>Message*</span><textarea name="message" rows={5} required /></label>
            <label className="full checkbox"><input type="checkbox" name="consent" required /><span>I agree to the processing of my personal data for the purpose of handling this inquiry.</span></label>
            <input type="text" name="_gotcha" style={{display:'none'}} />
            <input type="hidden" name="_redirect" value="/#contact-success" />
            <div className="full"><button className="btn btn--primary" type="submit">Send</button></div>
          </div>
        </form>
        <p id="contact-success" style={{display:'none'}} aria-live="polite">Thank you — we’ll get back to you within 1 business day.</p>
      </div>
    </section>
  )
}
