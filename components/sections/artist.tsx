import { Logo } from '@/components/brand/logo'
import { Splatter } from '@/components/brand/textures'
import { media } from '@/lib/site'

export function Artist() {
  return (
    <section id="artista" className="section artist" aria-labelledby="artista-title">
      <Splatter variant="b" className="artist__splatter" />
      <div className="container artist__grid">
        <figure className="artist__photo reveal">
          <img
            src={media.portrait.src}
            width={media.portrait.width}
            height={media.portrait.height}
            alt="Daniel Hernandez Serafin sosteniendo un tambor"
            loading="lazy"
            decoding="async"
          />
          <figcaption>DAHS · Música en vivo</figcaption>
        </figure>

        <div className="artist__copy reveal">
          <p className="eyebrow">El artista</p>
          <h2 id="artista-title" className="display">
            Daniel Hernandez <span className="accent">Serafin.</span>
          </h2>
          <p className="section-lead">
            Con una propuesta cálida y versátil, Daniel crea el ambiente que cada lugar necesita: desde una tarde
            tranquila hasta una celebración que pide cantar a todo pulmón.
          </p>
          <div className="artist__signature">
            <Logo size={132} decorative />
          </div>
        </div>

        <aside className="artist__side reveal">
          <img
            src={media.casual.src}
            width={media.casual.width}
            height={media.casual.height}
            alt="Retrato de Daniel Hernandez Serafin"
            loading="lazy"
            decoding="async"
          />
          <blockquote>
            <p>“La música no solo se escucha. Se comparte.”</p>
          </blockquote>
        </aside>
      </div>
    </section>
  )
}
