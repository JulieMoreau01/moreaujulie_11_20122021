import React, { Component } from 'react'
import '../styles/Carousel.css'
import { logements } from '../datas/logements'
import Chevronback from '../assets/chevron-caroussel-back.svg'
import Chevronnext from '../assets/chevron-caroussel-next.svg'

let imagesCarousel = []
class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
    }
  }

  imagesCarouselArray = () => {
    logements
      .filter((logement) => logement.id === this.props.id)
      .map((logement) => {
        logement.pictures.forEach((picture) => {
          imagesCarousel.push(
            <img src={picture} alt={logement.title} key={logement.pictures} />
          )
        })
      })
  }

  incrementClicks = () => {
    if (this.state.clicks === imagesCarousel.length) {
      this.setState({
        clicks: this.state.clicks - imagesCarousel.length,
      })
    } else {
      this.setState({
        clicks: this.state.clicks + 1,
      })
    }
  }
  decrementClicks = () => {
    if (this.state.clicks === 0) {
      this.setState({
        clicks: this.state.clicks + imagesCarousel.length,
      })
    } else {
      this.setState({
        clicks: this.state.clicks - 1,
      })
    }
  }

  render() {
    {
      this.imagesCarouselArray()
    }
    return (
      <section className="carousel">
        <figure>{imagesCarousel[this.state.clicks]}</figure>
        <button className="back" onClick={this.decrementClicks}>
          <img src={Chevronback} alt="" />
        </button>
        <button className="next" onClick={this.incrementClicks}>
          <img src={Chevronnext} alt="" />
        </button>
      </section>
    )
  }
}

export default Carousel
