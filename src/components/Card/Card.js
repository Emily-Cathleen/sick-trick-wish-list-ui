import React from 'react';
import './Card.css';


const Card = ({name, obstacle, id}) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{obstacle}</p>

    </div>
  )
}


export default Card;
