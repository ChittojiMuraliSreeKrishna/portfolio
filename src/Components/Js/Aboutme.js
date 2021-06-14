import React from 'react'
import { Typography, 
  makeStyles, 
  Box, Card, 
  CardContent, 
  CardActions,
  CardMedia } from '@material-ui/core'

  import myBackground from "../Images/mine2.jpg"
  import aboutImg from "../Images/mine3.jpg"
  import HTML from "../Images/icons/html.png"
  import CSS from "../Images/icons/css.png"
  import JavaScript from "../Images/icons/javascript.png"
  import Python from "../Images/icons/python.png"

  import "../Css/Contactme.css"

  import { FaLinkedin, 
    FaGithub, 
    FaCodepen,
    FaTwitter,
    FaDev, } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#af3a03",
    padding: "3rem 0",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  card: {
    maxWidth: "600px",
    background: "#363836",
    color: "#fbf1c7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icons: {
    width: "30px",
  },
  boxStyling: {
    display: "grid",
    placeItems: "center",
  },
  aboutBackground: {
    width: "100%",
    height: "12rem",
  },
  aboutPicture: {
  width: "12rem",
  height: "12rem",
  borderRadius: "50%",
  border: "solid 0.5rem #282828",
  overflow: "hidden",
  marginTop: "-6rem",
  alignSelf: "center",
  },
  aboutImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignSelf: "center",
  },
  subHeading: {
    background: "#458588",
    padding: "0 2rem",
    margin: "1rem 2rem",
    borderRadius: "15px",
    fontWeight: "550",
  },
  languagesTitle:{
    textDecoration: "underline",
    color: "#a89984",
  },
  languages: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "20px", 
    alignItems: "center",
    margin: "1rem",
  },
  links: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#282828",
  },
  link:{
    color: "#458588",
    fontSize: "1.5rem",
    "&:hover":{
      color: "#fbf1c7",
    },
  },
}))


const Aboutme = () => {
  const classes = useStyles();
  return (
    <Box className={classes.boxStyling}>
      <Typography variant="h4" align="center" className={classes.heading} id="about">
                About me
      </Typography>
    <Box variant="div">
    <Card className={classes.card}>
      <CardMedia 
      component="img"
      image={myBackground}
      alt="background"
      className={classes.aboutBackground}
      />
    <CardContent className={classes.cardBody}>
      <Box className={classes.aboutPicture}>
      <CardMedia 
      component="img"
      image={aboutImg}
      alt="my picture"
      className={classes.aboutImg}
      />
      </Box>
      <Box>
      <Typography variant="h4" align="center">
        Who Am I
      </Typography>
      <Typography variant="h6" align="center" className={classes.subHeading}>
      Computer's Science Engineer, GITAM University
      </Typography>
      <Typography variant="body1" align="center">
        I am Self Taught programmer, I have a decent knowledge in
        FrontEnd and Python languages, that are required for an company
        & I aim to be associated with organization which helps me grow
        personally and professionally. 
      </Typography>
      </Box>
    </CardContent>
    <Typography variant="body2" align="center" className={classes.languagesTitle}>
      Things In which i have grip on: 
    </Typography>
    <Box className={classes.languages}>
    <img
      src={HTML}
      className={classes.icons}
      alt=""
    />
    <img
      src={CSS}
      className={classes.icons}
      alt=""
    />
    <img
      src={JavaScript}
      className={classes.icons}
      alt=""
    />
    <img
      src={Python}
      className={classes.icons}
      alt=""
    />
    </Box>
    <Typography variant="Heading" align="center" className={classes.languagesTitle}>
        Links:
    </Typography>
    <CardActions className={classes.links}>
        <a href="https://www.linkedin.com/in/murali-sree-krishna-chittoji-06a353170/" 
        className={classes.link}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/ChittojiMuraliSreeKrishna"
        className={classes.link}>
          <FaGithub />
        </a>
        <a href="https://codepen.io/murali-sree-krishna" 
        className={classes.link}>
          <FaCodepen />
        </a>
        <a href="https://twitter.com/CmuraliSree"
        className={classes.link}>
          <FaTwitter/>
        </a>
        <a href="https://dev.to/cmuralisree"
        className={classes.link}>
          <FaDev/>
        </a>
    </CardActions>
    </Card>
    </Box>
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
    </Box>
  )
}

export default Aboutme
