import { cn } from '@/lib/utils'

/**
 * Recursos gráficos derivados de las tarjetas del artista:
 * salpicaduras grunge (tarjeta del logo) y bordes de papel rasgado (tarjeta de contacto).
 * SVG en línea, sin peticiones extra; siempre decorativos.
 */

const splatters = {
  a: 'M0 0h232c-14 18 6 34-14 52-17 15-40 6-52 26-10 17 6 38-14 50-20 13-38-6-58 6-18 11-12 38-34 44C38 234 18 214 0 226Z M262 22a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M214 92a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z M120 196a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z',
  b: 'M300 300H64c12-16-4-30 14-46 16-14 36-4 48-22 11-17-4-36 16-48 19-12 36 6 56-6 18-11 12-36 34-42 22-7 40 12 68 2Z M30 268a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z M96 210a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z M178 116a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
} as const

export function Splatter({ variant = 'a', className }: { variant?: keyof typeof splatters; className?: string }) {
  return (
    <svg className={cn('splatter', className)} viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <path d={splatters[variant]} fill="currentColor" fillRule="evenodd" />
    </svg>
  )
}

/**
 * Genera un borde de papel rasgado determinista (mismo resultado en servidor y cliente):
 * paseo aleatorio suave con fibras finas ocasionales, como el papel de la tarjeta de contacto.
 */
function tornPath(seed: number, steps = 140) {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const pts: string[] = ['0,0', '1000,0']
  let y = 34 + rand() * 12
  for (let i = steps; i >= 0; i--) {
    y = Math.min(58, Math.max(20, y + (rand() - 0.5) * 9))
    const fiber = rand() > 0.86 ? rand() * 9 : 0
    pts.push(`${((i / steps) * 1000).toFixed(1)},${(y + fiber).toFixed(1)}`)
  }
  return `M${pts.join(' L')} Z`
}

export function TornEdge({ seed = 7, flip = false, className }: { seed?: number; flip?: boolean; className?: string }) {
  return (
    <svg
      className={cn('torn-edge', flip && 'torn-edge--flip', className)}
      viewBox="0 0 1000 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={tornPath(seed)} fill="currentColor" />
    </svg>
  )
}
