// src/pages/AddPropertySale.js
import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";


const AddPropertySale = () => {
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleFileClick = () => fileInputRef.current.click();

  const handleRecordInvestment = (e) => {
    e.preventDefault();
    setShowModal(true); // This shows the popup
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
 <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
  {/* Topbar */}
  <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">

  <div className="flex items-center gap-4">
    <p className="text-white text-lg">Welcome Bankim Doshi!</p>
    <img
      src="https://i.pravatar.cc/60?img=1"
      className="w-12 h-12 rounded-full border-2 border-white"
      alt="Profile"
    />
  </div>
</div>


        {/* Page Content */}
        <div className="flex-1 p-10">
          <div className="flex items-center mb-10">
            <h1 className="text-2xl font-bold">ADD NEW PROPERTY SALE INFORMATION</h1>
          </div>

          <form className="max-w-full" onSubmit={handleRecordInvestment}>
            {/* Ownership Exit Details */}
            <h2 className="text-lg font-semibold mb-6">Ownership Exit Details</h2>
           
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
  <div className="w-full">
    <label className="block mb-2">Name of Seller</label>
    <select className="w-full p-2 bg-[#1B2735] text-white rounded">
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
              <div>
                <label className="block text-sm mb-2">Property Type</label>
                <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                  <option>Flat</option>
                  <option>Land</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                  <option>Villa</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Date of Sale</label>
                <input type="date" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Name of Buyer</label>
                <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Sale Amount (In ₹)</label>
                <input type="number" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Purchase Value (In ₹)</label>
                <input type="number" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Capital Gains (In ₹)</label>
                <input type="number" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Date of Purchase</label>
                <input type="date" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
            </div>

            {/* Full Address */}
            <div className="mb-6">
              <label className="block text-sm mb-2">Full Property Address</label>
              <textarea rows={3} className="bg-[#1B2735] w-full rounded px-4 py-2"></textarea>
            </div>

            {/* City/State/Country */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-sm mb-2">City</label>
                <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">State</label>
                <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-2">Country</label>
                <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
              </div>
            </div>

            {/* Upload Documents */}
            <h2 className="text-lg font-semibold mb-4">Upload Documents</h2>
            <label className="block text-sm mb-2">Upload Sale Agreement (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              className="hidden"
            />
            <div
              onClick={handleFileClick}
              className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
            >
              <span className="text-3xl text-[#17E3B2] font-bold">+</span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-10">
              <button
                type="submit"
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium py-2 px-4 rounded-md hover:bg-[#2f7a6f] transition-colors block mx-auto"
              >
                Record Investment
              </button>
            </div>
          </form>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-[#1B2735] p-6 rounded-lg w-[500px] shadow-xl relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-3 text-white text-xl hover:text-gray-300"
                >
                  &times;
                </button>

                <h2 className="text-xl font-bold mb-4 text-white">
                  Property Sale Added to Portfolio!
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                  Your Property Sale has been recorded successfully!
                </p>

                <div className="bg-[#2A3748] p-4 rounded-lg mb-6">
                  <div className="flex justify-between text-sm text-gray-200 mb-2">
                    <span>Type of Property</span>
                    <span className="font-semibold text-white">Flat</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-200 mb-2">
                    <span>Name of Buyer</span>
                    <span className="font-semibold text-white">Mr. Aradhya Singh</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-200">
                    <span>Total Sale Value</span>
                    <span className="font-semibold text-white">₹ 1,00,00,000</span>
                  </div>
                </div>

                <div className="flex justify-center">
                <button
  onClick={() => navigate("/property-details")}
  className="bg-[#17E3B2] text-black px-4 py-2 rounded hover:bg-[#15cfa1] transition"
>
  View All Sold Property
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

export default AddPropertySale;
