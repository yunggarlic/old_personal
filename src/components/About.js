import React from 'react';
import '../styles/about.less';

export default function About(props) {
  const { isFocus, onMobile } = props;
  return (
    // Must fade in and out on is focus
    <div className={`about ${isFocus === 'about' ? 'active' : ''}`}>
      <h3>I am Tim Ferrari</h3>
      <span>a Chicago based software engineer, artist, and podcaster.</span>
      <p>
        Host and producer of the Statesmen podc Former freelance video director,
        turned software engineer Catch me painting, working on my moped, or
        playing video games.
      </p>
      <a href="http://www.linkedin.com/in/timferrari">Linkedin</a>
    </div>
  );
}
