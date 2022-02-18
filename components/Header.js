import { useState , useEffect } from 'react' 
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {SunIcon , MoonIcon } from '@heroicons/react/outline' 
import { useTheme } from 'next-themes'

const myLoader = ({ src, width, quality }) => {
  return `https://tailwindui.com/img/logos/${src}?w=${width}&q=${quality || 75}`
} 
 
function Header() {
  const {systemThemes, setTheme , themes} = useTheme();
  const [ mounded , setMounded] = useState('false');

  useEffect(() =>  { 
    setMounded(true);
   },[]);

  const renderThemesChanger = () =>{
    if(!mounded) return null;   
    const currenThemes = themes === 'system' ?  systemThemes  : themes ;  
    if(currenThemes === 'dark'){
      return(
        <SunIcon className='w-7 h-7' 
          role="button"
          onClick={() => setTheme('light')} 
          />
          )
    } else { 
      return(
        <MoonIcon className='w-7 h-7'  role="button"   
        onClick={() => 
          setTheme('dark')}/>
          )
 
    }  
  };
 



  return ( 
    <div className=''>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
    <Link href="/">
      <a className="hover:underline">
      <Image
      loader={myLoader}
      src="workflow-mark-indigo-600.svg"
      alt="Picture of the author"
      width={30}
      height={30}
    />  MaruoneLabs</a>
    </Link>
    .   
  </h2>  {renderThemesChanger()}</div>
  )
}

export default Header 