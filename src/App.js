import React from 'react';
import './App.css';

import { Provider } from "./Store/Store";

import Total from './Components/Total/Total';
import Piggies from './Components/Piggies/Piggies';

function App() {


  return (
    <div className="App">
      <Provider>
        <Total></Total>
        <Piggies></Piggies>
      </Provider>
    </div>
  );
}

export default App;
