import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import {useStyles} from './components/styles';
import Container from '@material-ui/core/Container';


export default function App() {
  const classes = useStyles();
  const [inputText, setInputText] = React.useState('');

  return (
    <main className={classes.root}>
      <h1>herow wourdi</h1>
      <Form />
    </main>
  );
}
