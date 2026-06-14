import React from 'react'

const ChildComponent = React.memo((props) => {


    console.log("Child Component Rendered");
    
  return (
    <div>

        <button onClick={props.handleClick}>
            {props.buttonName}
        </button> 
      
    </div>
  )
});

export default ChildComponent
