import React from 'react'
import ContactFormReusablephr from '../Components/Events/ContactFormReusablephr.jsx'
import hijosenriesgo from "../assets/events/hijosriesgo1.jpeg"
import hijosenriesgo2 from "../assets/events/hijosriesgo2.jpeg"
import Header from '../Components/Events/Header.jsx'
import Footer from '../Components/Events/Footer.jsx'

export default function Event_2() {
  return (
    
            <div className='min-h-screen flex flex-col'>              
              <Header />
              <main className='flex-grow'>
        <div className='flex flex-wrap justify-center items-center gap-[20px] h-full  md:flex-wrap md:justify-around md:items-center'>
            <div className='pt-[200px] mx-5 flex flex-col flex-wrap justify-center items-center md:justify-center md:items-center md:min-h-screen md:pt-[80px] md:mb-[50px]'>
                <img src={hijosenriesgo}  className='w-[500px]'/>
            </div>
            <div className='md:min-h-screen'>
                <ContactFormReusablephr />
            </div>
        </div>
              </main>
              <footer>
              <Footer />
              </footer>
    </div>
  )
}
