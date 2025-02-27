
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
    <div id='method' className=' bg-[white] py-[100px]'>
      <div className=" container mx-auto pb-5">
        <div className=" hidden pb-[25px] md:pb-[50px]  md:text-left md:block">
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0 ">{t('Methodology')}</h1>
        </div>
        <div className=" block pb-[25px] md:pb-[50px] text-center md:text-left md:hidden ">
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0 ">{t('Methodology')}</h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-around md:items-start md:gap-[100px] md:flex-nowrap">
          <div className="md:flex-1 md:flex-col  md:justify-center  md:items-center">
            <div>  
              <div >

                <h1 className='text-3xl text-center font-bold mb-10 md:text-left md:text-4xl'>Como funciona el acompaniamiento?</h1>
            </div>
            <hr/>

            <div className='flex flex-col justify-center items-center py-5 md:flex-row md:justify-around md:items-center md:gap-20 md:py-10'>
            <h3 className='md:flex-1 text-[#9598e9] text-2xl'>1) Evaluacion inicial</h3>
            <p className='pt-4 md:flex-2 md:w-[600px] font-bold'>El proceso comienza con una evaluación inicial para comprender la situación
                específica de la persona en duelo, sus necesidades y sus objetivos.</p>
            </div>
            <hr/>
            <div className='flex flex-col justify-center items-center py-5 md:flex-row md:justify-around md:items-center md:gap-20 md:py-10'>           
               <h3 className='flex-1 text-[#9598e9] text-2xl'>2) Coaching</h3>
            <p className='pt-4 md:flex-2 md:w-[600px] font-bold'>Las sesiones de coaching tanatológico son espacios de conversación y reflexión donde
                la persona en duelo puede explorar sus emociones, pensamientos y experiencias.</p>
            </div>
            <hr/>
            <div className='flex flex-col justify-center items-center py-5 md:flex-row md:justify-around md:items-center md:gap-20 md:py-10'>               
               <h3 className='md:flex-1 text-[#9598e9] text-2xl'>3) Herramientas y tecnicas</h3>
                <p className='pt-4 md:flex-2 md:w-[600px] font-bold'>El coach tanatológico utiliza preguntas poderosas y técnicas específicas para facilitar
                la introspección y el autoconocimiento.</p>
            </div>
            <hr/>
            <div className='flex flex-col justify-center items-center py-5 md:flex-row md:justify-around md:items-center md:gap-20 md:py-10'>           
               <h3 className='md:flex-1 text-[#9598e9] text-2xl'>4) Seguimiento y evaluacion</h3>
            <p className='pt-4 md:flex-2 md:w-[600px] font-bold'>El proceso incluye un seguimiento continuo para evaluar el proceso y ajustar el plan
            de acompañamiento según sea necesario.</p>
            </div>
          </div>
          </div>          <div className="block  flex-col justify-center items-center md:hidden">
              <div className='flex-1'><img className="mx-auto rounded-md my-5 w-[350px]" src={'https://placehold.co/350x250'} /></div>
          </div>
          <div className="md:flex hidden md:flex-1 md:flex-col md:justify-end md:items-center md:block md:pl-6">
              <div className='flex-1'><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
              <div className='flex-1' ><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
              <div className='flex-1'><img className="rounded-md my-5" src={'https://placehold.co/350x250'} /></div>
          </div>

      </div>
    </div>
  )
}