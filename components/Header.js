import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const myLoader = ({ src, width, quality }) => {
  return `https://tailwindui.com/img/logos/${src}?w=${width}&q=${quality || 75}`
} 
function Header() {

  return (
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
  </h2>
  )
}

export default Header 