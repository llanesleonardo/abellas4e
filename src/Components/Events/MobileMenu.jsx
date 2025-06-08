import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../../Contexts/SystemContext.jsx"
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import Logo from "../../Components/Logo.jsx"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const MobileMenu = ({ menuItems, navItems, socialIcons, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center px-4 py-2">
      <a href='/' className='flex justify-center items-center'>
        <Logo className="block md:hidden lg:hidden xl:hidden" width={60} height={84}/>
      </a>
      <button onClick={toggleMenu} className="p-2">
          {isOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
        </button>
      </div>

      {isOpen && (
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
                <Link to={item.href} className="block w-full">{item.text}</Link>
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
      )}
    </div>
  );
};

export default MobileMenu;