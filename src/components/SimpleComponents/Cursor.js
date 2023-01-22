import React, { useEffect, useRef, useState } from 'react';

export default function Cursor(props) {
  const cursor = useRef();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [scrollTop, setScrollTop] = useState(0);

  const detectElementCollisionWithTarget = (target, element) => {
    const targetRect = target.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const isColliding = !(
      targetRect.right < elementRect.left ||
      targetRect.left > elementRect.right ||
      targetRect.bottom < elementRect.top ||
      targetRect.top > elementRect.bottom
    );

    return { isColliding, target };
  };

  const detectElementCollisionWithColliders = (colliders, element) => {
    const collisions = colliders
      .map((collider) => detectElementCollisionWithTarget(collider, element))
      .filter((collision) => collision.isColliding);

    colliders.forEach((collider) => collider.classList.remove('hovered'));
    collisions.forEach((collision) => {
      collision.target.classList.add('hovered');
    });

    return collisions.length > 0;
  };

  const attachCircleToMouse = (circle) => {
    const { x, y } = coordinates;
    const { offsetWidth, offsetHeight } = circle;

    const top = y - offsetHeight / 2;
    const left = x - offsetWidth / 2;
    circle.style.top = `${clamp(top, 0, document.body.clientHeight - 60)}px`;
    circle.style.left = `${left}px`;
  };

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const handleMouse = (e) => {
    setCoordinates({ x: e.pageX, y: e.pageY });
    const hovered = document.querySelector('.hovered');

    // cursor.current.style.display = 'block';
    attachCircleToMouse(cursor.current, hovered);

    const colliders = Array.from(
      document.querySelectorAll('.active button, .active a, #navbar button')
    );
    const collisions = detectElementCollisionWithColliders(
      colliders,
      cursor.current
    );

    if (collisions) {
      cursor.current.classList.add('hovered');
    } else {
      cursor.current.classList.remove('hovered');
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouse);
    return () => {
      document.removeEventListener('mousemove', handleMouse);
    };
  }, [coordinates, scrollTop]);

  return (
    <div ref={cursor} id="cursor" className="text-rainbow">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="cursor-overlay"
          fill="white"
          cx="50"
          cy="50"
          r="50"
        />
      </svg>
    </div>
  );
}
