
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "./Logo.jsx"


export default function SecondMessage() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='relative bg-[#111019] py-[100px]'>
      <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center pb-[50px] md:pb-[100px]">
          <h1 className="text-[#9598e9] mb-0 font-bold  text-3xl md:text-3xl  ">{t('Los valores que fundamentan esta empresa son:')}</h1>
        </div>
      </div>
      <div className="container mx-auto  flex justify-center items-center flex-wrap gap-[100px]">
          <div className="w-[250px] flex-col justify-center items-center">
              <div ><div className='w-[50px] h-[50px] bg-[#9598e9] rounded-full'></div></div>
              <div><h1 className='text-white font-bold text-3xl py-5'>HONESTIDAD</h1></div>
              <div><p className='text-white text-justify'>
                </p></div>
          </div>

          <div className="w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#9598e9] rounded-full'></div></div>

              <div><h1 className='text-white font-bold text-3xl py-5'>RESPETO</h1></div>
              <div><p className='text-white text-justify'>
                </p></div>
          </div>



          <div className="w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#9598e9] rounded-full'></div></div>

              <div><h1 className='text-white font-bold text-3xl py-5'>RESILENCIA</h1></div>
              <div><p className='text-white text-justify'>
                </p>
                </div>



          </div>


          <div className="w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#9598e9] rounded-full'></div></div>

              <div><h1 className='text-white font-bold text-3xl py-5'>CONFIDENCIALIDAD</h1></div>
              <div><p className='text-white text-justify'>
                </p>
                </div>


                
          </div>

          <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[#9598e9] mb-0 font-bold  text-3xl md:text-3xl  ">{t('y mucha pasion por lo que hacemos.')}</h1>
        </div>
      </div>
      </div>
    </div>
  )
}