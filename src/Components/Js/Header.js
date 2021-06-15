// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  RaisedButton,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// IMPORTING Apps
import Home from "./Intro";
import College from "./College";
import About from "./Aboutme";
import Personal from "./Personal";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#fbf1c7",
  },
  title: {
    flexGrow: 1,
    color: "#076678",
    fontWeight: 600,
  },
  menu: {
    "& .MuiPaper-root": {
      background: "#3c3636",
    },
  },
  button: {
    color: "#fbf1c7",
    "&:hover": {
      color: "#ebdbb2",
      background: "#3c3636",
  },
},
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
      <BrowserRouter>
      <AppBar>
        <Toolbar>
        <Typography
                variant="h4"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Murali
        </Typography>
        {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="fade-menu"
                    className={classes.menu}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    onClose={handleClose}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      className={classes.button}
                      component={Link}
                      to={process.env.PUBLIC_URL + "/"}
                    >
                      <ListItemIcon>
                        <HomeIcon className={classes.button} />
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      className={classes.button}
                      component={Link}
                      to={process.env.PUBLIC_URL + "/College"}
                    >
                      <ListItemIcon>
                        <SchoolIcon className={classes.button} />
                      </ListItemIcon>
                      <Typography variant="h6"> College </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      className={classes.button}
                      component={Link}
                      to={process.env.PUBLIC_URL + "/About"}
                    >
                      <ListItemIcon>
                        <PersonIcon className={classes.button} />
                      </ListItemIcon>
                      <Typography variant="h6"> About</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchorEl(null)}
                      className={classes.button}
                      component={Link}
                      to={process.env.PUBLIC_URL + "/Personal"}
                    >
                      <ListItemIcon>
                        <BookmarksIcon className={classes.button} />
                      </ListItemIcon>
                      <Typography variant="h6"> Personal </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button variant="text" 
                  onClick={() => setAnchorEl(null)} 
                  color="default"
                  component={Link}
                  to={process.env.PUBLIC_URL + "/"} 
                  className={classes.button}>
                    <HomeIcon />
                    Home
                  </Button>
                  <Button variant="text" 
                  onClick={() => setAnchorEl(null)} 
                  color="default"
                  component={Link}
                  to={process.env.PUBLIC_URL + "/College"} 
                  className={classes.button}>
                    <SchoolIcon />
                    College
                  </Button>
                  <Button variant="text" 
                  onClick={() => setAnchorEl(null)} 
                  color="default"
                  component={Link}
                  to={process.env.PUBLIC_URL + "/About"} 
                  className={classes.button}>
                    <PersonIcon />
                    About
                  </Button>
                  <Button variant="text" 
                  onClick={() => setAnchorEl(null)} 
                  color="default"
                  component={Link}
                  to={process.env.PUBLIC_URL + "/Personal"} 
                  className={classes.button}>
                    <BookmarksIcon />
                    Personal
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/College"} component={College} />
            <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
            <Route exact path={process.env.PUBLIC_URL + "/Personal"} component={Personal} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
}

export default Header
