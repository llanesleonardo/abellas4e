
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"

export default function MainMessage() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
      const handleCLick = ()=> {
        // Replace 'https://example.com/agendar' with your actual scheduling link
        window.open('https://wa.me/15202733455', '_blank', 'noopener,noreferrer');
    }

  return (
    <div className='relative bg-[#111019] py-10'>
      <div className=" flex items-center justify-center relative pb-10">
        <div className="container mx-auto px-4 text-center ">
          <h1 className="text-[white] text-4xl md:text-6xl font-bold mb-0">{t('Cambia tu vida para siempre!')}</h1>
        </div>
      </div>
      <div className=" container mx-auto text-[white] text-center ">
          <p>      
          </p>
        </div>
      <div className=' container mx-auto flex items-center justify-center pt-2'>
            <button onClick={handleCLick} className="bg-[#9598e9] hover:bg-[#9598e9] text-black text-xl  px-6 py-4 my-3 font-bold md:text-xl lg:text-xl xl:text-2xl md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full">
            {t('Agenda ahora!')}
            </button>
            </div>
    </div>
  )
}