
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
    <div className='relative bg-[white] pt-[100px]'>
      <div className=" flex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-left pb-[100px]">
          <h1 className="text-[#9598e9] text-8xl font-bold mb-0">{t('Testimonies')}</h1>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-[100px]">
          <div className="w-[350px] flex-col justify-center items-center">
              <div ><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>

          <div className="w-[350px] flex-col justify-center items-center">
              <div><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>

          <div className="w-[350px] flex-col justify-center items-center">
              <div><img className="rounded-md" src={'https://placehold.co/350x500'} /></div>
              <div><p className='text-black text-justify'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
nonummy nibh euismod tincidunt
ut laoreet dolore magna aliquam
erat volutpat.
                </p></div>
          </div>
          <div className="w-[350px] flex-col justify-center items-center">
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