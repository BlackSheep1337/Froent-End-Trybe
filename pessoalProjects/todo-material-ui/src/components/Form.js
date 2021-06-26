import React from 'react';
import {FormControl, InputLabel, Input, Button, Grid, Container, Paper } from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useStyles} from './styles';


export default function Form() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.root}>
        <FormControl>
          <Grid container>
            <Grid item >
            <InputLabel
            htmlFor="my-input"
            >
              Digit your todo
            </InputLabel>
            <Input id="my-input"
              aria-describedby="my-helper-text"
            />
            <Button variant="outlined" color="primary">
              <AddCircleIcon />
            </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  )
}
