import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
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
    
    //Reset display form
    setDisplayAddForm(false);
    setName(nameDefault);
    setGoal(goalDefault);
  }

  const handlePiggySelect = (e)  => {
    
  }

  return (
    <div className="piggies">
      {piggies.map((piggy, i) => <PiggyCard name={piggy.name} goal={piggy.goal} key={i} onclick={handlePiggySelect} />)}
      {displayAddForm ?
        <form className="piggiesForm" onSubmit={handleSubmit}>
          <label className="piggiesForm__input">Name: <input type="text" onInput={(e) => setName(e.target.value)} /></label>
          <label className="piggiesForm__input">Goal: <input type="number" onInput={(e) => setGoal(parseInt(e.target.value))} /></label>
          <input type="submit" value="Add" />
        </form> 
        : <Button variant="contained" color="primary" onClick={() => setDisplayAddForm(true)}>Add Piggy</Button>}
    </div>
  )
}