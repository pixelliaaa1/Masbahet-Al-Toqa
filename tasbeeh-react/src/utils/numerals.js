export const toArabicIndic = (val) => {
  const digits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩']
  return String(val).replace(/[0-9]/g, (d) => digits[Number(d)])
}

export const formatTimeArabic = (totalSec) => {
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0')
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0')
  const s = String(totalSec % 60).padStart(2, '0')
  return toArabicIndic(`${h}:${m}:${s}`)
}
