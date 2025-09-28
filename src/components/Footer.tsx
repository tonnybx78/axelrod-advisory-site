export default function Footer(){
  const y=new Date().getFullYear()
  return (
    <footer className="section" style={{paddingTop:32,paddingBottom:32}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <nav style={{display:'flex',gap:16}}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="https://www.linkedin.com/in/antoninraizl" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
        <small>© Axelrod Advisory, {y}</small>
      </div>
    </footer>
  )
}
