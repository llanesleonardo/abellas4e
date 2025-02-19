import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import Logo from "../Components/Logo.jsx"
import MobileMenu from './MobileMenu'

export default function Header() {
  
          const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);
      
  const handleClick = () => {
    window.open('https://wa.me/15202897508', '_blank', 'noopener,noreferrer');
  }
  
  const menuItems = [
    { icon: null, title: t('Call Us'), content: '+1 (520) 289-7508' },
    { icon: null, title: t('Visit Us'), content: 'Tucson area , AZ.' },
    { icon: null, title: t('Contact Us'), content: 'arizonaprolandcaping@gmail.com' },
  ];

  const navItems = [
    { href: "#inicio", text: t('Home') },
    { href: "#nosotros", text: t('About Us') },
    { href: "#servicios", text: t('Services') },
    { href: "#testimonies", text: t('Testimonies') },
    { href: "#methodologies", text: t('Methodology') },
    { href: "#faq", text: t('FAQ') },
    { href: "#contact", text: t('Contact')},
  ];
//    { icon: instagram, href: '#' },
//{ icon: facebook, href: '#' }
  const socialIcons = [
    { icon: null, href: 'https://wa.me/15202897508' },
  ];

  return (
    <div className='bg-[#e0e0fb] fixed w-full z-[99999]'>
      
      <header className='w-full'>
        <div className='top-bar flex items-center justify-between px-4  diagonal-split'>
        </div>
        <div className="container mx-auto  lg:pb-0 xl:pb-0">      
          <div className='flex items-center justify-around'>
          <div className=' md:hidden lg:block xl:block lg:w-[300px] xl:w-[540px] diagonal-split-gray py-3'>
          <Logo width={60} height={84}/>
</div>   
            <div className='flex-grow'>
          
              <nav className='lg:px-4 xl:px-4 lg:pt-1 xl:pt-3 hidden lg:block'>
                <ul className='flex items-center justify-end font-bold'>
                  {navItems.map((item, index) => (
                    <li key={index} className='px-6 py-0 text-base'><a href={item.href}>{item.text}</a></li>
                  ))}
                </ul>
              </nav>
              <MobileMenu 
                logoSrc={null} 
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