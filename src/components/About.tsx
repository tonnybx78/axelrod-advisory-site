export default function About(){
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <p className="lead">Axelrod Advisory is a boutique consulting firm focused on practical transformation. We redesign processes, integrate existing software, and apply AI where it truly multiplies value. Our approach is hands-on, transparent, and measurable.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {['Efficiency','Innovation','Simplicity','Sustainability'].map(x=>(
            <span key={x} className="btn" style={{borderStyle:'dashed'}}>{x}</span>
          ))}
        </div>
        <p style={{marginTop:16,fontWeight:600}}>Less Complexity. More Results.</p>
      </div>
    </section>
  )
}
