import { ButtonBase, Stack } from "@mui/material"
import { Counter } from "~/components"
import { styles } from "./styles"
import { useAppState } from "~/providers"
import useWebSocket from "~/hooks/utils/useWebSocket"
import { GatewayKeys } from "~/configs"
import { useState } from "react"

const PlayingPanel = () => {
  const { appState , setAppState } = useAppState();
  const { sendMessage } = useWebSocket();
  const [points, setPoints] = useState<number>()
  const [multiplier, setMultiplier] = useState<number>()

  const onStartRound = () => {
    sendMessage({
      userId : appState.user?._id,
      gameId : appState.game?._id,
      points,
      multiplier
    }, GatewayKeys.round.nextRound)

    setAppState((prevState) => ({
      ...prevState,
      startDrawing : true
    }));
  }
  return (
    <Stack>
        <Stack direction="row">
            <Counter title="Points" initialValue={10} maxValue={100} minValue={0} step={10} 
                onValueChange={value => setPoints(value)} 
            />
            <Counter title="Multiplier" initialValue={1.0} maxValue={100} minValue={0} step={.25} 
                onValueChange={value => setMultiplier(value)}
            />
        </Stack>
        <ButtonBase onClick={onStartRound} sx={styles.startButton}  >Start</ButtonBase>
    </Stack>
  )
}

export default PlayingPanel