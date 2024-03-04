import { Stack } from "@mui/material"
import GameSpeed from "./GameSpeed"
import CurrentRound from "./CurrentRound"

const GamePlay = () => {
  return (
    <Stack>
        <CurrentRound />
        <GameSpeed />
    </Stack>
  )
}

export default GamePlay