import { Box, Grid } from "@chakra-ui/react"
import { generateThree } from "./generateThree"

export const Debug = () => {
  const colors = generateThree(1, 1)
  return <div>
    <div>debug</div>
    <Grid gridTemplateColumns={"repeat(100,1fr)"}>
      {colors.map((c, i) => {
        return <Box key={i} bg={c.color} w={10} h={10}></Box>
      })}
    </Grid>
  </div>
}