import { TitledBox } from "~/components";
import SpeedIcon from "~/assets/speed.svg";

const GameSpeed = () => {
  return (
    // @ts-ignore
    <TitledBox title="Speed" icon={<SpeedIcon height={20} width={20} />}>
      Game Speed
    </TitledBox>
  );
};

export default GameSpeed;
