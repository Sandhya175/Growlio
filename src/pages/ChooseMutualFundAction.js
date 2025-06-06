import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { FaUser } from 'react-icons/fa';

function ChooseMutualFundAction() {
  const navigate = useNavigate();
 const username = localStorage.getItem('username');
 
  return (
     <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

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

        {/* Main Content */}
        <div className="p-8 overflow-x-hidden flex flex-col items-start">
          {/* Heading with Back Button */}
          <div className="flex items-center mb-8 gap-2">
          <button
  onClick={() => navigate(-1)}
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
<h1 className="text-2xl font-bold">Choose Mutual Fund Action</h1>
          </div>

          {/* Buttons */}
<div className="flex flex-col space-y-4">
  <button
    onClick={() => navigate("/mutual-fund-form")}
    className="w-96 px-6 py-8 bg-[#1F2A40] text-white rounded-xl text-left text-lg font-semibold
               hover:text-orange-300 hover:border-l-4 hover:border-orange-300 hover:shadow-xl transition"
  >
    New Mutual Fund Investment
  </button>

  <button
    onClick={() => navigate("/mutual-fund-redeem")}
    className="w-96 px-6 py-8 bg-[#1F2A40] text-white rounded-xl text-left text-lg font-semibold
               hover:text-orange-300 hover:border-l-4 hover:border-orange-300 hover:shadow-xl transition"
  >
    New Mutual Fund Redemption
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default ChooseMutualFundAction;
