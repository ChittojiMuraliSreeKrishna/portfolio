import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import CodeICon from "@material-ui/icons/Code";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

import summerintern1 from "../Images/college/cs5.png";
import summerintern2 from "../Images/college/cs1.png";
import summerintern3 from "../Images/college/cs2.png";
import summerintern4 from "../Images/college/cs3.png";
import summerintern5 from "../Images/college/cs4.png";
import summerintern6 from "../Images/college/cs6.png";
import miniproject1 from "../Images/college/cs9.jpg";
import "../Css/Projects.css";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 25,
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #6c757d",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #6c757d",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#6c757d #6c757d transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#6c757d",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #6c757d #6c757d",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#f8f9fa",
    background: "#6c757d",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  subHeading: {
    color: "#343a40",
    paddingBottom: 10,
    textTransform: "uppercase",
    textDecoration: "underline",
  },
  subtitle1: {
    color: "#343a40",
  },
  button: {
    margin: 10,
    background: "#28a745",
    color: "#f8f9fa",
    "&:hover": {
      color: "#f8f9fa",
    },
  },
  iconButton: {
    background: "#fff",
    borderRadius: "50%",
    border: "2px solid #343a40",
    color: "#343a40",
    fontSize: "1.8rem",
    margin: "0.2rem",
  },
  imageCarousel: {
    position: "relative",
  },
  carouselButtons: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
  },
}));

const summerinternship = [
  {
    image: summerintern1,
  },
  {
    image: summerintern2,
  },
  {
    image: summerintern3,
  },
  {
    image: summerintern4,
  },
  {
    image: summerintern5,
  },
  {
    image: summerintern6,
  },
];

const Projects = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = summerinternship.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(summerinternship) || summerinternship.Box <= 0) {
    return null;
  }

  return (
    <div>
      <p className="sideHeadings">College Projects</p>
      <div className="Projects">
        <Box className={classes.mainContainer}>
          <Box component="div" className={classes.timeLine}>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Smart Radio
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                I have done a dynamic messaging website named smart radio which
                uses HTML, CSS, javascript as frontend, PHP as backend, MySQL
                store the information & googleTextToSpeech to convert the
                messages to speech, this has users and admins, users send the
                messages by logging inWhile admins have the right to play or
                Delete messages
              </Typography>
              <Box className={classes.imageCarousel}>
                <Box className={classes.carouselButtons}>
                  <ChevronLeftIcon
                    onClick={prevSlide}
                    className={classes.iconButton}
                  />
                  <ChevronRightIcon
                    onClick={nextSlide}
                    className={classes.iconButton}
                  />
                </Box>
                {summerinternship.map((summerinternship, index) => {
                  return (
                    <Box>
                      {index === current && (
                        <img
                          src={summerinternship.image}
                          alt="summerinternship images"
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CodeICon />}
                href="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship"
              >
                <Typography variant="button">Code</Typography>
              </Button>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                Army Security System using (IOT)
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                className={classes.subtitle1}
              >
                I have done an project on IOT named armySecuritySystem which
                sends co-ordinates by SMS or mail whenever the motion is
                detected, in this i have used PIR_sensor(HCSR-501),
                wifi_module(ESP8266), gsm_module(SIM800L), GPS_module(SIM28ML),
                so that when the PIR_sensor gets motion it wakes the system to
                send the message of the particular location
              </Typography>
              <img src={miniproject1} alt="" />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<CodeICon />}
                href="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/miniProject"
              >
                <Typography variant="button">Code</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
