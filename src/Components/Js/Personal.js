import React from 'react'
import { 
    makeStyles, 
    Box, Grid, Card, 
    CardContent, 
    CardActions,
    useMediaQuery, 
    CardMedia,
    Button,
    Typography
} from "@material-ui/core/";
import CodeIcon from '@material-ui/icons/Code';
import { useState } from 'react'
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PersonIcon from "@material-ui/icons/Person";

import "../Css/Certificate.css"

// Personal Projects
import project1 from "../Images/personal/ps1.png"
import project2 from "../Images/personal/ps2.png"
import project3 from "../Images/personal/ps3.jpg"
import project5 from "../Images/personal/ps5.png"
import project6 from "../Images/personal/ps6.png"
import project7 from "../Images/personal/ps7.png"

// Certificates
import certificate1 from "../Images/certificates/work1.png"
import certificate2 from "../Images/certificates/work2.png"
import certificate3 from "../Images/certificates/work3.png"
import certificate4 from "../Images/certificates/work4.png"

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: "100%",
    },
    cardContainer: {
        maxHeight: 345,
        margin: 10,
        background: "#363736",
    },
    cardBody: {
        height: "5rem",
        color: "#fbf1c7",
    },
    heading: {
    color: "#af3a03",
    padding: "3rem 0",
    fontWeight: 600,
    textTransform: "uppercase",
    },
    card: {
        margin: 10,
    },
    button: {
        color: "#fbf1c7",
        "&:hover":{
            color: "#fbf1c7",
        },
    },
}))

const Personal = () => {
    const [certificates] = useState([
        {
            id: 1,
            img: certificate1,
        },
        {
            id: 2,
            img: certificate2,
        },
        {
            id: 3,
            img: certificate3,
        },
        {
            id: 4,
            img: certificate4,
        },
    ])
    const [projects] = useState([
        {
            heading: 'Social Media PHP',
            img: project6,
            link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/Socialmedia",
        },
        {
            heading: 'Todo List PHP',
            img: project7,
            link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/TodoList",
        },
        {
            heading: 'Facerecog Opencv2',
            img: project3,
            link: "https://github.com/ChittojiMuraliSreeKrishna/Python_codes/tree/master/Opencv",
        },
        {
            heading: 'Ecommerce Site Django',
            img: project2,
            link: "https://github.com/ChittojiMuraliSreeKrishna/Django_Ecommerce",
        },
        {
            heading: 'Todolist Vanilla-js',
            img: project5,
            link: "https://github.com/ChittojiMuraliSreeKrishna/TodoList",
        },
        {
            heading: 'Arch Linux installation',
            img: project1,
            link: "https://github.com/ChittojiMuraliSreeKrishna/Arch-Linux-Installation",
        }
    ])
    const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading} id="personal">
                Personal Projects
            </Typography>
            <Grid container justify="center">
            {projects.map((project, i) => (
                <Grid item xs={10} sm={6} md={4} key={i}> 
                    <Card className={classes.cardContainer}>
                            <CardMedia
                            component="img"
                            alt="Project 1"
                            height="140"
                            image={project.img}
                            />
                            <CardContent className={classes.cardBody}>
                            <Typography variant="h5" gutterBottom>
                                {project.heading}
                            </Typography>
                            </CardContent>
                                <CardActions>
                                    <Button 
                                    color="secondary" 
                                    variant="contained" 
                                    href={project.link}
                                    className={classes.button}
                                    startIcon={<CodeIcon />}>
                                        Code
                                    </Button>
                                </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
            <Typography variant="h4" align="center" className={classes.heading} id="certificates">
                Certificates
            </Typography>
            <div className="certificates">
            {certificates.map((certificate) => (
                            <div className="certificate-items" key={certificate.id} >
                                <img src={certificate.img} alt="" className="certificateImages" />
                            </div>
            ))}
            </div>
            {isMobile ? (
        <Box textAlign="left">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to={process.env.PUBLIC_URL + "/About"}
            style={{ margin: "15px 0"}}
          >
            <ChevronLeftIcon />
            <Typography variant="button">About</Typography>
            <PersonIcon style={{ marginLeft: 15 }} />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
        </Box>
    )
}

export default Personal
