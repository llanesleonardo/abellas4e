import React from "react";
import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SystemContext } from "../Contexts/SystemContext.jsx";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import Header from "../Components/Events/Header.jsx";
import Footer from "../Components/Events/Footer.jsx";
import Hero from "../Components/Events/Hero.jsx";

import ana from "../assets/about/f7.jpeg";
import dip1 from "../assets/certifications/dip1.pdf";
import dip2 from "../assets/certifications/dip2.pdf";
import dip3 from "../assets/certifications/dip3.pdf";
import dip4 from "../assets/certifications/dip4.pdf";
import dip5 from "../assets/certifications/dip5.pdf";
import dip6 from "../assets/certifications/dip6.pdf";
import dip7 from "../assets/certifications/dip7.pdf";
import dip8 from "../assets/certifications/dip8.pdf";
import dip9 from "../assets/certifications/dip9.pdf";
import dip10 from "../assets/certifications/dip10.pdf";
import dip11 from "../assets/certifications/dip11.jpeg";
import dip12 from "../assets/certifications/dip12.pdf";
import dip13 from "../assets/certifications/dip13.pdf";
import butterfly from "../assets/Photos/butterfly.png";

import exp1 from "../assets/about/exp1.png";
import exp2 from "../assets/about/exp2.png";
import exp3 from "../assets/about/exp3.png";
import exp4 from "../assets/about/exp4.png";
import exp5 from "../assets/about/exp5.png";
import exp6 from "../assets/about/exp6.png";

import dip71 from "../assets/certifications/dip71.png";

const items = [
  {
    id: 1,
    pdfs: [
      { id: 1, imageUrl: dip1, title: "Mujer Latina de Lourdes García", height: 200 },
      { id: 2, imageUrl: dip2, title: "Suicidología para profesionales de atención primaria", height: 200 },
      { id: 3, imageUrl: dip3, title: "Intervención en Violencia Doméstica", height: 200 },
      { id: 4, imageUrl: dip4, title: "Prevención de la Autolesión y el Suicidio", height: 200 },
      { id: 5, imageUrl: dip5, title: "Clase Magistral de Tracking", height: 200 },
      { id: 6, imageUrl: dip6, title: "Diploma en Suicidología", height: 200 },
    ],
  },
  {
    id: 2,
    pdfs: [
      { id: 7, imageUrl: dip8, title: "Coaching con Programación Neurolingüística", height: 200 },
      { id: 8, imageUrl: dip9, title: "Diplomado en Tanatología XXXIV Generación", height: 200 },
      { id: 9, imageUrl: dip10, title: "Registro en el Hospital Psiquiátrico Dr. Samuel Ramírez Moreno", height: 200 },
      { id: 10, imageUrl: dip11, title: "Liderazgo Disruptivo y Coach de Vida", height: 200 },
      { id: 11, imageUrl: dip12, title: "Diplomado Internacional en Coaching", height: 200 },
      { id: 12, imageUrl: dip13, title: "Life Coaching con Programación Neurolingüística y Neurovibráticas", height: 200 },
    ],
  },
];


const ResumePage = () => {
  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
  const { langCode } = useContext(SystemContext);

  const handleCLick = () => {
    // Replace 'https://example.com/agendar' with your actual scheduling link
    window.open("https://wa.me/15202897508", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-20">
          <section className="rounded-xl flex flex-row items-start justify-evenly container mx-auto bg-[#111019] mt-10 py-10">
            <div
              id="profile-img"
              className="flex flex-col items-center justify-center mt-10 grow-0 w-[50%]"
            >
              <img
                className="shadow-sm w-[300px] rounded-lg object-cover"
                src={ana}
                alt="Profile"
              />
              <h1 className="text-[#9598e9] text-2xl font-bold mb-0 mt-5 md:text-2xl ">
                {t("Ana María Borrayo")}
              </h1>
            </div>
            <div
              id="profile-main-info" className="flex flex-col items-start justify-center mt-10 grow-0 w-[50%] mr-10">
              <h2 className="text-[#9598e9] text-4xl font-bold mb-5 md:text-4xl ">
                {t("Contact Information")}
              </h2>
              <p className="text-white">Email: anabellasforever@gmail.com</p>
              <p className="text-white">Phone: +1 (520) 273-3455</p>

              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="text-white hover:text-[#4267B2]"
                    size={28}
                  />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-white hover:text-[#E1306C]"
                    size={28}
                  />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="text-white hover:text-[#0077B5]"
                    size={28}
                  />
                </a>
                <a
                  href="https://wa.me/15202733455"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp
                    className="text-white hover:text-[#25D366]"
                    size={28}
                  />
                </a>
              </div>
              <p className="text-white text-justify mt-5 text-xl">
                Ana Maria Borrayo es una destacada tanatologa, suicidologa y
                coach de vida con mas de una década de experiencia en la
                prevención de suicidios y el acompañamiento a familias con hijos
                en riesgo de suicidio.
              </p>
              <p className="text-white text-justify mt-5 text-xl">
                Su labor se centra en ayudar a madres que enfrentan la angustia
                de tener hijos en riego, promoviendo la comunicación asertiva,
                el respeto, el amor para fortalecer los lazos familiares y
                prevenir los suicidios.
              </p>
               <p className="text-white text-justify mt-5 text-xl">
              Fundadora de el servicio anabella’sforever LLC. 
</p>
            </div>
          </section>
          <section className="container mx-auto mt-10 px-4 text-2xl text-justify">
            <p className="mt-5"> Ana Maria Borrayo ha desarrollado un espacio de apoyo para aquellos que buscan recuperar su estabilidad emocional tras pérdidas significativas.</p>

            <p className="mt-5">Su propia experiencia personal, tras la trágica muerte por suicidio de su hija mayor Anabella en el 2012, le ha otorgado una perspectiva única que la impulsa a transformar su dolor en su misión de vida.</p>

         <p className="mt-5">A través de su formación continua y diversas certificaciones, ha impactado positivamente a cientos de personas, ayudándoles a resignificar su sufrimiento y encontrar un nuevo propósito de vida.</p>

           <p className="mt-5">Además, su labor se extiende a su emprendimiento donde ha brindado asistencia y recursos a quienes navegan por el duelo.</p>

           <p className="mt-5">Ana Maria Borrayo no solo ofrece esperanzas a quienes han perdido a un ser querido por suicidio, sino que también deja un legado de amor y apoyo que invita a otros a empezar de nuevo y contribuir al bienestar de la comunidad, comenzando por nuestras propias familias.</p>

         <p className="mt-5">Su experiencia y compasión son testimonios de que, incluso en los momentos más oscuros, es posible renacer y encontrar un camino hacia la sanación emocional y mental.</p>

          </section>
            <div
              id="profile-experience"
              className="flex flex-col items-center justify-center mt-10 container mx-auto"
            >
              <h2 className="text-[#000] text-4xl font-bold mb-5 mt-5 md:text-4xl ">
                {t("Experience")}
              </h2>
              {/* 3x3 Image Grid */}

<div className="grid grid-cols-3 gap-4 w-full mt-6">
  <div className="flex flex-col items-center justify-center">
    <img src={exp1} alt="Experience 1" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 1</p>
  </div>
  <div className="flex flex-col items-center justify-center">
    <img src={exp2} alt="Experience 2" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 2</p>
  </div>
  <div className="flex flex-col items-center justify-center">
    <img src={exp3} alt="Experience 3" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 3</p>
  </div>
  <div className="flex flex-col items-center justify-center">
    <img src={exp4} alt="Experience 4" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 4</p>
  </div>
  <div className="flex flex-col items-center justify-center">
    <img src={exp5} alt="Experience 5" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 5</p>
  </div>
  <div className="flex flex-col items-center justify-center">
    <img src={exp6} alt="Experience 6" className="w-[400px] h-[400px] object-cover rounded mx-auto" />
    <p className="mt-2 text-center">Legend 6</p>
  </div>
</div>

             
            </div>

          <div
            id="profile-education"
            className="flex flex-col items-center justify-center mt-10 container mx-auto"
          >
            <div className="bg-[#111019] px-6 py-4 rounded-lg shadow-md">
            <h2 className="text-[#9598e9] text-center text-4xl font-bold mb-5 mt-5 md:text-4xl px-40">
              Necesitas abrir tu enfoque, un camino, acompañamiento para salir de lo que no te gusta, e ir por una nueva vida con armonía y paz?
            </h2>
        
                 <h2 className="text-[#9598e9] text-center text-4xl font-bold mb-5 mt-5 md:text-4xl px-40">
              
Será un gusto servirte 🥰
            </h2>
        </div>

          </div>
          <div
            id="profile-img"
            className="flex flex-col items-center justify-center mt-20 "
          >
            <img
              src={butterfly}
              alt="Section Description"
              className="mx-auto  w-[50px] h-auto rounded-lg object-cover"
            />
          </div>

                    <div className="container mx-auto  flex items-center justify-center py-5">
            <button
              onClick={handleCLick}
              className=" bg-[#9598e9] hover:bg-[#9598e9] text-black text-xl  my-5 px-6 py-4 font-bold md:text-xl lg:text-xl xl:text-2xl md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full"
            >
              {t("Mándame mensaje!")}
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-10 ">
            <h2 className="text-[#9598e9] text-4xl font-bold mb-0 mt-5 md:text-4xl ">
              {t("Diplomas y Certificaciones")}
            </h2>
          </div>
          <div
            id="profile-certifications-links"
            className="flex flex-row items-start justify-center gap-20 my-20 "
          >
            <div>
              <ul className="list-disc">
                {items[0].pdfs.map((item) => (
                  <li key={item.id} className="flex items-center space-x-2">
                    <img
                      src="https://anabellasforever.com/assets/butterfly-CW0IF5bs.png"
                      alt=""
                      className="w-5 h-5 object-cover rounded-full"
                    />
                    <a
                      href={item.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9598e9] text-2xl hover:text-blue-500 underline"
                    >
                      {item.title || `Certification ${item.id}`}
                    </a>
                  </li>
                ))}
              </ul>

                              <ul className="list-disc">
                  {items[1].pdfs.map((item) => (
                    <li key={item.id} className="flex items-center space-x-2">
                      <img
                        src="https://anabellasforever.com/assets/butterfly-CW0IF5bs.png"
                        alt=""
                        className="w-5 h-5 object-cover rounded-full"
                      />

                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9598e9] text-2xl underline hover:text-blue-500"
                      >
                        {item.title || `Certification ${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>

            </div>
          </div>


        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ResumePage;
