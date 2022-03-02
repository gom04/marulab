import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav' 
import Intro from '../components/Intro' 

function aboutus() {
  return (
    <div className='flex flex-grow justify-evenly '>
      <Header/>
    <Nav/>
    <Intro/></div>
  )
}

export default aboutus