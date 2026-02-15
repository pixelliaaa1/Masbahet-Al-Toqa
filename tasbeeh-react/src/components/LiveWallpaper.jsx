import { useEffect, useRef } from 'react'

export default function LiveWallpaper({ theme = 'bright' }) {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d', { alpha: true })
    let w = 1, h = 1, px = 0, py = 0, spx = 0, spy = 0
    const loopMs = 10000
    const palette = theme === 'bright'
      ? [[250,204,21],[231,229,228],[139,21,56]]
      : [[139,21,56],[250,204,21],[207,199,202]]

    const particles = Array.from({ length: 72 }, (_, i) => ({
      x: Math.random() * 1080,
      y: Math.random() * 1920,
      r: 6 + Math.random() * (i < 18 ? 30 : 18),
      drift: 12 + Math.random() * 40,
      p: Math.random() * Math.PI * 2,
      s: 0.3 + Math.random() * 0.8,
      a: 0.08 + Math.random() * 0.35,
      d: i < 20 ? 0.6 : i < 45 ? 0.35 : 0.16,
      col: palette[Math.floor(Math.random() * palette.length)]
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      c.width = Math.floor(w * dpr); c.height = Math.floor(h * dpr)
      c.style.width = `${w}px`; c.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (e) => {
      px = ((e.clientX / w) - 0.5) * 18
      py = ((e.clientY / h) - 0.5) * 18
    }

    let raf
    const draw = (now) => {
      const t = (now % loopMs) / loopMs * Math.PI * 2
      spx += (px - spx) * 0.04; spy += (py - spy) * 0.04
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      const sx = w / 1080, sy = h / 1920
      for (const p of particles) {
        const x = ((p.x + Math.sin(t * p.s + p.p) * p.drift) * sx + spx * p.d + w) % w
        const y = ((p.y + Math.cos(t * p.s * 0.95 + p.p) * p.drift * 1.2) * sy + spy * p.d + h) % h
        const rr = p.r * (sx + sy) * .5
        const g = ctx.createRadialGradient(x, y, 0, x, y, rr * 2.8)
        g.addColorStop(0, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.a})`)
        g.addColorStop(0.35, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.a * 0.5})`)
        g.addColorStop(1, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},0)`)
        ctx.beginPath(); ctx.fillStyle = g; ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill()
      }
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }

    resize();
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('deviceorientation', (e) => {
      if (typeof e.gamma === 'number') {
        px = Math.max(-10, Math.min(10, e.gamma * 0.4))
        py = Math.max(-10, Math.min(10, e.beta * 0.2))
      }
    }, { passive: true })
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [theme])

  return <canvas ref={ref} className="wallpaper-canvas" aria-hidden="true" />
}
