export default function Header() {
  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        <a href="/">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/axelrod-logo-bw.jpg`}
            alt="Axelrod Advisory"
            style={{ height: 28, width: 'auto', display: 'block' }}
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#howwework">How we work</a>
          <a href="#references">References</a>
          <a href="#insights">Insights</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>
      </div>
    </header>
  );
}
