import React from 'react';
import { Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import './FontawesomeLibrary'

import { Provider } from "./Store/Store";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Piggy from "./Components/Piggy/Piggy";
import NoSuchPage from "./Components/NoSuchPage/NoSuchPage";

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#44E9C4'
      },
      secondary: {
        main: '#f9685d'
      }
    },
    typography: {
      useNextVariants: true,
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header></Header>
        <main className="wrapper">
          <Provider>
            <Switch>
              <Route path='/piggy' component={Piggy} />
              <Route exact path='/' component={Home} />
              <Route component={NoSuchPage} />
            </Switch>
          </Provider>
        </main>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
