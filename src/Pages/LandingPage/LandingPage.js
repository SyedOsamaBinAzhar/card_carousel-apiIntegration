import React from 'react'
import Card from '../../Components/Card/Card'
import Carousel from '../../Components/Carousel/Carousel'
import "./LandingPage.css"


const LandingPage = () => {
    return (
        <div>
            <div className="landingPageCont">
                <div className="carouselRow">
                    <Carousel/>
                </div>
                <div className="cardRow flex">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>

            </div>

        </div>
    )
}

export default LandingPage
