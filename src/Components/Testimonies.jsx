
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "./Logo.jsx"


export default function Testimonies() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div id='testimonies' className=' relative bg-[white] pt-[100px]'>
      <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto text-center md:text-left pb-[50px]">
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0">{t('Testimonios')}</h1>
        </div>
      </div>
      <div className="container mx-auto flex-col justify-evenly items-center flex-wrap gap-[10px]">
          <div className=" flex-col justify-center items-center">
              <div className='container rounded py-5 px-[50px] my-5 bg-white'>
                <div className='w-[300px] md:w-[650px] mx-auto'>
                <h3 className='text-[#9598e9] font-bold text-2xl text-center pb-5'>SEÑORA MAYOR CON DUELO POR SU HIJO FALLECIDO</h3>
                <p className='text-black text-center font-bold' > Gracias Ana Maria</p>
                <br/>
                <p className='text-black text-justify text-center'>
Usted siempre me da paz.
                </p>
                </div>
                </div>
          </div>
          <hr className='bg-[#9598e9] h-[1px]'/>
          <div className=" flex-col justify-center items-center">
          <div className='container rounded py-5 px-[50px] my-5 bg-white'>
          <div className='w-[300px] md:w-[650px] mx-auto'>
          <h3 className='text-[#9598e9] font-bold text-2xl  text-center pb-5'>MADRE DE JOVENCITA CON INTENTO DE SUICIDIO</h3>
          <p className='text-black text-center font-bold'> Gracias Ana Maria</p>
          <br/>
          <p className='text-black text-justify text-center'>
               Mi hija llegó muy animada después de su sesión,
diciendo lo mucho que le agrada usted, me dijo que se sentía mucho
mejor, que le gusta hablar con usted porque se siente con mucha
confianza y comprendida en su sufrimiento, que siente esperanzas de
mejorar.
                </p>
                </div>
                </div>
          </div>
          <hr className='bg-[#9598e9] h-[1px]'/>
          <div className=" flex-col justify-center items-center">
          <div className='container rounded py-5 px-[50px] my-5 bg-white'>
          <div className='w-[300px] md:w-[650px] mx-auto'>
          <h3 className='text-[#9598e9] font-bold text-2xl  text-center pb-5'>MADRE DE JOVENCITA</h3>
          <p className='text-black text-center font-bold'> Gracias Ana Maria</p>
          <br/>
          <p className='text-black text-justify text-center'>
                 Por la ayuda para mi hija.
Dejó de discutir con su padre, ahora escucha, respeta y opina con
tranquilidad y paciencia. </p>
<br/>
<p className='text-black text-justify text-center'>
Si ese cambio lo dio en un solo mes…Ya imagino todo lo que puede
mejorar con más tiempo con usted. Gracias
                </p>
                </div>
                </div>
          </div>
          <hr className='bg-[#9598e9] h-[1px]'/>
          <div className=" flex-col justify-center items-center">
          <div className='container rounded py-5 px-[50px] mt-5 bg-white'>
          <div className='w-[300px] md:w-[650px] mx-auto'>
          <h3 className='text-[#9598e9] font-bold text-2xl  text-center pb-5'>JOVENCITA AGRADECIDA</h3>
          <p className='text-black text-center font-bold'> Gracias Ana Maria</p>
    
          <br/>
          <p className='text-black text-justify text-center'>
                Por ayudarme a comprender a mis padres sin que
me alteran emocionalmente, tus técnicas de PNL me han encantado,
recupere mi paz, mi paciencia y la comprensión de que todo empieza
por mi.
                </p>
                </div>
                </div>
          </div>
      </div>
    </div>
  )
}