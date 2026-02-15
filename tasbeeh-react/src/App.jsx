import { useEffect, useMemo, useRef, useState } from 'react'
import LiveWallpaper from './components/LiveWallpaper'
import FloatingCrown from './components/FloatingCrown'
import Counter from './components/Counter'
import Controls from './components/Controls'
import DhikrList from './components/DhikrList'
import EditModal from './components/EditModal'
import AutoMode from './components/AutoMode'
import CalendarPanel from './components/CalendarPanel'
import SettingsModal from './components/SettingsModal'
import AchievementsModal from './components/AchievementsModal'
import { formatTimeArabic, toArabicIndic } from './utils/numerals'
import { exportState, importState, loadState, milestones, saveState } from './utils/storage'
import { playChime, playClick } from './utils/audio'

const b = (s) => BigInt(s || '0')
const dayKey = (d = new Date()) => d.toISOString().slice(0, 10)

export default function App() {
  const [state, setState] = useState(loadState)
  const [currentId, setCurrentId] = useState(state.dhikrs[0]?.id)
  const current = state.dhikrs.find((d) => d.id === currentId) || state.dhikrs[0]
  const [pulse, setPulse] = useState(false)
  const [timerSec, setTimerSec] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [listOpen, setListOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editForm, setEditForm] = useState({ text: '', count: '0', target: 33, rounds: 0, secondsPerIncrement: 1 })
  const [autoOn, setAutoOn] = useState(false)
  const [seconds, setSeconds] = useState(current?.secondsPerIncrement || 1)
  const [rhythm, setRhythm] = useState([])
  const [achieve, setAchieve] = useState(null)
  const autoRef = useRef()
  const [monthDate, setMonthDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(null)

  useEffect(() => saveState(state), [state])
  useEffect(() => { setSeconds(current?.secondsPerIncrement || 1) }, [currentId])
  useEffect(() => {
    if (!timerOn) return
    const t = setInterval(() => setTimerSec((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [timerOn])

  const applyIncrement = () => {
    if (!current) return
    setPulse(true); setTimeout(() => setPulse(false), 250)
    if (state.settings.sound) playClick()
    if (!timerOn) setTimerOn(true)

    setState((prev) => {
      const dhikrs = prev.dhikrs.map((d) => {
        if (d.id !== current.id) return d
        let newCount = b(d.count) + 1n
        let rounds = d.rounds
        if (newCount >= BigInt(d.target)) {
          rounds += 1
          newCount = 0n
          if (prev.settings.vibration && navigator.vibrate) navigator.vibrate(2000)
          if (prev.settings.sound) playChime()
        }
        return { ...d, count: newCount.toString(), rounds }
      })

      const updated = dhikrs.find((d) => d.id === current.id)
      const total = Number(updated.count)
      const achievements = [...prev.achievements]
      for (const m of milestones) {
        if (total >= m && !achievements.includes(m)) { achievements.push(m); setAchieve(m); break }
      }
      const dk = dayKey()
      return {
        ...prev,
        dhikrs,
        achievements,
        dailyTotals: { ...prev.dailyTotals, [dk]: (prev.dailyTotals[dk] || 0) + 1 },
        dailyByDhikr: { ...prev.dailyByDhikr, [dk]: { ...(prev.dailyByDhikr[dk] || {}), [updated.text]: ((prev.dailyByDhikr[dk] || {})[updated.text] || 0) + 1 } }
      }
    })
  }

  const mutateCurrent = (fn) => setState((p) => ({ ...p, dhikrs: p.dhikrs.map((d) => d.id === current.id ? fn(d) : d) }))
  const onDec = () => mutateCurrent((d) => ({ ...d, count: (b(d.count) > 0n ? b(d.count) - 1n : 0n).toString() }))
  const onInc = () => applyIncrement()

  const openEdit = (id = current.id) => {
    const d = state.dhikrs.find((x) => x.id === id)
    setCurrentId(id)
    setEditForm({ text: d.text, count: d.count, target: d.target, rounds: d.rounds, secondsPerIncrement: d.secondsPerIncrement })
    setEditOpen(true)
  }

  const saveEdit = () => {
    setState((p) => ({ ...p, dhikrs: p.dhikrs.map((d) => d.id === currentId ? { ...d, ...editForm, target: Number(editForm.target), rounds: Number(editForm.rounds), secondsPerIncrement: Number(editForm.secondsPerIncrement), count: String(editForm.count) } : d) }))
    setEditOpen(false)
  }

  const toggleAuto = () => {
    if (autoOn) { clearInterval(autoRef.current); setAutoOn(false); setTimerOn(false); return }
    setAutoOn(true); setTimerOn(true)
    autoRef.current = setInterval(applyIncrement, Number(seconds) * 1000)
    mutateCurrent((d) => ({ ...d, secondsPerIncrement: Number(seconds) }))
  }

  useEffect(() => () => clearInterval(autoRef.current), [])

  const tapRhythm = () => setRhythm((r) => [...r.slice(-2), Date.now()])
  const startRhythm = () => {
    if (rhythm.length < 3) return
    const avg = ((rhythm[1]-rhythm[0]) + (rhythm[2]-rhythm[1])) / 2
    const sec = Math.max(0.3, Math.min(10, avg / 1000))
    setSeconds(Number(sec.toFixed(1))); setRhythm([])
  }

  const monthLabel = monthDate.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' })
  const days = useMemo(() => {
    const y = monthDate.getFullYear(), m = monthDate.getMonth()
    const first = new Date(y, m, 1).getDay(), last = new Date(y, m + 1, 0).getDate()
    const arr = Array.from({ length: first }, () => ({}))
    for (let d = 1; d <= last; d++) arr.push({ day: d, key: `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}` })
    return arr
  }, [monthDate])

  const dayDetails = selectedDay ? { date: selectedDay, counts: state.dailyByDhikr[selectedDay], tasks: state.tasks[selectedDay] || [] } : null

  const themeClass = state.settings.theme === 'bright' ? 'text-slate-900' : 'text-slate-50'

  return (
    <div dir="rtl" className={`min-h-full relative ${themeClass}`}>
      <LiveWallpaper theme={state.settings.theme} />
      <div className="vignette" />
      <FloatingCrown onClick={() => setSettingsOpen(true)} />

      <main className="relative z-10 p-3 md:p-5 max-w-6xl mx-auto">
        <header className="text-center mb-3">
          <h1 className="text-3xl font-extrabold font-amiri text-gold-300">مسبحة التقى</h1>
          <div className="flex justify-center gap-3 mt-1">
            <button title="الصوت" onClick={() => setState((p) => ({ ...p, settings: { ...p.settings, sound: !p.settings.sound } }))}>🔊</button>
            <button title="الاهتزاز" onClick={() => setState((p) => ({ ...p, settings: { ...p.settings, vibration: !p.settings.vibration } }))}>📳</button>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_22rem] gap-4 items-start">
          <section className="space-y-3">
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="bg-black/40 px-3 py-1 rounded-lg">{formatTimeArabic(timerSec)}</div>
              <button aria-label="تعديل الذكر" onClick={() => openEdit()} className="bg-black/40 px-3 py-1 rounded-lg">✏️</button>
            </div>

            <Counter count={current?.count || '0'} onIncrement={applyIncrement} pulse={pulse} />
            <Controls onResetTimer={() => { setTimerSec(0); setTimerOn(false) }} onDec={onDec} onInc={onInc} onList={() => setListOpen((v)=>!v)} onSettings={() => setSettingsOpen(true)} />
            <AutoMode seconds={seconds} setSeconds={setSeconds} onTapRhythm={tapRhythm} rhythmCount={rhythm.length} onStartRhythm={startRhythm} onCancelRhythm={() => setRhythm([])} running={autoOn} onToggle={toggleAuto} />
            <button onClick={() => setCalendarOpen((v)=>!v)} className="px-3 py-2 rounded-lg bg-black/30">📅 التقويم</button>
            <CalendarPanel open={calendarOpen} monthLabel={monthLabel} days={days} onPrev={() => setMonthDate((d)=>new Date(d.getFullYear(), d.getMonth()-1, 1))} onNext={() => setMonthDate((d)=>new Date(d.getFullYear(), d.getMonth()+1, 1))} onDay={setSelectedDay} dayDetails={dayDetails} onTaskAdd={() => {
              if (!selectedDay) return
              const text = prompt('اكتب المهمة اليومية')
              if (!text) return
              setState((p)=> ({...p, tasks: { ...p.tasks, [selectedDay]: [ ...(p.tasks[selectedDay]||[]), { text, done: false, dhikrId: current.id } ] }}))
            }} onTaskToggle={(idx)=> setState((p)=> ({...p, tasks: { ...p.tasks, [selectedDay]: (p.tasks[selectedDay]||[]).map((t,i)=> i===idx? {...t, done: !t.done}:t) }}))} />
          </section>

          <DhikrList open={listOpen} dhikrs={state.dhikrs} currentId={current?.id} onSelect={(id)=>{setCurrentId(id); if(autoOn){clearInterval(autoRef.current); setAutoOn(false)}}} onDelete={(id)=> setState((p)=> ({...p, dhikrs: p.dhikrs.filter((d)=>d.id!==id)}))} onCopy={(id)=> setState((p)=> { const d = p.dhikrs.find((x)=>x.id===id); const n = { ...d, id: `${Date.now()}`, count: '0', rounds: 0, createdAt: new Date().toISOString()}; return {...p, dhikrs: [n, ...p.dhikrs] } })} onEdit={openEdit} onReset={(id)=> setState((p)=> ({...p, dhikrs: p.dhikrs.map((d)=>d.id===id?{...d,count:'0',rounds:0}:d)}))} onAdd={()=> setState((p)=> ({...p, dhikrs: [{ id: `${Date.now()}`, text: 'ذكر جديد', count: '0', rounds: 0, target: 33, secondsPerIncrement: 1, createdAt: new Date().toISOString() }, ...p.dhikrs]}))} />
        </div>
      </main>

      <EditModal open={editOpen} form={editForm} setForm={setEditForm} onSave={saveEdit} onClose={() => setEditOpen(false)} />
      <SettingsModal open={settingsOpen} settings={state.settings} onChangeTheme={(theme)=>setState((p)=>({...p, settings:{...p.settings, theme}}))} onSound={()=>setState((p)=>({...p, settings:{...p.settings, sound: !p.settings.sound}}))} onVibration={()=>setState((p)=>({...p, settings:{...p.settings, vibration: !p.settings.vibration}}))} onExport={()=>exportState(state)} onImport={async (e)=>{
        const f = e.target.files?.[0]; if(!f) return
        const incoming = await importState(f)
        const merge = confirm('دمج؟ اضغط موافق للدمج، إلغاء للاستبدال')
        setState((prev)=> merge ? ({ ...prev, ...incoming, dhikrs: [...incoming.dhikrs, ...prev.dhikrs] }) : incoming)
      }} onClose={()=>setSettingsOpen(false)} />
      <AchievementsModal value={achieve} onClose={() => setAchieve(null)} />

      <footer className="relative z-10 text-center p-3 text-xs opacity-85">الأرقام: {toArabicIndic(current?.count || 0)}</footer>
    </div>
  )
}
