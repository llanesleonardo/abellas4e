import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"

export default function Services() {
  
        const { t, i18n } = useTranslation(undefined, { useSuspense: false });
        const { langCode } = useContext(SystemContext);
      
  return (
    <div id='services' className='bg-white pb-10'>
       <section className="py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={'https://placehold.co/600x200'}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight">
          {t('Acompaniamiento tanatologico')}
          </h2>
          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
                    {t('FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.')}
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          {t('The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.')}
          </p>
          
        </div>
      </div>
    </section>
    <section className="w-full py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className="space-y-6">
                <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight">     
                       {t('Acompaniamiento por duelo ante sucidio')}
          </h2>
          
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
            src={'https://placehold.co/600x200'}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>


      </div>
    </section>
    <section className="hidden md:block md:w-full bg-white dark:bg-white ">
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Image Column */}
        <div className="flex-1 bg-[#9598e9] rounded-md">
          <h2 className="py-[50px] px-[45px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[white] dark:#008239 leading-tight">
          {t('Lorem ipsum dolor sit amet consectetuer')}
          </h2>          
        </div>

        {/* Text Column */}
        <div className=" flex-2 ">
          <h2 className="py-[50px] px-[30px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[black] dark:#008239 leading-tight">
          {t('Lorem ipsum dolor sit amet consectetuer')}
          </h2>          
        </div>
      </div>
    </section>
    <section className="hidden  md:block md:w-full bg-white dark:bg-white">
      <div className="container mx-auto px-4 flex justify-center items-center">
        {/* Image Column */}
        <div className="flex-1 bg-[white] rounded-md">
          <p className="py-[20px] px-[10px] text-[black] dark:#008239 leading-tight">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
vulputate velit esse molestie consequat, vel illum
dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>          
        </div>

        {/* Text Column */}
        <div className=" flex-2 ">
          <img 
            src={'https://placehold.co/960x300'}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>         
      </div>
    </section>
    <section className="py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="order-1 md:order-first">
          <img 
            src={'https://placehold.co/600x200'}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight">
          {t('Grupos de apoyo en el duelo por muerte normal')}
          </h2>
          
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
                    {t('FL Arizona Pro Landscaping LLC is a landscaping company serving the Tucson, Arizona area, offering a comprehensive range of services for both commercial and residential clients. Their service offerings include: Yard Maintenance, Pavers Installation, Grass and Artificial Grass Services, Irrigation System Installation and Repairs, Planting and Pruning, Palm and Tree Services, Gravel Work.')}
          </p>
          <p className="lg:text-base xl:text-xl text-black dark:text-black mb-6 text-justify">
          {t('The company provides flexible service options, including one-time, weekly, and monthly service packages. Customers can contact them directly at 520-289-7508 or via email at arizonaprolandcaping@gmail.com. They emphasize affordable pricing and offer free estimates to potential clients in the Tucson metropolitan area.')}
          </p>
          
        </div>
      </div>
    </section>
    <section className="w-full py-16 bg-white dark:bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className="space-y-6">
                <h2 className="md:text-2xl lg:text-2xl xl:text-3xl font-bold text-[#9598e9] dark:#008239 leading-tight">     
                       {t('Grupo de perdida por suicidio')}
          </h2>
          
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
            src={'https://placehold.co/600x200'}
            alt="Section Description" 
            className="mx-auto lg:w-3/4 xl:w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </div>


      </div>
    </section>
    </div>
  )
}