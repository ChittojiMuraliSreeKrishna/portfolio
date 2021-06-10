import React from 'react'
import "../Css/Intro.css"

import mine from "../Images/mine.jpg"

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <div>
            <img src={mine} alt="Intro Img" className="introImg" />
            </div>
            <div>
            <h1 className="introHeading">
                Hi I'm
                <strong>
                Murali Sree Krishna C
                </strong>
            </h1>
            <h2 className="introSubHeading">Graduate-2020</h2>
            </div>
        </div>
    )
}


export default Intro
