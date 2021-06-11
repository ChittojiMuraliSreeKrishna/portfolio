import React from 'react'
import { Typography, 
  makeStyles, 
  Box, Card, 
  CardContent, 
  CardActions,
  CardMedia,
  CardActionArea } from '@material-ui/core'

  import myBackground from "../Images/mine2.jpg"
  import aboutImg from "../Images/mine3.jpg"
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
  card: {
    maxWidth: "600px",
    background: "white",
    color: "black",
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
    width: "50px",
  },
  languages: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
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
  border: "solid 0.5rem #fff",
  overflow: "hidden",
  marginTop: "-6rem",
  alignSelf: "center",
  },
  aboutImg: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    alignSelf: "center",
  },
  subHeading: {
    background: "#97a859",
    padding: "0 2rem",
    margin: "1rem 2rem",
    borderRadius: "15px",
    fontWeight: "550",
  },
  languagesTitle:{
    textDecoration: "underline",
    color: "gray",
  }
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
    <CardActionArea>
    <CardActions className={classes.languages}>
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
    </CardActions>
    </CardActionArea>
    </Card>
    </Box>
    </Box>
  )
}

export default Aboutme
