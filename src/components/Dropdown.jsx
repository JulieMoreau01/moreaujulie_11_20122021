import React, { Component } from 'react'
import { logements } from '../datas/logements'
import '../styles/Dropdowns.css'

class Dropdown extends Component {
  render() {
    return (
      <article className="dropdowns">
        {logements
          .filter((logement) => logement.id === this.props.id)
          .map((logement) => (
            <React.Fragment>
              <h2>{this.props.name}</h2>

              {this.props.name === 'Description' ? (
                <p>{logement.description} </p>
              ) : (
                <ul>
                  {logement.equipments.map((equipment) => (
                    <li>{equipment}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
      </article>
    )
  }
}

export default Dropdown
