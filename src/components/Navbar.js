import React, { useState, useEffect } from 'react';
import '../styles/navbar.less';

export default function Navbar({
  setFocus,
  setFirstTime,
  setWasFocus,
  isFocus,
}) {
  const [loaded, setLoaded] = useState(false);

  const applyFocus = (e) => {
    setWasFocus(isFocus);
    const focus = e.target.innerText.toLowerCase();
    setFocus(focus);
    if (focus !== 'home')
      setTimeout(() => {
        setFirstTime(false);
      }, 1000);

    setTimeout(() => {
      setWasFocus('');
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setFocus('home');
      setLoaded(true);
    }, 2000);

    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    // Must fade in and out on loaded
    <div className={`navbar ${loaded ? 'active' : ''}`}>
      <button onClick={applyFocus} id="home">{`home`}</button>
      <button onClick={applyFocus} id="about">{`about`}</button>
      <button onClick={applyFocus} id="work">{`work`}</button>
      <button onClick={applyFocus} id="bonus">{`bonus`}</button>
    </div>
  );
}
