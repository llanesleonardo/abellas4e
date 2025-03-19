import { useState, useContext, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../../Contexts/SystemContext.jsx"
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const ContactFormReusable = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // For showing status updates


  const { t, i18n } = useTranslation(undefined, { useSuspense: false });
  const { langCode } = useContext(SystemContext);
  

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    // Validation logic (keep existing)
    if (!fullName.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        fullName: "Nombre es requerido.",
      }));
    }

    setLoading(true); // Start the spinner
    setStatusMessage("Enviando..."); // Initial message


      // Validation
      const validationErrors = {};
      if (!fullName.trim()) validationErrors.fullName = "El Nombre es requerido.";
      if (!email) {
        validationErrors.email = "El Correo electrónico es requerido.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        validationErrors.email = "Formato no es válido.";
      }
      if (!phoneNumber.trim()) validationErrors.phoneNumber = "El telefono es requierido.";
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setLoading(false); // Stop the spinner if there are errors
        return;
      }

    try {
      setLoading(true); // Start the spinner
      const objectValues ={
        "email_address": email,
        "status": "subscribed",
        "merge_fields": {
          "FNAME": fullName,
          "LNAME": "-",
          "PHONE": phoneNumber,
          "MMERGE8": '',
          "MMERGE7": '',
          "MMERGE6": 'GRUPOAPOYODUELO'
        }
      }

      const response = await fetch(
        `https://abellas.azurewebsites.net/api/CreateMember`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-functions-key": process.env.FUNCTION_KEY
          },
          body: JSON.stringify(objectValues),
        }
      );

      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.error || `HTTP error! Status: ${response.status}`);
    
      } 

       // If the API call is successful, proceed with the redirect process
       setTimeout(() => {
        setStatusMessage(
          "Gracias por enviarnos un mensaje. Estaremos en contacto con usted lo mas pronto posible."
        );
    
        // Start redirect after displaying the second message
        setTimeout(() => {
          setLoading(false); // Stop the spinner after redirect
        }, 2000);
      }, 1000); // Initial 1-second delay
      setStatus('success')
      setEmail('');
      setFullName('');
      setPhoneNumber(''); 
      
    } catch (error) {
      setStatus('error');
      setErrors((prevErrors) => ({
        ...prevErrors,
        server: error.message || "Algo salió mal, por favor inténtelo en un momento.",
      }));
      setLoading(false);
    } 
  };

  // If loading, show spinner
  if (loading) {
    return (
      <div id="reviews1" className="bg-[transparent] py-10 flex justify-center items-center h-m-screen">
        <div className="text-center">
          <Spinner color="#9598e9" size={100} speed={1} />
          <p className="mt-4 text-[#9598e9]">{statusMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-[transparent] py-10 flex flex-col flex-wrap justify-center items-center md:justify-center md:items-center md:min-h-screen">
      
    <h1 className="text-[#111019] text-4xl md:text-5xl font-bold text-center mb-12">
            {t('Únete al grupo de apoyo al duelo')}
       </h1> 
    <form className="max-w-2xl mx-auto p-6 " onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={t('Nombre completo')}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('Correo electronico')}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder={t("Teléfono")}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

     
      </div>

    
      {errors.messageText && <span className="error">{errors.messageText}</span>}

      <div className="mb-4">
        <small className='text-[#111019]'>* Su información es recibida y usada con total confidencialidad. </small>
        {/* ReCAPTCHA component */}
      </div>

      <button 
        type="submit" 
        className="w-full text-white bg-[#111019] py-3 rounded-lg hover:bg-custom-green transition duration-300 text-lg font-semibold"
      >
        {t('ENVIAR')}
      </button>

      {status === "error" && <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{__html: message}} />}
      {errors.server && <span className="error">{errors.server}</span>}
      {status === "success" && <div className="mt-4 text-[#9598e9]">{t('La información fue enviada de manera exitosa!')}</div>}
    </form>
    </div>
  );
};

export default ContactFormReusable;
