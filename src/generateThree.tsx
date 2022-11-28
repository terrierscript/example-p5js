export const generateThree = (cellX: number, cellY: number) => {
  const arrA = Array.from({ length: 10 })
  const arrB = Array.from({ length: 10 })
  const arrC = Array.from({ length: 10 })
  return arrA.map((_, valA) => {
    return arrB.map((_, valB) => {
      return arrC.map((_, valC) => {
        const h = (valA / (arrA.length - 1) * 360).toFixed(0)
        const l = (valA / (arrA.length - 1) * 360).toFixed(0)
        const s = (valB / (arrB.length - 1) * 100).toFixed(3)
        const hsl = `hsl(${h},${l}%,${s}%)`

        const r = ((valA / (arrA.length - 1)) * 255).toFixed(0)
        const g = ((valB / (arrB.length - 1)) * 255).toFixed(0)
        const b = ((valC / (arrC.length - 1)) * 255).toFixed(0)
        const rgb = `rgb(${r}, ${g}, ${b})`
        console.log(rgb)
        return {
          color: rgb,
          x: (valA) * cellX,
          y: (valB + (valC * arrB.length)) * cellY,
          w: cellX,
          h: cellY
        }
      })
    })
  }).flat(3)
}
