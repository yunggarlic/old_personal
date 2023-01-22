import React, { useState, useEffect } from 'react';
import '../styles/simple.less';
import Cursor from './SimpleComponents/Cursor';

const Simple = () => {
  const [isFocus, setIsFocus] = useState('home');
  const sections = ['home', 'about', 'work'];

  //set active class on navbar buttons
  const handleClick = (e) => {
    const buttons = document.querySelectorAll('#navbar button');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    e.target.classList.add('active');

    const activeSection = document.querySelector('.content > div.active');
    activeSection.classList.remove('active');
    setTimeout(() => {
      setIsFocus('');
    }, 200);
    setTimeout(() => {
      setIsFocus(e.target.innerText.toLowerCase());
      const sections = document.querySelectorAll('.content > div');
      sections.forEach((section) => {
        section.classList.remove('active');
        console.log(section.id);
        if (section.id === e.target.innerText.toLowerCase()) {
          section.classList.add('active');
        }
      });
    }, 200);
  };

  useEffect(() => {
    setTimeout(() => {
      const home = document.querySelector('#home');
      home.classList.add('active');
    }, 200);
  }, []);

  return (
    <div className="main">
      <div id="navbar">
        {sections.map((section) => {
          return (
            <div className="buttonContainer">
              <button onClick={handleClick}>{section}</button>
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
              I am Tim Ferrari. I am a software engineer, artist, musician,
              elaborate worm, and aspiring polymath with a passion for creating
              beautiful, intuitive, and useful web applications. I have
              experience across a wide range of technologies and languages.
            </p>
            <p>
              Currently, I am a Developer at{' '}
              <a target="_blank" href="https://www.criticalmass.com/">
                Critical Mass
              </a>
              , and developing independently on a fullstack application for a
              local startup. I am always looking for new opportunities to learn,
              build, and have a laugh.
            </p>
          </div>
        ) : (
          <></>
        )}
        {isFocus === 'about' ? <div id="about"></div> : <> </>}
        {isFocus === 'work' ? (
          <div id="work">
            <h2>Selected Works</h2>
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
      <Cursor />
    </div>
  );
};

export default Simple;
