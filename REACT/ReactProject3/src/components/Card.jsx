import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    
    <div className='card'>
        <input type="text" onChange={(e) => props.setName(e.target.value)}/>
        <h3>Name State Variable Value in {props.title}</h3>
        <p>{props.name}</p>
        <div className='line'></div>
    </div>
  )
}

export default Card
