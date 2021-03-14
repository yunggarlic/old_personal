import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  // console.log(theme);
  return {
    main: {
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
      marginBottom: '1rem',
    },
    navButton: {
      '&$disabled': {
        color: 'white',
      },
    },
    navButtonDisabled: {},
    content: {
      display: 'flex',
      height: '100vw',
      width: '80%',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    homeContainer: {
      position: 'absolute',
      maxHeight: '60%',
      maxWidth: '50%',
    },
    aboutContainer: {
      position: 'absolute',
      maxHeight: '60%',
      maxWidth: '50%',
      right: '10%',
    },
  };
});

export default useStyles;
