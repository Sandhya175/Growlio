import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const TDSEntry = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Bankim Doshi");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const tdsSections = ["194A", "194C", "194H"];
  const quarters = ["Q1", "Q2", "Q3", "Q4"];
  const formTypes = ["26Q", "24Q", "27Q", "27EQ"];
  const depositModes = ["Online", "Offline"];

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 px-6 py-10">
          {/* Back & Header */}
          <div className="flex items-center mb-6">
            <button onClick={() => navigate(-1)} className="mr-4 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold">TAX DEDUCTED AT SOURCE (TDS)</h1>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6">TDS Details</h2>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput label="Name of Deductee" type="text" />
            <FormInput label="PAN of Deductee" type="text" />
            <FormInput label="TDS Section" type="select" options={tdsSections} />
            <FormInput label="Nature of Payment" type="text" />
            <FormInput label="Amount Paid (in ₹)" type="text" />
            <FormInput label="TDS Deducted (in ₹)" type="text" />
            <FormInput label="Date of Payment" type="date" />
            <FormInput label="Date of Deduction" type="date" />
            <FormInput label="Date of Deposit" type="date" />
            <FormInput label="TDS Challan Number" type="text" />
            <FormInput label="Bank BSR Code" type="text" />
            <FormInput label="Mode of Deposit" type="select" options={depositModes} />
            <FormInput label="Quarter" type="select" options={quarters} />
            <FormInput label="Financial Year" type="text" defaultValue="2024-25" />
            <FormInput label="Net Payable Amount After TDS" type="text" />
            <FormInput label="Form Filed" type="select" options={formTypes} />
            <FormInput label="Acknowledgement Number" type="text" />
          </form>

          {/* Upload Section */}
          {/* Upload Section */}
<div className="mt-10">
  <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
  <p className="text-sm text-gray-300 mb-2">Upload TDS Receipt (PDF)</p>

  <label
    htmlFor="tdsReceipt"
    className="block bg-[#1B2735] px-4 py-8 rounded-lg cursor-pointer text-center transition-all duration-200 hover:bg-[#253344]"
  >
    <input
      id="tdsReceipt"
      type="file"
      accept="application/pdf"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files[0];
        console.log("Uploaded file:", file);
      }}
    />
    <div className="flex justify-center">
      <div className="bg-[#0ce5c9] hover:bg-[#0bc5b0] rounded-full p-2 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </label>
</div>

          <div className="flex justify-center mt-10">
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
      TDS Details Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your TDS Details has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">TDS Detucted (in ₹ )</span>
          <span>₹ 20,000</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Date Of Deduction </span>
          <span>09/02/2024</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Mode Of Deposit</span>
          <span>Online</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/tds-records");
          }}
          
        >
          View All STGC Details
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

const FormInput = ({ label, type, options = [], defaultValue = "" }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    {type === "select" ? (
      <select className="bg-[#1B2735] text-white p-3 rounded-lg">
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
    ) : (
      <input type={type} defaultValue={defaultValue} className="bg-[#1B2735] text-white p-3 rounded-lg" />
    )}
  </div>
);

export default TDSEntry;