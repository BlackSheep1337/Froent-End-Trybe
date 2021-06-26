import React, { useEffect } from 'react';
import  { Typography }  from '@material-ui/core'
import { useStyles } from './styles'



export default function Alert({ alert, setAlert, todos }) {
  const classes = useStyles();

  useEffect(() => {
    const timeout = setInterval(() => {
      setAlert({});
    }, 3000)
    return () => clearInterval(timeout);
  }, [todos, alert])

  const { type, msg } = alert;
  return (
    <Typography className={classes.alertContainer} component="div">
      <Typography 
      className={ classes[ type ] }>
        { msg }
      </Typography>
    </Typography>
  )
}
