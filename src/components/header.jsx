import React from "react";
import {NavLink} from "react-router-dom"
import { withRouter } from 'react-router'

const Header = ({location}) => {
  let ReviewisActive = location.pathname == '/add_review' ? 'nav__link nav__link--active' : 'nav__link';
  let HomeisActive = location.pathname == '/' ? 'nav__link nav__link--active' : 'nav__link';
  return(
    <header>
      <nav className="nav">
        <ul>
          <li><NavLink exact to="/" className={HomeisActive} >{'Movie list'}</NavLink></li>
          <li><NavLink to="/add_review" className={ReviewisActive} >{'Add review'}</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(Header);
