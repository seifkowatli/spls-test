import { ButtonBase, Stack } from "@mui/material"
import { Counter } from "~/components"
import { styles } from "./styles"

const PlayingPanel = () => {
  return (
    <Stack>
        <Stack direction="row">
            <Counter title="Points" initialValue={10} maxValue={100} minValue={0} step={10} 
                onValueChange={value => console.log(value)} 
            />
            <Counter title="Multiplier" initialValue={1.0} maxValue={100} minValue={0} step={.25} 
                onValueChange={value => console.log(value)}
            />
        </Stack>
        <ButtonBase sx={styles.startButton}  >Start</ButtonBase>
    </Stack>
  )
}

export default PlayingPanel