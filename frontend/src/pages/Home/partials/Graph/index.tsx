import { Stack } from "@mui/material"
import LinerGraph from "./LinerGraph"
import PlayerInfo from "./PlayerInfo"

const Graph = () => {
  return (
    <Stack>
        <PlayerInfo />
        <LinerGraph />
    </Stack>
  )
}

export default Graph