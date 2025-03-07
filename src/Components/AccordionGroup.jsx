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
      <Accordion title="Cuanto cuesta el servicio?">$250 dolares el primer mes y despues
      $110 por sesion. </Accordion>
      <Accordion title="Section 2">Content for section 2.</Accordion>
      <Accordion title="Section 3">Content for section 3.</Accordion>
    </div>
  );
};

export default AccordionGroup;
