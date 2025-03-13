import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import img1 from '../assets/Photos/landing-anabellas forever-05.png'
import img2 from '../assets/Photos/landing-anabellas forever-06.png'
import img3 from '../assets/Photos/landing-anabellas forever-07.png'
import img4 from '../assets/Photos/landing-anabellas forever-08.png'
import img5 from '../assets/Photos/landing-anabellas forever-09.png'
import img6 from '../assets/Photos/landing-anabellas forever-10.png'
import Logo from "../assets/gallery/anabellas forever-transparent.png"

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
            {id:1,imageUrl: img1, title: '', height: 200},
            {id:2, imageUrl: img2, title: '', height: 400}
        ],
    },
    { id: 2, 
        images:[
            {id:1,imageUrl: img3, title: '', height: 400},
            {id:2, imageUrl: img4, title: '', height: 200}
        ],
    },
    { id: 3, 
        images:[
            {id:1,imageUrl: img5, title: '', height: 200},
            {id:2, imageUrl: img6, title: '', height: 400}
        ],
    }
  ];


  const handleCLick = ()=> {
    // Replace 'https://example.com/agendar' with your actual scheduling link
    window.open('https://wa.me/15202733455', '_blank', 'noopener,noreferrer');
}


  return (
    <div id='about' className=" ">
      <div className="container mx-auto"> 
      <div className='block bg-white h-[300px] w-[350px]  md:hidden lg:hidden xl:hidden mx-auto' style={{backgroundImage: `url(${'https://placehold.co/1300x600'})`, backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'50px'}}>
            <div className="absolute bg-black bg-opacity-10 flex items-center justify-center rounded-none">
            </div>
        </div>
      <div className="hidden md:grid md:grid-cols-3 gap-4  " >
        {items.map((item) => (
          <GridItem key={item.id} images={item.images}/>
        ))}
      </div>
      </div>
<div className='flex justify-center items-center '>
<img src={Logo} className='w-[200px] bg-[#e0e0fb]'/>
</div>
<div className=''>

<div className='container mx-auto  flex-col items-center justify-center pt-5'>
         <p className='text-black text-center font-bold text-2xl px-5'>
         Si estás atravesando un duelo y te sientes abatido, triste o deprimido
porque perdiste a un ser querido o algún familiar ha sido diagnosticado
con alguna enfermedad terminal, no dudes en buscar ayuda profesional
</p>
            <br />
            <p className='text-black text-center font-bold text-2xl px-5'>
            Evitar el sufrimiento o el dolor emocional no es sano, solo nos vuelve
más vulnerables ante otras pérdidas, generando un mayor malestar
emocional y enfermedades.
                        </p>
     
            </div>
            <div className='container mx-auto  flex items-center justify-center py-5'>
  
  <button onClick={handleCLick} className=" bg-[#9598e9] hover:bg-[#9598e9] text-black text-xl  my-3 px-6 py-4 font-bold md:text-xl lg:text-xl xl:text-2xl md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full">
  {t('Mándame mensaje!')}
  </button>
  </div>
</div>

    </div>
  );
}