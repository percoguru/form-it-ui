import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import SelectionPane from './components/selectionPane';
import Form from './components/form';
import { Grid } from '@mui/material';

function App() {
  // const classes = useStyles();
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6e88fd',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          minHeight: '100vh',
        }}
        className="root"
      >
        <Grid container xs={12}>
          <Grid container xs={8}>
            <Form />
          </Grid>
          <Grid container xs={4}>
            <SelectionPane />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
