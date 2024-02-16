import React, { useState } from "react";

const Banner = ({ message, link }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full transition-transform bg-gray-300 text-black ${
        isOpen ? "" : "transform translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-4">
          <p>{message}</p>{" "}
          <a className="text-blue-900" href="https://github.com/rajxsv/DSA-HUB">
            Github
          </a>
        </div>
        <button className="text-black hover:underline" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Banner;
