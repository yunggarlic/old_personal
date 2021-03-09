import React, { useEffect, useState } from 'react';
import { Container, Typography, Fade } from '@material-ui/core';
import useStyles from '../styles/material-styles';

export default function Navbox() {
  const { navbox } = useStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);

    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <>
      <Fade in={loaded}>
        <Container maxWidth="xs" className={navbox}>
          <Typography variant="body1">
            This is here to impress you, at least mildly.
          </Typography>
        </Container>
      </Fade>
    </>
  );
}
