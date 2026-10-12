import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { asset, siteUrl } from '@/lib/site'
import './globals.css'

// Display condensada (como "DAHS" en el logo) + sans geométrica (como "CONTACTO" en la tarjeta).
const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-bebas',
})

const body = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
})

const title = 'DAHS Cantante | Música en vivo para tu evento'
const description =
  'Contrata a Daniel Hernandez Serafin, DAHS Cantante, para bares, restaurantes, eventos privados y presentaciones especiales. Cotiza por WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'DAHS Cantante',
  authors: [{ name: 'Daniel Hernandez Serafin' }],
  icons: {
    icon: [
      { url: asset('/icon.svg'), type: 'image/svg+xml' },
      { url: asset('/icon-dark-32x32.png'), sizes: '32x32', type: 'image/png' },
    ],
    apple: asset('/apple-icon.png'),
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: `${siteUrl}/`,
    siteName: 'DAHS Cantante',
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Logo de DAHS Cantante: música en vivo, contacto por WhatsApp 56-36-07-03-28',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
