import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Card.css"


const Card = (props) => {
  //destructuring props
  const { dogBreed } = props

  const [image, setimage] = useState(null)
  useEffect(() => {
    //fetching randon images for each card
    fetchImages()
    return () => {
    }
  }, [])

  let fetchImages = async() => {
    try {
      //fetching dog single random image
    let response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setimage((prevState) => response.data.message);

    } catch (error) {
      console.log(error)
    }
  }


    return (
        <div className="card customCardStyle">
          {/* display loading images till the card image is fetched */}
      {  
        image ? 
        <img style={{height:"100%",width:"100%", borderRadius:"3px"}} alt={"cardImage"} src={image}></img>
        :
        <img style={{height:"100%",width:"100%", borderRadius:"3px"}} alt={"loadingImage"} src="https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"></img>
      }
  <div className="card-body flex">
    <h5 className="card-title flex"> {dogBreed.toUpperCase()} </h5>
  </div>
  <div className="inner-card flex">
  <button type="button" className="btn btn-outline-light btn-block" style={{fontSize:"1.5em"}}>{dogBreed.toLowerCase()}</button>
  </div>
</div>
    )
}

export default Card
