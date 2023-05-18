import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import CodeIcon from "@material-ui/icons/Code";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PersonIcon from "@material-ui/icons/Person";

import "../Css/Certificate.css";

// Personal Projects
import project1 from "../Images/personal/ps1.png";
import project2 from "../Images/personal/ps2.png";
import project3 from "../Images/personal/ps3.jpg";
import project5 from "../Images/personal/ps5.png";
import project6 from "../Images/personal/ps6.png";
import project7 from "../Images/personal/ps7.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxHeight: 345,
    margin: 10,
    background: "#e1dfe1",
    padding: 10,
  },
  cardBody: {
    height: "5rem",
    color: "#000",
  },
  card: {
    margin: 10,
  },
  button: {
    background: "#28a745",
    color: "#f8f9fa",
    "&:hover": {
      color: "#f8f9fa",
    },
  },
}));

const Personal = () => {
  const [projects] = useState([
    {
      heading: "Social Media PHP",
      img: project6,
      link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/Socialmedia",
    },
    {
      heading: "Todo List PHP",
      img: project7,
      link: "https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/TodoList",
    },
    {
      heading: "Facerecog Opencv2",
      img: project3,
      link: "https://github.com/ChittojiMuraliSreeKrishna/OpencvPython",
    },
    {
      heading: "Ecommerce Site Django",
      img: project2,
      link: "https://github.com/ChittojiMuraliSreeKrishna/Django_Ecommerce",
    },
    {
      heading: "Todolist Vanilla-js",
      img: project5,
      link: "https://github.com/ChittojiMuraliSreeKrishna/TodoList",
    },
    {
      heading: "Arch Linux installation",
      img: project1,
      link: "https://github.com/ChittojiMuraliSreeKrishna/Arch-Linux-Installation",
    },
  ]);
  const classes = useStyles();
  return (
    <div>
      <p className="sideHeadings">Personal Projects</p>
      <div className="Personal">
        <Box component="div" className={classes.mainContainer}>
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
                      color="primary"
                      variant="contained"
                      href={project.link}
                      className={classes.button}
                      startIcon={<CodeIcon />}
                    >
                      Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Personal;
