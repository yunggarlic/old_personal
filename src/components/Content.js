import React from 'react';
import { About, Home, Work } from './index';
import '../styles/content.less';

export default function Content(props) {
  const { isFocus, onMobile, isFirstTime } = props;
  return (
    <div className="content">
      <Home isFocus={isFocus} onMobile={onMobile} isFirstTime={isFirstTime} />
      <About isFocus={isFocus} onMobile={onMobile} />
      <Work isFocus={isFocus} onMobile={onMobile} />
    </div>
  );
}
