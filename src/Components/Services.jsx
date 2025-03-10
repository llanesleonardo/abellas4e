import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import img13 from "../assets/Photos/landing-anabellas forever-13.png"
import butterfly from "../assets/Photos/butterfly.png"
import { FaPhone, FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";

export default function Services() {
  
        const { t, i18n } = useTranslation(undefined, { useSuspense: false });
        const { langCode } = useContext(SystemContext);
      
  return (
    <div id='services' className='bg-white pt-10'>
        <div className=" flex items-center justify-center relative py-5">
        <div className="container mx-auto text-center md:text-left pb-[50px]">
          <h1 className="text-[#9598e9] text-4xl  md:text-6xl font-bold mb-0">{t('Servicios')}</h1>
        </div>
      </div>
       <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={butterfly}
            alt="Section Description" 
            className="mx-auto w-[150px]  h-auto rounded-lg object-cover"
          />
          <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight text-center">
          {t('Acompañamiento por')}
          <br/>
          {t('muerte normal')}
          </h2>
        </div>

        {/* Text Column */}
        <div className="space-y-6">          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
                    {t('FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.')}
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          {t('The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.')}
          </p>
          
        </div>
      </div>
    </section>
    <hr className='container mx-auto bg-[#9598e9] h-[1px]'/>
    <section className="w-full py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className="space-y-6">

          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
                    {t('FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.')}
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          {t('The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.')}
          </p>
          
        </div>
        
        {/* Image Column */}
        <div className="order-1 md:order-last">
          <img 
            src={butterfly}
            alt="Section Description" 
            className="mx-auto  w-[150px] h-auto rounded-lg  object-cover"
          />
                          <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight text-center">     
                       {t('Acompanamiento a sobrevivientes ')}
                       <br/>
                       {t('de un suicidio')}
          </h2>
        </div>


      </div>
    </section>
    <hr className='container mx-auto bg-[#9598e9] h-[1px]'/>
    <section className="py-16 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={butterfly}
            alt="Section Description" 
            className="mx-auto  w-[150px] h-auto rounded-lg object-cover"
          />
                    <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight text-center">
          {t('Acompañamiento por ')}
          <br/>
          {t('pérdidas significativas')}
          </h2>
        </div>

        {/* Text Column */}
        <div className="space-y-6">          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
                    {t('FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.')}
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          {t('The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.')}
          </p>
          
        </div>
      </div>
    </section> 
    
    <section className="hidden md:block md:w-full  ">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Image Column */}
        <div className="bg-[#9598e9] rounded-md ">
          <h2 className="py-[100px]  w-[350px] md:w-[550px] px-[45px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[white] dark:#008239 leading-tight">
          {t('')}
          </h2>          
        </div>

        {/* Text Column */}
        <div className=" flex-2 ">
          <h2 className="py-[50px] px-[30px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[black] dark:#008239 leading-tight">
          {t('Atreveré a vivir mejor.')}
          </h2>          
        </div>
      </div>
    </section>
    
    <section className="hidden  md:block md:w-full pb-28">
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Image Column */}
        <div className="flex-1 bg-[white] rounded-md">
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <FaPhone className="text-[black] p-2 text-3xl font-bold bg-[#9598e9] rounded-full md:text-6xl" />
                    </div>
                    <div className="flex-col items-center justify-center">
                      <h1 className="text-[#9598e9] text-2xl font-bold md:text-4xl">Contactanos</h1>
                      <h1 className="text-[#9598e9] text-2xl font-bold md:text-4xl">(520)-273-3455</h1>
                    </div>
                  </div>        
        </div>

        {/* Text Column */}
        <div className=" flex-2 ">
          <img 
            src={img13}
            alt="Section Description" 
            className="mx-auto lg:w-[150px] xl:w-[960px] h-auto rounded-lg object-cover "
          />
        </div>         
      </div>
    </section>

   
    </div>
  )
}