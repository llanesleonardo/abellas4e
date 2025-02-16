import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"

export default function Hero() {
  
        const { t, i18n } = useTranslation(undefined, { useSuspense: false });
        const { langCode } = useContext(SystemContext);


        const handleCLick = ()=> {
            // Replace 'https://example.com/agendar' with your actual scheduling link
            window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
        }


       return (
    <div id='inicio' className='relative overflow-hidden'>
      <section className="bg-[transparent] mt-[120px]">
      <div  className='bg-white container mx-auto h-[600px]' style={{backgroundImage: `url(${'https://placehold.co/1300x600'})`, backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'50px'}}>
        <div className="w-full pr-[90px] pt-8  flex items-start justify-end">
           <div className=" ">
            <div className='flex items-start justify-end flex-wrap '>
            <h1 className="text-[6rem] font-bold text-black w-[300px] leading-[5.5rem]">
                        {t('Lorem Ipsum')}
                        </h1>
            </div>
            <div className='flex items-start justify-end'>
            <button onClick={handleCLick} className="bg-[#9598e9] hover:bg-[#9598e9] text-black md:text-xl lg:text-xl xl:text-2xl my-3 font-bold md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full">
            {t('Book Now!')}
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