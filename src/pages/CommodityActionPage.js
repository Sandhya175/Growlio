import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CommodityActionPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/instrument-setup");
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-64 pr-8 pt-10">
          {/* Back Button + Heading */}
          <div className="flex items-center mb-10 px-4">
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
<h1 className="text-3xl font-bold">Choose Commodity Action</h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-6 px-4 max-w-md">
            <button
              className="bg-[#2d2f3a] hover:bg-[#3a3c4b] text-white px-6 py-6 rounded-xl text-lg text-left shadow w-full"
            
              onClick={() => navigate("/new-commodity-investment")}

            >
              New Commodity Investment
            </button>

            <button
              className="bg-[#2d2f3a] hover:bg-[#3a3c4b] text-white px-6 py-6 rounded-xl text-lg text-left shadow w-full"
              onClick={() => navigate("/commodity-sale")}

            >
              New Commodity Sale/Disposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityActionPage;
