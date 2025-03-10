
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
    <div className='relative '>
      <div className="bg-[#111019] container mx-auto rounded-[50px] flex-col items-center justify-center relative my-5 pb-5">
        <div className="container mx-auto px-4 text-center py-10">
        <h1 className="text-[#9598e9] text-4xl font-bold mb-0 mt-5 md:text-4xl ">{t('Nuestra Visión')}</h1>
          <p className='text-[#9598e9] font-bold text-2xl mt-5'>{t(`
Es la de convertirnos en un referente en brindar las
herramientas que ayuden a transformar el sufrimiento en resiliencia y la
formación de especialistas en sanación emocional y prevención de
suicidios a través de capacitación.`)}</p>
        </div>  
      </div>
      <div className=" flex-col items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-bold mb-0 mt-5 md:text-4xl ">{t('Nuestra Misión')}</h1>
          <p className='font-bold text-2xl mt-5'>{t(`Ofrecer un acompañamiento especializado a quienes han sufrido la pérdida de un ser querido,
          para que recupere su estabilidad emocional y encuentre un sentido de vida con alegría y amor.`)}</p>
        </div>  
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
      </div>
    </div>
  )
}