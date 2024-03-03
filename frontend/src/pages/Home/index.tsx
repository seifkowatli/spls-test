import { Typography } from "@mui/material";
import { Counter, InfoBox } from "~/components";

const Home = () => {
  return (
    <>
      <Counter
        title="Counter"
        initialValue={10}
        minValue={0}
        maxValue={100}
        step={10}
        onValueChange={(value) => console.log(value)}
      />
      <Typography>Hello World !!</Typography>
    </>
  );
};

export default Home;
