import React from 'react'
import { 
    makeStyles, 
    Box, Grid, Card, 
    CardContent, 
    CardActions, 
    CardMedia,
    Button,
    Typography
} from "@material-ui/core/";
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
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
        textShadow: "2px 2px black",
    },
    card: {
        margin: 10,
    },
    button: {
        "&:hover":{
            color: "#fff",
        },
    },
}))

const Personal = ({projects}) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading} id="personal">
                Personal Projects
            </Typography>
            <Grid container justify="center">
            {projects.map((project, i) => (
                <Grid item xs={12} sm={9} md={5} key={i}> 
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
                                    startIcon={<CodeIcon />}>
                                        Code
                                    </Button>
                                </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}

export default Personal
