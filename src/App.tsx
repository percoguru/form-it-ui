import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import SelectionPane from './components/selectionPane';
import Form from './components/form';

function App() {
  // const classes = useStyles();
  const theme = createTheme({
    palette: {
      mode: 'light',
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
          // flexGrow: 0,
          minHeight: '100vh',
          display: 'flex',
          alignContent: 'flex-start',
          justifyContent: 'center',
        }}
        className="root"
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 2,
          }}
        >
          <Form />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
          }}
        >
          <SelectionPane />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
