import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Button } from '@material-ui/core'
import CodeICon from "@material-ui/icons/Code"

import college1 from "../Images/college/cs5.png"
import college2 from "../Images/college/cs9.jpg"

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
            border: "1px solid tan",
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
        borderBottom: "2px solid tan",
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
          borderColor: "tomato tomato transparent transparent",
          borderWidth: "0.625rem",
          transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
          width: "44%",
          margin: "1rem",
          "&:nth-of-type(2n)": {
            float: "right",
            margin: "1rem",
            borderColor: "tan",
          },
          "&:nth-of-type(2n):before": {
            right: "auto",
            left: "-0.625rem",
            borderColor: "transparent transparent tomato tomato",
          },
        },
      },
      timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#fff",
        background: "tomato",
        lineHeight: 1,
        padding: "0.5rem 1rem",
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
      heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
        textShadow: "2px 2px var(--colorBlack)",
      },
      subHeading: {
        color: "#fff",
        paddingBottom: 10,
        textTransform: "uppercase",
      },
      subtitle1: {
        color: "tan",
      },
      button: {
        margin: 10,
      }
}))

const College = () => {
    const classes = useStyles()
    return (
        <Box className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading} id="college">
                College Projects
            </Typography>
            <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
                Summer Internship
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle1}>
            I have done a dynamic messaging website named smart 
            radio which uses HTML, CSS, javascript as frontend, 
            PHP as backend, MySQL store the information & googleTextToSpeech 
            to convert the messages to speech, this has users and admins, 
            users send the messages by logging inWhile admins have the right 
            to play or Delete messages
            </Typography>
            <img src={college1} alt="" />
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<CodeICon />}
            link="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/summerinternship"
            >
              <Typography variant="button">
                Code
              </Typography>
            </Button>
            </Box>
            <Typography variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
                2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
            <Typography variant="h5" align="center" className={classes.subHeading}>
                Mini Project
            </Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle1}>
            I have done my mini-project on IOT named armySecuritySystem 
            which sends co-ordinates by SMS or mail whenever the motion 
            is detected, in this i have used PIR_sensor(HCSR-501), 
            wifi_module(ESP8266), gsm_module(SIM800L), GPS_module(SIM28ML), 
            so that when the PIR_sensor gets motion it wakes the system to 
            send the message of the particular location
            </Typography>
            <img src={college2} alt="" />
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<CodeICon />}
            link="https://github.com/ChittojiMuraliSreeKrishna/collegeProjects/tree/main/miniProject"
            >
              <Typography variant="button">
                Code
              </Typography>
            </Button>
            </Box>
            </Box>
        </Box>
    )
}

export default College
