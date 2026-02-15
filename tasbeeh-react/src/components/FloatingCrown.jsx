import { useEffect, useRef, useState } from 'react'

export default function FloatingCrown({ onClick }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 16, y: 100 })

  useEffect(() => {
    const el = ref.current
    let dragging = false, sx = 0, sy = 0, vx = 0, vy = 0, lx = pos.x, ly = pos.y, lt = performance.now(), raf

    const clamp = (x, y) => {
      const w = window.innerWidth - 72
      const h = window.innerHeight - 72
      return { x: Math.max(0, Math.min(w, x)), y: Math.max(0, Math.min(h, y)), w, h }
    }

    const animate = () => {
      if (dragging) return
      let x = lx + vx, y = ly + vy
      const b = clamp(x, y)
      if (x !== b.x) vx = -vx * (0.68 + Math.min(0.25, Math.abs(vx) * 0.02))
      if (y !== b.y) vy = -vy * (0.68 + Math.min(0.25, Math.abs(vy) * 0.02))
      x = b.x; y = b.y
      vx *= 0.94; vy *= 0.94
      lx = x; ly = y; setPos({ x, y })
      if (Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05) raf = requestAnimationFrame(animate)
    }

    const down = (e) => {
      dragging = true
      const p = 'touches' in e ? e.touches[0] : e
      sx = p.clientX - lx; sy = p.clientY - ly
      if (raf) cancelAnimationFrame(raf)
    }
    const move = (e) => {
      if (!dragging) return
      const p = 'touches' in e ? e.touches[0] : e
      const now = performance.now(); const dt = Math.max(1, now - lt)
      const nx = p.clientX - sx, ny = p.clientY - sy
      vx = (nx - lx) / dt * 16; vy = (ny - ly) / dt * 16
      const c = clamp(nx, ny)
      lx = c.x; ly = c.y; lt = now
      setPos({ x: c.x, y: c.y })
    }
    const up = () => { if (!dragging) return; dragging = false; raf = requestAnimationFrame(animate) }

    el.addEventListener('mousedown', down)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    el.addEventListener('touchstart', down, { passive: true })
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('touchend', up)

    return () => {
      el.removeEventListener('mousedown', down)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      el.removeEventListener('touchstart', down)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', up)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label="التاج الذهبي"
      className="fixed z-50 w-16 h-16 animate-floatY"
      style={{ left: pos.x, top: pos.y }}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_14px_rgba(250,204,21,.7)]">
        <defs>
          <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff7c2"/><stop offset="45%" stopColor="#facc15"/><stop offset="100%" stopColor="#d4a102"/>
          </linearGradient>
        </defs>
        <path d="M8 72h84l-6 18H14z" fill="url(#goldGrad)"/>
        <path d="M10 70 20 30l20 18 10-32 10 32 20-18 10 40z" fill="url(#goldGrad)"/>
        <circle cx="20" cy="30" r="5" fill="#e7e5e4"/><circle cx="50" cy="16" r="6" fill="#67e8f9"/><circle cx="80" cy="30" r="5" fill="#fda4af"/>
        <path d="M18 60h64" stroke="#fff" strokeOpacity=".5" className="animate-shimmer"/>
      </svg>
    </button>
  )
}
