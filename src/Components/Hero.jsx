import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import HeroImage from "../assets/Photos/landing-anabellas forever-04.png"
export default function Hero() {
  
        const { t, i18n } = useTranslation(undefined, { useSuspense: false });
        const { langCode } = useContext(SystemContext);


        const handleCLick = ()=> {
            // Replace 'https://example.com/agendar' with your actual scheduling link
            window.open('https://wa.me/15202733455', '_blank', 'noopener,noreferrer');
        }


       return (
    <div id='home' className='relative overflow-hidden'>
      <section className="bg-[transparent] mt-[120px]">
      <div  className='bg-white h-[400px] w-[350px] md:w-full md:h-[600px] mx-auto container' style={{backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'50px'}}>
        <div className=" flex items-start justify-center md:items-start md:justify-end h-full md:px-8">
           <div className=" ">
            <div className=' flex items-center justify-center flex-wrap md:items-center md:justify-center'>
            <h1 className=" bg-[#9598e9]  bg-opacity-35 text-center text-[3rem]  font-bold text-black leading-[4rem] md:text-left md:text-[3rem] md:leading-[4rem] my-5 px-5 py-3 rounded-[50px]">
                        {t('Un camino de reconstrucción y esperanza')}
                        </h1>
            </div>
            <div className='hidden md:flex md:items-center  md:justify-end'>
            <button onClick={handleCLick} className="bg-[#9598e9] hover:bg-[#9598e9] text-black text-xl  my-3 font-bold py-4 px-6 md:text-xl lg:text-xl xl:text-2xl md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full">
            {t('Agenda ahora!')}
            </button>
            </div>
           </div>
        </div>
      </div>
    </section>
    <div>
      <img src={''} alt='whitehalfcircle' className='absolute md:bottom-[-100px] xl:bottom-[-250px] lg:bottom-[-43px] right-0 z-0' />
    </div>
    </div>
  )
}