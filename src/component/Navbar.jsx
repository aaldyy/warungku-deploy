import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux"
const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
 
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
    <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold fs-4"><i class="fa fa-shopping-bag" aria-hidden="true"></i>Warungku</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/products" className="nav-link" aria-current="page">Products</NavLink>
           </li>
            
        </ul>
        
           
            <NavLink to="/chart" className="btn btn-outline-dark" type="submit">
                <i className='fa fa-shopping-cart'> Cart <b>({state.length})</b></i></NavLink>
 
        </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar;