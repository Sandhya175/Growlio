import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaUser } from 'react-icons/fa';

const ChooseStockAction = () => {

  const navigate = useNavigate();

  const actions = [
    { label: "New Stock Purchase", path: "/new-purchase-stock" },
    { label: "New Stock Sale", path: "/new-stock-sale" },
    { label: "New Intraday", path: "/intra-trade-form" },
    { label: "New Future & Options", path: "/new-future-and-option" },
  ];
const username = localStorage.getItem('username');
  const handleBack = () => {
    navigate(-1);
  };

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

        {/* Page Body */}
        <div className="flex-1 px-10 py-8">
          {/* Back Button + Title */}
          <div className="flex items-center mb-8">
            <button
              onClick={handleBack}
              className="mr-4 hover:text-gray-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            <h2 className="text-2xl font-semibold">Choose Stock Action</h2>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-md">
           {actions.map((action, idx) => (
  <button
    key={idx}
    onClick={() => navigate(action.path)}
    className="
      bg-[#1F2A40]
      hover:border-l-4 hover:border-orange-300 hover:shadow-xl
      text-white hover:text-orange-300
      px-8 py-8 rounded-xl text-lg font-semibold text-left transition
    "
  >
    {action.label}
  </button>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseStockAction;
