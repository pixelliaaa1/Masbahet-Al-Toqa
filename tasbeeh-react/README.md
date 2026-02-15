# مسبحة التقى — React + Vite + Tailwind

تطبيق صفحة واحدة RTL عربي لعدّاد التسبيح مع ثيم ذهبي/فضي + ثيم داكن، خلفية متحركة، وضع تلقائي، إنجازات، تقويم، وتخزين محلي.

## المتطلبات
- Node.js 18+
- npm

## التشغيل
```bash
cd tasbeeh-react
npm install
npm run dev
```

## البناء
```bash
npm run build
npm run preview
```

## الهيكل
- `src/App.jsx` منطق التطبيق الرئيسي
- `src/components/Counter.jsx`
- `src/components/Controls.jsx`
- `src/components/DhikrList.jsx`
- `src/components/EditModal.jsx`
- `src/components/AutoMode.jsx`
- `src/components/CalendarPanel.jsx`
- `src/components/SettingsModal.jsx`
- `src/components/FloatingCrown.jsx`
- `src/components/AchievementsModal.jsx`
- `src/components/LiveWallpaper.jsx`
- `src/utils/storage.js` حفظ/استرجاع/Export/Import
- `src/utils/audio.js` WebAudio click/chime
- `src/utils/numerals.js` تحويل الأرقام للعربية-الهندية
- `src/assets/crown.svg` أيقونة التاج
- `src/assets/chest-lottie-placeholder.json` Placeholder للـLottie

## المزايا الرئيسية
- اسم التطبيق: **مسبحة التقى**
- كل الأرقام المعروضة بالعربية-الهندية
- RTL + خطوط عربية (`Cairo`, `Amiri`, `Noto Naskh Arabic`)
- عدّاد دائري كبير مع pulse عند الزيادة
- صوت WebAudio منخفض التأخير + اهتزاز اختياري
- Auto mode: 3-tap rhythm + slider 0.3–10s
- Milestones + achievement modal
- LocalStorage دائم
- Export/Import JSON (دمج أو استبدال)
- تقويم شهري + مهام يومية
- تاج ذهبي draggable مع physics bounce داخل حدود الشاشة

## ملاحظة الاهتزاز على الموبايل
بعض المتصفحات تتطلب تفاعل مستخدم مباشر قبل السماح بالاهتزاز/الصوت.

## Manual QA Checklist
- [ ] الواجهة RTL بالكامل
- [ ] الأرقام العربية-الهندية تظهر في العدّاد/المؤقت
- [ ] زيادة/نقص/الأذكار/الإعدادات تعمل
- [ ] تعديل الذكر يتم من زر القلم فقط
- [ ] Auto mode يعمل بدون glitch عند تغيير الذكر
- [ ] البيانات تستمر بعد Refresh
- [ ] Export/Import يعملان (Merge/Replace)
- [ ] التاج لا يخرج خارج الشاشة ويعمل bounce
- [ ] الثيمين Bright/Dark يعملان
