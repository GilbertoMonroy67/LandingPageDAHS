/**
 * Datos y constantes compartidas de la landing.
 * Todo CTA principal debe apuntar a `whatsappUrl` (o a `whatsappLink()` con un mensaje propio).
 */

/** Prefijo de GitHub Pages en producción ('' en desarrollo). Ver next.config.mjs. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Construye la ruta a un archivo de /public respetando el basePath. */
export const asset = (path: string) => `${basePath}${path.startsWith('/') ? path : `/${path}`}`

export const siteUrl = 'https://gilbertomonroy67.github.io/LandingPageDAHS'

export const artist = {
  name: 'Daniel Hernandez Serafin',
  brand: 'DAHS',
  role: 'Cantante',
}

export const whatsapp = {
  number: '525636070328',
  display: '56 36 07 03 28',
  displayCard: '56-36-07-03-28',
}

const defaultMessage = 'Hola Daniel, me gustaría cotizar una presentación.'

export const whatsappLink = (message: string = defaultMessage) =>
  `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`

export const whatsappUrl = whatsappLink()

/** Medios servidos desde /public/media. */
export const media = {
  portrait: {
    src: asset('/media/dahs-bongos.jpg'),
    width: 1080,
    height: 1080,
  },
  beach: {
    src: asset('/media/dahs-playa.jpg'),
    width: 747,
    height: 1600,
  },
  casual: {
    src: asset('/media/dahs-retrato.jpg'),
    width: 1200,
    height: 1600,
  },
  video: {
    src: asset('/media/dahs-en-vivo.mp4'),
    width: 464,
    height: 832,
    poster: asset('/brand/video-poster.jpg'),
  },
  audio: {
    src: asset('/audio/dahs-muestra-en-vivo.mp3'),
  },
  logo: asset('/brand/logo-dahs.webp'),
  logoSmall: asset('/brand/logo-dahs-sm.webp'),
}

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#musica', label: 'Música' },
  { href: '#artista', label: 'El artista' },
  { href: '#contacto', label: 'Contacto' },
]

export type Service = {
  id: string
  title: string
  description: string
  priceLabel: string
  icon: 'bar' | 'party' | 'stage'
}

export const services: Service[] = [
  {
    id: 'bares',
    title: 'Bares & restaurantes',
    description: 'Un repertorio cercano para acompañar la noche sin quitarle protagonismo a tu espacio.',
    priceLabel: 'Tarifa por hora',
    icon: 'bar',
  },
  {
    id: 'privados',
    title: 'Eventos privados',
    description: 'La banda sonora para cumpleaños, reuniones y celebraciones hechas a tu medida.',
    priceLabel: 'Precio por evento',
    icon: 'party',
  },
  {
    id: 'especiales',
    title: 'Presentaciones especiales',
    description: 'Una experiencia en vivo pensada para conectar con cada invitado y cada ocasión.',
    priceLabel: 'Formato personalizado',
    icon: 'stage',
  },
]
