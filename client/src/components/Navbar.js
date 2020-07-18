import React from 'react'

const Navbar = (props) => {
   return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" class="navbar-brand">SabarSubur MarketPlace</a>
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
                     <a href="/home" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                     <a href="/data" class="nav-link">Category</a>
                  </li>
                  <li class="nav-item">
                     <a href="/datedata" class="nav-link">All Products</a>
                  </li>
                  <li class="nav-item">
                     <a href="/maps" class="nav-link">Transaction</a>
                  </li>
               </ul>
               <a href="/logout">
                  <button
                     class="btn btn-outline-success my-2 my-sm-0 mr-5 logout-btn"
                  >Login</button>
               </a>
            </div>
         </nav>
      </div >
   )
}

export default Navbar;