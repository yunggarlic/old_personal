import React from 'react';
import '../styles/work.less';

export default function Work(props) {
  const { isFocus, onMobile } = props;
  return (
    //fade in on is focus
    <div className={`work ${isFocus === 'work' ? 'active' : ''}`}>
      <h2>selected works</h2>
      <h3>welcome to the arena - a c++ roguelite</h3>
      <a href="https://github.com/yunggarlic/arena">
        <p>https://github.com/yunggarlic/arena</p>
      </a>
      <h3>statesmen - a podcast website</h3>
      <a href="http://statesmenpodcast.com">
        <p variant="body2" align="right" component="p" color="secondary">
          statesmenpodcast.com
        </p>
      </a>
      <h3 align="right" variant="body1" component="h3" color="primary">
        aether - a multiplayer 3D loop synth
      </h3>
      <a href="http://aether-leo.herokuapp.com">
        <p>aether-leo.herokuapp.com</p>
      </a>
      <h3>space place - an ecommerce site</h3>
      <a href="http://graceshopper-epsilon.herokuapp.com">
        <p>graceshopper-epsilon.herokuapp.com</p>
      </a>
      <a href="http://www.github.com/yunggarlic">Github</a>
    </div>
  );
}
