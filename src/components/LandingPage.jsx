import React from 'react'
import { Link } from "react-router-dom";
import AddFiles from "../components/AddFiles";
import Register from "../components/FilesToDisplay";




function LandingPage() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark shadow rounded">
      <div className="container-fluid ">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarTogglerDemo03" 
          aria-controls="navbarTogglerDemo03" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Logo */}
        {/* <img className='logo' height={'60px'} src={logo} alt="TopX Logo"/> */}
        
        {/* Brand Name - Hidden on Mobile */}
      <Link style={{textDecoration:'none'}} to={'/'}>  <a style={{ color: "white" }} className="navbar-brand fw-bold ms-2 d-none d-lg-block" href="#">
          Ict<span style={{ fontSize: "25px" }} className='text-success fw-bold'>G</span>lobal
        </a></Link>
        
        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <div style={{marginLeft:'-125px'}} id='navLinks' className='d-flex justify-content-center flex-grow-1 me-5'>
            {/* Centered Navigation Links */}
           <Link to={'/'} className='cnav nav-link text-white me-3'>Home</Link>
           <Link to={'/register'} className='cnav nav-link text-white me-3'>Register</Link>
           <Link className='cnav nav-link text-white me-3'>Login</Link>
          </div>
          
        </div>
      </div>
    </nav>
    <div className="row mt-5">
     <AddFiles/>
    </div>
    <div style={{marginLeft:'-25px'}} className="row mt-5 text-center me-5">
    <Register/>
    </div>
    </div>
  )
}

export default LandingPage