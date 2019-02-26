import React, { useState } from 'react';
import Piggy from './Piggy/Piggy';


export default function Piggies() {
  const [piggies, setPiggies] = useState([]);

  return (
    <div className="piggies">
      {piggies.map((piggy, i) => <Piggy name={piggy.name} key={i}></Piggy>)}
      <button onClick={() => setPiggies([...piggies, newPiggy()])}>Add Piggy</button>
    </div>
  )

  function newPiggy() {
    return {
      name: 'default'
    }
  }
}