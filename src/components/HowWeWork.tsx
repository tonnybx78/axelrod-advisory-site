export default function HowWeWork(){
  const s=[
    ['Discovery','quick assessment & opportunity scan'],
    ['Design','target process & solution blueprint'],
    ['Pilot','prove value with real data and users'],
    ['Scale','implement, integrate, document'],
    ['Enable','training, handover, support'],
  ]
  return (
    <section id="howwework" className="section reveal">
      <div className="container">
        <img src={`${import.meta.env.BASE_URL}assets/images/workflow-dash.webp`} ... />
        <div className="grid">
          {s.map(([h,t],i)=>(
            <div className="card col6" key={i}><h3>{i+1}. {h}</h3><p>{t}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
