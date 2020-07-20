import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
   return (
      <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 ">
            <Link to="/" className="navbar-brand">SabarSubur Market</Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarTogglerDemo02"
               aria-controls="navbarTogglerDemo02"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
               <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/category" className="nav-link">Category</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/add" className="nav-link">New Add</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/transaction" className="nav-link">Transaction</Link>
                  </li>
               </ul>
               <form className="form-inline my-2 my-lg-0 mr-5">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search product..." aria-label="Search" />
                  <button className="btn btn-outline-info my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
               </form>
               <Link to="/login">
                  <button
                     className="btn btn-outline-info my-2 my-sm-0 mr-5 logout-btn"
                  >Login</button>
               </Link>
            </div>
         </nav>
      </div >
   )
}

export default Navbar;