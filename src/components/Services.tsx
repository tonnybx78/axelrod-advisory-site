export default function Services() {
  const base = import.meta.env.BASE_URL;
  const items = [
    {
      title: 'Process Optimization',
      text: 'Map, simplify, and standardize workflows to remove delays and hand-offs.',
      outcomes: 'Cycle-time reduction, quality consistency, measurable KPIs.',
    },
    {
      title: 'System Integration',
      text: 'Connect the software you already use (ERP/CRM/BI/RPA) to work as one.',
      outcomes: 'Fewer manual tasks, better data flow, zero/low additional spend.',
    },
    {
      title: 'AI for Business',
      text: 'Deploy AI for real use-cases — reporting, analysis, customer ops, knowledge search.',
      outcomes: 'Faster decisions, automation, higher productivity.',
    },
    {
      title: 'Training & Enablement',
      text: 'Upskill key employees to use AI safely and effectively in daily work.',
      outcomes: 'Adoption, governance, internal champions.',
    },
  ];

  return (
    <section id="services" className="section reveal">
      <div className="container">
        <img
          src={`${base}assets/images/services-workshop.webp`}
          alt="Process mapping workshop"
          className="img--tone"
          loading="lazy"
          decoding="async"
        />

        <small style={{ color: '#6F6F6F', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Smart Strategy. Simple Execution.
        </small>

        <div className="grid" style={{ marginTop: 20 }}>
          {items.map(it => (
            <div key={it.title} className="card col6">
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              <p className="muted"><b>Outcomes:</b> {it.outcomes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
