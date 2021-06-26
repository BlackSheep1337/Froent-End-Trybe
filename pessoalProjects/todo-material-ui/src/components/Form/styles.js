import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    marginTop: '50px',
  },
  appbar: {
    alignItems: 'center'
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginTop: '50px',
  },
  input: {
    width: '500px',
    marginTop: '50px',
  },
  btn: {
    marginTop: '20px',
  },
  gridContainer: {
    marginTop: '50px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  itemsContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    margin: '30px 0',
    listStyle: 'none',
    width: '600px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid lightblue',
    margin: '8px 0',
    borderRadius: '8px',
    alignItems: 'center',
    paddingLeft: '52px',
    color: 'darkblue',
    fontSize: '22px'
  },
  alertContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '50px',
  },
  alert: {
    textAlign: 'center',
    borderRadius: '12px',
    background: 'green',
    width: '400px',
  },
  select: {
    marginTop: '20px',
    textAlign: 'center',
    width: '150px',
  }
});
