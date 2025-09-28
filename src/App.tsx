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
  // Smooth scroll + reveal-on-scroll
  useEffect(() => {
    // Smooth scroll
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    };
    document.addEventListener('click', onClick);

    // Reveal on scroll (aktivuje .reveal is-in)
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));

    // Fallback pro starší prohlížeče
    if (!('IntersectionObserver' in window)) els.forEach(el => el.classList.add('is-in'));

    return () => {
      document.removeEventListener('click', onClick);
      io.disconnect();
    };
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
