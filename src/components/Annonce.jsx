import React, { Component } from 'react'
import { logements } from '../datas/logements'
import '../styles/Annonces.css'

class Annonce extends Component {
  render() {
    return (
      <section className="annonces">
        {logements
          .filter((logement) => logement.id === this.props.id)
          .map((logement) => (
            <div>
              <figure>
                <img src={logement.cover} alt={logement.title} />
              </figure>
              <h1 key={logement.title}>{logement.title}</h1>
              <p className="location">{logement.location}</p>
              <ul className="tags">
                {logement.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
              <p>{logement.description}</p>
              <p>Equipement</p>
            </div>
          ))}
      </section>
      // <section>
      //   <p>Carrousel {this.props.id}</p>
      //   <h1>Le titre</h1>
      //   <p>Localisation</p>
      //   <ul>
      //     <li>TAGS</li>
      //   </ul>
      //   <p>Description</p>
      //   <p>Equipement</p>
      // </section>
    )
  }
}

export default Annonce
