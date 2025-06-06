import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartBar, FaReceipt, FaTags, FaCoins, FaFileInvoiceDollar } from "react-icons/fa";
import { LineChart } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { FaUser } from 'react-icons/fa';

const tileClass =
  "bg-[#1e293b] hover:bg-[#334155] transition p-6 rounded-lg text-white flex flex-col items-center justify-center text-center cursor-pointer h-40 border-l-4 border-transparent hover:border-orange-400";

const Taxation = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const [username, setUsername] = useState('');
useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
      
  return (
   <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

        {/* Topbar */}
         <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Page Body */}
        <div className="flex-1 flex justify-center items-start p-10">
          <div className="w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center mb-8">
              <button
                onClick={handleBack}
                className="mr-4 hover:text-gray-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-3xl font-bold">Taxation</h1>
            </div>

            {/* Grid of Tiles: 2 per row = 3 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <button
    onClick={() => navigate("/short-term-capital-gain")}
    className={tileClass + " w-full"}
  >
    <FaChartBar className="text-3xl mb-2" />
    Short-Term Capital Gain
  </button>
  <button
    onClick={() => navigate("/record-long-term-capital-gain")}
    className={tileClass + " w-full"}
  >
    <LineChart className="text-3xl mb-2" />
    Long-Term Capital Gain
  </button>
  <button
    onClick={() => navigate("/record-gst")}
    className={tileClass + " w-full"}
  >
    <FaReceipt className="text-3xl mb-2" />
    GST
  </button>
  <button
    onClick={() => navigate("/tds-entry")}
    className={tileClass + " w-full"}
  >
    <FaTags className="text-3xl mb-2" />
    TDS
  </button>
  <button
    onClick={() => navigate("/dividend-form")}
    className={tileClass + " w-full"}
  >
    <FaCoins className="text-3xl mb-2" />
    Dividends
  </button>
  <button
    onClick={() => navigate("/incometax")}
    className={tileClass + " w-full"}
  >
    <FaFileInvoiceDollar className="text-3xl mb-2" />
    Income Tax
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxation;