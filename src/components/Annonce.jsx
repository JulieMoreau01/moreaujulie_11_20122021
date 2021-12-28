import React, { Component } from 'react'
import { logements } from '../datas/logements'
import '../styles/Annonces.css'

class Annonce extends Component {
  render() {
    return (
      <React.Fragment>
        {logements
          .filter((logement) => logement.id === this.props.id)
          .map((logement) => (
            <React.Fragment>
              <figure>
                <img src={logement.cover} alt={logement.title} />
              </figure>
              <h1 key={logement.title}>{logement.title}</h1>
              <figure className="host">
                <img src={logement.host.picture} alt="" />
                <figcaption>{logement.host.name}</figcaption>
              </figure>
              <p className="location">{logement.location}</p>
              <ul className="tags">
                {logement.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
      </React.Fragment>
    )
  }
}

export default Annonce
