
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Nav from 'components/nav';
import { Home } from 'pages/home';
import { Settings } from 'pages/settings';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from 'store';
import { theme } from 'themes/primary';

function App() {
  return (
    <Router>
      <StateProvider>
        <ThemeProvider theme={theme}>
          <Container>
            <Switch>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              {/* 
               your route page here
              */}
            </Switch>
          </Container>
          <Nav />
        </ThemeProvider >
      </StateProvider>
    </Router>
  );
}

export default App;

