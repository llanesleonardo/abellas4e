import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import Logo from "../Components/Logo.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const MobileMenu = ({ menuItems, navItems,navItems2, socialIcons, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        <Logo className="block md:hidden lg:hidden xl:hidden" width={60} height={84}/>
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
        </button>
      </div>

      {isOpen && (
      <div>
            <nav className='pt-5 lg:px-4 xl:px-4 lg:pt-1 xl:pt-3  lg:hidden xl:hidden'>
                <ul className='flex items-center justify-end font-bold'>
                  {navItems2.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 px-2 py-0 text-base">                     
                    <a target='_blank' href={item.href}>{item.text}
                    <FontAwesomeIcon icon={faExternalLinkAlt}  className='ml-2 text-[10px]'/>
                      </a></li>
                  ))}
                </ul>
              </nav>
      <hr className='bg-[#9598e9] my-1 font-black h-[2px]'></hr>
        <nav className="bg-[#e0e0fb] shadow-md">
          <ul className="flex flex-col items-start p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 flex items-center  w-full">
               <span>{item.icon}</span>
                <div className='pl-2'>
                  <p className="text-xs">{item.title}</p>
                  <p className="text-sm">{item.content}</p>
                </div>
              </li>
            ))}
            <li className="py-2 w-full">
              <button onClick={handleClick} className="bg-[#9598e9] text-black font-bold py-2 px-4 rounded-full w-2/4 md:w-2/4 xl:w-full lg:w-full">
                {t('Book Now!')}
              </button>
            </li>
            {navItems.map((item, index) => (
              <li key={index} className="py-2 w-full">
                <a href={item.href} className="block w-full">{item.text}</a>
              </li>
            ))}
            <li className="py-2 w-full flex justify-center space-x-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} target='_blank'>
                  <span>{social.icon}</span>
                </a>
              ))}
            </li>
          </ul>
        </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;