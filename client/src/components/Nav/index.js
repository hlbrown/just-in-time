import React from "react";
import Auth from "utils/auth";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';


 function mobileNav() {
   var elems = document.querySelectorAll(".sidenav");
   var instance = M.Sidenav.init(elems);
  
}




function Nav() {

  

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">

          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        
      );
    } //else {
      //return (
        // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/signup">
        //       Signup
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">
        //       Login
        //     </Link>
        //   </li>
        // </ul>
      //);
    //}
  }

 
  return (
   
      <nav className="nav-extended blue-grey darken-4">
        {showNavigation()}
    </nav>
    
    
  );
}


export default Nav;
