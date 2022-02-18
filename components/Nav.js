import React from 'react' 
import Link from 'next/link'
import Button from "react-bootstrap/Button";
import { navLinks } from "../utils/request";

function Nav() {
  return (  
<nav className='flex space-x-8   tracking-tight md:tracking-tighter leading-tight  mt-8'>
  {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}</nav>


        
  )
} 

export default Nav 