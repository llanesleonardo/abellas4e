import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-lg font-semibold transition "
      >
        {title}
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

const AccordionGroup = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 space-y-2">
      <Accordion title="¿Cuánto se cobra por un servicio de acompañamiento?">$250 dólares el primer mes y después
      $110 por sesión. </Accordion>
    </div>
  );
};

export default AccordionGroup;
