import React, { useState } from 'react';
import './Piggies.css'

import PiggyCard from './PiggyCard/PiggyCard';


export default function Piggies() {
  const nameDefault = '',
        goalDefault = 0;
  const [piggies, setPiggies] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [name, setName] = useState(nameDefault);
  const [goal, setGoal] = useState(goalDefault);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPiggies([...piggies, {
      name: name,
      goal: goal
    }]);
    
    toggleFormOff();
  }

  const handlePiggySelect = (e)  => {
    
  }

  const toggleFormOff = () => {
    setDisplayAddForm(false);
    setName(nameDefault);
    setGoal(goalDefault);
  }

  return (
    <div className="piggies">
        {piggies.map((piggy, i) => <PiggyCard name={piggy.name} goal={piggy.goal} key={i} onclick={handlePiggySelect} />)}
      {displayAddForm ?
        <form className="piggiesForm" onSubmit={handleSubmit}>
          <label>Name: <input type="text" onInput={e => setName(e.target.value)}></input></label>
          <label>Goal: <input type="number" onInput={e => setGoal(parseInt(e.target.value))}></input></label>
          <input type="submit" value="Add" />
          <button onClick={toggleFormOff}>cancel</button>
        </form> 
        : ""
      }
      <button onClick={() => setDisplayAddForm(true)}>Add Piggy</button>
    </div>
  )
}