import React from 'react'
import Nav from '../components/Nav' 
import Intro from '../components/Intro' 

import Link from 'next/link'
import Image from 'next/image'

import Lottie from 'react-lottie-player'
import logo from '../public/logoanima.json';

const myLoader = ({ src, width, quality }) => {
  return `https://tailwindui.com/img/logos/${src}?w=${width}&q=${quality || 75}`
} 
 
function Header() {  
  return ( 
    <div className='flex flex-grow justify-evenly border-grey-100 dark:border-grey-700'>
      <div className='flex'>
      <Lottie
      loop
      animationData={logo}
      play
      className='mt-8 mr-2'
      style={{ width: 50, height: 50 }}
    /> 
    <h4 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
    <Link href="/">
      <a className=""> MaruoneLabs</a>
    </Link>.   
    </h4>  
  </div>
  <Nav/>
  <Intro/> 
  </div>
  )
}

export default Header 