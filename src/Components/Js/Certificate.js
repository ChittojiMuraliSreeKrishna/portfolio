import React from 'react'
import "../Css/Certificate.css"
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
        textShadow: "2px 2px black",
    },
}))

const Certificate = ({certificates}) => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h4" align="center" className={classes.heading} id="certiificate">
                Certificates
            </Typography>
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
