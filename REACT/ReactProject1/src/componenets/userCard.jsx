import React from 'react'
import "./userCard.css"

const userCard = (props) => {
  return (
    <div className='user-card'>
        <img src={props.image} alt="" />
        <div className="content">
            <h3>{props.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti corrupti facere minus adipisci reprehenderit soluta doloribus cumque, dolorem delectus.</p>
        </div>
    </div>
  )
}

export default userCard
