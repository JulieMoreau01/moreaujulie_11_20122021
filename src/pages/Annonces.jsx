import React, { Component } from 'react'
import '../styles/Home.css'
import { useParams } from 'react-router-dom'

class Logements extends React.Component {
  render() {
    const { id } = this.props.params
    return (
      <section>
        <p>Carrousel {id}</p>
        <h1>Le titre</h1>
        <p>Localisation</p>
        <ul>
          <li>TAGS</li>
        </ul>
        <p>Description</p>
        <p>Equipement</p>
      </section>
    )
  }
}

export default (props) => <Logements {...props} params={useParams()} />
