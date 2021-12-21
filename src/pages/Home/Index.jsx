import React, { Component } from 'react'
import { logements } from '../../datas/logements.js'
import '../../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <section>
        <h1>Chez vous, partout et ailleurs</h1>
        <ul>
          {logements.map(({ cover, title, id }) => (
            <li key={id}>
              <figure>
                <img src={cover} alt={title} />
                <figcaption>{title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Home
