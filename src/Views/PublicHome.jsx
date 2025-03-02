import React from 'react'
import Header from '../Components/Header.jsx'
import Hero from '../Components/Hero.jsx'
import AboutUs from '../Components/AboutUs.jsx'
import MainMessage from '../Components/MainMessage.jsx'
import SecondMessage from '../Components/SecondMessage.jsx'
import ImageGrid from '../Components/Gallery.jsx'
import Services from '../Components/Services.jsx'
import ThirdMessage from '../Components/ThirdMessage.jsx'
import Testimonies from '../Components/Testimonies.jsx'
import Methodology from '../Components/Methodology.jsx'
import Faq from '../Components/Faq.jsx'
import Footer from '../Components/Footer.jsx'
import ContactForm from '../Components/ContactForm.jsx'

export default function PublicHome() {
  return (
    <div className='min-h-screen flex flex-col'>              
      <Header />
      <main className='flex-grow'>
        <Hero />
        <MainMessage />
        <ImageGrid />
        <SecondMessage />
        <Services />
        <ThirdMessage />
        <Testimonies />
        <Methodology />
        <ContactForm />
        <Faq />
        
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  )
}