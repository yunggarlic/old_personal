import React, { useEffect, useRef } from 'react';

export default function Cursor(props) {
  const cursor = useRef();

  const getMousePosition = ({ clientX, clientY }) => {
    return { clientX, clientY };
  };
  
  const getMouse = () => {
    document.addEventListener("mousemove", handleMouse);

    document.querySelectorAll('button, a').forEach((button) => {
        button.addEventListener('mouseenter', () => {
          cursor.current.classList.add('hovered');
        });
        button.addEventListener('mouseout', () => {
            cursor.current.classList.remove('hovered');
        })
    });
  };
  
  const attachCircleToMouse = (circle, { clientX, clientY }) => {
    let top = clientY - circle.clientHeight/2;
    let left = clientX - circle.clientWidth/2;
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
  };
  
  const handleMouse = (e) => {
    const coordinates = getMousePosition(e);
    cursor.current.style.display = "block";
  
    attachCircleToMouse(cursor.current, coordinates);
  };
  
  useEffect(() => {
    getMouse();
  }, [])
  
  return (
    <div ref={cursor} id="cursor" className="text-rainbow" style={{display:'none'}}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle className="cursor-overlay" fill="white" cx="50" cy="50" r="50" />
        </svg>
      </div>
  );
}