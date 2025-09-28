export default function Header() {
  const base = import.meta.env.BASE_URL;
const logo = `${base}assets/images/axelrod-logo-bw.jpg?v=4`; // <— přidané ?v=4

  // Pomocné logování (uvidíš v DevTools Console po načtení stránky)
  console.log('BASE_URL =', base);
  console.log('Logo URL =', logo);

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
        <a href={base}>
          <img
            src={logo}
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
