import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="nav">
          <NavLink className="home-link" exact to="/">
            Rest Countries
          </NavLink>

          <ul className="links">
            <li className="link-item">
              <NavLink className="link" activeClassName="active" exact to="/">
                All
              </NavLink>
            </li>

            <li className="link-item">
              <NavLink
                className="link"
                activeClassName="active"
                to="/eu-countries"
              >
                EU
              </NavLink>
            </li>

            <li className="link-item">
              <NavLink
                className="link"
                activeClassName="active"
                to="/search-countries"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
