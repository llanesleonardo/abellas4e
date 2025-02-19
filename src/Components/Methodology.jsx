
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
    <div className='relative bg-[white] py-[100px]'>
      <div className="lex items-center justify-center relative pb-5">
        <div className="container mx-auto px-4 text-left pb-[100px]">
          <h1 className="text-[#9598e9] text-8xl font-bold mb-0">{t('Methodology')}</h1>
        </div>
      </div>
      <div className=" container mx-auto flex justify-end items-start flex-wrap gap-[100px] max-w-[1500px]">
          <div className="flex-1 flex-col justify-center items-center">
              <div >

                <h1 className='text-6xl font-bold mb-10'>Lorem ipsum dolor
                sit amet consectetuer</h1>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
                <h3 className='flex-3 text-[#9598e9] text-3xl'>Phase 1</h3>
                <p className='flex-1'>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet
dolore magna aliquam erat volutpat”</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-3 text-[#9598e9] text-3xl'>Phase 1</h3>
                <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet
dolore magna aliquam erat volutpat”</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-3 text-[#9598e9] text-3xl'>Phase 1</h3>
                <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet
dolore magna aliquam erat volutpat”</p>
            </div>
            <hr/>
            <div className='flex justify-around items-center gap-20 py-10'>
            <h3 className='flex-3 text-[#9598e9] text-3xl'>Phase 1</h3>
                <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
sed diam nonummy nibh euismod tincidunt ut laoreet
dolore magna aliquam erat volutpat”</p>
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