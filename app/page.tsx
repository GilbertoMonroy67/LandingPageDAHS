import { MobileCta } from '@/components/mobile-cta'
import { Artist } from '@/components/sections/artist'
import { Contact } from '@/components/sections/contact'
import { Hero } from '@/components/sections/hero'
import { Music } from '@/components/sections/music'
import { Services } from '@/components/sections/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Services />
        <Music />
        <Artist />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
