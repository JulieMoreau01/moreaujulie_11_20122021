import React, { Component } from 'react'
import Dropdown from '../components/Dropdown'
import hero from '../assets/propos_hero.jpg'
import '../styles/A_propos.css'

class APropos extends Component {
  fiabilite =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  respect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  service =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  responsabilite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
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
