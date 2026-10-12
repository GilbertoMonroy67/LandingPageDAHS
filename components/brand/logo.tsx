import { artist, media } from '@/lib/site'
import { cn } from '@/lib/utils'

type LogoProps = {
  /** Tamaño en px del lado del cuadrado. */
  size: number
  className?: string
  /** Si es decorativo (ya hay texto con el nombre al lado), se oculta a lectores de pantalla. */
  decorative?: boolean
  priority?: boolean
}

/**
 * Logo real de DAHS (anillo + micrófono vintage + pentagrama), recortado de la tarjeta del artista
 * con fondo transparente. Usa la versión pequeña para tamaños de icono.
 */
export function Logo({ size, className, decorative = false, priority = false }: LogoProps) {
  return (
    <img
      src={size <= 80 ? media.logoSmall : media.logo}
      width={size}
      height={size}
      alt={decorative ? '' : `Logo de ${artist.brand} ${artist.role}: micrófono vintage dentro de un anillo`}
      aria-hidden={decorative || undefined}
      className={cn('logo-img', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}
