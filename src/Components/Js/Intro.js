import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SchoolIcon from "@material-ui/icons/School";
import React from 'react'
import "../Css/Intro.css"


import mine from "../Images/mine.jpg"

const Intro = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <div>
        <div className="intro" id="intro">
            <div>
            <img src={mine} alt="Intro Img" className="introImg" />
            </div>
            <div>
            <h1 className="introHeading">
                Hi I'm
                <strong>
                Murali Sree Krishna C
                </strong>
            </h1>
            <h2 className="introSubHeading">Graduate-2020</h2>
            </div>
            </div>
        {isMobile ? (
        <Box textAlign="right">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to={process.env.PUBLIC_URL + "/College"}
            style={{ margin: "15px 0"}}
          >
            <SchoolIcon style={{ marginRight: 15 }} />
            <Typography variant="button">College</Typography>
            <ChevronRightIcon />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </div>
    )
}


export default Intro
