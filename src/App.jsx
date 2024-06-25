import React from 'react'
import './App.css'
import Links from './components/Links'
import Navbar from './components/Navbar'
import RightSection from './components/RightSection'
import MainSection from './components/MainSection'

function App() {

  return (
    <>
        <Navbar />
      <div className=' max-w-[1728px] mx-auto'>
        <Links />
        <div className='flex flex-row' >
          <MainSection/>
          <RightSection/>
        </div>
      </div>
    </>
  )
}

export default App
