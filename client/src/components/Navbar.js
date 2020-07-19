import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
   return (
      <div>
         <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 ">
            <NavLink to="/" class="navbar-brand">SabarSubur Market</NavLink>
            <button
               class="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarTogglerDemo02"
               aria-controls="navbarTogglerDemo02"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                     <NavLink to="/" class="nav-link">Home</NavLink>
                  </li>
                  <li class="nav-item">
                     <Link to="/category" class="nav-link">Category</Link>
                  </li>
                  <li class="nav-item">
                     <Link to="/add" class="nav-link">New Add</Link>
                  </li>
                  <li class="nav-item">
                     <Link to="/transaction" class="nav-link">Transaction</Link>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0 mr-5">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search product..." aria-label="Search" />
                  <button class="btn btn-outline-info my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
               </form>
               <Link to="/login">
                  <button
                     class="btn btn-outline-info my-2 my-sm-0 mr-5 logout-btn"
                  >Login</button>
               </Link>
            </div>
         </nav>
      </div >
   )
}

export default Navbar;