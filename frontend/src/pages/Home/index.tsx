import { Box } from "@mui/material";
import { Table } from "~/components";

const Home = () => {
  return (
    <Box sx={{p : 3}}>
      <Table 
        columns={['name' , 'points' , 'multiplier']}
        rows={[
          {name : 'John Doe' , points : 100 , multiplier : 1},
          {name : 'Jane Doe' , points : 200 , multiplier : 2},
          {name : 'John Smith' , points : 300 , multiplier : 3},
          {name : 'Jane Smith' , points : 400 , multiplier : 4},
        ]}
      />
    </Box>
  );
};

export default Home;
