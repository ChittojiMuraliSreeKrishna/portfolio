import React from 'react'
import "../Css/Aboutme.css"
import { Typography, makeStyles } from '@material-ui/core'

import HTML from "../Images/icons/html.png"
import CSS from "../Images/icons/css.png"
import JavaScript from "../Images/icons/javascript.png"
import Python from "../Images/icons/python.png"

const useStyles = makeStyles((theme) => ({
  heading: {
      color: "tomato",
      padding: "3rem 0",
      textTransform: "uppercase",
      textShadow: "2px 2px black",
  },
}))

const Aboutme = () => {
  const classes = useStyles()
    return (
<div className="Aboutme">
            <Typography variant="h4" align="center" className={classes.heading} id="about">
                About me
            </Typography>
      <div className="">
        <section className="about-me">
          <div className="about-me__body">
            <div className="about-me__img shadow">
              <div className="hat"></div>
              <div className="toyhead">
                <div className="eyes eye-left"></div>
                <div className="eyes eye-right"></div>
                <div className="mouth"></div>
              </div>
              <div className="toybody">
                <div className="buttons button1"></div>
                <div className="buttons button2"></div>
                <div className="buttons button3"></div>
              </div>
            </div>
            <div className="about-titles">
              <h2 className="about__title">
                <strong>Who I am</strong>
              </h2>
              <h3 className="about__subtitle">
                Computer's Science Engineer, GITAM university
              </h3>
            </div>
            <p className="details">
              I am a graduate just having basic knowledge in front-end and
              python languages required for industry, I developed few personal
              projects so that I can keep up my practice, I like to be
              associated with an organization that helps me grow personally &
              professionally
            </p>
          </div>
          <div className="knowledge">
            <h4>Things in Which i have grip on :</h4>
            <div className="languages">
              <img
                src={HTML}
                className="icons"
                alt=""
              />
              <img
              src={CSS}
                className="icons"
                alt=""
              />
              <img
              src={JavaScript}
                className="icons"
                alt=""
              />
              <img
              src={Python}
                className="icons"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    )
}

export default Aboutme
