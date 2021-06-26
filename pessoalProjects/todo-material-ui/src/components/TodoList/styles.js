import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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
  itemCompleted: {
    textDecoration: 'line-through',
    color: 'gray',
  }
});
