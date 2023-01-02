import React from 'react';
import '../styles/home.less';

export default function Home(props) {
  const { isFocus, onMobile } = props;
  return (
    // Must fade in and out on is focus
    <div className={`home ${isFocus === 'home' ? 'active' : ''}`}>
      <h1>Hello.</h1>
      {onMobile ? (
        <span>
          Quite honestly this will probably crash on your phone eventually. But
          all info is still available.
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
