export default function EditModal({ open, form, setForm, onSave, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-900 border border-white/20 rounded-2xl p-4 w-full max-w-md" onClick={(e)=>e.stopPropagation()}>
        <h3 className="font-bold mb-2">تعديل الذكر</h3>
        {[
          ['اسم الذكر', 'text', 'text'],
          ['العدد الحالي', 'count', 'number'],
          ['العدد المستهدف', 'target', 'number'],
          ['عدد الدورات', 'rounds', 'number'],
          ['الوقت/الثواني للـauto', 'secondsPerIncrement', 'number']
        ].map(([label,key,type]) => (
          <label key={key} className="block mb-2 text-sm">{label}
            <input className="w-full p-2 rounded bg-black/40 border border-white/20" type={type} value={form[key]} onChange={(e)=>setForm((f)=>({...f,[key]:e.target.value}))} />
          </label>
        ))}
        <div className="flex gap-2 mt-3"><button onClick={onSave}>حفظ</button><button onClick={onClose}>إلغاء</button></div>
      </div>
    </div>
  )
}
