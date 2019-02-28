import React, { useState, useContext } from 'react';
import './Total.css';

import { Store } from "../../Store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Total() {
  const { state, dispatch } = useContext(Store);
  const [dollarsToAdd, setDollarsToAdd] = useState(0);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      amount: dollarsToAdd
    })
    setDisplayAddForm(false);
  }
    
  return (
    <section>
      <div className="total">
        <p className="total__label">Unallocated Savings:</p>
        <div className="total__dollarbox">
          <span className="total__display">{state.total}</span>
          <button className={`total__addidcon${displayAddForm ? '__active' : ''}`} onClick={ () => setDisplayAddForm(!displayAddForm)}>
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        {displayAddForm ? 
          <form className="total__form" onSubmit={handleSubmit}>
            <label>Dollar Amount: <input type="number" onChange={(event) => setDollarsToAdd(parseInt(event.target.value))}/></label>
            <input type="submit" value="Add" />
          </form> : ""}
      </div>
    </section>
  )
}