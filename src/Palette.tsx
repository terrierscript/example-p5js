import { useEffect, useLayoutEffect, useRef } from "react"
import p5 from "p5"

export const Palette = () => {
  const ref = useRef<HTMLDivElement>(null)
  const sketchRef = useRef<p5 | null>(null)
  const sketch = (p: p5) => {
    console.log(p)
    p.setup = () => {
      p.createCanvas(300, 300)
      p.background(0)
      p.fill(255)
    }

    p.draw = () => {
      p.rect(100, 200, 50, 50)
    }
  }
  useLayoutEffect(() => {
    if (typeof window !== "object") {
      return
    }
    if (!ref.current) {
      return
    }
    sketchRef.current = new p5(sketch, ref.current)
    sketchRef.current.draw()
    return () => {
      sketchRef.current?.remove()
    }
  }, [ref.current])
  return <div ref={ref}></div>
}