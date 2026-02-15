const KEY = 'tasbeeh_taqa_react_v1'

export const milestones = [500,1000,3000,7000,10000,15000,30000,40000,50000,70000,90000,100000]

const defaultDhikrs = [
  { text: 'سُبْحَانَ اللَّهِ', target: 33 },
  { text: 'الْحَمْدُ لِلَّهِ', target: 33 },
  { text: 'اللَّهُ أَكْبَرُ', target: 33 }
]

export const createInitialState = () => ({
  firstUseDate: new Date().toISOString(),
  settings: { theme: 'bright', sound: true, vibration: true, autoSeconds: 1 },
  achievements: [],
  dailyTotals: {},
  dailyByDhikr: {},
  tasks: {},
  dhikrs: defaultDhikrs.map((d, i) => ({
    id: `${Date.now()}_${i}`,
    text: d.text,
    count: '0',
    rounds: 0,
    target: d.target,
    secondsPerIncrement: 1,
    createdAt: new Date().toISOString(),
  }))
})

export const loadState = () => {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return createInitialState()
    return { ...createInitialState(), ...JSON.parse(raw) }
  } catch {
    return createInitialState()
  }
}

export const saveState = (state) => localStorage.setItem(KEY, JSON.stringify(state))

export const exportState = (state) => {
  const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `مسبحة_التقى_${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export const importState = async (file) => JSON.parse(await file.text())
