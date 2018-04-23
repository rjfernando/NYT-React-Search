import React from "react";

const NavBar = () =>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

    <a className="navbar-brand" href="/search">NYT-React-Search</a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/search">Search Articles</a>
      </li>
  
    </ul>
  </nav>
  ;

export default NavBar;