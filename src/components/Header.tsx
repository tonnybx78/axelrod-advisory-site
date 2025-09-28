import { useState } from 'react';

export default function Header() {
  const base = import.meta.env.BASE_URL;
  const [open, setOpen] = useState(false);

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
            src={`${base}assets/images/axelrod-logo-bw.jpg?v=5`}
            alt="Axelrod Advisory"
            style={{ height: 36, width: 'auto', display: 'block' }}
            loading="eager"
            decoding="async"
          />
        </a>

        <button
          aria-label="Toggle menu"
          className="nav-toggle"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
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
