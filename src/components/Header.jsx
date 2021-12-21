import logo from './../assets/logo_kasa.svg'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <figure>
          <img src={logo} alt="" className="" />
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
