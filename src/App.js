import React from 'react';
import './App.css';
import './FontawesomeLibrary'

import { Provider } from "./Store/Store";

import Total from './Components/Total/Total';
import Piggies from './Components/Piggies/Piggies';
import Header from './Components/Header/Header'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <main className="wrapper">
        <Provider>
          <Total></Total>
          <Piggies></Piggies>
        </Provider>
      </main>
    </div>
  );
}

export default App;
