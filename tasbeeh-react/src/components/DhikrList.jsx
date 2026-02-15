import { toArabicIndic } from '../utils/numerals'

export default function DhikrList({ open, dhikrs, currentId, onSelect, onDelete, onCopy, onEdit, onReset, onAdd }) {
  if (!open) return null
  return (
    <section className="w-full lg:w-96 bg-black/45 border border-white/20 rounded-2xl p-3" aria-label="لوحة الأذكار">
      <div className="flex justify-between mb-2"><h2 className="font-bold">الأذكار</h2><button onClick={onAdd}>+ جديد</button></div>
      <div className="space-y-2 max-h-[45vh] overflow-auto">
        {dhikrs.map((d) => (
          <div key={d.id} className={`p-2 rounded-xl border ${d.id===currentId?'border-gold-300':'border-white/10'} bg-white/5`}>
            <button onClick={() => onSelect(d.id)} className="w-full text-right font-naskh">{d.text}</button>
            <div className="text-xs opacity-80">{toArabicIndic(d.count)} / {toArabicIndic(d.target)} | الدورات: {toArabicIndic(d.rounds)}</div>
            <div className="flex gap-1 mt-1 text-xs">
              <button onClick={() => onDelete(d.id)} aria-label="حذف">🗑</button>
              <button onClick={() => onCopy(d.id)} aria-label="نسخ">⎘</button>
              <button onClick={() => onEdit(d.id)} aria-label="تعديل">✏️</button>
              <button onClick={() => onReset(d.id)} aria-label="تصفير">⟲</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
