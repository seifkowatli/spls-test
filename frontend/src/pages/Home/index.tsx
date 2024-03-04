import { Container, Grid, Toolbar } from "@mui/material";
import { Chat, GamePlay, Ranking } from "./partials";

const Home = () => {
  return (
    <Container  maxWidth="lg">
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}><GamePlay /> </Grid>
        <Grid item xs={12} md={8}>left</Grid>
      </Grid> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}><Ranking /></Grid>
        <Grid item xs={12} md={5}><Chat /> </Grid>
      </Grid> 
    </Container>
  );
};

export default Home;
