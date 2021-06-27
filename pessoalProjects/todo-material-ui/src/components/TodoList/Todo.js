import React from 'react'
import  {Grid, ButtonGroup, Button }  from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from './styles'



export default function Todo({ text, id, completedItem, deleteItem, completed }) {
  const classes = useStyles();

  return (
    <Grid item  className={classes.item}>
      <li className={`${completed ? classes.itemCompleted : ''}`}>{ text }</li>
      <ButtonGroup>
        <Button onClick={() => completedItem(id) } color="primary">
          <CheckCircleIcon />
        </Button>
        <Button onClick={() => deleteItem(id) } color="secondary">
          <DeleteIcon />
        </Button>
      </ButtonGroup>  
    </Grid>
  )
}
