import { makeStyles, createStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SelectionPane from './components/selectionPane';
import Form from './components/form';
import Header from './components/header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      minHeight: '100vh',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'
    },
    header: {
      flexGrow: 0,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'
    },
  }),
);

function App() {
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: { main: '#404a86', dark: '#404a86' },
      background: { paper: '#fff', default: '#000' }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} className={classes.root}>
        <Grid container xs = {12} className = {classes.header}>
          <Header/>
        </Grid>
        <Grid container xs={8}>
          <Form/>
        </Grid>
        <Grid container xs={4}>
          <SelectionPane />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
