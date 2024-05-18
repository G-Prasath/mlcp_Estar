import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-20 right-0 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=1234567890"
        className="block w-8  bg-green-500 rounded-full  items-center justify-center mb-4  shadow-md hover:bg-green-600"
      >
        <img src="/Whatsapp.png" className="w-8" alt="WhatsApp" />
      </a>
      <a
        href="tel:+1234567890"
        className="block w-8 bg-blue-500 rounded-full  items-center justify-center shadow-md hover:bg-blue-600"
      >
        <img src="/telephone.png" className="w-8" alt="Call" />
      </a>
    </div>
  );
};

export default FloatingButtons;
