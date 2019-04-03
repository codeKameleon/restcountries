import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav class="nav">
          <NavLink className="link-item" exact to="/Countries">
            Rest Countries
          </NavLink>

          <ul class="links">
            <li class="link-item">
              <NavLink exact to="/">
                All countries
              </NavLink>
            </li>

            <li class="link-item">
              <NavLink to="/eu-countries">EU countries</NavLink>
            </li>

            <li class="link-item">
              <NavLink to="/search-countries">Search countries</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
