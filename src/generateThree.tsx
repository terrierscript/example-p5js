export const generateThree = (cellX: number, cellY: number) => {
  const a = Array.from({ length: 10 })
  const b = Array.from({ length: 10 })
  const c = Array.from({ length: 10 })
  return a.map((_, valA) => {
    return b.map((_, valB) => {
      return c.map((_, valC) => {
        const h = valA / a.length * 360
        const l = valB / b.length * 100
        const s = valC / c.length * 100
        return {
          color: `hsl(${h},${l}%,${s}%)`,
          x: (valA + valB) * cellX,
          y: (valC) * cellY,
          w: cellX,
          h: cellY
        }
      })
    })
  }).flat(3)
}
