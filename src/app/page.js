import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'

export default function Home() {
  return (
    <main className=" min-h-screen">
      
      <Navbar />
    <HeroSection />
    
    <div className='border-t-2'>

    </div>
     <Services />
    </main>
  )
}
