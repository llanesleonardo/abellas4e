
import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "./Logo.jsx"


export default function Markets() {


      const { t, i18n } = useTranslation(undefined, { useSuspense: false });
      const { langCode } = useContext(SystemContext);
  
  const handleCLick = ()=> {
      // Replace 'https://example.com/agendar' with your actual scheduling link
      window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='relative bg-[white] pb-[100px]'>
       <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto text-center md:text-left pb-[50px]">
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0">{t('Servicios empresariales para:')}</h1>
        </div>
      </div>
      <div className="container mx-auto  flex justify-center items-center flex-wrap gap-[100px] py-10">
          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>
              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Funerarias</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p></div>
          </div>

          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Asilos</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p></div>
          </div>



          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Medios digitales</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p>
                </div>



          </div>


          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Escuelas</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p>
                </div>


                
          </div>
      </div>
      <div className="container mx-auto  flex justify-center items-center flex-wrap gap-[100px] py-10">
          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>
              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Casa de retiro</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p></div>
          </div>

          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Comunidades</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p></div>
          </div>



          <div className="w-[150px] md:w-[250px] flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Gobierno</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p>
                </div>



          </div>


          <div className="w-[150px] md:w-[250px]flex-col justify-center items-center">
          <div ><div className='w-[50px] h-[50px] bg-[#111019] border-[#9598e9] border-[3px] rounded-full'></div></div>

              <div><h1 className='text-[#111019] font-bold text-3xl py-5'>Radio</h1></div>
              <div><p className='text-[#111019] text-justify'>
                </p>
                </div>


                
          </div>
      </div>
    </div>
  )
}