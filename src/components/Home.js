import React, { useEffect } from 'react';
import '../styles/home.less';

export default function Home(props) {
  const { isFocus, onMobile, isFirstTime } = props;

  useEffect(()=> {console.log(isFirstTime)}, [isFirstTime])

  return (
    // Must fade in and out on is focus
    <div className={`home ${isFocus === 'home' ? 'active' : ''}`}>
      {isFirstTime ? <h1 className='text-rainbow'>Hello.</h1> : <h1 className='text-rainbow'>Welcome back.</h1>}
      {onMobile ? (
        <p>
          Quite honestly this will probably crash on your phone eventually.<br/>But
          all info is still available.
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
