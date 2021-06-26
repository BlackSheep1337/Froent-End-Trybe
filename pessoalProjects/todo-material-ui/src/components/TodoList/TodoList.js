import React from 'react'
import  Grid  from '@material-ui/core/Grid'
import Todo from './Todo';
import { useStyles } from './styles'

export default function TodoList({ todos, deleteItem, completedItem }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <ul className={classes.itemsContainer}>
        {todos.map((todo) => <Todo
          key={todo.id}
          {...todo}
          completedItem={ completedItem }
          deleteItem={deleteItem}
        />)}
      </ul>
    </Grid>
  );
}
