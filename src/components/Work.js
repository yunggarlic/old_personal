import React from 'react';
import '../styles/work.less';

export default function Work(props) {
  const { isFocus, onMobile } = props;
  return (
    //fade in on is focus
    <div className={`work ${isFocus === 'work' ? 'active' : ''}`}>
      <h2>selected works</h2>
      <p>
        <a href="http://statesmenpodcast.com">
          statesmen - a podcast portfolio site
        </a>
      </p>

      <p>
        <a href="http://aether.herokuapp.com">
          aether - a multiplayer 3D loop synth
        </a>
      </p>
      <p>
        <a href="http://space-place.herokuapp.com">
          space place - an ecommerce site
        </a>
      </p>
      <p>
        <a href="http://tygko.herokuapp.com">
          tygko - a music artist portfolio site
        </a>
      </p>
      <div className="buttonContainer">
        <button>
          <a href="http://www.github.com/yunggarlic">check out my github</a>
        </button>
      </div>
    </div>
  );
}
