import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  card: {
    color: "#f4f4f4",
  },
});

const Movie = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
          props.movie.image
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.movie.genre} {props.movie.length}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Movie;
