import React from 'react' 
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import {navLinks}  from "../utils/request";
import {useRouter}  from "next/router"; 
const { useState } = React;
 



function Nav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (   
   <div>
    <Button
    className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group button-hidden mt-4"
    onClick={() => setIsOpen(!isOpen)}
  >
    <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
    
  </Button>
  <div className={`${isOpen ? 'max-h-full' : 'h-0'} over-flow-hidden`} >


<ul>
  {navLinks.map((link,index) => {
          return (
           
              <Link href={link.path}>
                <li key={index} className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto block-lo'>
                <a
              className={`cursor-pointer ${router.pathname === link.path ? 'text-blue-500  my-4':'hover:bg-gray-900 hover:text-blue-500'}`} >
              {link.name}
              </a></li>
              </Link> 
          );
        })}

</ul>




   </div> 
    </div> 
  )
} 

export default Nav 