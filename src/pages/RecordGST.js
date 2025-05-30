import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaPlus ,FaUser} from "react-icons/fa";

const RecordGST = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
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

        {/* Content */}
        <div className="px-12 py-10">
          <div className="flex items-center mb-6">
            <button onClick={() => navigate(-1)} className="mr-4 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold">GST</h1>
          </div>
          <p className="text-sm text-gray-300 mb-8">For users who have a business or is GST - registered</p>

          {/* Investor Details */}
          <SectionTitle title="Investor Details" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <FormInput label="Name of Investor" />
            <FormInput label="GSTIN" />
            <FormInput label="PAN Number" />
          </div>

          {/* Transaction Information */}
          <SectionTitle title="Transaction Information" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <FormInput label="Transaction Date" type="date" />
            <FormInput label="Invoice Number" />
            <FormInput label="Net GST Payable" />
            <FormInput label="Service Provider Name" />
            <FormInput label="Provider GSTIN" />
            <FormInput label="Invoice Amount (Excl. GST)" />
            <FormInput label="GST Rate (%)" />
            <FormInput label="GST Amount" />
          </div>

          {/* GST Reference Table */}
          <SectionTitle title="Reference – Common GST Rates" />
          <div className="bg-[#1b2735] rounded-lg p-4 mb-10 border border-gray-700 w-full md:w-2/3">
            <div className="grid grid-cols-2 text-sm font-semibold border-b border-gray-600 pb-2 mb-2">
              <span>GST Rate</span>
              <span>Description</span>
            </div>
            {[
              ["0%", "Essentials – milk, fresh vegetables"],
              ["5%", "Basic goods/services – rail tickets, economy air"],
              ["12%", "Standard – mobile phones, processed food"],
              ["18%", "Most services – electronics, restaurants"],
              ["28%", "Luxury/sin items – cars, tobacco, ACs"]
            ].map(([rate, desc], idx) => (
              <div key={idx} className="grid grid-cols-2 text-sm py-1">
                <span>{rate}</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>

          {/* Upload Invoice */}
          <SectionTitle title="Upload Invoice" />
          <div className="bg-[#1b2735] border border-gray-700 rounded-lg h-64 mb-10 flex justify-center items-center w-full">
            <label className="flex flex-col items-center cursor-pointer">
              <FaPlus className="text-teal-400 text-3xl mb-2" />
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
           <button
                type="button"
                  onClick={() => setShowModal(true)}
               className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white"
              >
              Record Details
            </button>
          </div>
        </div>
      </div>
        {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-[#1e293b] text-white rounded-xl p-8 w-[600px] relative shadow-lg">
      <button
        className="absolute top-4 right-4 text-white text-xl"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">
      GST Details Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your GST Details has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Service Provider</span>
          <span>Zerodha</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Net GST Payable </span>
          <span>₹ 12,500</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">GST Amount</span>
          <span>₹ 1,800</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/gst-records");
          }}
          
        >
          View All GST Details
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
);

const FormInput = ({ label, type = "text" }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      className="bg-[#1b2735] text-white p-3 rounded-lg border border-gray-700 placeholder-gray-400"
     
    />
  </div>
);

export default RecordGST;