import React from 'react' 
import { Transition } from '@headlessui/react';
import { Link } from "react-scroll";
import {navLinks}  from "../utils/request";
import {useRouter}  from "next/router"; 
const { useState } = React;
 



function Nav() {   
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
 // const [isOpen, setIsOpen] = useState(false);
 // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (   
   <div className='hidden md:block'>
     <div className='ml-10 flex items-baseline space-x-4 mt-8'>
        <Link activeClass='Project'
         to=''
        smooth={true}
         offset={50}
         duration={500}
        className='cursor-pointer  ' >
        Project 
        </Link> 
        <Link 
        activeClass='About us'
        to=''
        smooth={true}
         offset={50}
         duration={500}
        className='cursor-pointer '
        >
        About us
        </Link> 
        <Link 
        activeClass='Roadmap'
        to=''
        smooth={true}
         offset={50}
         duration={500}
        className='cursor-pointer '
        >
        Roadmap
        </Link> 

     </div>
     <div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
    </div> 
  )
} 

export default Nav 