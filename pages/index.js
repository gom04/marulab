import Head from 'next/head'
import Header from '../components/Header'
import { HomeIcon , LightningBoltIcon
} from '@heroicons/react/outline'
import HeaderItem from '../components/HeaderItem'
import Nav from '../components/Nav'
export default function Home() {
  return ( 
    <div className='flex flex-grow justify-evenly '> 
    {/*
  <HeaderItem title='HOME' Icon={HomeIcon} />
  <HeaderItem title='PROJECT' Icon={LightningBoltIcon} />
 header 
<Header/>*/}
<Header/>
<Nav/>
  {/*footer */}
    </div>
    
  )
}