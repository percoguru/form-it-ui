import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormPage from './pages/formsPage';
import DetailsPage from './pages/detailsPage';

function App(): JSX.Element {
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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/form">
              <DetailsPage />
            </Route>
            <Route path="/">
              <FormPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
