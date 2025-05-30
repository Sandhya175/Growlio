import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Adjust path if needed
import { useNavigate } from "react-router-dom";

const PpfClosureForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openPopup();
  };
  const navigate = useNavigate();

  const handleViewClosures = () => {
    navigate("/ppf-closure-details");
  };
  
  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-bold mb-10">PPF CLOSURE/MATURITY FORM</h2>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* PPF Account Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">PPF Account Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">PPF Account Number</label>
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
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Branch Name</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Date of Account Opening</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Maturity Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Maturity Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Maturity Date</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Final Amount (in ₹)</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Payment Mode */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Mode</h3>
              <div className="flex flex-col sm:w-1/2">
                <label className="mb-1 text-sm font-medium">Mode Of Payment</label>
                <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>UPI</option>
                </select>
              </div>
            </div>

            {/* Upload Documents */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>

              <label className="block mb-2 text-sm font-medium">Upload Maturity Proceeds Receipt</label>
              <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-36 rounded-lg cursor-pointer hover:bg-[#364759] transition mb-6">
                <input type="file" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-1">+</div>
                <div className="text-gray-300">Click to Upload</div>
              </label>

              <label className="block mb-2 text-sm font-medium">Upload Bank Credit Proof </label>
              <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-36 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                <input type="file" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-1">+</div>
                <div className="text-gray-300">Click to Upload</div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
  <button type="submit" className="bg-[#3B9B8F] text-white px-6 py-3 rounded-md hover:bg-[#2f7a6f]">
    Record Details
  </button>
</div>
          </form>
        </div>
      </div>

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
            <h2 className="text-xl font-bold mb-4">PPF Closure Added to Portfolio!</h2>
            <p className="text-sm mb-6">
              Your PPF closure details have been recorded successfully.
            </p>

            <div className="bg-gray-800 rounded-md p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Date Maturity</span>
                <span className="font-bold">09/02/2024</span>
              </div>
              <div className="flex justify-between">
                <span>Final Amount (In ₹ )</span>
                <span className="font-bold">₹ 7,89,899.00</span>
              </div>
              <div className="flex justify-between">
                <span>Mode of Payment</span>
                <span className="font-bold">Bank Transfer</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
            <div className="mt-6 flex justify-center">
  <button
    className="bg-[#3B9B8F] px-6 py-2 rounded-md hover:bg-[#2f7a6f]"
    onClick={handleViewClosures}
  >
    View All Closures
  </button>
</div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PpfClosureForm;
