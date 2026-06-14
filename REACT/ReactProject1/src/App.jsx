import React from 'react'
import UserCard from './componenets/userCard'
import pakistan from "./assets/pakistan.jpeg"
import india from "./assets/india.jpeg"
import indonesia from "./assets/indonesia.jpeg"
import iran from "./assets/iran.jpeg"

import "./App.css"


function App() {

  return (
   <div className="container">
      <UserCard name="Pakistan" image={pakistan} />
      <UserCard name="India" image={india} />
      <UserCard name="Indonesia" image={indonesia} />
      <UserCard name="Iran" image={iran} />
   </div>
  )
}

export default App
