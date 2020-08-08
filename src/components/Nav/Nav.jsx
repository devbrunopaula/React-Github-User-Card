import React, { Component } from "react"
import "./nav.css"
import { NavLink } from "react-router-dom"
class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h1 className='app__title'>Github User Card</h1>
        <div className='nav__menu'>
          <NavLink exact className='nav_items' to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink
            exact
            className='nav_items'
            to='/followers'
            activeClassName='active'
          >
            Followers
          </NavLink>
        </div>
      </div>
    )
  }
}
export default Nav
