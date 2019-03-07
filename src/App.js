import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import './FontawesomeLibrary'

import { Provider } from "./Store/Store";

import Home from './Components/Home/Home';
import Piggy from "./Components/Piggy/Piggy";
import NoSuchPage from "./Components/NoSuchPage/NoSuchPage";

function App() {

  return (
    <div className="App">
      <main className="app__container">
        <Provider>
          <Switch>
            <Route path='/piggy' component={Piggy} />
            <Route exact path='/' component={Home} />
            <Route component={NoSuchPage} />
          </Switch>
        </Provider>
      </main>
    </div>
  );
}

export default App;
