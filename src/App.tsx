import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Palette } from './Palette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Palette />
    </div>
  )
}

export default App
