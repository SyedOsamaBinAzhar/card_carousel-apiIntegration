import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Card.css"


const Card = (props) => {
  const { dogBreed } = props

  const [image, setimage] = useState(null)
  useEffect(() => {
    fetchImages()
    return () => {
  
    }
  }, [])

  let fetchImages = async() => {
    try {
    let response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setimage((prevState) => response.data.message);

    } catch (error) {
      console.log(error)
    }
  }


    return (
        <div className="card customCardStyle">
      {  
        image ? 
        <img style={{height:"100%",width:"100%"}} src={image}></img>
        :
        <img style={{height:"100%",width:"100%"}} src="https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif"></img>
        
      }
  <div className="card-body flex">
    <h5 className="card-title flex"> {dogBreed.toUpperCase()} </h5>
  </div>
</div>
    )
}

export default Card
