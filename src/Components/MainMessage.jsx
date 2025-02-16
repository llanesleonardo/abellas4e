
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"

export default function MainMessage() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='relative'>
      <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center py-10">
          <p className='font-bold text-3xl mt-5'>{t('About Us')}</p>
          <h1 className="text-8xl font-bold mb-0">{t('Lorem ipsum dolor sit amet,consectetuer adipiscing')}</h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
      </div>
    </div>
  )
}