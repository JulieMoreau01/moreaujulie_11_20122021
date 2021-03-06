import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo_kasa.svg'
import './../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <figure>
          <img src={logo} alt="kasa" />
        </figure>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="A-Propos">A propos</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
