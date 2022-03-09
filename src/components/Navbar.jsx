import React from 'react'
import Navdrowal from './Navdrowal'
import './nabar.css'

const Navbar = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className="icons"><Navdrowal setCategory={setCategory}/></div>
        <img 
        style={{cursor:"pointer"}}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        height='80%' 
        alt="logo" />
    </div>
  )
}

export default Navbar