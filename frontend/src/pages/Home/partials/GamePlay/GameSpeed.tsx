import { Slider, TitledBox } from "~/components";
import SpeedIcon from "~/assets/speed.svg";
import { Box } from "@mui/material";
import { styles } from "./styles";

const GameSpeed = () => {
  return (
    // @ts-ignore
    <TitledBox title="Speed" icon={<SpeedIcon height={20} width={20} />}>
      <Box sx={styles.sliderContainer}>
      <Slider 
        onChangeAction={(value: number) => console.log(value)}
      />

      </Box>
    </TitledBox>
  );
};

export default GameSpeed;
