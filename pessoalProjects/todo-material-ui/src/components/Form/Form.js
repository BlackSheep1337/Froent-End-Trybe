import React from 'react'
import { Container, AppBar, Toolbar, Typography, TextField, FormControl, Button, NativeSelect } from '@material-ui/core';
import { useStyles } from './styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Form({ inputText, setInputText, handleSubmit, setStatus, status }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} handlesubmit="sm">
      <AppBar className={classes.appbar} color="primary">
        <Toolbar disableGutters>
          <Typography variant="h3">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.form}>
        <TextField
          onChange={(e) => setInputText(e.target.value)}
          value={ inputText }
          variant="outlined"
          className={classes.input}
          />
          <NativeSelect
            value={ status }
            onChange={(e) => setStatus(e.target.value)}
            className={classes.select} variant="outlined"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </NativeSelect>
          <Button
            type="submit"
            startIcon={<AddCircleIcon />}
            className={classes.btn}
            variant="contained"
            color="primary"
          > 
            Add task
          </Button>
          </FormControl>
        </form>
    </Container>
  )
}
