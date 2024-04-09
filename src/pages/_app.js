import "@/styles/globals.css";
import Lenis from '@studio-freight/lenis';
import { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import Cursor from "./Cursor";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const counterDelay = 100;

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsContentLoaded(true);
    };

    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader counterDelay={counterDelay} />}
      <Cursor />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};