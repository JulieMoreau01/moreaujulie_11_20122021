import React from 'react'
import '../styles/Home.css'
import Annonce from '../components/Annonce'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Carousel from '../components/Carousel'

class Annonces extends React.Component {
  render() {
    const { id } = this.props.params
    return (
      <section className="annonces">
        <Carousel id={id} />
        <Annonce id={id} />
        <Dropdown id={id} name="Description" />
        <Dropdown id={id} name="Equipement" />
      </section>
    )
  }
}

export default (props) => <Annonces {...props} params={useParams()} />
