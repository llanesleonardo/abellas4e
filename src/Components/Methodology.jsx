
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "./Logo.jsx"


export default function Methodology() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div id='method' className='relative bg-[white] py-[100px]'>
      <div className="lex items-center justify-center relative pb-5">
        <div className="container mx-auto text-left pb-[50px]">
          <h1 className="text-[#9598e9] text-6xl font-bold mb-0">{t('Methodology')}</h1>
        </div>
      </div>
      <div className=" container mx-auto flex justify-end items-start flex-wrap gap-[100px]">
          <div className="flex-1 flex-col justify-center items-center">
              <div >

                <h1 className='text-4xl font-bold mb-10'>Como funciona el acompaniamiento?</h1>
            </div>
            <hr/>

            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-1 text-[#9598e9] text-2xl'>1) Evaluacion inicial</h3>
            <p className='flex-2 w-[600px] font-bold'>El proceso comienza con una evaluación inicial para comprender la situación
                específica de la persona en duelo, sus necesidades y sus objetivos.</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-1 text-[#9598e9] text-2xl'>2) Coaching</h3>
            <p className='flex-2 w-[600px] font-bold'>Las sesiones de coaching tanatológico son espacios de conversación y reflexión donde
                la persona en duelo puede explorar sus emociones, pensamientos y experiencias.</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
                <h3 className='flex-1 text-[#9598e9] text-2xl'>3) Herramientas y tecnicas</h3>
                <p className='flex-2 w-[600px] font-bold'>El coach tanatológico utiliza preguntas poderosas y técnicas específicas para facilitar
                la introspección y el autoconocimiento.</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-1 text-[#9598e9] text-2xl'>4) Seguimiento y evaluacion</h3>
            <p className='flex-2 w-[600px] font-bold'>El proceso incluye un seguimiento continuo para evaluar el proceso y ajustar el plan
            de acompañamiento según sea necesario.</p>
            </div>
          </div>

          <div className="flex-col justify-center items-center">
              <div className='flex-1'><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
              <div className='flex-1' ><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
              <div className='flex-1'><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
          </div>

          
      </div>
    </div>
  )
}