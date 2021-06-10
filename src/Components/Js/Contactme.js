import React from 'react'
import "../Css/Contactme.css"

const Contactme = () => {
    return (
        <div className="container">
            <h2 className="contactHeading">
                Contact Me
            </h2>
            <div className="contact__body">
          <div className="coffecup">
            <div className="coffecap"></div>
            <div className="coffe">
              <div className="coffelogo"></div>
            </div>
          </div>
          <div className="contact__details">
            <p className="phoneno">
            <b>+91</b> 9972577728
            </p>
            <p className="email">
              <b>@</b> cmkrishna97@gmail.com
            </p>
          </div>
        </div>
        </div>
    )
}

export default Contactme
