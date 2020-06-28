import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReactComponent as SceneSvg } from './assets/images/react 1.svg';
import './App.css';

function App() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const [svgElements] = wrapperRef.current.children;

    const sky = svgElements.getElementById('sky');
    const stones = svgElements.getElementById('stones');
    const ground = svgElements.getElementById('ground');
    const flowers = svgElements.getElementById('flowers');
    const reactLogo = svgElements.getElementById('reactlogo');
    const girl = svgElements.getElementById('girl');

    gsap.set([sky, stones, ground, flowers, reactLogo, girl], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(sky, { x: '+=350' }, { duration: 0.5, x: '-=350', autoAlpha: 1 })
      .fromTo(ground, { y: '+100', scale: 0 }, {
        duration: 0.5, y: '0', scale: 1, autoAlpha: 1,
      })
      .fromTo(stones, { scale: 0 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(flowers, { y: '+=50' }, {
        y: '-=50', duration: 1, scale: 1, autoAlpha: 1,
      })
      .fromTo(reactLogo, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 })
      .fromTo(girl, { y: '-=150' }, { duration: 1, y: '+=150', autoAlpha: 1 });
  });

  return (
    <div ref={wrapperRef} className="App">
      REACT WITH GSAP - PART 1
      <SceneSvg />
    </div>
  );
}

export default App;
