'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { LuPause, LuPlay } from 'react-icons/lu'

const BARS = 40
// Alturas fijas (decorativas) para que servidor y cliente rendericen igual.
const barHeights = Array.from({ length: BARS }, (_, i) => 22 + ((i * 37 + (i % 5) * 13) % 70))

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

type Props = {
  src: string
  title: string
}

export function AudioPlayer({ src, title }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoaded = () => setDuration(audio.duration)
    const onTime = () => setCurrent(audio.currentTime)
    const onPlay = () => {
      setPlaying(true)
      // Pausa cualquier otro medio (p. ej. el video) para que no suenen a la vez.
      document.querySelectorAll<HTMLMediaElement>('audio, video').forEach((el) => {
        if (el !== audio) el.pause()
      })
    }
    const onPause = () => setPlaying(false)
    const onEnded = () => {
      setPlaying(false)
      setCurrent(0)
      audio.currentTime = 0
    }
    const onWaiting = () => setStatus('loading')
    const onReady = () => setStatus('idle')
    const onError = () => setStatus('error')

    // Si otro medio empieza a sonar, pausa este.
    const onOtherPlay = (e: Event) => {
      if (e.target !== audio && e.target instanceof HTMLMediaElement) audio.pause()
    }

    if (audio.readyState >= 1) onLoaded()
    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('durationchange', onLoaded)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('waiting', onWaiting)
    audio.addEventListener('playing', onReady)
    audio.addEventListener('canplay', onReady)
    audio.addEventListener('error', onError)
    document.addEventListener('play', onOtherPlay, true)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('durationchange', onLoaded)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('waiting', onWaiting)
      audio.removeEventListener('playing', onReady)
      audio.removeEventListener('canplay', onReady)
      audio.removeEventListener('error', onError)
      document.removeEventListener('play', onOtherPlay, true)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        setStatus('loading')
        await audio.play()
        setStatus('idle')
      } catch {
        setStatus('error')
      }
    } else {
      audio.pause()
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setCurrent(value)
  }

  const progress = duration > 0 ? current / duration : 0
  const activeBars = Math.round(progress * BARS)

  return (
    <div
      className="player"
      data-playing={playing || undefined}
      style={{ '--progress': `${(progress * 100).toFixed(2)}%` } as CSSProperties}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="player__top">
        <span className="player__label">
          <span className="live-dot" aria-hidden="true" /> {title}
        </span>
        <span className="player__time" aria-hidden="true">
          {formatTime(current)} / {formatTime(duration)}
        </span>
      </div>

      <div className="player__body">
        <button
          type="button"
          className="player__play"
          onClick={toggle}
          aria-label={playing ? `Pausar ${title}` : `Reproducir ${title}`}
          aria-pressed={playing}
        >
          {playing ? <LuPause size={26} aria-hidden="true" /> : <LuPlay size={26} aria-hidden="true" className="player__play-icon" />}
        </button>

        <div className="player__wave" aria-hidden="true">
          {barHeights.map((h, i) => (
            <i
              key={i}
              className={i < activeBars ? 'is-active' : undefined}
              style={{ '--h': `${h}%`, '--i': i } as CSSProperties}
            />
          ))}
        </div>
      </div>

      <input
        type="range"
        className="player__seek"
        min={0}
        max={duration || 0}
        step={0.1}
        value={current}
        onChange={(e) => seek(Number(e.target.value))}
        disabled={!duration}
        aria-label={`Posición de ${title}`}
        aria-valuetext={`${formatTime(current)} de ${formatTime(duration)}`}
      />

      <p className="player__status" role="status" aria-live="polite">
        {status === 'error'
          ? 'No se pudo cargar el audio. Inténtalo de nuevo más tarde.'
          : status === 'loading'
            ? 'Cargando audio…'
            : 'Audio compartido por el artista'}
      </p>
    </div>
  )
}
