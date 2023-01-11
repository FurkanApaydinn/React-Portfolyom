import React from 'react'
import logo from '../İmages/logo4.png'
import { Routes, Route, Link, Navlink, Switch } from 'react-router-dom'
import '../App.css'

export default function Header() {
 return (
  <div>
   <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#FFFAEB", fontWeight: "bold" }}>
    <div className="container-fluid">
     <a className="navbar-brand" href="#">

      <img className='logo' src={logo} alt="" />
     </a>
     <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
        <Link className="nav-link active" to="/Home">Home</Link>
       </li>
       <li>
        <Link className="nav-link active" aria-current="page" to="/About">About</Link>

       </li>
       <li>
        <Link className="nav-link active" aria-current="page" to="/Certificate">Certificate</Link>

       </li>


       <li>
        <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
       </li>
      </ul>

     </div>
    </div>
   </nav>
  </div>
 )
}
