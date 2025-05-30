import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const DividendForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
   const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const dividendTypes = ["Interim", "Final", "Special", "Monthly", "Quaterly", "Annual"];
  const investmentTypes = ["Mutual Funds", "ETF", "Bonds", "Others"];

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-[#0D1520] text-white min-h-screen">
      <Sidebar />
      
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="pl-64 p-8 flex-1">
          {/* Back Button and Title */}
          <div className="flex items-center mb-6">
            <button onClick={() => navigate(-1)} className="mr-4 hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-3xl font-bold">DIVIDEND</h1>
          </div>

          {/* General Information */}
          <Section title="General Information">
            <FormInput label="Name of Investor" type="text" />
            <FormInput label="Date of Dividend Receipt" type="date" />
          </Section>

          {/* Investment Instrument Details */}
          <Section title="Investment Instrument Details">
            <FormInput label="Type of Investment" type="select" options={investmentTypes} />
            <FormInput label="Name of Company/Fund" type="text" />
            <FormInput label="Number of Units/Shares Held" type="text" />
          </Section>

          {/* Dividend Details */}
          <Section title="Dividend Details">
            <FormInput label="Dividend Type" type="select" options={dividendTypes} />
            <FormInput label="Per Share/Per Unit" type="text" />
            <FormInput label="Total Dividend Amount Received (in ₹)" type="text" />
          </Section>

          {/* Taxation & Charges */}
          <Section title="Taxation & Charges">
            <FormInput label="Tax Rate (%)" type="text" />
            <FormInput label="Net Dividend Amount (in ₹)" type="text" />
            <FormInput label="Other Charges/Deductions" type="text" />
          </Section>

          {/* Upload Documents */}
          <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
          <p className="text-sm text-gray-300 mb-2">Upload Dividend Statement (PDF)</p>
          <label
            htmlFor="dividendDoc"
            className="block bg-[#1B2735] px-4 py-8 rounded-lg cursor-pointer text-center transition-all duration-200 hover:bg-[#253344]"
          >
            <input
              id="dividendDoc"
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

          {/* Submit Button */}
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
              Income Tax Details Added to Portfolio!
            </h2>
            <p className="text-center mb-6">
              Your Income Tax Details has been recorded successfully!
            </p>
            <div className="bg-[#334155] p-4 rounded-lg mb-6">
              <div className="flex justify-between py-1">
                <span className="font-medium">Date Of Dividend Receipt</span>
                <span>09/02/2024</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Type Of Investment </span>
                <span>Mutual Fund</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">New Dividend Amount</span>
                <span>₹ 20,000</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
                onClick={() => {
                  setShowModal(false);
                  navigate("/dividend-details");
                }}
              >
                View All Dividend Details
              </button>
            </div>
          </div>
        </div>
)}
    </div>
  );
};

// Section Wrapper
const Section = ({ title, children }) => (
  <>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">{children}</div>
  </>
);

// Reusable FormInput
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

export default DividendForm;
