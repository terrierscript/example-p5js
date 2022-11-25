import { FC, PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react"
import p5 from "p5"

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 300)
    p.background(0)
    p.fill(255)
  }

  p.draw = () => {
  }
  p.mouseMoved = () => {
    p.rect(p.mouseX, p.mouseY, 50, 50)
  }
}

export const Palette: FC<PropsWithChildren<{}>> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<p5 | null>(null)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    if (canvasRef.current) {
      return
    }
    canvasRef.current = new p5(sketch, ref.current)

    return () => {
      canvasRef.current?.remove()
    }
  }, [sketch])
  return <div className="wrapper" ref={ref}>{children}</div>
}