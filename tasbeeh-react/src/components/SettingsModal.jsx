export default function SettingsModal({ open, settings, onChangeTheme, onSound, onVibration, onExport, onImport, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-slate-900 border border-white/20 rounded-2xl p-4 w-full max-w-md" onClick={(e)=>e.stopPropagation()}>
        <h3 className="font-bold mb-2">الإعدادات</h3>
        <div className="space-y-2 text-sm">
          <label>الثيم
            <select className="w-full bg-black/40 p-2" value={settings.theme} onChange={(e)=>onChangeTheme(e.target.value)}>
              <option value="bright">Bright Gold</option><option value="dark">Dark Burgundy</option>
            </select>
          </label>
          <div className="flex gap-2">
            <button title="الصوت" aria-label="الصوت" onClick={onSound}>🔊</button>
            <button title="الاهتزاز" aria-label="الاهتزاز" onClick={onVibration}>📳</button>
          </div>
          <div className="flex gap-2"><button onClick={onExport}>Export JSON</button><label className="cursor-pointer">Import JSON<input hidden type="file" accept="application/json" onChange={onImport} /></label></div>
        </div>
      </div>
    </div>
  )
}
