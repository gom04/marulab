import React from 'react' 
import Image from 'next/image'


function Project() {
  const myLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='flex min-h-screen justify-center items-center '>
        
          <div className='container mx-auto space-y-5 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3'>
                 <div class='cursor-pointer  rounded hover:shadow-2xl transition hover:-translate-y-2 p-5'>
                      <Image
                         loader={myLoader}
                         src="photo-1529480780361-c8cb81eb5735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                         alt="Picture of the author"
                         width={500}
                         height={500}
                          />  
                        </div>
                        <div class='cursor-pointer  rounded hover:shadow-2xl transition hover:-translate-y-2 p-5	'>
                      <Image
                          loader={myLoader}
                          src="photo-1529480780361-c8cb81eb5735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          alt="Picture of the author"
                          width={500}
                          height={500}
                       />  
                        </div>

                        <div class='cursor-pointer rounded hover:shadow-2xl transition hover:-translate-y-2 p-5	'>
                      <Image
                      loader={myLoader}
                      src="photo-1529480780361-c8cb81eb5735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Picture of the author"
                       width={500}
                      height={500}
                        />  
                        </div>


          </div>


     </div>
  )
}

export default Project