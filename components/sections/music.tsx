import { AudioPlayer } from '@/components/audio-player'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { media } from '@/lib/site'

export function Music() {
  return (
    <section id="musica" className="section music" aria-labelledby="musica-title">
      <div className="container music__grid">
        <header className="music__intro reveal">
          <p className="eyebrow">Escucha el ambiente</p>
          <h2 id="musica-title" className="display">
            Antes de contratar, <span className="accent">dale play.</span>
          </h2>
          <p className="section-lead">
            Una muestra del estilo de DAHS para que imagines cómo puede sonar tu próximo evento.
          </p>
          <div className="music__cta">
            <p>¿Te imaginas esta música en tu evento?</p>
            <WhatsAppButton variant="ghost">Pregunta por tu fecha</WhatsAppButton>
          </div>
        </header>

        <div className="music__audio reveal">
          <AudioPlayer src={media.audio.src} title="Muestra en vivo" />
        </div>

        <figure className="video-card reveal">
          <video
            controls
            playsInline
            preload="none"
            poster={media.video.poster}
            width={media.video.width}
            height={media.video.height}
            aria-label="Video de una presentación en vivo de DAHS"
          >
            <source src={media.video.src} type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
          <figcaption>
            <span className="live-dot" aria-hidden="true" /> Presentación en vivo
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
