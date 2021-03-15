import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    main: {
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    },
    scene: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    content: {
      display: 'flex',
      height: '100vw',
      width: '80%',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      overflow: 'auto',
    },
    homeContainer: {
      position: 'absolute',
      top: '30%',
    },
    aboutContainer: {
      alignSelf: 'flex-end',
      position: 'absolute',
      width: '67%',
    },
    workContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'absolute',
      width: '67%',
      alignSelf: 'flex-end',
    },
    buttonBox: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-end',
      width: '20%',
    },
  };
});

export default useStyles;
