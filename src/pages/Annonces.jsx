import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../styles/Home.css'
import Annonce from '../components/Annonce'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Carousel from '../components/Carousel'
import { logements } from '../datas/logements'
//import { Route, Redirect } from 'react-router'

class Annonces extends React.Component {
  render() {
    const { id } = this.props.params

    for (let i = 0; i < logements.length; i++) {
      if (logements[i].id.includes(this.props.params.id)) {
        return (
          <React.Fragment>
            <Carousel id={id} />
            <Annonce id={id} />
            <section className="dropdowns">
              <Dropdown id={id} name="Description" />
              <Dropdown id={id} name="Equipement" />
            </section>
          </React.Fragment>
        )
      }
    }
    return <Navigate to="/Error" />
  }
}

export default (props) => <Annonces {...props} params={useParams()} />
