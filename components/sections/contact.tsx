import { LuCheck, LuPhone } from 'react-icons/lu'
import { TornEdge } from '@/components/brand/textures'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { whatsapp, whatsappUrl } from '@/lib/site'

const checklist = ['La fecha', 'El lugar', 'El tipo de evento']

export function Contact() {
  return (
    <section id="contacto" className="contact" aria-labelledby="contacto-title">
      <TornEdge seed={3} className="contact__edge contact__edge--top" />
      <div className="container contact__grid">
        <div className="contact__head reveal">
          <p className="eyebrow">Agenda abierta</p>
          <h2 id="contacto-title" className="display">
            Hagamos que <span className="accent">tu evento suene.</span>
          </h2>
          <p className="contact__word" aria-hidden="true">
            Contacto
          </p>
        </div>

        <div className="contact__card reveal">
          <p className="section-lead">
            Cuéntame la fecha, el lugar y el tipo de evento. Te comparto disponibilidad y una cotización sin
            compromiso.
          </p>
          <ul className="contact__checklist" aria-label="Para cotizar, comparte">
            {checklist.map((item) => (
              <li key={item}>
                <LuCheck size={16} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>

          <WhatsAppButton size="lg" className="contact__button">
            Escribir por WhatsApp
          </WhatsAppButton>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__phone">
            <span className="contact__phone-icon" aria-hidden="true">
              <LuPhone size={18} />
            </span>
            <span>
              <strong>{whatsapp.displayCard}</strong>
              <small>WhatsApp · Respuesta directa</small>
            </span>
          </a>
        </div>
      </div>
      <TornEdge seed={19} flip className="contact__edge contact__edge--bottom" />
    </section>
  )
}
