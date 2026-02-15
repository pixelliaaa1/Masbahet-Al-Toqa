import { toArabicIndic } from '../utils/numerals'

export default function AutoMode({ seconds, setSeconds, onTapRhythm, rhythmCount, onStartRhythm, onCancelRhythm, running, onToggle }) {
  return (
    <section className="bg-black/35 border border-white/20 rounded-2xl p-3 space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <button onClick={onTapRhythm}>عَيِّن الإيقاع</button>
        <span className="text-xs">{toArabicIndic(rhythmCount)} / ٣</span>
        <button onClick={onStartRhythm}>ابدأ</button>
        <button onClick={onCancelRhythm}>إلغاء</button>
      </div>
      <div>
        <input aria-label="سرعة التلقائي" type="range" min="0.3" max="10" step="0.1" value={seconds} onChange={(e)=>setSeconds(Number(e.target.value))} className="w-full"/>
        <div className="text-xs mt-1">{toArabicIndic(seconds.toFixed(1))} ث</div>
      </div>
      <button onClick={onToggle} className="px-3 py-2 rounded-lg bg-gold-400 text-black">{running ? 'إيقاف التلقائي' : 'تشغيل التلقائي'}</button>
    </section>
  )
}
