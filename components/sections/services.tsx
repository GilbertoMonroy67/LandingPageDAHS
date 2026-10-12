import type { IconType } from 'react-icons'
import { LuArrowUpRight, LuMicVocal, LuPartyPopper, LuWine } from 'react-icons/lu'
import { services, whatsappLink, type Service } from '@/lib/site'

const icons: Record<Service['icon'], IconType> = {
  bar: LuWine,
  party: LuPartyPopper,
  stage: LuMicVocal,
}

export function Services() {
  return (
    <section id="servicios" className="section services" aria-labelledby="servicios-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Lo que hago</p>
          <h2 id="servicios-title" className="display">
            La música correcta <span className="accent">cambia el lugar.</span>
          </h2>
        </header>

        <ul className="service-grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <li key={service.id} className="service-card reveal">
                <span className="service-card__number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="service-card__icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__footer">
                  <span className="service-card__price">
                    {service.priceLabel}
                    <strong>Consultar</strong>
                  </span>
                  <a
                    href={whatsappLink(`Hola Daniel, me gustaría cotizar para: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card__link"
                  >
                    Cotizar
                    <span className="sr-only"> {service.title} por WhatsApp (pestaña nueva)</span>
                    <LuArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
