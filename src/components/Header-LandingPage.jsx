import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row p-2 md:p-10">
      <div className="flex items-center">
        <img src="../assets/PestDoc-AI-Logo.svg" alt="PestDoc-AI" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl font-bold">
          <span className="font-bold">Pest</span>
          <span className="font-normal">Doc</span>
          <span className="font-bold">-AI</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
