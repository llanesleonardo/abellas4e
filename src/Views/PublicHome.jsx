import React from 'react'
import Header from '../Components/Header.jsx'
import Hero from '../Components/Hero.jsx'

export default function PublicHome() {
  return (
    <div className='min-h-screen flex flex-col'>              
      <Header />
      <main className='flex-grow'>
        <Hero />
      </main>
      
    </div>
  )
}