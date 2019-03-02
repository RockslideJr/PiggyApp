import React, { useState, useContext } from 'react';
import { Avatar, Card, CardContent, CardActions, Typography } from '@material-ui/core';

import { Store } from "../../../../Store/Store";

export default function PiggyCard(props) {
  const { dispatch } = useContext(Store);
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [showInput, setShowInput] = useState(false);

  let inputAmount = 0;

  return (
    <Card>
      <CardContent>
        <Avatar aria-label="Recipe">
          R
        </Avatar>
        <Typography variant="h5">{props.name}</Typography>
        <Typography component="p">
          {total} / {props.goal}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
      
      <button onClick={() => toggleInput()}>Add Dollars</button>
      {showInput ? 
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Amount to Add: <input type="number" onInput={(e) => updateInputAmount(parseInt(e.target.value))}></input></label>
          <input type="submit" value="Add" />
        </form>
        : ""}
    </Card>
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
    setHistory([
      ...history,
      {
        amount: inputAmount,
        date: Date.now()
      }
    ])
    setTotal(total+inputAmount);
    dispatch({
      type: 'subtract',
      amount: inputAmount
    });
    setShowInput(false);
  }
}