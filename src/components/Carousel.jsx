import React, { Component } from 'react'
import '../styles/Carousel.css'
import { logements } from '../datas/logements'
import Chevronback from '../assets/chevron-caroussel-back.svg'
import Chevronnext from '../assets/chevron-caroussel-next.svg'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 0,
    }
  }

  render() {
    // Creat an Array with all the Pictures
    let imagesCarousel = []
    logements
      .filter((logement) => logement.id === this.props.id)
      .map((logement) => {
        logement.pictures.forEach((picture) => {
          imagesCarousel.push(
            <img src={picture} alt={logement.title} key={picture} />
          )
        })
      })

    const numberOfPicture = imagesCarousel.length - 1

    // If it's the last picture go back to 0 or add one
    const incrementClicks = () => {
      if (this.state.clicks === numberOfPicture) {
        this.setState({
          clicks: this.state.clicks - numberOfPicture,
        })
      } else {
        this.setState({
          clicks: this.state.clicks + 1,
        })
      }
    }

    // If it's the first go to the last or remove one
    const decrementClicks = () => {
      if (this.state.clicks === 0) {
        this.setState({
          clicks: this.state.clicks + numberOfPicture,
        })
      } else {
        this.setState({
          clicks: this.state.clicks - 1,
        })
      }
    }

    // IF there is just one picture display none the button
    const displayButton = imagesCarousel.length === 1 ? 'displayButton' : ''

    return (
      <section className="carousel">
        <figure>{imagesCarousel[this.state.clicks]}</figure>
        <button className={`back ${displayButton}`} onClick={decrementClicks}>
          <img src={Chevronback} alt="" />
        </button>
        <button className={`next ${displayButton}`} onClick={incrementClicks}>
          <img src={Chevronnext} alt="" />
        </button>
      </section>
    )
  }
}

export default Carousel
