import { Container, Grid, Toolbar } from "@mui/material";
import { Chat, GamePlay, Graph, Ranking } from "./partials";
import Login from "./partials/Login";
import { useAppState } from "~/providers";

const Home = () => {
  const { appState } = useAppState()
  return (
    <Container  maxWidth="lg">
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {appState.isAuthenticated ?<GamePlay />  : <Login />}
           
          </Grid>
        <Grid item xs={12} md={8}><Graph /></Grid>
      </Grid> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}><Ranking /></Grid>
        <Grid item xs={12} md={5}><Chat /></Grid>
      </Grid> 
    </Container>
  );
};

export default Home;
