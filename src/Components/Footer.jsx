import React from "react";
import logoblack from "../assets/gallery/logoblack.png";
import { FaPhone, FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative bg-[#111019] py-[50px]">
      <div className="container mx-auto flex items-start justify-center relative">
        <div className="container px-4 text-left pb-[10px]">
          <img
            src={logoblack}
            alt="Logo"
            className="w-[300px] h-[200px] object-contain mx-auto"
          />
        </div>
        <div className="container text-2xl px-4 text-left pb-[10px] text-white font-bold">
          <h2 className="text-white text-2xl font-bold underline ">Site Menu</h2>
          <ul className="pl-3">
            <li>Services</li>
            <li>About Us</li>
            <li>Testimonies</li>
            <li>Methodology</li>
            
          </ul>
        </div>
        <div className="container text-2xl px-4 text-left pb-[10px]  text-white font-bold">
        <h2 className="text-white text-2xl font-bold underline ">Privacy Menu</h2>
        <ul className="pl-3">
            <li></li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li></li>
          </ul>
        </div>
        <div className="container mx-auto px-4 text-left pb-[50px]">
          <div className="flex items-center justify-start gap-3">
            <div>
              <FaPhone className="text-[black] p-2 text-5xl font-bold bg-[#9598e9] rounded-full" />
            </div>
            <div className="flex-col items-center justify-center">
              <h1 className="text-[white] text-4xl font-bold">Contact Us</h1>
              <h1 className="text-[white] text-4xl font-bold">(501)-456-7789</h1>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
                  <FaFacebook className="text-[black] mt-5 p-2 text-5xl font-bold bg-[#9598e9] rounded-full" />
                  <FaInstagram className="text-[black] mt-5 p-2 text-5xl font-bold bg-[#9598e9] rounded-full" />              
                  <FaYoutube className="text-[black] mt-5 p-2 text-5xl font-bold bg-[#9598e9] rounded-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center flex-wrap gap-[100px]">
            <p className="text-white font-bold"> Copyright 2025 | All rights reserved
            </p>
      </div>
    </div>
  );
}
