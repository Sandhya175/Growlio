// src/pages/ChoosePropertyAction.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ChoosePropertyAction = () => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState("null");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelect = (action) => {
    setSelectedAction(action);
    if (action === "sale") {
      navigate("/add-property-sale"); 
    } else if (action === "rental") {
      navigate("/add-rental-property"); 
    } else if (action === "purchase") {
      navigate("/add-property-purchase"); 
    }
  };
  

  const buttonStyle = (action) =>
    `px-6 py-5 rounded-xl text-lg font-semibold text-center transition text-white bg-[#1B2735] hover:bg-[#253142] ${
      selectedAction === action
        ? "border-l-4 border-[#F9A24B] text-[#F9A24B]"
        : ""
    }`;

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
     <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
  {/* Topbar */}
  <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">

  <div className="flex items-center gap-4">
    <p className="text-white text-lg">Welcome Bankim Doshi!</p>
    <img
      src="https://i.pravatar.cc/60?img=1"
      className="w-12 h-12 rounded-full border-2 border-white"
      alt="Profile"
    />
  </div>
</div>


        {/* Page Content */}
        <div className="flex-1 p-10">
          {/* Back Button & Title */}
          <div className="flex items-center mb-10">
          <button
  onClick={handleBack}
  className="w-10 h-10 mr-4 flex items-center justify-center bg-[#1e293b] rounded-lg hover:bg-[#334155] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>
<h1 className="text-2xl font-bold">Choose Property Action</h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-6 max-w-xl w-full">
           <button
              onClick={() => handleSelect("purchase")}
              className={buttonStyle("purchase")}
            >
              New Property Purchase
            </button>

            <button
              onClick={() => handleSelect("rental")}
              className={buttonStyle("rental")}
            >
              New Rental Agreement Details
            </button>
             <button
              onClick={() => handleSelect("sale")}
              className={buttonStyle("sale")}
            >
              New Property Sale
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePropertyAction;