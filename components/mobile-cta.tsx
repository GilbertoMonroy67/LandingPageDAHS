'use client'

import { useEffect, useState } from 'react'
import { WhatsAppButton } from '@/components/whatsapp-button'

/**
 * Barra fija inferior con el CTA de WhatsApp en móvil/tablet.
 * Aparece cuando el CTA del hero sale de pantalla y se oculta en la sección de contacto
 * (donde ya hay un CTA grande) para no duplicarlo.
 */
export function MobileCta() {
  const [heroVisible, setHeroVisible] = useState(true)
  const [contactVisible, setContactVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-hero-cta]')
    const contact = document.getElementById('contacto')
    if (!('IntersectionObserver' in window)) {
      setHeroVisible(false)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) setHeroVisible(entry.isIntersecting)
        if (entry.target === contact) setContactVisible(entry.isIntersecting)
      }
    })
    if (hero) observer.observe(hero)
    if (contact) observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  const visible = !heroVisible && !contactVisible

  return (
    <div className="mobile-cta" data-visible={visible || undefined} aria-hidden={!visible || undefined} inert={!visible || undefined}>
      <WhatsAppButton size="lg" className="mobile-cta__button">
        Cotizar por WhatsApp
      </WhatsAppButton>
    </div>
  )
}
