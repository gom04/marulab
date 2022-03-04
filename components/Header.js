import React from 'react'
import Nav from '../components/Nav' 
import Intro from '../components/Intro' 
 
import Link from 'next/link' 
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'
import { useState } from "react";

import Image from 'next/image' 
import Lottie from 'react-lottie-player'
import logo from '../public/logoanima.json'; 

const myLoader = ({ src, width, quality }) => {
  return `https://tailwindui.com/img/logos/${src}?w=${width}&q=${quality || 75}`
} 
 
function Header() {  
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
  return ( 
    <header className={styles2.header}>
    <nav className={styles.navbar}>
        <Link href='/'>
         <a className={styles.navlogo}>
         <Lottie
      loop
      animationData={logo}
      play
      className='mt-6 mr-2'
      style={{ width: 50, height: 50 }}
    /> 
    <h4 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
    <Link href="/">
      <a className=""> MaruoneLabs</a>
    </Link>.   
    </h4>  

         </a>
        </Link> 
    <ul className={isOpen === false ? 
            styles.navmenu : styles.navmenu +' '+ styles.active}>
        <li className={styles.navitem}>
           <Link href='/project'>
             <a className={isOpen === false ? 
                        styles.navlink : styles.navlink+' '+styles.active}
                        onClick={openMenu}>Project</a>
            </Link>
        </li>
        <li className={styles.navitem}>
            <Link href='/aboutus'>
              <a className={isOpen === false ? 
                        styles.navlink : styles.navlink+' '+styles.active}
                        onClick={openMenu}>About</a>
            </Link>
        </li>
        <li className={styles.navitem}>
            <Link href='/roadmap'>
             <a className={isOpen === false ? 
                        styles.navlink : styles.navlink+' '+styles.active}
                        onClick={openMenu}>Roadmap</a>
            </Link>
        </li> <Intro/>
    </ul>
    <button className={isOpen === false ? 
                        styles.hamburger : styles.hamburger+' '+styles.active}
                        onClick={openMenu}
                        >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
    </button>
   

    </nav>
</header>
  )
}

export default Header 