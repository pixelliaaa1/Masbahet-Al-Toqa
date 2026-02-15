import { toArabicIndic } from '../utils/numerals'

export default function Counter({ count, onIncrement, pulse }) {
  return (
    <button
      onClick={onIncrement}
      aria-label="زيادة العداد"
      className={`relative mx-auto w-[22rem] h-[22rem] max-w-[86vw] max-h-[86vw] rounded-full border border-white/30 bg-black/35 backdrop-blur-md flex items-center justify-center transition active:scale-95 ${pulse ? 'animate-pulseGlow' : ''}`}>
      <div className="text-center">
        <div className="font-cairo text-6xl sm:text-7xl font-extrabold gold-gloss bg-clip-text text-transparent">{toArabicIndic(count)}</div>
        <div className="text-silver text-sm mt-2">العدد الحالي</div>
      </div>
    </button>
  )
}
