// src/pages/PpfContributionForm.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';


const PpfContributionForm = () => {
  const [showPopup, setShowPopup] = useState(false); // popup state

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // open popup on submit
  };
  const navigate = useNavigate();
const [username, setUsername] = useState('');
useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
  const closePopup = () => {
    setShowPopup(false);
  };

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
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-10">PPF CONTRIBUTION FORM</h2>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Basic Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Basic Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">PPF Account Holders Name</label>
            <select className=" p-3 bg-[#1B2735] text-white rounded">
              <option>Mr. Bankim Doshi</option>
              <option>Mrs. Nita Doshi</option>
              <option>Mr. Rashesh Doshi</option>
              <option>Mrs. Jagruti Doshi</option>
              <option>Bankim Doshi HUF</option>
              <option>Rashesh Doshi HUF</option>
              <option>Mrs. Pritika Doshi</option>
              <option>Mr. Krishna Doshi</option>
              <option>Talent Corner HR Services Pvt Ltd.</option>
            </select>
          </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">PPF Account Number</label>
                  <input
                    type="text"
                    className="bg-[#1B2735] text-white p-3 rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Contribution Amount (in ₹)</label>
                  <input
                    type="number"
                    className="bg-[#1B2735] text-white p-3 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Payment Mode */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Mode</h3>
              <div className="flex flex-col max-w-sm">
                <label className="mb-1 text-sm font-medium">Mode of Payment</label>
                <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Cheque</option>
                </select>
              </div>
            </div>

            {/* Date of Contribution */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Date of Contribution</h3>
              <div className="flex flex-col max-w-sm">
                <label className="mb-1 text-sm font-medium">Date of Sale</label>
                <input
                  type="date"
                  className="bg-[#1B2735] text-white p-3 rounded-lg"
                />
              </div>
            </div>

            {/* Upload Documents */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>
              <label className="mb-2 block text-sm font-medium">
                Upload Bank Transfer/Bank Statement Screenshot
              </label>
              <label
                className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition"
              >
                <input type="file" accept="application/pdf" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                <div className="text-gray-300">Click to Upload</div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
  <button type="submit" className="bg-[#3B9B8F] text-white px-6 py-3 rounded-md hover:bg-[#2f7a6f]">
    Record Investment
  </button>
</div>

          </form>

          {/* Popup */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-[#1B2735] rounded-lg p-8 w-[500px] relative">
                <button
                  className="absolute top-2 right-4 text-white text-2xl"
                  onClick={closePopup}
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold mb-4">PPF Contribution Details Added to Portfolio!</h2>
                <p className="text-sm mb-6">
                  Your PPF contribution details has been recorded successfully!
                </p>

                <div className="bg-gray-800 rounded-md p-4 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>PPF A/c. Number</span>
                    <span className="font-bold">**** **** 8999</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mode of Payment</span> 
                    <span className="font-bold">Bank Transfer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contributed Amt (In ₹)</span>
                    <span className="font-bold">₹ 2000.00</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                <button
  className="bg-[#3B9B8F] px-6 py-2 rounded-md hover:bg-[#2f7a6f]"
  onClick={() => {
    closePopup();         // Close the popup
    navigate("/ppf-contribution-details"); // Redirect to details page
  }}
>
  View All Contributions
</button>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PpfContributionForm;
