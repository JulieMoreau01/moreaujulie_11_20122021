import React, { Component } from 'react'
import { logements } from '../datas/logements'
import '../styles/Dropdowns.css'
import chevron from '../assets/chevron.svg'

class Dropdown extends Component {
  render() {
    return (
      <details open>
        <summary>
          {this.props.name}
          <img src={chevron} alt="chevron" />
        </summary>
        {this.props.text && <p>{this.props.text}</p>}
        {logements
          .filter((logement) => logement.id === this.props.id)
          .map((logement) => (
            <React.Fragment key={logement.id}>
              {this.props.name === 'Description' ? (
                <p>{logement.description} </p>
              ) : (
                <ul>
                  {logement.equipments.map((equipment) => (
                    <li key={equipment}>{equipment}</li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
      </details>
    )
  }
}

export default Dropdown
