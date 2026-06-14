import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='children'>
        <ul style={{flexDirection:'column', gap:'20px', listStyle:'none'}}>
          <li>
            <NavLink to='courses'>Courses</NavLink>
          </li>
          <li>
            <NavLink to='mocktest'>Mock Test</NavLink>
          </li>
          <li>
            <NavLink to='reports'>Reports</NavLink>
          </li>
        </ul>

      </div>

      <Outlet />
    </div>
  )
}

export default Dashboard
