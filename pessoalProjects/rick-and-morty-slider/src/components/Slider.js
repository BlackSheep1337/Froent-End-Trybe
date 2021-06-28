import React from 'react';
import Slide from './Slide';
import { Container, Box, Button, Typography, ButtonGroup, Paper, AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Slider({ item, handleClickRight, handleClickLeft }) {
  const classes = useStyles();
  return (
    <Container className={classes.section}>
      <AppBar>
        <Toolbar className={classes.navbar}>
          <Typography variant="h4">
            Slider my by Alexandre Pereira
            <a target="_blank" href="https://www.linkedin.com/in/alexandre-pereira-0aba82205/">
              <LinkedInIcon className={classes.in} />
            </a>
            <a target="_blank" href="https://github.com/Naitwa-Alexandre">
              <GitHubIcon className={classes.hb}/>
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
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
          <Button onClick={ handleClickLeft } classes={classes.left}>
          <ArrowLeftIcon />
          </Button >
          <Button onClick={ handleClickRight } classes={classes.right}>
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  )
}
