import React, { useState } from 'react';
import logo from './logo.svg';
import TextBox from './components/form-components/text-box';
import { makeStyles, createStyles, Theme, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SelectionPane from './components/selection-pane';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
      minHeight: '100vh',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'
    },
  }),
);

function App() {
  const [numberOfFields, setNumberofFields] = useState(1)
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      primary: { main: '#404a86', dark: '#404a86' },
      background: { paper: '#fff', default: '#000' }
    },
  });
  const handleAddition = () => {
    setNumberofFields(numberOfFields + 1)
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12} className={classes.root}>
        <Grid container xs={8}>
          <TextBox disabled={false} count={numberOfFields} />
        </Grid>
        <Grid container xs={4}>
          <SelectionPane selectFn={handleAddition} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
