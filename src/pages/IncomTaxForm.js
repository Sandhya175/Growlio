import React, { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";

const IncomTaxForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [taxRegime, setTaxRegime] = useState("Old Regime"); // Track selected regime

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username || "User"}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="ml-64 px-8 py-10 w-full max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-1">RECORD INCOME TAX</h2>
          <p className="mb-6 text-gray-300">For investments, tax is charged on the money you earn.</p>

          {/* Tax Regime */}
          <div className="mb-6">
            <label className="block mb-2">Choose Tax Regime</label>
            <select
              className="w-full md:w-64 p-3 rounded-lg bg-[#1B2735] text-white"
              value={taxRegime}
              onChange={(e) => setTaxRegime(e.target.value)}
            >
              <option>Old Regime</option>
              <option>New Regime</option>
            </select>
          </div>

          {/* Income Inputs */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "Name of Investor",
              "Salary Income",
              "Income from House Property",
              "Other Income",
              "Business/Profession Income (if applicable)"
            ].map((label, idx) => (
              <div key={idx}>
                <label className="block mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-[#1B2735] text-white"
                />
              </div>
            ))}
          </div>

          {/* Deductions Section - Only for Old Regime */}
          {taxRegime === "Old Regime" && (
            <>
              <h3 className="text-xl font-semibold mb-4">Deductions (Applicable under Old Regime)</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  "Section 80C LIC, PPF, ELSS, PF, etc.",
                  "Section 80D Health Insurance",
                  "Section 80G Donations",
                  "Section 80E Education Loan Interest",
                  "Section 80TTA Savings Interest",
                  "Section 24(b) Home Loan Interest"
                ].map((label, idx) => (
                  <div key={idx}>
                    <label className="block mb-2">{label}</label>
                    <input className="w-full p-3 rounded-lg bg-[#1B2735] text-white" />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Tax Payments */}
          <h3 className="text-xl font-semibold mb-4">Tax Payments</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              "Advance Tax / Self Assessment Tax",
              "TDS from Form 26AS"
            ].map((label, idx) => (
              <div key={idx}>
                <label className="block mb-2">{label}</label>
                <input className="w-full p-3 rounded-lg bg-[#1B2735] text-white" />
              </div>
            ))}
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

      {/* Modal */}
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
                  navigate("/income-tax-records");
                }}
              >
                View All Income Tax Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ); 
};

export default IncomTaxForm;
