export default function Services(){
  const items=[
    {t:'Process Optimization',d:'Map, simplify, and standardize workflows to remove delays and hand-offs.',o:'Cycle-time reduction, quality consistency, measurable KPIs.'},
    {t:'System Integration',d:'Connect the software you already use (ERP/CRM/BI/RPA) to work as one.',o:'Fewer manual tasks, better data flow, zero/low additional spend.'},
    {t:'AI for Business',d:'Deploy AI for real use-cases — reporting, analysis, customer ops, knowledge search.',o:'Faster decisions, automation, higher productivity.'},
    {t:'Training & Enablement',d:'Upskill key employees to use AI safely and effectively in daily work.',o:'Adoption, governance, internal champions.'},
  ]
  return (
    <section id="services" className="section reveal">
      <div className="container">
        <img src="/assets/images/services-workshop.webp" alt="Process mapping workshop" className="img--tone"/>
        <small style={{color:'#6F6F6F',letterSpacing:'0.08em',textTransform:'uppercase'}}>Smart Strategy. Simple Execution.</small>
        <div className="grid" style={{marginTop:20}}>
          {items.map(it=>(
            <div className="card grid col6" key={it.t}>
              <h3>{it.t}</h3><p>{it.d}</p>
              <p style={{color:'#1F1F1F'}}><b>Outcomes:</b> {it.o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
