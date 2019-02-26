import React, { useState } from 'react';
import './Total.css';

export default function Total() {
  const [total, setTotal] = useState(0);
  const [dollarsToAdd, setDollarsToAdd] = useState(0);
    
  return (
    <div className="total">
      <div className="total__display">{total}</div>
      <form className="total__form" onSubmit={(event) => event.preventDefault() || setTotal(total + dollarsToAdd)}>
        <label>Dollar Amount: <input type="number" onChange={(event) => setDollarsToAdd(parseInt(event.target.value))}/></label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}