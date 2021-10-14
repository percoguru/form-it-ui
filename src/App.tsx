import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateForm from './pages/createForm';
import FormPage from './pages/form';
import Home from './pages/home';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/createForm">
          <CreateForm />
        </Route>
        <Route path="/form/:formId">
          <FormPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
