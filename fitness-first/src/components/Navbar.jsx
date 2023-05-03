import React from 'react'
import './Navbar.css'
import Header from './Header/Header'
const Navbar = () => {
  return (
    <div className='nav-div1'>
    {/* <h1> Navbar</h1>    */}
    <div className='left-nav'>
    <Header/>  
     </div>
    <div className='right-nav'>
      <button>Login</button>
      <button>Sin--</button>
       </div>
    </div>
  )
}

export default Navbar
