import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Error.css'

class Error extends Component {
  render() {
    return (
      <section className="error">
        <h1>404</h1>
        <p>oups ! La page que vous demandez n'existe pas</p>
        <p>
          <Link to="/">Retourner sur la page d'accueuil</Link>
        </p>
      </section>
    )
  }
}

export default Error
