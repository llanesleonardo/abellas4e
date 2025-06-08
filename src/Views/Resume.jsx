import React from "react";
import Header from '../Components/Events/Header.jsx'
import Footer from '../Components/Events/Footer.jsx'
import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SystemContext } from "../Contexts/SystemContext.jsx";
import ana from "../assets/about/f7.jpeg"
import dip1 from "../assets/certifications/dip1.pdf"
import dip2 from "../assets/certifications/dip2.pdf"
import dip3 from "../assets/certifications/dip3.pdf"
import dip4 from "../assets/certifications/dip4.pdf"
import dip5 from "../assets/certifications/dip5.pdf"
import dip6 from "../assets/certifications/dip6.pdf"
import dip7 from "../assets/certifications/dip7.pdf"
import dip8 from "../assets/certifications/dip8.pdf"
import dip9 from "../assets/certifications/dip9.pdf"
import dip10 from "../assets/certifications/dip10.pdf"
import dip11 from "../assets/certifications/dip11.jpeg"
import dip12 from "../assets/certifications/dip12.pdf"
import dip13 from "../assets/certifications/dip13.pdf"
import butterfly from "../assets/Photos/butterfly.png"


  const items = [
    { id: 1, 
        pdfs:[
            {id:1,imageUrl: dip1, title: '', height: 200},
            {id:2, imageUrl: dip2, title: '', height: 200},
            {id:3, imageUrl: dip3, title: '', height: 200},
            {id:4, imageUrl: dip4, title: '', height: 200},
            {id:5, imageUrl: dip5, title: '', height: 200},
            {id:6, imageUrl: dip6, title: '', height: 200},
            {id:7, imageUrl: dip7, title: '', height: 200}
        ],
    },
    { id: 2, 
        pdfs:[
            {id:8,imageUrl: dip8, title: '', height: 200},
            {id:9, imageUrl: dip9, title: '', height: 200},
            {id:10, imageUrl: dip10, title: '', height: 200},
            {id:11, imageUrl: dip11, title: '', height: 200},
            {id:12, imageUrl: dip12, title: '', height: 200},
            {id:13, imageUrl: dip13, title: '', height: 200},
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
          <div
            id="profile-img"
            className="flex flex-col items-center justify-center mt-10 "
          >
            <img
              className="shadow-sm w-[100px] rounded-lg object-cover"
              src={ana}
              alt="Profile"
            />
            <h1 className="text-[#9598e9] text-4xl font-bold mb-0 mt-5 md:text-4xl ">
              {t("Ana María Borrayo")}
            </h1>
          </div>
          <div
            id="profile-main-info"
            className="flex flex-col items-center justify-center mt-10 "
          >
            <h2 className="text-[#9598e9] text-4xl font-bold mt-5 mb-5 md:text-4xl ">
              {t("Contact Information")}
            </h2>
            <p>Email: anabellasforever@gmail.com</p>
            <p>Phone: +1 (520) 273-3455</p>
          </div>
          <div
            id="profile-experience"
            className="flex flex-col items-center justify-center mt-10 "
          >
            <h2 className="text-[#9598e9] text-4xl font-bold mb-5 mt-5 md:text-4xl ">
              {t("Experience")}
            </h2>
            <p>Experience description</p>
            <ul className="list-disc">
              <li>Job Title at Company (Year - Year)</li>
              <li>Job Title at Company (Year - Year)</li>
            </ul>
          </div>
          <div
            id="profile-education"
            className="flex flex-col items-center justify-center mt-10 "
          >
            <h2 className="text-[#9598e9] text-4xl font-bold mb-5 mt-5 md:text-4xl ">
              {t("Education")}
            </h2>
            <p>Education description</p>
          </div>
          <div
            id="profile-gallery-certifications"
            className="flex flex-col items-center justify-center mt-10 "
          >
            <h2 className="text-[#9598e9] text-4xl font-bold mb-5 mt-5 md:text-4xl ">
              {t("Gallery")}{" "}
            </h2>
            <div className="flex flex-wrap justify-center">
              <img
                className="m-2 w-32 h-32 object-cover"
                src="https://via.placeholder.com/150"
                alt="Gallery Image 1"
              />
              <img
                className="m-2 w-32 h-32 object-cover"
                src="https://via.placeholder.com/150"
                alt="Gallery Image 2"
              />
              <img
                className="m-2 w-32 h-32 object-cover"
                src="https://via.placeholder.com/150"
                alt="Gallery Image 3"
              />
            </div>
          </div>
          <div
            id="profile-img"
            className="flex flex-col items-center justify-center  "
          >
                    <img 
                      src={butterfly}
                      alt="Section Description" 
                      className="mx-auto  w-[50px] h-auto rounded-lg object-cover"
                    />
          </div>
          <div className="flex flex-row items-center justify-center mt-10 ">
          <h2 className="text-[#9598e9] text-4xl font-bold mb-0 mt-5 md:text-4xl ">
                    {t("Certifications")}
                </h2>
          </div>
          <div id="profile-certifications-links" className="flex flex-row items-start justify-evenly mt-10 ">
            <div>
                <ul className="list-disc">
                  {items[0].pdfs.map((item) => (
                    <li key={item.id} className="flex items-center space-x-2">
                                          <img src="https://anabellasforever.com/assets/butterfly-CW0IF5bs.png" alt="" className="w-5 h-5 object-cover rounded-full" />
                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9598e9] hover:text-blue-500 underline"

                      >
                        {item.title || `Certification ${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
            <div>
            <div>
                <ul className="list-disc">
                  {items[1].pdfs.map((item) => (
                    <li key={item.id}className="flex items-center space-x-2">
                    <img src="https://anabellasforever.com/assets/butterfly-CW0IF5bs.png" alt="" className="w-5 h-5 object-cover rounded-full" />

                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9598e9] hover:text-blue-500 underline"
                      >
                        {item.title || `Certification ${item.id}`}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
          </div>

          <div className="container mx-auto  flex items-center justify-center py-5">
            <button
              onClick={handleCLick}
              className=" bg-[#9598e9] hover:bg-[#9598e9] text-black text-xl  my-5 px-6 py-4 font-bold md:text-xl lg:text-xl xl:text-2xl md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-5 xl:px-6 rounded-full"
            >
              {t("Mándame mensaje!")}
            </button>
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
