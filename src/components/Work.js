import React from 'react';
import '../styles/work.less';

export default function Work(props) {
  const { isFocus, onMobile } = props;
  return (
    //fade in on is focus
    <div className={`work ${isFocus === 'work' ? 'active' : ''}`}>
      <h2>selected works</h2>
      <h3>
        <a href="http://statesmenpodcast.com">statesmen - a podcast website</a>
      </h3>

      <h3 align="right" variant="body1" component="h3" color="primary">
        <a href="http://aether-music.herokuapp.com">
          aether - a multiplayer 3D loop synth
        </a>
      </h3>
      <h3>
        <a href="http://space-place.herokuapp.com">
          space place - an ecommerce site
        </a>
      </h3>
      <div className="buttonContainer">
        <button>
          <a href="http://www.github.com/yunggarlic">check out my github</a>
        </button>
      </div>
    </div>
  );
}
