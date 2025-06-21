import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../../Contexts/SystemContext.jsx"
import Logo from "../../Components/Logo.jsx"
import MobileMenu from './MobileMenu'
import { FaWhatsapp,FaPhone, FaFacebook, FaInstagram, FaYoutube,  FaMapMarker,FaEnvelope } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  
          const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);
      
  const handleClick = () => {
    window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  
  const menuItems = [
    { icon: <FaPhone className="text-[black] p-2 text-3xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />, title: t('Call Us'), content: '+1 (520) 289-7508' },
    { icon: <FaMapMarker className="text-[black] p-2 text-3xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />, title: t('Visit Us'), content: 'Tucson area , AZ.' },
    { icon:  <FaEnvelope className="text-[black] p-2 text-3xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />, title: t('Contact Us'), content: 'anabellasforever@gmail.com' },
  ];

  const navItems = [
    { href: "/", text: t('Inicio') },
    { href: "/about-me", text: t('Sobre Ana Maria') },
    { href: "/apoyo-duelo", text: t('Apoyo a Duelo') },
  ];
//    { icon: instagram, href: '#' },
//{ icon: facebook, href: '#' }
  const socialIcons = [
    { icon: <FaWhatsapp className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />, href: 'https://wa.me/15202897508' },
    { icon:<FaFacebook className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />,href: 'https://wa.me/15202897508' },
      { icon: <FaInstagram className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />  ,href: 'https://wa.me/15202897508' },            
        { icon:<FaYoutube className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />,href: 'https://wa.me/15202897508' },
  ];

  return (
    <div className='bg-[#e0e0fb] md:fixed w-[100%] md:w-full z-[99999]'>
      
      <header className='w-full'>
        <div className='top-bar flex items-center justify-between px-4  diagonal-split'>
        </div>
        <div className="container mx-auto  lg:pb-0 xl:pb-0">      
          <div className='flex items-center justify-around'>
          <div className=' md:hidden lg:block xl:block lg:w-[300px] xl:w-[540px] diagonal-split-gray py-3'>
          <Logo className="hidden md:block lg:block xl:block" width={60} height={84}/>
</div>   
            <div className='flex-grow'>
          
              <nav className='lg:px-4 xl:px-4 lg:pt-1 xl:pt-3 hidden lg:block'>
                <ul className='flex items-center justify-end font-bold'>
                  {navItems.map((item, index) => (
                    <li key={index} className='px-6 py-0 text-base'><Link to={item.href} className="text-black underline">{item.text}<FontAwesomeIcon icon={faExternalLinkAlt}  className='ml-5 text-[10px]'/></Link></li>
                  ))}
                </ul>
              </nav>
              <MobileMenu  
                menuItems={menuItems}
                navItems={navItems}
                socialIcons={socialIcons}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}