import React from 'react'
import '../styles/work.less'

export default function Work(props) {
  const {isFocus, onMobile} = props
  return (
    //fade in on is focus
    <div className={`work ${isFocus === 'work' ? 'active' : ''}`}>
      <h2>selected works</h2>
      <h3>statesmen - a podcast website</h3>
      <a href="http://statesmenpodcast.com">statesmenpodcast.com</a>
      <h3 align="right" variant="body1" component="h3" color="primary">
        aether - a multiplayer 3D loop synth
      </h3>
      <a href="http://aether-leo.herokuapp.com">aether-leo.herokuapp.com</a>
      <h3>space place - an ecommerce site</h3>
      <a href="http://graceshopper-epsilon.herokuapp.com">
        graceshopper-epsilon.herokuapp.com
      </a>
      <div className='buttonContainer'>
        <button>
          <a href="http://www.github.com/yunggarlic">Github</a>
        </button>
      </div>
    </div>
  )
}
