import { toArabicIndic } from '../utils/numerals'

export default function AchievementsModal({ value, onClose }) {
  if (!value) return null
  const special = value === 30000
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-900 border border-gold-300/60 rounded-2xl p-5 text-center" onClick={(e)=>e.stopPropagation()}>
        <div className={`text-7xl ${special ? 'animate-bounce' : 'animate-pulse'}`}>🎁</div>
        <h3 className="font-bold text-xl mt-2">إنجاز جديد</h3>
        <p>وصلتِ إلى {toArabicIndic(value)} تسبيحة</p>
        {special && <p className="text-gold-300 mt-1">🎉 إنجاز خاص ٣٠٠٠٠ 🎉</p>}
        <button className="mt-3" onClick={onClose}>إغلاق</button>
      </div>
    </div>
  )
}
