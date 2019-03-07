import React, { useState, useContext } from 'react';
import './Total.css';

import { Store } from "../../../Store/Store";

export default function Total() {
  const ADD = 1;
  const SUB = -1;

  const { state, dispatch } = useContext(Store);
  const [dollarsToAdd, setDollarsToAdd] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);
  const [addOrSub, setAddOrSub] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      amount: dollarsToAdd * addOrSub
    })
    toggleFormOff();
  }

  const toggleAddForm = e => {
    e.preventDefault();
    setAddOrSub(ADD);
    setDisplayForm(true);
  }

  const toggleSubtractForm = e => {
    e.preventDefault();
    setAddOrSub(SUB);
    setDisplayForm(true);
  }

  const toggleFormOff = () => {
    setDisplayForm(false);
    setAddOrSub(ADD);
  }
    
  return (
    <section>
        <h2>Unallocated:</h2>
        <div>
          {state.total}
          {displayForm ? 
            <form onSubmit={handleSubmit}>
              <label>Amount to {addOrSub === ADD ? 'add' : 'subtract'}: <input type="number" onInput={e => setDollarsToAdd(parseInt(e.target.value))}></input></label>
              <input type="submit" value={addOrSub === ADD ? 'Add' : 'Subtract'} />
              <button onClick={toggleFormOff}>cancel</button>
            </form> : ''
          }
          <button onClick={toggleAddForm}>Add</button>
          <button onClick={toggleSubtractForm}>Subtract</button>
        </div>
    </section>
  )
}