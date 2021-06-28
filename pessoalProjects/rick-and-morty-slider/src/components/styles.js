import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  section: {
    marginTop: '90px',
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  header: {
    marginTop: '50px',
  },
  mainContainer: {
    marginTop: '100px',
  },
  sliderContainer: {
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  btnContainer: {
    display: 'flex',
    width: '400px',
    justifyContent: 'space-between',
  },
  card: {
    width: 400,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center'
  },
  cardContainer: {
    width: 300,
    height: 500,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardImg: {
    width: 400,
    height: 350,
  },
  cardContent: {
    display: 'flex',
    flexFlow: 'column',
  },
  navbar: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  in: {
    fontSize: 30,
    marginLeft: 10,
    color: 'white',
  },
  hb: {
    fontSize: 30,
    marginLeft: 10,
    color: 'white',
  }

})