import React from 'react'
import '../styles/navbar.css'

function navbar() {
  return (
    <div className='NavBar'>
        <p className='Title'>TO-DO LIST</p>
        <div className='Links'>
            <a>Home</a>
            <a>TO-DO's</a>
            <a>About</a>
        </div>
    </div>
  )
}

export default navbar