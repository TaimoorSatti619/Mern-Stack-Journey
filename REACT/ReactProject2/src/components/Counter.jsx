import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
        <p id='para'>You have clicked {count} times</p>
        <div className='btn-container'>
            <button id='click_btn' onClick={()=> {setCount(count+1)}}>Click me</button>
            <button id='reset_btn' onClick={()=> {setCount(0)}}>Reset</button>
        </div>    
    </div>
  )
}

export default Counter
