import React from "react";
import { useNavigate } from "react-router-dom";

const WithdrawalSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-60">
      <div className="bg-[#1B263B] text-white p-6 rounded-lg w-[90%] max-w-md relative shadow-lg">
        <button
          className="absolute top-2 right-4 text-white text-xl"
          onClick={() => navigate(-1)}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Withdrawal Details Added to Portfolio!</h2>
        <p className="mb-4 text-sm text-gray-300">
          Your new Withdrawal details has been recorded successfully!
        </p>

        <div className="bg-[#27354b] p-4 rounded-md mb-6 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Withdrawal Amount</span>
            <span>₹ 20,000</span>
          </div>
          <div className="flex justify-between">
            <span>Date of Withdrawal</span>
            <span>08/09/2024</span>
          </div>
          <div className="flex justify-between">
            <span>Mode of Withdrawal</span>
            <span>Cheque</span>
          </div>
        </div>

        <button
          className="bg-teal-400 hover:bg-teal-500 text-black px-4 py-2 rounded-md w-full"
          onClick={() => navigate("/withdrawals")}
        >
          View All Withdrawals
        </button>
      </div>
    </div>
  );
};

export default WithdrawalSuccessPage;
