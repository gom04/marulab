import { useState , useEffect } from 'react' 
import React from 'react'
import { useTheme } from 'next-themes'
import {SunIcon , MoonIcon } from '@heroicons/react/outline' 

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

  return (
    <div className='justify-between items-center dark:border-gray-700 mt-8'>
      {renderThemeChanger()}
      </div>
  )
}

export default Intro