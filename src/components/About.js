import React from 'react';
import '../styles/about.less';

export default function About(props) {
  const { isFocus, onMobile } = props;
  return (
    // Must fade in and out on is focus
    <div className={`about ${isFocus === 'about' ? 'active' : ''}`}>
      <div>
        <h3>Hey! I'm Tim Ferrari</h3>
        <p>
          Chicago based software engineer, artist, musician, elaborate worm.
        </p>
        <p>
          Fullstack developer with a passion for creating beautiful, intuitive,
          and useful applications. I have experience across a wide range of
          technologies and languages.
        </p>
        <p>
          Currently, I am a Developer at{' '}
          <a target="_blank" href="https://www.criticalmass.com/">
            Critical Mass
          </a>
          , and developing independently on a fullstack application for a local
          startup. I am always looking for new opportunities to learn, build,
          and have a laugh.
        </p>
      </div>
      <div className="buttonContainer">
        <button>
          <a href="http://www.linkedin.com/in/timferrari">connect with me!</a>
        </button>
      </div>
    </div>
  );
}
