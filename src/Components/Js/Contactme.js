import React from 'react'
import "../Css/Contactme.css"
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heading: {
      color: "tomato",
      padding: "3rem 0",
      textTransform: "uppercase",
      textShadow: "2px 2px black",
  },
}))


const Contactme = () => {
  const classes = useStyles()
    return (
        <div className="container">
            <Typography variant="h4" align="center" className={classes.heading}>
                Contact me
            </Typography>
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
