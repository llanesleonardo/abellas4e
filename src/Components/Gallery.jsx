import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import g1 from '../assets/gallery/fl1.jpg'
import g2 from '../assets/gallery/fl2.jpg'
import g3 from '../assets/gallery/fl3.jpg'
import g4 from '../assets/gallery/fl4.jpg'
import g5 from '../assets/gallery/fl5.jpg'
import g6 from '../assets/gallery/fl7.jpg'

const GridItem = ({  images }) => (
  
  <div>

        {images.map((item) => (
            <div key={item.id}
            className="relative rounded-lg overflow-hidden my-2"
            style={{ height: item.height, backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute bg-black bg-opacity-10 flex items-center justify-center rounded-none">
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            </div>
        </div>
       ))}
  
  </div>

);

export default function ImageGrid() {

          const { t, i18n } = useTranslation(undefined, { useSuspense: false });
          const { langCode } = useContext(SystemContext);

  const items = [
    { id: 1, 
        images:[
            {id:1,imageUrl: 'https://placehold.co/600x200', title: '', height: 200},
            {id:2, imageUrl: 'https://placehold.co/600x400', title: '', height: 400}
        ],
    },
    { id: 2, 
        images:[
            {id:1,imageUrl: 'https://placehold.co/600x400', title: '', height: 400},
            {id:2, imageUrl: 'https://placehold.co/600x200', title: '', height: 200}
        ],
    },
    { id: 3, 
        images:[
            {id:1,imageUrl: 'https://placehold.co/600x200', title: '', height: 200},
            {id:2, imageUrl: 'https://placehold.co/600x400', title: '', height: 400}
        ],
    }
  ];

  return (
    <div id='galeria' className=" px-8 py-16">
      <div className="container mx-auto">    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <GridItem key={item.id} images={item.images}/>
        ))}
      </div>
      </div>
      <div className='container mx-auto  flex items-center justify-center pt-5'>
            <button className="bg-[#9598e9] hover:bg-[#9598e9] text-black md:text-xl lg:text-xl xl:text-2xl my-3 font-bold md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full">
            {t('Book Now!')}
            </button>
            </div>
    </div>
  );
}