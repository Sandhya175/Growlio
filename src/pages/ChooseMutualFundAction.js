// src/pages/ChooseMutualFundAction.js

import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from '../components/Sidebar';

function ChooseMutualFundAction() {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-64 p-8 overflow-x-hidden flex flex-col items-start">
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
              className="w-96 flex items-center bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-700 transition pl-6 text-left text-lg"
              onClick={() => navigate("/mutual-fund-form")}
            >
              New Mutual Fund Investment
            </button>

            <button
              className="w-96 flex items-center bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-700 transition pl-6 text-left text-lg"
              onClick={() => navigate("/mutual-fund-redeem")}
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
