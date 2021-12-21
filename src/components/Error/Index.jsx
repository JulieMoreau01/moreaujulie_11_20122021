import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
      <section>
        <h1>404</h1>
        <p>oups ! La page que vous demandez n'existe pas</p>
        <Link to="/">Retourner sur la page d'accueuil</Link>
      </section>
    )
  }
}

export default Error
