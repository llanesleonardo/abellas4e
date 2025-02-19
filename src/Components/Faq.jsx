
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "./Logo.jsx"
import AccordionGroup from './AccordionGroup.jsx';


export default function Faq() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
      const handleCLick = ()=> {
        // Replace 'https://example.com/agendar' with your actual scheduling link
        window.open('https://wa.me/15202733455', '_blank', 'noopener,noreferrer');
    }

  return (
    <div id='faq' className='relative bg-[#9598e9] py-[100px]'>
      <div className=" flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-left">
        </div>
      </div>
      <div className="container mx-auto flex justify-left items-center flex-wrap gap-[100px] ">
          <div className="flex-1 flex-col justify-left items-left">
          <p className='font-bold'>{t('Frequently asked questions')}</p>
          <h1 className="text-[black] text-8xl font-bold mb-0">{t('FAQs')}</h1>
          <div className='flex items-center justify-start'>
            <button onClick={handleCLick} className="bg-[black] hover:bg-[black] text-white md:text-xl lg:text-xl xl:text-2xl my-3 font-bold md:py-4 md:px-6 lg:py-3 lg:px-6 xl:py-3 xl:px-6 rounded-full">
            {t('Book Now!')}
            </button>
            </div>
          </div>

          <div className="flex-1 lex-col justify-center items-center">
            <AccordionGroup/>
          </div>

          
      </div>
    </div>
  )
}