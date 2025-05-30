import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const RecordLongTermCapitalGain = () => {
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

        {/* Main Content */}
        <div className="px-6 py-10">

          {/* Header */}
          <div className="flex items-center mb-6">
            <button onClick={() => navigate(-1)} className="mr-4 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold">Record Long Term Capital Gain</h1>
          </div>
          <p className="mb-10 text-sm text-gray-400">For investments held &gt; 12 months</p>

          <form className="space-y-10">

            {/* Asset Details */}
            <SectionTitle title="Asset Details" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput label="Type of Asset Sold" type="select" options={["Land", "Building", "Shares", "Bonds"]} />
              <FormInput label="Is this a Bonus Share Transaction?" type="select" options={["Yes", "No"]} />
              <FormInput label="Date of Acquisition" type="date" />
              <FormInput label="Date of Sale" type="date" />
              <FormInput label="Full Sale Value (Consideration)" type="text" />
              <FormInput label="Cost of Acquisition (Purchase Price)" type="text" readOnly />
              <FormInput label="Expenses on Transfer" type="text" />
              <FormInput label="CII of Acquisition Year" type="select" options={["2024-25", "2025-26"]} />
              <FormInput label="CII of Sale Year" type="select" options={["2024-25", "2025-26"]} />
              <FormInput label="Indexed Cost of Acquisition" type="text" />
              <FormInput label="Cost of Improvement (if any)" type="text" />
              <FormInput label="Indexed Cost of Improvement" type="text" />
            </div>

            {/* LTCG Computation */}
            <SectionTitle title="Long Term Capital Gain Computation" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput label="Net LTCG" type="text" readOnly />
            </div>

            {/* Exemptions */}
            <SectionTitle title="Exemptions" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput label="Section 54 – Reinvested in Property" type="text" />
              <FormInput label="Section 54EC – Specified Bonds" type="text" />
              <FormInput label="Section 54F – Full Consideration Reinvested" type="text" />
              <FormInput label="Other Exemptions" type="text" />
              <FormInput label="Total Exemptions" type="text" readOnly />
            </div>

            {/* Tax Calculation */}
            <SectionTitle title="Tax Calculation" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput label="Taxable LTCG" type="text" readOnly />
              <FormInput label="Applicable Tax Rate" type="text" readOnly />
              <FormInput label="Final Tax Payable" type="text" readOnly />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="button"
                  onClick={() => setShowModal(true)}
               className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white"
              >
                Record Details 
              </button>
            </div>
          </form>
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
       LTGC Details Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your LTGC Details has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Type of Asset Goal</span>
          <span>Mutual Funds</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Net LTGC </span>
          <span>₹ 2000</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Final Tax Payable</span>
          <span>₹ 22,000</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/ltgc-record");
          }}
          
        >
          View All LTGC Details
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
);


const FormInput = ({ label, type, options = [], readOnly = false }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    {type === "select" ? (
      <select className="bg-[#1B2735] text-white p-3 rounded-lg" disabled={readOnly}>
        {options.map((opt, idx) => (
          <option key={idx}>{opt}</option>
        ))}
      </select>
    ) : (
      <input type={type} readOnly={readOnly} className="bg-[#1B2735] text-white p-3 rounded-lg" />
    )}
  </div>
);

export default RecordLongTermCapitalGain;