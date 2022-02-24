import { BrowserRouter as Router } from 'react-router-dom'
import RutasUsuario from './routes/RutasUsuario';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BarraNavegacion from './components/navegacion/BarraNavegacion';
import Footer from './components/navegacion/Footer'
import 'animate.css/animate.css';
import ScrollTop from './components/navegacion/ScrollTop';
import FlechaTop from './components/navegacion/FlechaTop';
import { useGetTheme } from './hooks/useGetTheme';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginTop: "6rem"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    //color: theme.palette.text.secondary,

  },

  darkMode: {
    background: "#34495E",
    backgroundColorText: '#fff',
    color: '#fff',
    boxShadow: '0px 6px 6px -3px #717D7E,0px 10px 14px 1px #717D7E,0px 6px 6px -3px #717D7E',
  },
  footer: {
    position: "fixed",
    height: "100px",
    bottom: 0,
    width: "100%"
  }
}));

function App(props) {
  const classes = useStyles()
  const isDarkMode = useGetTheme()

  return (
    <Router>
      <BarraNavegacion />
      <Container className={`${classes.grow}`} fixed>
        <Grid container spacing={1}>
          <div className='onesignal-customlink-container'></div>
          <Grid item xs={true}>
            <Paper className={`${classes.paper} ${isDarkMode && classes.darkMode}`} elevation={10}>
              <RutasUsuario />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ScrollTop {...props}>
        <FlechaTop />
      </ScrollTop>
      <Footer />
    </Router>
  );
}

export default App;
