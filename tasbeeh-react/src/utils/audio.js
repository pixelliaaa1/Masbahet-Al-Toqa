let audioCtx
const getCtx = () => audioCtx || (audioCtx = new (window.AudioContext || window.webkitAudioContext)())

export const playClick = () => {
  const ctx = getCtx()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain); gain.connect(ctx.destination)
  const t = ctx.currentTime
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(860, t)
  osc.frequency.exponentialRampToValueAtTime(530, t + 0.06)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.16, t + 0.008)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09)
  osc.start(t); osc.stop(t + 0.1)
}

export const playChime = () => {
  const ctx = getCtx()
  ;[523.25, 659.25, 783.99].forEach((f, i) => {
    const osc = ctx.createOscillator(); const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    const t = ctx.currentTime + i * 0.06
    osc.frequency.value = f; osc.type = 'sine'
    gain.gain.setValueAtTime(0.0001, t)
    gain.gain.exponentialRampToValueAtTime(0.16, t + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5)
    osc.start(t); osc.stop(t + 0.55)
  })
}
