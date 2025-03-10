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
        <div className="md:pr-[90px] md:pt-8  flex items-start justify-center md:items-start md:justify-end">
           <div className=" ">
            <div className='flex items-center justify-center flex-wrap md:items-start md:justify-end'>
            <h1 className=" text-center text-[4rem]  font-bold text-black w-[300px] leading-[4rem] md:text-[6rem] md:leading-[5.5rem]">
                        {t('Lorem Ipsum')}
                        </h1>
            </div>
            <div className='hidden md:flex md:items-center md:justify-center md:items-start  md:justify-end'>
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