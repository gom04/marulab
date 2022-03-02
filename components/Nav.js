import React from 'react' 
import Link from 'next/link'
import {navLinks}  from "../utils/request";
import {useRouter}  from "next/router"; 
const { useState } = React;
 



function Nav() { 
  const router = useRouter()
 // const [isOpen, setIsOpen] = useState(false);
 // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (   
   <div>
 
  <div  >


<ul>
  {navLinks.map((link,index) => {
          return (
           
              <Link href={link.path}>
                <li key={index.id_param} className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full 
                     lg:items-center items-start  flex flex-col lg:h-auto block-lo'>
                  <a
              className={`cursor-pointer ${router.pathname === link.path ? 
                'text-blue-500  my-4':'hover:bg-gray-900 hover:text-blue-500'}`} >
              {link.name_param}
                  </a>
                  </li>
              </Link> 
          );
        })}

</ul>




   </div> 
    </div> 
  )
} 

export default Nav 