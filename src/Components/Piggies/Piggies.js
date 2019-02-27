import React, { useState } from 'react';
import Piggy from './Piggy/Piggy';


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

  return (
    <div className="piggies">
      {piggies.map((piggy, i) => <Piggy name={piggy.name} goal={piggy.goal} key={i}></Piggy>)}
      {displayAddForm ?
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" onInput={(e) => setName(e.target.value)} /></label>
          <label>Goal: <input type="number" onInput={(e) => setGoal(parseInt(e.target.value))} /></label>
          <input type="submit" value="Add" />
        </form> 
        : <button onClick={() => setDisplayAddForm(true)}>Add Piggy</button>}
    </div>
  )
}