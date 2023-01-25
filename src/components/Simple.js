import React, { useState, useEffect } from 'react';
import '../styles/simple.less';
import Cursor from './SimpleComponents/Cursor';

const Simple = () => {
  const [isFocus, setIsFocus] = useState('home');
  const [onMobile, setMobile] = useState(false);
  const [explored, setExplored] = useState(0);
  const sections = ['home', 'fun', 'work'];

  //set active className on navbar buttons
  const handleClick = (e) => {
    const buttons = document.querySelectorAll('#navbar button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    e.target.classList.add('active');

    const activeSection = document.querySelector('.content > div.active');

    //Initiate outbound transition
    activeSection.classList.remove('active');

    //Transition lasts 200ms, then dismount component
    setTimeout(() => {
      setIsFocus('');
    }, 200);

    //Mount new component and initiate inbound transition
    setTimeout(() => {
      setIsFocus(e.target.innerText.toLowerCase());
      const sections = document.querySelectorAll('.content > div');
      sections.forEach((section) => {
        section.classList.remove('active');
        if (section.id === e.target.innerText.toLowerCase()) {
          section.classList.add('active');
        }
      });
    }, 200);

    if (explored >= 0) {
      const funbar = document.querySelector('#navbar .nav-fun');
      if (!funbar.classList.contains('explored') && !onMobile)
        funbar.classList.add('explored');
    } else {
      setExplored(explored + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const home = document.querySelector('#home');
      const navbar = document.querySelector('#navbar');
      home.classList.add('active');
      navbar.classList.add('active');
    }, 500);
  }, []);

  useEffect(() => {
    window.screen.width < window.screen.height
      ? setMobile(true)
      : setMobile(false);
  }, []);

  return (
    <div className="main">
      <div id="navbar">
        {sections.map((section, i) => {
          return (
            <div id={`content-${section}`} className="buttonContainer" key={i}>
              <button className={`nav-${section}`} onClick={handleClick}>
                {section}
              </button>
            </div>
          );
        })}
      </div>
      <div className="content">
        {isFocus === 'home' ? (
          <div id="home">
            <h1>Hello</h1>
            <p>Thanks for visiting my website.</p>
            <p>
              I am Tim Ferrari - professionally a software engineer with a
              passion for creating beautiful, intuitive, and useful web
              applications.
            </p>
            <p>
              And otherwise an artist, musician, elaborate worm, and aspiring
              polymath.
            </p>
            <p>
              Currently, I am a Developer at{' '}
              <a target="_blank" href="https://www.criticalmass.com/">
                Critical Mass
              </a>
              , and developing independently on a fullstack application for a
              local startup. I am always looking for new opportunities to build.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <line className="top" x1="0" y1="0" x2="100%" y2="0"></line>
              <line className="left" x1="0" y1="0" x2="0" y2="100%"></line>
              <line
                className="bottom"
                x1="0"
                y1="100%"
                x2="100%"
                y2="100%"
              ></line>
              <line
                className="right"
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
              ></line>
            </svg>
          </div>
        ) : (
          <></>
        )}
        {isFocus === 'fun' ? (
          <div id="fun">
            <h1>Hmm...</h1>
            <p>Seeing as you're on a non-mobile device...</p>
            <p>Perhaps you'd like to see the other version of the site?</p>
            <p>It's graphically demanding!</p>
            <div className="buttonContainer">
              <button>
                <a href="/fun">Fun Time</a>
              </button>
            </div>
          </div>
        ) : (
          <> </>
        )}
        {isFocus === 'work' ? (
          <div id="work">
            <h1>Selected Works</h1>
            <p>
              <a href="http://statesmenpodcast.com">
                Statesmen - a Podcast Portfolio Website
              </a>
            </p>
            <p>
              <a href="http://aether-music.herokuapp.com">
                Aether - a Multiplayer Loop Synthesizer
              </a>
            </p>
            <p>
              <a href="http://space-place.herokuapp.com">
                Space Place - an e-Commerce Website
              </a>
            </p>
            <p>
              <a href="http://tygko.herokuapp.com">
                TYGKO - a Musician Portfolio Website
              </a>
            </p>
            <div className="buttonContainer">
              <button>
                <a href="http://www.github.com/yunggarlic">
                  Check out my GitHub
                </a>
              </button>
            </div>
          </div>
        ) : (
          <> </>
        )}
      </div>
      {onMobile ? <></> : <Cursor />}
    </div>
  );
};

export default Simple;
