import { useState } from 'react'
import Card from './components/Card'

// Conditional Rendering
import Login from './components/Login'
import Logout from './components/Logout'

import './App.css'

function App() {

  const [name, setName] = useState('');

  // Conditional Rendering
  const[isLoggedIn, setLoggedIn] = useState(true);


  // return (
  //   <div>
  //     {isLoggedIn && <Logout />}
  //     {!isLoggedIn && <Login />}
  //   </div>

  // )

  // return (isLoggedIn) ? <Logout /> : <Login />
  

  // if(isLoggedIn){
  //   return <Logout />
  // } else {
  //   return <Login />
  // }

  return (
    <div className='container'>
      <h1>State Lifting in React</h1>
      <div className='card-container'>
        <Card title="Field 1" name={name} setName={setName} />
        <Card title="Field 2" name={name} setName={setName} />
      </div>
    </div>
  )
}

export default App
