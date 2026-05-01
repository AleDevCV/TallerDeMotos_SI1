import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const servicios = [
  {
    titulo: 'Mantenimientos',
    descripcion: 'Mantenimiento preventivo y correctivo para motos de todas las cilindradas.',
  },
  {
    titulo: 'Motores',
    descripcion: 'Diagnostico, reparacion y ajuste de rendimiento para motores multimarca.',
  },
  {
    titulo: 'Inyeccion',
    descripcion: 'Limpieza y calibracion de sistemas de inyeccion electronica.',
  },
  {
    titulo: 'Frenos y seguridad',
    descripcion: 'Revision y ajuste de frenos para una conduccion segura.',
  },
  {
    titulo: 'Suspension',
    descripcion: 'Servicio tecnico para suspension delantera y trasera.',
  },
  {
    titulo: 'Diagnostico general',
    descripcion: 'Inspeccion completa con recomendaciones claras para cada moto.',
  },
];

const marcas = [
  'bmw',
  'honda',
  'yamaha',
  'kawasaki',
  'suzuki',
  'ktm',
  'ducati',
  'triumph',
  'aprilia',
  'moto-guzzi',
  'husqvarna',
];

const LandingPage = () => {
  const heroBackground = {
    backgroundImage:
      "linear-gradient(110deg, rgba(12, 12, 12, 0.82), rgba(12, 12, 12, 0.25)), url('/landing-assets/hero/hero-1.jpg')",
  };

  return (
    <div className="lp-page">
      <header className="lp-header">
        <a className="lp-brand" href="#inicio" aria-label="Ir al inicio">
          <img src="/landing-assets/logo.png" alt="Logo Taller La Roca" />
        </a>

        <nav className="lp-nav">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galeria</a>
          <a href="#contacto">Contacto</a>
          <Link className="lp-btn lp-btn-ghost" to="/login">
            Login
          </Link>
          <Link className="lp-btn" to="/login">
            Registrarse
          </Link>
        </nav>
      </header>

      <main>
        <section id="inicio" className="lp-hero" style={heroBackground}>
          <div className="lp-hero-content">
            <p className="lp-kicker">Taller de motos LA ROCA</p>
            <h1>Tu moto en manos expertas</h1>
            <p>
              Reparacion, mantenimiento y seguimiento profesional para clientes,
              recepcionistas y mecanicos, conectado con tu sistema actual.
            </p>
            <div className="lp-hero-actions">
              <Link className="lp-btn" to="/login">
                Ingresar al sistema
              </Link>
              <a className="lp-btn lp-btn-ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="lp-section">
          <div className="lp-section-head">
            <p>Servicios</p>
            <h2>Especialistas en reparacion y mantenimiento</h2>
          </div>

          <div className="lp-grid lp-services-grid">
            {servicios.map((servicio) => (
              <article key={servicio.titulo} className="lp-card">
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="lp-section lp-dark">
          <div className="lp-section-head">
            <p>Galeria</p>
            <h2>Trabajos reales en nuestro taller</h2>
          </div>

          <div className="lp-grid lp-gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <figure key={n} className="lp-photo">
                <img src={`/landing-assets/work/work-${n}.jpg`} alt={`Trabajo ${n}`} />
              </figure>
            ))}
          </div>
        </section>

        <section className="lp-section lp-about">
          <div className="lp-about-media">
            <img src="/landing-assets/about/about-1.jpg" alt="Equipo tecnico" />
            <img src="/landing-assets/about/about-2.jpg" alt="Atencion en taller" />
            <img src="/landing-assets/about/about-3.jpg" alt="Servicio mecanico" />
          </div>
          <div className="lp-about-copy">
            <p>Sobre nosotros</p>
            <h2>Atencion cercana, proceso claro, resultados confiables</h2>
            <p>
              Esta portada publica muestra la informacion principal del taller.
              Cuando necesites operar el sistema, usa Login para entrar a tu
              plataforma con toda la logica actual de roles y casos de uso.
            </p>
            <Link className="lp-btn" to="/login">
              Ir a Login
            </Link>
          </div>
        </section>

        <section className="lp-section lp-brands">
          <div className="lp-section-head">
            <p>Marcas</p>
            <h2>Trabajamos con multiples marcas</h2>
          </div>
          <div className="lp-brands-track">
            {marcas.map((marca) => (
              <div key={marca} className="lp-brand-chip">
                <img src={`/landing-assets/brands/${marca}.png`} alt={`Marca ${marca}`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacto" className="lp-footer">
        <div>
          <h3>Taller LA ROCA</h3>
          <p>Av. Radial 27, Santa Cruz - Bolivia</p>
          <p>Horario: Lunes a Viernes, 8:00 a 17:30</p>
        </div>
        <div>
          <p>Telefono: +591 77712345</p>
          <p>Email: contacto@laroca.com</p>
          <Link className="lp-btn lp-btn-ghost" to="/login">
            Entrar al sistema
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
