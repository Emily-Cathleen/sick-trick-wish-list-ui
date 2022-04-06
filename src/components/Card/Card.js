import React from 'react';
import './Card.css';


const Card = ({name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{obstacle}</p>
      <p>{tutorial}</p>

    </div>
  )
}


export default Card;
