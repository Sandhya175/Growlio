import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const InvestorType = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-[#0c1320] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-[#0c1320] overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col flex-1 px-8 mt-16 ml-[260px]">
          {/* Back Button & Heading */}
          <div className="flex items-center gap-4 mb-10">
            <button
              onClick={handleBack}
              className="w-10 h-10 flex items-center justify-center bg-[#1e293b] rounded-lg hover:bg-[#334155] transition"
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

            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
              Who Are You Investing As?
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-8 w-full max-w-xl">
            <button
              className="py-7 rounded-lg bg-gray-700 text-white text-xl font-semibold hover:bg-gray-600 transition-all"
              onClick={() => navigate("/primary-member")}
            >
              Lead Family Member
            </button>
            <button
              className="py-7 rounded-lg bg-gray-700 text-white text-xl font-semibold hover:bg-gray-600 transition-all"
              onClick={() => navigate("/family-member-details")}
            >
              Family Member
            </button>
            <button
              className="py-7 rounded-lg bg-gray-700 text-white text-xl font-semibold hover:bg-gray-600 transition-all"
              onClick={() => navigate("/business-entity-details")}
            >
              Business Entity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorType;
