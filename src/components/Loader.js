import React, { useEffect, useRef } from 'react';
import styles from '@/components/Loader.module.css';
import gsap from 'gsap';

const Loader = ({ isContentLoaded, counterDelay }) => {
  const counterRef = useRef(null);
  const barRefs = useRef([]);
  const overlayRef = useRef(null);
  const timeoutId = useRef(null);

  useEffect(() => {
    function startLoader() {
      let counterelement = counterRef.current;
      let currentvalue = 0;

      function updateCounter() {
        if (currentvalue === 100) {
          return;
        }
        currentvalue += 1;
        counterelement.textContent = currentvalue;

        if (currentvalue < 100) {
          timeoutId.current = setTimeout(updateCounter, counterDelay);
        }
      }

      updateCounter();
    }

    startLoader();

    const timeline = gsap.timeline();

    timeline
      .to(counterRef.current, 0.25, { delay: 3.5, opacity: 0 })
      .to(barRefs.current, {
        height: 0,
        stagger: 0.3,
        ease: 'power4.inOut',
        duration: 1.5,
        delay: 1,
      })
      .to(overlayRef.current, {
        y: '-1000px',
        duration: 1,
        ease: 'power2.inOut',
        delay: 1,
        onComplete: () => {
          console.log('Animation completed');
          if (overlayRef.current) {
            overlayRef.current.remove();
            console.log('Overlay removed');
          } else {
            console.log('Overlay ref is null');
          }
        },
      });

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [counterDelay]);

  const addBarRef = (el) => {
    if (el && !barRefs.current.includes(el)) {
      barRefs.current.push(el);
    }
  };

  return (
    <>
      <h1 className={styles.counter} ref={counterRef}>
        0
      </h1>
      <div className={styles.overlay} ref={overlayRef}>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
        <div className={styles.bar} ref={addBarRef}></div>
      </div>
    </>
  );
};

export default Loader;