import { useState , useEffect } from 'react' 
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'
import {SunIcon , MoonIcon } from '@heroicons/react/outline'  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faDiscord , faTwitter} from '@fortawesome/free-brands-svg-icons';

function Intro() { 
 

  const{systemTheme,theme , setTheme} = useTheme()
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() =>  { 
    setIsMounted(true);
   },[]);

  const renderThemeChanger = () => {
    if(!isMounted) return null;
    const currentTheme = theme === 'system' ?  systemTheme  : theme ;  
    if(currentTheme === 'dark'){
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

  return (<div>
    <div className='relative hidden lg:flex md:flex items-center dark:border-gray-700 mt-8 '>
      <div className='ml-4'>
       <Link href="https://twitter.com/" passHref >
        <a target="_blank"><FontAwesomeIcon icon={faDiscord}  /></a></Link>  </div> 
       <div className='ml-4'><Link href="/">
       <a target="_blank">  <FontAwesomeIcon icon={faTwitter} /></a></Link> 
     </div>
     <div className='ml-4'> {renderThemeChanger()} </div>
     </div>
     <div className='sm:flex md:hidden lg:hidden'>lorem10</div>
      </div>
  )
}

export default Intro