import logoWhite from './../assets/logo_kasa_white.svg'
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={logoWhite} alt="" className="" />
        <p>@2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer
