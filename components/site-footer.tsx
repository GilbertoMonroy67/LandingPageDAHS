import { LuArrowUp } from 'react-icons/lu'
import { Logo } from '@/components/brand/logo'
import { artist, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="#inicio" className="brand" aria-label="DAHS Cantante, ir al inicio">
          <Logo size={56} decorative className="brand__logo" />
          <span className="brand__text" aria-hidden="true">
            <strong>DAHS</strong>
            <small>Cantante</small>
          </span>
        </a>
        <nav aria-label="Pie de página">
          <ul className="site-footer__nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__meta">
          {artist.name} · Música en vivo
        </p>
        <a href="#inicio" className="site-footer__top" aria-label="Volver al inicio">
          <LuArrowUp size={20} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
