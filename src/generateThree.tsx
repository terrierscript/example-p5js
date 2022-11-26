export const generateThree = (cellX: number, cellY: number) => {
  const arrA = Array.from({ length: 4 })
  const arrB = Array.from({ length: 4 })
  const arrC = Array.from({ length: 4 })
  return arrA.map((_, valA) => {
    return arrB.map((_, valB) => {
      return arrC.map((_, valC) => {
        const h = (valA / (arrA.length - 1) * 360).toFixed(0)
        const l = (valB / (arrB.length - 1) * 100).toFixed(3)
        const s = (valC / (arrC.length - 1) * 100).toFixed(3)
        return {
          color: `hsl(${h},${l}%,${s}%)`,
          x: (valA) * cellX,
          y: (valB + (valC * arrB.length)) * cellY,
          w: cellX,
          h: cellY
        }
      })
    })
  }).flat(3)
}
