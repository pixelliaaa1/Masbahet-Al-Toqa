import { toArabicIndic } from '../utils/numerals'

export default function CalendarPanel({ open, monthLabel, days, onPrev, onNext, onDay, dayDetails, onTaskAdd, onTaskToggle }) {
  if (!open) return null
  return (
    <section className="bg-black/35 border border-white/20 rounded-2xl p-3">
      <div className="flex justify-between items-center mb-2"><button onClick={onPrev}>‹</button><strong>{monthLabel}</strong><button onClick={onNext}>›</button></div>
      <div className="grid grid-cols-7 gap-1 text-xs mb-2">
        {['أحد','إثن','ثل','أرب','خم','جم','سب'].map((d)=><div key={d} className="text-center opacity-80">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d,i)=> <button key={i} onClick={()=>d.key&&onDay(d.key)} className="h-10 rounded bg-white/10 text-xs">{d.day ? toArabicIndic(d.day) : ''}</button>)}
      </div>
      {dayDetails && (
        <div className="mt-3 p-2 rounded-lg bg-white/5 text-xs">
          <div>تفاصيل اليوم: {dayDetails.date}</div>
          {Object.entries(dayDetails.counts||{}).map(([k,v]) => <div key={k}>{k}: {toArabicIndic(v)}</div>)}
          <button className="mt-2" onClick={onTaskAdd}>+ مهمة يومية</button>
          {(dayDetails.tasks||[]).map((t,idx)=><label key={idx} className="flex gap-2"><input type="checkbox" checked={!!t.done} onChange={()=>onTaskToggle(idx)} />{t.text}</label>)}
        </div>
      )}
    </section>
  )
}
