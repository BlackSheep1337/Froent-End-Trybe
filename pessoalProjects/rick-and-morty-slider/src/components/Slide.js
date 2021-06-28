import React from 'react';
import { Card, CardMedia,CardContent, CardActionArea, Typography, Box } from '@material-ui/core';
import { useStyles } from './styles';

export default function Slide({ item }) {
  console.log(item);
  const classes = useStyles();
  const { id, name, status, species, image, origin} = item;
  return (
    <Card  className={ classes.card }>
      <CardActionArea className={ classes.cardContainer }>
        <CardMedia
          className={ classes.cardImg }
          image={ image }
          title={ name }
        />
        <CardContent className={classes.cardContent}>
          <Typography
            variant="h4"
            color="primary"
            className={classes.tigle}
          >
            { name }
          </Typography>
            <Typography color="primary" variant="h5">Status: {status}</Typography>
            <Typography color="primary" variant="h5">Species: {species}</Typography>
            <Typography color="primary" variant="h5">Origin: {origin.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
