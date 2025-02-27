
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
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0">{t('Testimonies')}</h1>
        </div>
      </div>
      <div className="container mx-auto flex justify-evenly items-center flex-wrap gap-[10px]">
          <div className="w-[300px] flex-col justify-center items-center">
              <div ><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>

          <div className="w-[300px] flex-col justify-center items-center">
              <div><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>

          <div className="w-[300px] flex-col justify-center items-center">
              <div><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>
          <div className="w-[300px] flex-col justify-center items-center">
              <div><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>
      </div>
    </div>
  )
}