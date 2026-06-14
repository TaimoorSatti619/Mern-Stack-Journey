import { useState, useRef } from 'react'
import './App.css'

function App() {


  const [count, setCount] = useState(0);

  let val = useRef(0);

  let btnRef = useRef();

  function handleIncrement(){
    val.current = val.current + 1;
    console.log(val.current);
    setCount(count + 1)
  }


  function changeColor(){
    btnRef.current.style.backgroundColor = 'red';
  }



  //////

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){

    timerRef.current = setInterval(() =>{
      setTime(time => time + 1);
    },1000);

  }

  function stopTimer(){

    clearInterval(timerRef.current);
    timerRef.current = null;

  }

  function resetTimer(){

    stopTimer();
    setTime(0);

  }


  return (

    <div>

      <div>
        <h1>StopWatch: {time} seconds</h1>
        <button onClick={startTimer}>
          Start
        </button>
        <br /> <br />

        <button onClick={stopTimer}> 
          Stop
        </button>
        <br /> <br />

        <button onClick={resetTimer}>
          Reset
        </button>



      </div>















      <br />
      <br />
      <br />
      <div>

        <button
        ref={btnRef}
        onClick={handleIncrement}
        >
          Increment
        </button>

        <br />

        <button onClick={changeColor}>
          Change Color of 1st Button
        </button>
        <br />



        <div>
          Count : {count}
        </div>

      </div>
      



    </div>

   
  )
}

export default App
