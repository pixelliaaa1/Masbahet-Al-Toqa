export default function Controls({ onResetTimer, onDec, onInc, onList, onSettings }) {
  const base = 'px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-300 transition'
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button className={base} onClick={onResetTimer} aria-label="تصفير المؤقت">⟲</button>
      <button className={base} onClick={onDec} aria-label="إنقاص">−</button>
      <button className={base} onClick={onInc} aria-label="زيادة">+</button>
      <button className={base} onClick={onList} aria-label="الأذكار">الأذكار</button>
      <button className={base} onClick={onSettings} aria-label="الإعدادات">⚙</button>
    </div>
  )
}
