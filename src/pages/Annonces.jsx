import React, { Component } from 'react'
import '../styles/Home.css'
import Annonce from '../components/Annonce'
import { useParams } from 'react-router-dom'

class Annonces extends React.Component {
  render() {
    const { id } = this.props.params
    return <Annonce id={id} />
  }
}

export default (props) => <Annonces {...props} params={useParams()} />
