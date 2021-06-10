import React from 'react'
import "../Css/Certificate.css"


const Certificate = ({certificates}) => {
    return (
        <div>
            <h2 className="certificateHeading" id="certificates"> Certificates </h2>
            <div className="certificates">
            {certificates.map((certificate) => (
                            <div className="certificate-items" key={certificate.id} >
                                <img src={certificate.img} alt="" className="certificateImages" />
                            </div>
            ))}
            </div>
        </div>
    )
}

export default Certificate
