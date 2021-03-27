import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Carousel from '../../Components/Carousel/Carousel'
import "./LandingPage.css"




const LandingPage = () => {
    const [carouselImages, setcarouselImages] = useState([])
    const [dogCategories, setdogCategories] = useState([])
    useEffect(() => {

        fetchData()

        return () => {
        }
    }, [])



    var fetchData = async() => {
        let response = await axios.get("https://api.thecatapi.com/v1/breeds")
        for (let index = 1; index < 4; index++) {
            let image = response.data[index].image.url
           setcarouselImages((prevState) => ([
            ...prevState,image
           ]))
        }
        let response2 = await axios.get("https://dog.ceo/api/breeds/list/all")
        setdogCategories((prevState) => ([
            ...prevState,...response2.data.message.hound
        ]))
    } 


    
    return (
            <div className="landingPageCont">
                <div className="carouselRow">
                {
                carouselImages === "undefined" || carouselImages.length === 0
                ?
                <div className="spinner-grow spinner-growCustomStyles" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                :
                <Carousel carouselImages={carouselImages}/>
                }
                </div>
                <div className="cardRow flex">
                    {
                        dogCategories.map((breed,index)=>{
                            return (
                                <Card dogBreed={breed} key={index} />
                            )
                        })
                    }
                </div>

            </div>
    )
}

export default LandingPage
