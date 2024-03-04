import { Stack } from "@mui/material"
import GameSpeed from "./GameSpeed"
import CurrentRound from "./CurrentRound"
import PlayingPanel from "./PlayingPanel"

const GamePlay = () => {
  return (
    <Stack>
        <PlayingPanel />
        <CurrentRound />
        <GameSpeed />
    </Stack>
  )
}

export default GamePlay