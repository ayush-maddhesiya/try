import React, { useState, useEffect } from 'react';
import styles from "@/components/Navbar.module.css";
import Link from 'next/link';
import { VscListSelection, VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import Contact from './Contact';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <span style={{ fontSize: '1.4rem' }}><i>Abhyudaya</i></span>
        <span style={{ color: '#9d00ff' }}>E</span>lite
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {showMenu ? <VscClose size={25} /> : <RxHamburgerMenu size={25} />}
      </div>
      <div className={`${styles.menu} ${showMenu ? styles.showMenu : ''}`}>
        <div className={styles.closeIcon} onClick={toggleMenu}>
          <VscClose size={25} />
        </div>
        <ul>
          <li><Link href='/'>HOME</Link></li>
          <li><Link href='/about'>ABOUT</Link></li>
          <li><Link href='teams'>TEAM</Link></li>
          <li><Link href='/events'>EVENTS</Link></li>
          <li><Link href='/projects'>PROJECTS</Link></li>
          <li><Link href='/blog'>BLOG</Link></li>
        </ul>
      </div>
      <div className={styles.contact} onClick={() => setShowContact(true)}>
        <VscListSelection size={25} />
      </div>
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </div>
  );
}

export default Navbar;