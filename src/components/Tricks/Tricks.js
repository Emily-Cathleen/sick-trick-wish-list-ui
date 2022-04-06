import React from "react";
import Card from "../Card/Card";
import "./Tricks.css";

const Tricks = ( {tricks} ) => {
  
  const trickCards = tricks.map(trick => {
    return (
      <Card
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
      />
    )
  })

  return(
    <div className="trick-card">
      {trickCards}
    </div>
  )
}


export default Tricks;
