import React from 'react'
import "./Carousel.css"

//developer comments:
//bootstrap carousel limitations:- 1) Dynamic images can't be rendered with slide functionality.
const Carousel = (props) => {
  //destructuring props
  const { carouselImages } = props

    return (
      <div id="carouselExampleControls" style={{width:"100%",height:"100%"}} className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" style={{width:"100%",height:"100%"}}>
        <div className="carousel-item carouselImgStyle active">
          <img className="carouselImgStyle" src={carouselImages[0]} alt="First slide"/>
        </div>
        <div className="carousel-item carouselImgStyle">
          <img className="carouselImgStyle" src={carouselImages[1]} alt="Second slide"/>
        </div>
        <div className="carousel-item carouselImgStyle">
          <img className="carouselImgStyle" src={carouselImages[2]} alt="Third slide"/>
        </div>
      </div>
      {/* controllers of carousel */}
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
}

export default Carousel
