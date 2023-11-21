import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <div>
        <Link className='cw' to={'/home'} >
            get start
            <i class="fa-solid fa-arrow-right fa-fade"></i>
        </Link>
    </div>
  )
}

export default Landing