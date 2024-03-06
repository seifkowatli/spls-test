import { Stack } from "@mui/material"
import LineGraph from "./LinerGraph"
import PlayerInfo from "./PlayerInfo"

const Graph = () => {
  return (
    <Stack>
        <PlayerInfo />
        <LineGraph />
    </Stack>
  )
}

export default Graph