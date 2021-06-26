import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  alertContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '50px',
  },
  success: {
    textAlign: 'center',
    borderRadius: '12px',
    background: 'green',
    width: '400px',
    fontSize: '20px',
    color: 'white',
  },
  danger: {
    textAlign: 'center',
    borderRadius: '12px',
    background: 'red',
    width: '400px',
    fontSize: '20px',
    color: 'white',
  }
});
