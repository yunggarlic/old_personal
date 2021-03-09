import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  // console.log(theme);
  return {
    main: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      zIndex: 1,
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
    },
    middlenav: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbar: {
      display: 'inline-block',
      textAlign: 'center',
      border: '1px solid grey',
      background: 'hsla(120, 10%, 25%, 0.3)',
    },
    navbox: {
      textAlign: 'center',
      background: 'hsla(120, 10%, 25%, 0.3)',
      border: '1px solid grey',
    },
  };
});

export default useStyles;
