import { useState, useContext, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { SystemContext } from "../Contexts/SystemContext.jsx"
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

const ContactForm = () => {
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
      if (!subject.trim()) validationErrors.subject = "El Titulo de requerido.";
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
          "MMERGE8": subject,
          "MMERGE7": messageText,
          "MMERGE6": 'CONTACTFORM'
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
      setSubject('');
      setMessageText('');
      
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
      <div id="reviews1" className="bg-[#111019] py-10 flex justify-center items-center">
        <div className="text-center">
          <Spinner color="#9598e9" size={50} speed={1} />
          <p className="mt-4 text-gray-600">{statusMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-[#111019] py-10">
    <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
            {t('Mándame un mensaje')}
       </h1> 
    <form className="max-w-2xl mx-auto p-6 " onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
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

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={t('Título')}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder={t('Comentarios')}
        className="w-full px-4 py-2 border rounded-md h-32 mb-4"
        required
      />
      {errors.messageText && <span className="error">{errors.messageText}</span>}

      <div className="mb-4">
        <small className='text-white'>* Su información es recibida y usada con total confidencialidad. </small>
        {/* ReCAPTCHA component */}
      </div>

      <button 
        type="submit" 
        className="w-full bg-white text-[#111019] py-3 rounded-lg hover:bg-custom-green transition duration-300 text-lg font-semibold"
      >
        {t('ENVIAR')}
      </button>

      {status === "error" && <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{__html: message}} />}
      {errors.server && <span className="error">{errors.server}</span>}
      {status === "success" && <div className="mt-4 text-green-500">{t('La información fue enviada de manera exitosa!')}</div>}
    </form>
    </div>
  );
};

export default ContactForm;


/*import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && phoneNumber && subject && messageText && email.includes('@')) {
      onValidated({
        EMAIL: email,
        FNAME: fullName,
        LNAME:'',
        PHONE: phoneNumber,
        MMERGE8: subject,
        MMERGE7: messageText
      });
    }
  };

  return (
    <form  className="max-w-2xl mx-auto p-6 bg-white ">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      
      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded-md h-32 mb-4"
        required
      />
      
      <button 
        type="submit" 
        onClick={handleSubmit}
        className="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-custom-green transition duration-300 text-lg font-semibold"
      >
        ENVIAR
      </button>

      {status === "sending" && <div className="mt-4 text-blue-500">Sending...</div>}
      {status === "error" && <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{__html: message}}/>}
      {status === "success" && <div className="mt-4 text-green-500">Successfully Subscribed!</div>}
    </form>
  );
};

export default function ContactForm() {
  const postUrl = `https://us8.api.mailchimp.com/3.0/lists/2c74c630eb/members`;

  return (
    <div id='contact' className='bg-white py-14'>
          <div className="  ">
             <h2 className="text-[#1058a5] text-4xl md:text-5xl font-bold text-center mb-12">{'Contactanos'}</h2>
        </div>
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={
            formData => {
            subscribe(formData)
          }
          }
        />
      )}
    />
    </div>
  );
}
*/

