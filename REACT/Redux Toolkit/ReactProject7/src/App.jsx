import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';
import {useState} from 'react';

function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }




  return (
    <div>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count : {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> Reset </button>
      <br />
      <br />

      <input
        type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(Number(e.target.value))}
       />
      <button onClick={handleIncAmountClick}> Inc By Amount </button>


    </div> 
    
  )
}

export default App
