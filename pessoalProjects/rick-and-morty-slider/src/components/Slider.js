import React from 'react';
import Slide from './Slide';
import { Container, Box, Button, Typography, ButtonGroup, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


export default function Slider({ item }) {
  const classes = useStyles();
  return (
    <Container className={classes.section}>
      <Box className={classes.header}>
        <Typography variant="h4" color="primary">Watch now news episodios of Rick and Morty!</Typography>
      </Box>
      <Box className={classes.mainContainer}>
        <Paper className={classes.sliderContainer}>
          <Box className={classes.slider}>
            <Slide item={ item } />
          </Box>
        </Paper>
        <ButtonGroup  color="primary" variant="contained" className={classes.btnContainer}>
          <Button classes={classes.left}>
          <ArrowLeftIcon />
          </Button >
          <Button classes={classes.right}>
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  )
}
