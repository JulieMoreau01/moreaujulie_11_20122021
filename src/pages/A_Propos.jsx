import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import hero from '../assets/propos_hero.jpg'
import '../styles/A_propos.css'

class APropos extends Component {
  fiabilite = 'Je suis le texte Fiabilité'
  respect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  service = 'Je suis le texte Service'
  responsabilite = 'Je suis le texte responsabilite'
  render() {
    return (
      <section className="a_propos">
        <figure>
          <img src={hero} alt="kasa" />
        </figure>
        <Dropdown name="Fiabilité" text={this.fiabilite} />
        <Dropdown name="Respect" text={this.respect} />
        <Dropdown name="Service" text={this.service} />
        <Dropdown name="Responsabilite" text={this.responsabilite} />
      </section>
    )
  }
}

export default APropos
