import { Box } from "@chakra-ui/react"
import { generateThree } from "./generateThree"

export const Debug = () => {
  const colors = generateThree(1, 1)
  return <div>
    <div>debug</div>
    {colors.map(c => {
      return <Box bg={c.color} w={10} h={10}></Box>
    })}
    <Box></Box>
  </div>
}