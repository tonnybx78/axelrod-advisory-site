export default function References(){
  const refs = [
    ['Automotive (EU)','20% uplift in maintenance-planning throughput and workforce efficiency after redesigning end-to-end planning, dispatching, and reporting across multiple sites.'],
    ['Utilities (CEE)','Costing & planning model delivering faster, more accurate forecasts and reduced administrative workload via integration of existing tools and AI-assisted reporting.'],
    ['Governmental Organization Fund (EU)','100+ employees trained to use AI for analysis and client documentation, significantly improving turnaround times and consistency.'],
  ];
  return (
    <section id="references" className="section reveal">
      <div className="container">
        <img src="assets/images/training-session.webp" alt="AI training session" className="img--tone" />
        <div className="grid">
          {refs.map(([h,t])=>(
            <div key={h} className="card col6">
              <h3>{h}</h3>
              <p>{t}</p>
            </div>
          ))}
        </div>
        <p style={{marginTop:12,color:'#6F6F6F'}}>Client names withheld under NDA; detailed case notes available on request.</p>
      </div>
    </section>
  );
}
