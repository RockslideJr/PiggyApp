import React, { useState, useContext } from 'react';
import './Total.css';

import { Store } from "../../Store/Store";

export default function Total() {
  const { state, dispatch } = useContext(Store);
  const [dollarsToAdd, setDollarsToAdd] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      amount: dollarsToAdd
    })
  }
    
  return (
    <div className="total">
      <div className="total__display">{state.total}</div>
      <form className="total__form" onSubmit={handleSubmit}>
        <label>Dollar Amount: <input type="number" onChange={(event) => setDollarsToAdd(parseInt(event.target.value))}/></label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}