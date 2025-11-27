import React from 'react'
import assets from '../assets/assets';


function Home() {
  return (
    <div>
        <nav className=''>

        </nav>
      <section>
        <video src= {assets.video} className='h-[100vh] w-full object-cover' autoPlay loop muted playsInline />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className='absolute top-0 left-0 px-10 py-6'>
            <div className='absolute'>
                <h1 className='text-white text-4xl'>Welcome</h1>
            </div>
            <div></div>
        </div>
      </section>
    </div>
  )
}

export default Home;