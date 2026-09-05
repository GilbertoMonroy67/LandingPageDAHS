'use client'

import { useState } from 'react'

// Importación de íconos desde react-icons (compatible con TypeScript)
import { 
  LuMusic, 
  LuX, 
  LuMenu, 
  LuArrowUpRight, 
  LuMessageCircle, 
  LuArrowDown, 
  LuCalendarDays, 
  LuPlay, 
  LuChevronDown 
} from 'react-icons/lu'

const whatsappUrl = 'https://wa.me/525636070328?text=Hola%20Daniel%2C%20me%20gustar%C3%ADa%20cotizar%20una%20presentaci%C3%B3n.'
const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2010.36.23%20PM-A7ikBa7hbcEwtfrmQ4wJQuRMRmCUh7.jpeg'
const beachPhoto = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2010.36.22%20PM-nPQuaARqNHisChnEXkMKbCoKr5PR5E.jpeg'
const casualPhoto = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-03%20at%2010.36.24-X8pLE21pkDPD2B57CFzBZWjdbj5BIu.jpeg'
const logoCard = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-04%20at%2011.35.56%20AM-pm1mdo1wBPZQk9ek8KGiQrK7Ogy4NV.jpeg'
const performanceVideo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-09-03%20at%2010.40.26%20PM-k2arONaz0TuhPpp27A5lzfjL1MbWru.mp4'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="DAHS Cantante, inicio">
          <span className="brand-mark"><LuMusic size={17} /></span>
          <span><strong>DAHS</strong><small>CANTANTE</small></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#musica" onClick={() => setMenuOpen(false)}>Música</a>
          <a href="#artista" onClick={() => setMenuOpen(false)}>El artista</a>
          <a href={whatsappUrl} className="nav-cta">Contactar <LuArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="inicio" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Música en vivo para momentos que se recuerdan</p>
          <h1>Una voz.<br /><em>Tu momento.</em></h1>
          <p className="hero-text">Daniel Hernandez Serafin lleva guitarra, voz y atmósfera a bares, restaurantes y celebraciones privadas.</p>
          <div className="hero-actions">
            <a href={whatsappUrl} className="button button-gold"><LuMessageCircle size={17} /> Cotizar por WhatsApp</a>
            <a href="#musica" className="text-link">Escuchar una muestra <LuArrowDown size={15} /></a>
          </div>
          <div className="hero-meta"><span>DAHS CANTANTE</span><span>Disponible para contrataciones</span></div>
        </div>
        <div className="hero-visual">
          <div className="image-frame"><img src={portrait} alt="Daniel Hernandez Serafin sosteniendo un tambor" /></div>
          <div className="vertical-label">LIVE MUSIC / 2026</div>
          <div className="stamp">DAHS<br /><small>cantante</small></div>
        </div>
      </section>

      <section id="servicios" className="services section-wrap section-border">
        <div className="section-heading"><p className="eyebrow"><span /> Lo que hago</p><h2>La música correcta<br /><em>cambia el lugar.</em></h2></div>
        <div className="service-grid">
          <article className="service-card"><span className="service-number">01</span><LuCalendarDays size={22} /><h3>Bares & restaurantes</h3><p>Un repertorio cercano para acompañar la noche sin quitarle protagonismo a tu espacio.</p><div className="service-price">Tarifa por hora <strong>Consultar</strong></div></article>
          <article className="service-card featured"><span className="service-number">02</span><LuMusic size={22} /><h3>Eventos privados</h3><p>La banda sonora para cumpleaños, reuniones y celebraciones hechas a tu medida.</p><div className="service-price">Precio por evento <strong>Consultar</strong></div></article>
          <article className="service-card"><span className="service-number">03</span><LuPlay size={22} /><h3>Presentaciones especiales</h3><p>Una experiencia en vivo pensada para conectar con cada invitado y cada ocasión.</p><div className="service-price">Formato personalizado <strong>Consultar</strong></div></article>
        </div>
      </section>

      <section id="musica" className="music-section section-wrap section-border">
        <div className="music-intro"><p className="eyebrow"><span /> Escucha el ambiente</p><h2>Antes de contratar,<br /><em>dale play.</em></h2><p>Una muestra del estilo de DAHS para que imagines cómo puede sonar tu próximo evento.</p></div>
        <div className="media-card">
          <div className="media-top"><span className="live-dot" /> Muestra en vivo <span className="media-time">00:00</span></div>
          <div className="audio-visual"><div className="audio-lines">{Array.from({ length: 22 }).map((_, i) => <i key={i} style={{ height: `${20 + ((i * 17) % 55)}%` }} />)}</div><div className="play-circle"><LuPlay size={20} /></div></div>
          <p className="audio-note">Audio compartido por el artista</p>
          <p className="audio-unavailable">La muestra de audio estará disponible aquí próximamente.</p>
        </div>
        <div className="video-card"><video controls preload="metadata" poster={beachPhoto}><source src={performanceVideo} type="video/mp4" />Tu navegador no puede reproducir este video.</video><span>Presentación en vivo</span></div>
      </section>

      <section id="artista" className="artist section-wrap section-border">
        <div className="artist-photo"><img src={beachPhoto} alt="Daniel tocando guitarra frente al mar" loading="lazy" /><span className="photo-caption">En vivo · frente al mar</span></div>
        <div className="artist-copy"><p className="eyebrow"><span /> El artista</p><h2>Daniel Hernandez<br /><em>Serafin.</em></h2><p>Con una propuesta cálida y versátil, Daniel crea el ambiente que cada lugar necesita: desde una tarde tranquila hasta una celebración que pide cantar a todo pulmón.</p><div className="artist-signature">DAHS <span>cantante</span></div></div>
        <div className="artist-side"><img src={casualPhoto} alt="Retrato de Daniel Hernandez Serafin" loading="lazy" /><p>“La música no solo se escucha. Se comparte.”</p></div>
      </section>

      <section id="contacto" className="contact section-wrap"><div><p className="eyebrow"><span /> Agenda abierta</p><h2>Hagamos que<br /><em>tu evento suene.</em></h2></div><div className="contact-info"><p>Cuéntame la fecha, el lugar y el tipo de evento. Te comparto disponibilidad y una cotización sin compromiso.</p><a href={whatsappUrl} className="button button-gold"><LuMessageCircle size={18} /> 56 36 07 03 28</a><span className="contact-note">Respuesta directa por WhatsApp</span></div></section>

      <footer><a href="#inicio" className="brand"><span className="brand-mark"><LuMusic size={17} /></span><span><strong>DAHS</strong><small>CANTANTE</small></span></a><span>Daniel Hernandez Serafin · Música en vivo</span><a href="#inicio" aria-label="Volver al inicio"><LuChevronDown size={18} className="rotate-up" /></a></footer>
    </main>
  )
}