import { useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import References from './components/References';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  // Smooth-scroll i ve starších prohlížečích (fallback k CSS scroll-behavior)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const link = t.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const id = link.getAttribute('href')?.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72; // offset pro sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="howwework"><HowWeWork /></section>
        <section id="references"><References /></section>
        <section id="insights"><Insights /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}
