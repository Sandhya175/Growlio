// src/pages/ReportBank.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axisLogo from '../assets/bank_logos/axis.png';
import barodaLogo from '../assets/bank_logos/baroda.png';
import indiaLogo from '../assets/bank_logos/india.png';
import maharashtraLogo from '../assets/bank_logos/maharashtra.png';
import canaraLogo from '../assets/bank_logos/canara.png';

const banks = [
  { name: "Axis Bank", logo: axisLogo },
  { name: "Bank of Baroda", logo: barodaLogo },
  { name: "Bank of India", logo: indiaLogo },
  { name: "Bank of Maharashtra", logo: maharashtraLogo },
  { name: "Canara Bank", logo: canaraLogo },
];

function ReportBank() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBack = () => {
    navigate(-1);
  };

  const handleBankClick = (bankName) => {
    if (bankName === "Axis Bank") {
      navigate("/axis-bank-dashboard");
    } else {
      alert(`Page for ${bankName} is not available yet.`);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex justify-center items-start p-10">
          <div className="w-full max-w-2xl">
            <div className="flex items-center mb-8">
              <button onClick={handleBack} className="mr-4 hover:text-gray-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-3xl font-bold">Select your Bank</h1>
            </div>

            {/* Search Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-md bg-[#334155] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Bank List */}
            <div className="bg-[#1e293b] rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col gap-4">
                {filteredBanks.map((bank, index) => (
                  <div
                    key={index}
                    onClick={() => handleBankClick(bank.name)}
                    className="flex items-center gap-4 p-5 rounded-lg bg-[#334155] hover:bg-[#475569] cursor-pointer transition"
                  >
                    <img src={bank.logo} alt={bank.name} className="w-10 h-10 object-contain" />
                    <span className="text-lg font-semibold">{bank.name}</span>
                  </div>
                ))}

                {filteredBanks.length === 0 && (
                  <p className="text-center text-gray-400 mt-4">No banks found.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportBank;
