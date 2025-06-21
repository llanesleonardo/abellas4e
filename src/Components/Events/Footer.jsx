import React from "react";
import logoblack from "../../assets/gallery/logoblack.png";
import { FaPhone, FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";
import dip71 from "../../assets/certifications/dip7.pdf";

export default function Footer() {
  return (
    <div className="relative bg-[#111019] py-[50px]">
      <div className="container mx-auto flex items-center justify-center relative flex-wrap md:items-start md:justify-center md:flex-nowrap">
        <div className="container px-4 text-left pb-[10px]">
          <img
            src={logoblack}
            alt="Logo"
            className="w-[100px]  object-contain mx-auto md:w-[100px]"
          />
        </div>

      </div>
      <div className="mx-auto flex justify-center items-center flex-wrap gap-[100px]">
            <p className="text-white font-bold text-center"> Copyright &copy; 2025 | Todos los derechos reservados
            </p>
      </div>
            <div className="mx-auto flex justify-center items-center flex-wrap gap-[100px] mx-10">
            <p className="text-white font-bold text-center"> <a href={dip71} target="_blank" className="underline">Juramento Etica Profesional Internacional Coach Federation ICF</a>
            </p>
      </div>
    </div>
  );
}
