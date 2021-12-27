import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logements } from '../datas/logements'
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <section>
        <h1 className="home_title">Chez vous, partout et ailleurs</h1>
        <ul>
          {logements.map(({ cover, title, id }) => (
            <li key={id}>
              <Link to={`/Annonces/${id}`}>
                <figure>
                  <img src={cover} alt={title} />
                  <figcaption>{title}</figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Home
