import { useState } from 'react'
import Navbar from '../Navabar/Navbar'
import './home.css'

function App() {
 

  return (
    <>
<section className="blog">
<div className="hero-section">
<div className="content-container">
  <h1>
    LET'S EXPLORE  <br /> THE WORKD <hr  className='under-line'/>
  </h1>
  <p>
    Book trips and explor new destination with ease from anywhere
  </p>
</div>
</div>
 </section>

<section className="search">
  <div className="lower-bar">
  <nav className="list-nav">
    <ul className='list-date'>
      <li className="date">
      <p>Destination</p>
      <h5>
        Bail
      </h5>
      </li>
      <li className="date">
      <p>Check in</p>
      <h5>
      Dec 28, 2024
      </h5>
      </li>
      <li className="date">
      <p>Check out</p>
      <h5>
      Jan 3, 2025
      </h5>
      </li>
      <li className="date">
      <p>Guests</p>
      <h5>
       3 Guests
      </h5>
      </li>
    </ul>
  </nav>
  <button className="btn">
    <i class="fa-solid fa-magnifying-glass-location"></i>
     Search
  </button>
</div>
</section>
  </>
  )
}

export default App
