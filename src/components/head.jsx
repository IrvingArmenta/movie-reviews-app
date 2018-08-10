import React from "react";
import {NavLink} from "react-router-dom"

const activeClass = "nav__link--active";
const Head = () => {
  return(
    <header>
      <nav className="nav">
        <ul>
          <li><NavLink exact to="/" className="nav__link"  activeClassName='nav__link--active'>Home</NavLink></li>
          <li><NavLink exact to="/add_review" className="nav__link"  activeClassName='nav__link--active'>Add Review</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Head;
