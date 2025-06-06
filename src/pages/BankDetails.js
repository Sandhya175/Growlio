import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axisLogo from "../assets/bank_logos/axis.png";
import { FaUser } from 'react-icons/fa';

const BankDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNewBankAccount = () => {
    navigate("/add-bank-account");
  };

  const handleNewRecurringDeposit = () => {
    navigate("/add-deposit");
  };

  const handleNewFixedDeposit = () => {
    navigate("/add-fixed-deposit");
  };
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


        {/* Page Content */}
        <div className="flex-1 p-10">
          {/* Back Button & Title */}
          <div className="flex items-center mb-10">
            <button
              onClick={handleBack}
              className="mr-4 text-white hover:text-gray-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold">Account Type</h1>
          </div>

          {/* Bank & Buttons */}
          <div className="flex flex-col gap-6 max-w-md">
            {/* Axis Bank Display Box */}
            <div className="bg-[#1B2735] px-6 py-4 rounded-lg flex items-center gap-4 w-full">
              <img src={axisLogo} alt="Axis Bank" className="h-10" />
              <span className="text-lg font-semibold">Axis Bank</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pl-0 pr-16">
             <button
  onClick={handleNewBankAccount}
  className="
    bg-[#1B2735]
    hover:border-l-4 hover:border-orange-300 hover:shadow-xl
    text-white hover:text-orange-300
    px-6 py-6 rounded-xl text-lg font-semibold text-left transition
  "
>
  New Bank Account
</button>

<button
  onClick={handleNewRecurringDeposit}
  className="
    bg-[#1B2735]
    hover:border-l-4 hover:border-orange-300 hover:shadow-xl
    text-white hover:text-orange-300
    px-6 py-6 rounded-xl text-lg font-semibold text-left transition
  "
>
  New Recurring Deposit Account
</button>

<button
  onClick={handleNewFixedDeposit}
  className="
    bg-[#1B2735]
    hover:border-l-4 hover:border-orange-300 hover:shadow-xl
    text-white hover:text-orange-300
    px-6 py-6 rounded-xl text-lg font-semibold text-left transition
  "
>
  New Fixed Deposit Account
</button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;