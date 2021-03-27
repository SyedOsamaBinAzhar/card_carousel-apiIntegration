import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Carousel from '../../Components/Carousel/Carousel'
import "./LandingPage.css"

const LandingPage = () => {
    const [carouselImages, setcarouselImages] = useState([])
    const [dogCategories, setdogCategories] = useState([])
    useEffect(() => {
        //fetches cat images and breed names of dogs
        fetchData()
        return () => {
        }
    }, [])

    var fetchData = async() => {
        // fetching cat images
        let response = await axios.get("https://api.thecatapi.com/v1/breeds")
        //taking three images from the response
        for (let index = 1; index < 4; index++) {
            let image = response.data[index].image.url
            //setting local state
           setcarouselImages((prevState) => ([
            ...prevState,image
           ]))
        }
        //fetching breeds
        let response2 = await axios.get("https://dog.ceo/api/breeds/list/all")
        //setting local state
        setdogCategories((prevState) => ([
            ...prevState,...response2.data.message.hound
        ]))
    } 

    return (
            <div className="landingPageCont">
                {/* display loader till images are fetched */}
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
