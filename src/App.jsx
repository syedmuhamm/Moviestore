import "./app.css";
import Movie from "./components/Movie/Movie";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faHeart,
  faSearch,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { withTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { margin, width } from "@mui/system";
import { makeStyles } from "@mui/styles";
// image for test only
import image from "./img/test-poster.jpg";
// styling classes
const styles = makeStyles({
  drawer: {
    width: "60px",
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      background: "#29303A",
      color: "white",
      width: "60px",
      height: "100%",
      boxSizing: "border-box",
      position: "inherit",
    },
  },
});

const drawerWidth = 60;
const App = () => {
  const styleClasses = styles();
  const [movies, setMovies] = useState([]);
  const popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=451a5c46225283a9a3e766eee8fa80ac";

  const fetchMovies = () => {
    return axios.get(popularMoviesUrl).then((response) => {
      // processing result and making object like how we need
      return response.data.results.map((movie) => ({
        image: movie.poster_path,
        title: movie.original_title,
        genre: "unknown",
        length: "200",
      }));
    });
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // lets get the movie data from axios
    axios.get(popularMoviesUrl).then((response) => {
      // processing result and making object like how we need
      let computedResults = response.data.results.map((movie) => ({
        image: movie.poster_path,
        title: movie.original_title,
        genre: "unknown",
        length: "200",
      }));
      //   console.log(computedResults);
      //   // setting movies
      setMovies(computedResults);
      //   console.log("in axios");
    });
    // fetchMovies().then((randomData) => {
    //   setMovies(randomData);
    //   console.log(movies);
    // });
  }, []);

  // useEffect(() => {
  //   // let computedResults = response.data.results.map((movie) => ({
  //   //   image: movie.poster_path,
  //   //   title: movie.original_title,
  //   //   genre: "unknown",
  //   //   length: "200",
  //   // }));
  //   console.log(movies);
  // }, [movies]);

  return (
    <div className="container" style={{ width: "90%", margin: "70px auto" }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        ></AppBar>
        <Drawer
          className={styleClasses.drawer}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <List className="nav-list">
            <ListItem button key={"latest"}>
              <ListItemIcon>
                <FontAwesomeIcon className="nav-item" icon={faClock} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={"popular"}>
              <ListItemIcon>
                <FontAwesomeIcon className="nav-item" icon={faStar} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={"favorites"}>
              <ListItemIcon>
                <FontAwesomeIcon className="nav-item" icon={faHeart} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={"watchlist"}>
              <ListItemIcon>
                <FontAwesomeIcon className="nav-item" icon={faList} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key={"search"}>
              <ListItemIcon>
                <FontAwesomeIcon className="nav-item" icon={faSearch} />
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "#15181B",
            p: 3,
            height: "100vh",
            color: "#f0f0f0",
          }}
        >
          <Grid container spacing={2}>
            {movies.map((movie, i) => {
              return (
                <Grid xs={12} md={3}>
                  <Movie movie={movie} key={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default App;
