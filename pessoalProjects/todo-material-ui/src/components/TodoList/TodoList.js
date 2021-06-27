import React from 'react'
import  {Grid, Button}  from '@material-ui/core/'
import Todo from './Todo';
import { useStyles } from './styles'

export default function TodoList({ filtredTodos, deleteItem, completedItem, setTodos, showAlert }) {
  const classes = useStyles();

  const clearList = () => {
    showAlert(true, 'List clearned', 'danger');
    setTodos([])
  }

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <ul className={classes.itemsContainer}>
          {filtredTodos.map((todo) => <Todo
            key={ todo.id }
            { ...todo }
            completedItem={ completedItem }
            deleteItem={ deleteItem }
            showAlert={ showAlert }
          />)}
        </ul>
      </Grid>
      {filtredTodos.length && <Button
        onClick={ clearList }
        variant="outlined" color="secondary"
        className={classes.clearBtn}
      >
        Clear List
      </Button>}
    </>
  );
}
