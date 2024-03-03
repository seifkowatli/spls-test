import { Typography } from "@mui/material";
import { Slider } from "~/components";

const Home = () => {
  return (
    <>
      <Slider 
        onChangeAction={(value) => console.log(value)}
      />
      <Typography>Hello World !!</Typography>
    </>
  );
};

export default Home;
