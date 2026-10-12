import { LuArrowDown } from 'react-icons/lu'
import { Logo } from '@/components/brand/logo'
import { Splatter, TornEdge } from '@/components/brand/textures'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { media } from '@/lib/site'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <Splatter variant="a" className="hero__splatter hero__splatter--tl" />
      <Splatter variant="b" className="hero__splatter hero__splatter--br" />

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Música en vivo para momentos que se recuerdan</p>
          <h1 id="hero-title" className="display hero__title">
            Una voz.
            <span className="accent">Tu momento.</span>
          </h1>
          <p className="hero__lead">
            <strong>Daniel Hernandez Serafin</strong> lleva guitarra, voz y atmósfera a bares, restaurantes y
            celebraciones privadas.
          </p>

          <p className="hero__status">
            <span className="live-dot" aria-hidden="true" /> Disponible para contrataciones
          </p>
          <div className="hero__actions" data-hero-cta>
            <WhatsAppButton size="lg">Cotizar por WhatsApp</WhatsAppButton>
            <a href="#musica" className="btn btn--ghost btn--lg">
              Escuchar una muestra <LuArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="hero__microcopy">
            Se abre un chat con Daniel con tu mensaje listo. Cotización sin compromiso.
          </p>

          <ul className="hero__tags" aria-label="Tipos de evento">
            <li>Bares & restaurantes</li>
            <li>Eventos privados</li>
            <li>Presentaciones especiales</li>
          </ul>
        </div>

        <div className="hero__visual">
          <figure className="hero__photo">
            <img
              src={media.beach.src}
              width={media.beach.width}
              height={media.beach.height}
              alt="Daniel tocando guitarra frente al mar"
              fetchPriority="high"
              decoding="async"
            />
            <TornEdge seed={11} className="hero__photo-edge" />
          </figure>
          <div className="hero__badge">
            <Logo size={300} priority />
          </div>
        </div>
      </div>
    </section>
  )
}
