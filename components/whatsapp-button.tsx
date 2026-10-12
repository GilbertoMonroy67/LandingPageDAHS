import type { ReactNode } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { whatsappUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'gold' | 'ghost'
  icon?: boolean
}

/** Enlace estándar a WhatsApp: abre el chat con mensaje prellenado en una pestaña nueva. */
export function WhatsAppButton({ children, href = whatsappUrl, className, size = 'md', variant = 'gold', icon = true }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('btn', `btn--${variant}`, size !== 'md' && `btn--${size}`, className)}
    >
      {icon && <FaWhatsapp size={size === 'lg' ? 22 : 19} aria-hidden="true" />}
      {children}
      <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
    </a>
  )
}
