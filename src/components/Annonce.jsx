import React, { Component } from 'react'
import { logements } from '../datas/logements'
import '../styles/Annonces.css'
import star from '../assets/star.svg'
import starGray from '../assets/star-gray.svg'

class Annonce extends Component {
  render() {
    const nbStars = []
    {
      logements
        .filter((logement) => logement.id === this.props.id)
        .map((logement) => {
          for (var i = 0; i < logement.rating; i++) {
            nbStars.push(<img src={star} alt="star" key={i} />)
          }
          for (var x = 0; x < 5 - logement.rating; x++) {
            nbStars.push(<img src={starGray} alt="star" key={x + 10} />)
          }
        })
    }

    return (
      <section className="annonces">
        {logements
          .filter((logement) => logement.id === this.props.id)
          .map((logement) => (
            <React.Fragment key={logement.id}>
              <h1>{logement.title}</h1>
              <figure className="host">
                <img src={logement.host.picture} alt="" />
                <figcaption>{logement.host.name}</figcaption>
              </figure>
              <p className="location">{logement.location}</p>
              <ul className="tags">
                {logement.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="etoiles">{nbStars}</p>
            </React.Fragment>
          ))}
      </section>
    )
  }
}

export default Annonce
