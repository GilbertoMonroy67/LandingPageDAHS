'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { Logo } from '@/components/brand/logo'
import { navLinks, whatsappUrl } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const close = useCallback((returnFocus = false) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!open) return

    // Lleva el foco al primer enlace del menú al abrirlo.
    navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true)
    }
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!navRef.current?.contains(target) && !toggleRef.current?.contains(target)) close()
    }
    // Si se pasa a escritorio con el menú abierto, ciérralo.
    const mq = window.matchMedia('(min-width: 900px)')
    const onResize = () => mq.matches && close()

    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    mq.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      mq.removeEventListener('change', onResize)
    }
  }, [open, close])

  return (
    <header className="site-header" data-open={open || undefined}>
      <div className="site-header__inner">
        <a href="#inicio" className="brand" aria-label="DAHS Cantante, ir al inicio" onClick={() => close()}>
          <Logo size={48} decorative priority className="brand__logo" />
          <span className="brand__text" aria-hidden="true">
            <strong>DAHS</strong>
            <small>Cantante</small>
          </span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX size={24} aria-hidden="true" /> : <LuMenu size={24} aria-hidden="true" />}
        </button>

        <nav ref={navRef} id="menu-principal" className="nav" aria-label="Principal">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link" onClick={() => close()}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={whatsappUrl} className="btn btn--gold btn--sm nav__cta" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={17} aria-hidden="true" />
            Cotizar
            <span className="sr-only"> por WhatsApp (se abre en una pestaña nueva)</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
