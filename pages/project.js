import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav' 
import Intro from '../components/Intro' 
import Image from 'next/image'
import profilePic from '../public/logo.svg'
import Project from '../components/Project';  

function project() {
  return (
    <div > 
      <Header/> 
      <Project/>
    </div>
  )

}

export default project