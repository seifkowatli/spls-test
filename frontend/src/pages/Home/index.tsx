import { Container, Grid, Toolbar } from "@mui/material";
import { Chat, Ranking } from "./partials";

const Home = () => {
  return (
    <Container  maxWidth="lg">
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>Right </Grid>
        <Grid item xs={12} md={6}>left</Grid>
      </Grid> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}><Ranking /></Grid>
        <Grid item xs={12} md={6}><Chat /> </Grid>
      </Grid> 
    </Container>
  );
};

export default Home;
