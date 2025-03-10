import React from "react";
import logoblack from "../assets/gallery/logoblack.png";
import { FaPhone, FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative bg-[#111019] py-[50px]">
      <div className="container mx-auto flex items-center justify-center relative flex-wrap md:items-start md:justify-center md:flex-nowrap">
        <div className="container px-4 text-left pb-[10px]">
          <img
            src={logoblack}
            alt="Logo"
            className="w-[300px] h-[150px] object-contain mx-auto md:w-[350px] md:h-[200px]"
          />
        </div>
        <div className="container text-2xl px-6 text-left pb-[40px] text-white font-bold md:pb-[10px] md:px-4">
          <h2 className="text-white text-2xl font-bold underline ">Menu del sitio</h2>
          <ul className="pl-3">
            <li>Servicios</li>
            <li>Nosotros</li>
            <li>Testimonios</li>
            <li>Metodologia</li>
            
          </ul>
        </div>
        <div className="container text-2xl px-6 text-left pb-[40px]  text-white font-bold md:pb-[10px] md:px-4">
        <h2 className="text-white text-2xl font-bold underline ">Menu de privacidad</h2>
        <ul className="pl-3">
            <li></li>
            <li>Politica de privacidad</li>
            <li>Terminos de servicio</li>
        
          </ul>
        </div>
        <div className="container mx-auto px-4 text-left pb-[50px]">
          <div className="flex items-center justify-start gap-3">
            <div>
              <FaPhone className="text-[black] p-2 text-3xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />
            </div>
            <div className="flex-col items-center justify-center">
              <h1 className="text-[white] text-2xl font-bold md:text-3xl">Contactanos</h1>
              <h1 className="text-[white] text-2xl font-bold md:text-3xl">(520)-273-3455</h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
                  <FaFacebook className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />
                  <FaInstagram className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />              
                  <FaYoutube className="text-[black] mt-5 p-2 text-4xl font-bold bg-[#9598e9] rounded-full md:text-5xl" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center flex-wrap gap-[100px]">
            <p className="text-white font-bold"> Copyright 2025 | Todos los derechos reservados
            </p>
      </div>
    </div>
  );
}
