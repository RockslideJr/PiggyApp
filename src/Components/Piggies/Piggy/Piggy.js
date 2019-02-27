import React, { useState, useContext } from 'react';

import { Store } from "../../../Store/Store";

export default function Piggy(props) {
  const { dispatch } = useContext(Store);
  const [total, setTotal] = useState(0);
  const [showInput, setShowInput] = useState(false);

  let inputAmount = 0;

  return (
    <div>
      {props.name}
      {total} / {props.goal}
      <button onClick={() => toggleInput()}>Add Dollars</button>
      {showInput ? 
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Amount to Add: <input type="number" onInput={(e) => updateInputAmount(parseInt(e.target.value))}></input></label>
          <input type="submit" value="Add" />
        </form>
        : ""}
    </div>
  )

  function toggleInput() {
    inputAmount = 0;
    setShowInput(!showInput);
  }

  function updateInputAmount(newAmount) {
    inputAmount = newAmount;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTotal(total+inputAmount);
    dispatch({
      type: 'subtract',
      amount: inputAmount
    });
    setShowInput(false);
  }
}