import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: "100%",
    },
    cardContainer: {
        maxHeight: 345,
        margin: 10,
    },
    cardBody: {
        height: "5rem",
    },
    heading: {
        textAlign: "center",
        marginTop: "3rem",
        fontWeight: "400",
        textShadow: "2px 2px black",
        "&::first-letter": {
            fontWeight: "700",
            color: "#97a859",
        },
    },
    card: {
        margin: 10,
    },
}))

const Personal = ({projects}) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <h2 id="personal" className={classes.heading}>Personal Projects</h2>
            <Grid container justify="center">
            {projects.map((project, i) => (
                <Grid item xs={12} sm={9} md={5} key={i}> 
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
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
                            <CardActionArea>
                                <CardActions>
                                    <Button 
                                    color="primary" 
                                    variant="contained" 
                                    link={project.link}
                                    startIcon={<CodeIcon />}>
                                        Code
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}

export default Personal
