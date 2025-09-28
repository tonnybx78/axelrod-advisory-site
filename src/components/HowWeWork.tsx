export default function HowWeWork() {
  const base = import.meta.env.BASE_URL;
  const steps = [
    ['Discovery', 'quick assessment & opportunity scan'],
    ['Design', 'target process & solution blueprint'],
    ['Pilot', 'prove value with real data and users'],
    ['Scale', 'implement, integrate, document'],
    ['Enable', 'training, handover, support'],
  ];

  return (
    <section id="howwework" className="section reveal">
      <div className="container">
        <img
          src={`${base}assets/images/workflow-dash.webp`}
          alt="Analytics workflow"
          className="img--tone"
          loading="lazy"
          decoding="async"
        />

        <div className="grid" style={{ marginTop: 14 }}>
          {steps.map(([h, t], i) => (
            <div key={i} className="card col6">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: '#fff',
                    border: '1px solid var(--line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flex: '0 0 auto',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>{h}</h3>
                  <p style={{ margin: 0 }}>{t}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function HowWeWork(){
  const steps = [
    ['Discovery','quick assessment & opportunity scan'],
    ['Design','target process & solution blueprint'],
    ['Pilot','prove value with real data and users'],
    ['Scale','implement, integrate, document'],
    ['Enable','training, handover, support'],
  ];
  return (
    <section id="howwework" className="section reveal">
      <div className="container">
        <img src="assets/images/workflow-dash.webp" alt="Analytics workflow" className="img--tone" />
        <div className="grid">
          {steps.map(([h,t],i)=>(
            <div key={i} className="card col6">
              <h3>{i+1}. {h}</h3>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
