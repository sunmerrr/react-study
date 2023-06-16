/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect, useRef } from 'react';

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect()); // 해당 요소의 크기과 상대적 위치 정보를 가진 DOMRect 객체 제공
    setScrollY(-bodyOffset.top);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
    // memory leaks https://velog.io/@taeung/React-Custom-Hooks%EB%A1%9C-Scroll-Event-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
  }, [scrollY]);

  return {
    scrollY,
    scrollDirection,
  };
}

function VideoZoomInOut() {
  const iframeRef = useRef({ x: 0.5, y: 0.5 });
  const { scrollY, scrollDirection } = useScroll();
  // console.log(scrollY, scrollDirection);

  const handleWheelEvent = (e) => {
    console.log('onWheel: scrolling the list...', e);
  };

  const scale = 1 * scrollY;
  console.log('scale', scale);

  return (
    <div style={{ marginBottom: '400px' }}>
      <h1>Video Zoom In & Out Example</h1>
      <div className="wrap" style={wrap}>
        <iframe
          className="scaled-frame"
          src="/sample_summer.mp4"
          style={canZoomStyle(scrollY, scrollDirection, scale)}
          ref={iframeRef}
          allow="autoplay"
          onWheel={handleWheelEvent}
        ></iframe>
      </div>
    </div>
  );
}

export default VideoZoomInOut;

const wrap = {
  width: '750px',
  height: '1200px',
  padding: '0',
  overflow: 'hidden',
};

let canZoomStyle = ({ scrollY, scrollDirection, scale }) => {
  return {
    width: '100%',
    height: '100%',
    border: '0',

    '-ms-transform': `scale(${scale})`,
    '-moz-transform': `scale(${scale})`,
    '-o-transform': `scale(${scale})`,
    '-webkit-transform': `scale(${scale})`,
    transform: `scale(${scale})`,

    '-ms-transform-origin': '0 0',
    '-moz-transform-origin': '0 0',
    '-o-transform-origin': '0 0',
    '-webkit-transform-origin': '0 0',
    'transform-origin': '0.5 0.5',
  };
};
