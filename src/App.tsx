import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Debug } from './Debug'
import { Palette } from './Palette'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Debug /> */}
      <Palette />
    </div>
  )
}

export default App
