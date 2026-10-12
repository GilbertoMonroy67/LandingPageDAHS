# CLAUDE.md

Contexto del proyecto para Claude Code. Mantener este archivo actualizado cuando cambie la arquitectura, el despliegue o las decisiones de diseño.

## Qué es

Landing page de **DAHS Cantante** (Daniel Hernandez Serafin), cantante con guitarra que ofrece música en vivo para bares, restaurantes, eventos privados y presentaciones especiales. El objetivo único de la página es **convertir visitas en contactos por WhatsApp** (cotizaciones).

- Idioma del contenido: español (México). `lang="es"`.
- Contacto: WhatsApp `+52 56 3607 0328` (`whatsappUrl` y `whatsappLink(mensaje)` en [lib/site.ts](lib/site.ts), con mensaje prellenado).
- Proyecto generado originalmente con v0.app y luego adaptado para GitHub Pages.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict).
- **Tailwind CSS v4** vía `@tailwindcss/postcss` + `tw-animate-css`. No hay `tailwind.config`; los tokens van en `@theme inline` dentro de [app/globals.css](app/globals.css).
- **shadcn/ui** (estilo `base-nova`, primitivos de `@base-ui/react`). Solo existe [components/ui/button.tsx](components/ui/button.tsx) y hoy **no se usa** en la página (los botones usan las clases `.btn` de `globals.css`).
- Íconos: `react-icons/lu` (Lucide) en la página y `FaWhatsapp` de `react-icons/fa6` para los CTA; `lucide-react` también está instalado.
- Fuentes vía `next/font/google` en [app/layout.tsx](app/layout.tsx): **Bebas Neue** (display) y **Montserrat** (cuerpo/UI). Requieren red en el build.
- Alias de imports: `@/*` → raíz del repo. Utilidad `cn()` en [lib/utils.ts](lib/utils.ts).

## Estructura

```
app/
  layout.tsx    # fuentes, metadata (OG/Twitter, íconos, metadataBase), viewport (dark, themeColor #0a0a0a)
  page.tsx      # componente de servidor que compone las secciones
  globals.css   # tokens + todos los estilos (CSS plano con clases semánticas, mobile-first)
components/
  site-header.tsx     # 'use client' · header sticky + menú móvil accesible
  mobile-cta.tsx      # 'use client' · barra fija de WhatsApp en móvil (IntersectionObserver)
  audio-player.tsx    # 'use client' · reproductor real de la muestra de audio
  whatsapp-button.tsx # enlace CTA estándar a WhatsApp (pestaña nueva)
  site-footer.tsx
  brand/logo.tsx      # <Logo size decorative priority />: logo real recortado
  brand/textures.tsx  # <Splatter /> (salpicaduras) y <TornEdge /> (papel rasgado), SVG en línea
  sections/           # hero, services, music, artist, contact (componentes de servidor)
  ui/                 # componentes shadcn
lib/
  site.ts       # constantes: WhatsApp, URLs de medios, servicios, navegación, helper asset()
  utils.ts      # cn()
public/
  brand/        # logo-dahs.png (720px, transparente), logo-dahs.webp, logo-dahs-sm.webp, video-poster.jpg
  audio/        # dahs-muestra-en-vivo.mp3
  icon.svg, icon-*-32x32.png, apple-icon.png, og-image.jpg
out/            # build estático generado (no editar a mano)
```

Secciones de la página (anclas): `#inicio` (hero) → `#servicios` → `#musica` → `#artista` → `#contacto` → footer.

## Diseño actual

Identidad derivada del **logo del artista** (anillo plateado dibujado a mano + micrófono vintage + pentagrama, "DAHS / CANTANTE") y de su tarjeta de contacto (fondo negro, papel rasgado gris, "CONTACTO" en sans geométrica gruesa, ícono de teléfono dorado).

- **Paleta** (tokens en `:root` de `globals.css`, expuestos en `@theme inline`): fondo `--bg #0a0a0a`, `--bg-raised #121212`, paneles `--panel #161616`/`--panel-2 #1d1d1d`, bordes `--line #2a2a2a`/`--line-strong #3d3d3d`, texto `--fg #f4f4f2`, plata `--silver #b4b4b4`, texto secundario `--muted #a3a3a3` (7.9:1), salpicaduras `--splatter #222`, papel `--paper #8f8f8f`. **Dorado `--gold #d6ad1a` reservado para acciones** (CTA, play, progreso, enlaces "Cotizar") y acentos de titulares; el texto sobre dorado es `--on-gold #0a0a0a` (9.3:1).
- **Tipografía**: titulares `.display` en Bebas Neue mayúsculas (como "DAHS"), con la segunda línea en `<span className="accent">` dorada; cuerpo y UI en Montserrat; eyebrows en mayúsculas con tracking y filete dorado; palabra decorativa "CONTACTO" en Montserrat 900 con contorno.
- **Recursos gráficos**: salpicaduras grunge (`<Splatter />`) en hero y artista; bordes de papel rasgado (`<TornEdge />`) en la foto del hero y en la sección de contacto; grano de papel global (`body::after`, SVG `feTurbulence` en data URI).
- **Logo**: recortado de la captura `WhatsApp Image 2026-09-04 at 11.35.56 AM.jpeg` (enmascarado por luminancia + elipse) → `public/brand/`. Se usa en header y footer (48–56 px, versión `-sm`), como sello grande sobre la foto del hero, como firma en "El artista", como `poster` del video y en `og-image.jpg`/`apple-icon.png`. El favicon `icon.svg` es una **recreación simplificada** (anillo + micrófono + pentagrama dorado) porque el recorte no se lee a 32 px. Conviene reemplazar todo por el archivo original en alta resolución cuando esté disponible.
- **Formas**: botones tipo píldora (`.btn`, `.btn--gold`, `.btn--ghost`, tamaños `--sm`/`--lg`, mínimo 44–56 px de alto), tarjetas con `--radius 14px`/`--radius-lg 20px`.
- **Layout**: CSS plano con clases semánticas tipo BEM ligero (`.hero__title`, `.service-card__link`…), mobile-first. Breakpoints: `400px` (ajuste de botones), `520px`, `768px`, `900px` (menú de escritorio, hero en 2 columnas), `1024px` (servicios en 3 columnas), `1100px`/`1200px` (artista y música en 3 columnas).
- **Movimiento**: entrada del hero con keyframes, `.reveal` con scroll-driven animations (`animation-timeline: view()`, mejora progresiva sin JS), barras del reproductor animadas al sonar. Todo dentro de `prefers-reduced-motion: no-preference`.
- **Accesibilidad**: skip link, `:focus-visible` dorado, menú con `aria-expanded`/`aria-controls`, Escape y retorno de foco; un solo `h1`; fotos en escala de grises con `width`/`height` y `loading="lazy"` fuera del hero.
- **Conversión**: CTA de WhatsApp en header, hero (con microcopy de qué pasa al hacer clic), cada tarjeta de servicio (mensaje prellenado con el servicio), sección música y contacto; barra fija inferior en móvil que aparece al salir del hero y se oculta en contacto.

## Medios

- Fotos y video viven en `public/media/` (copias limpias de los originales de WhatsApp de la raíz; rutas en `media` de [lib/site.ts](lib/site.ts) con `asset()` y sus dimensiones reales). Sin dependencias de Vercel. El video es vertical (464×832).
- La muestra de audio es el `.mpeg` original (en realidad MP3 192 kbps, ~4:09) copiado a `public/audio/dahs-muestra-en-vivo.mp3`; el reproductor es real (play/pausa, barra de progreso accesible, tiempo) y pausa el video si suena a la vez.
- En la raíz del repo hay un segundo video (`WhatsApp Video 2026-09-03 at 10.37.46 PM.mp4`, vertical, 27 s) que **no** se usa todavía.
- Rutas a `public/` siempre con `asset('/ruta')` de `lib/site.ts`, que antepone `NEXT_PUBLIC_BASE_PATH` (definido en `next.config.mjs`). Next no prefija automáticamente `<img>`, `<audio>`, `poster` ni los íconos de metadata.

## Comandos

```bash
npm install        # CI usa npm ci con package-lock.json (también existe pnpm-lock.yaml, no es el que usa CI)
npm run dev        # servidor local en http://localhost:3000
npm run build      # export estático a ./out
```

No hay scripts de lint ni tests. Verificar cambios con `npm run build` (incluye chequeo de tipos) y revisando en `npm run dev`.

Si `node_modules` se instaló desde Windows, en WSL `next` falla (sin permiso de ejecución y sin el binario SWC de Linux): reinstalar con `npm ci` desde WSL.

## Despliegue (GitHub Pages)

- [next.config.mjs](next.config.mjs): `output: 'export'`, `images.unoptimized: true`, y `basePath: '/LandingPageDAHS'` **solo en producción**.
- Workflow [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml): en cada push a `main` → Node 20, `npm ci`, `npm run build`, sube `./out` a Pages.
- Restricciones por ser export estático: nada de API routes, Server Actions, `next/image` optimizado, middleware ni rutas dinámicas sin `generateStaticParams`.
- Rutas a assets locales en producción deben incluir el prefijo `/LandingPageDAHS` (o usar rutas relativas que lo respeten).

## Convenciones

- Commits en español con prefijo tipo Conventional Commits (`fix:`, `feat:`…).
- Textos de UI en español, tono cálido y cercano, en segunda persona ("tu evento").
- Todo CTA principal lleva a `whatsappUrl`.
- Archivos `*:Zone.Identifier` son basura de Windows/WSL: no editarlos ni commitearlos.

## Agentes

- **frontend** ([.claude/agents/frontend.md](.claude/agents/frontend.md)): rediseño visual y mejoras de UX/UI de la landing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
