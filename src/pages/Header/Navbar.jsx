import React from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCss/Nav.css'

export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark py-3" style={ {backgroundColor: "#212529"} }>
  <div className="container">
    < Link to= "/" className="navbar-brand fs-4" href="#">Crown Takeaway</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item navigation">
          <Link to = "/" className="nav-link  active ms-4 px-4">Home</Link>
        </li>

        <li className="nav-item">
          <Link to = "/About" className="nav-link navigation active ms-4 px-4">About</Link>
        </li>

        <li className="nav-item">
          <Link to = "/OpeningHours" className="nav-link navigation active ms-4 px-4">Opening Hours</Link>
        </li>

        <li className="nav-item">
          <Link to = "/OurMenu" className="nav-link navigation active ms-4 px-4">Menu & Pricing</Link>
        </li>

        <li className="nav-item">
          <Link to = "/Contact" className="nav-link navigation active ms-4 px-4">Contact</Link>
        </li>
      </ul>
      
        <span className='text-white mt-2' style={{cursor:"pointer"}}> 0141 611 2250</span>
        
      
      <button className="btn  btn-warning rounded-pill button text-white ms-4 mt-2" style={ {width : "120px" , height : "40px"} }>Order Online</button>
    </div>
  </div>
</nav>
    
    
    
    
    
    
    
    </>
  )
}
