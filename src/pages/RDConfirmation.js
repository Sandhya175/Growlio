// src/pages/RDConfirmation.js
import React from "react";
import { useNavigate } from "react-router-dom";

const RDConfirmation = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/my-bank-investments"); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg w-[500px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">RD Details Added to Portfolio!</h2>
        <p className="mb-6 text-sm text-gray-300">
          Your Recurring Deposit was successfully added.
        </p>

        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span>Principal Amount</span>
            <span>₹ 20,000</span>
          </div>
          <div className="flex justify-between text-green-400 mb-2">
            <span>Interest Earned</span>
            <span>₹ 2,000</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total Return</span>
            <span>₹ 22,000</span>
          </div>
        </div>

        <button
          onClick={handleViewAllClick}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          View All RD Records
        </button>
      </div>
    </div>
  );
};

export default RDConfirmation;
