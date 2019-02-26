import React, { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [dollarsToAdd, setDollarsToAdd] = useState(0);


  return (
    <div>
      <div>{total}</div>
      <form onSubmit={(event) => event.preventDefault() || setTotal(total + dollarsToAdd)}>
        <label>Dollar Amount: <input type="number" onChange={(event) => setDollarsToAdd(parseInt(event.target.value))}/></label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;
