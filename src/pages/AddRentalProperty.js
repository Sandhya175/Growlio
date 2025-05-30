// src/pages/AddRentalProperty.js
import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom"; // 👈 at the top with other imports


const AddRentalProperty = () => {
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();  // 👈 define it


  const handleFileClick = () => fileInputRef.current.click();

  const handleRecordInvestment = (e) => {
    e.preventDefault();
    setShowModal(true); // show the popup 
  };

  const inputClass = "bg-[#1B2735] rounded px-4 py-2 w-full";

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
          <h1 className="text-2xl font-bold mb-10">ADD NEW RENTAL PROPERTY INFORMATION</h1>

          <form className="max-w-full" onSubmit={handleRecordInvestment}>
            {/* Property Details */}
            <h2 className="text-lg font-semibold mb-6">Property Details</h2>
           
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
  <div className="w-full">
    <label className="block mb-2">Name of Land Owner</label>
    <select className="w-full p-3 bg-[#1B2735] text-white rounded">
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
                <label className="block mb-2">Rental Start Date</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Agreement Duration (in Months)</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Property Type</label>
                <select className={inputClass}>
                  <option>Flat</option>
                  <option>Land</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                  <option>Villa</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2">Full Property Address</label>
              <textarea rows="3" className={inputClass}></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block mb-2">City</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Country</label>
                <input type="text" className={inputClass} />
              </div>
            </div>

            {/* Financial Details */}
            <h2 className="text-lg font-semibold mb-6">Financial Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block mb-2">Monthly Rent Amount (₹)</label>
                <input type="number" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Security Deposit (₹)</label>
                <input type="number" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Payment Mode</label>
                <select className={inputClass}>
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>UPI</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Payment Frequency</label>
                <select className={inputClass}>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Property Status</label>
                <select className={inputClass}>
                  <option>Active</option>
                  <option>Vacated</option>
                  <option>Pending Renewal</option>
                </select>
              </div>
            </div>

            {/* Upload Documents */}
            <h2 className="text-lg font-semibold mb-4">Upload Documents</h2>
            <label className="block text-sm mb-2">Upload Redemption Proof (PDF/Image)</label>
            <input ref={fileInputRef} type="file" accept=".pdf,.png,.jpg" className="hidden" />
            <div
              onClick={handleFileClick}
              className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
            >
              <span className="text-3xl text-[#17E3B2] font-bold">+</span>
            </div>

            {/* Submit */}
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
                  Rental Property Added to Portfolio!
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                  Your Rental Property has been recorded successfully!
                </p>

                <div className="bg-[#2A3748] p-4 rounded-lg mb-6">
                  <div className="flex justify-between text-sm text-gray-200 mb-2">
                    <span>Type of Property</span>
                    <span className="font-semibold text-white">Flat</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-200 mb-2">
                    <span>Name of Tenant</span>
                    <span className="font-semibold text-white">Mrs. Jyoti Sinha</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-200">
                    <span>Monthly Rental Amt(In ₹)</span>
                    <span className="font-semibold text-white">₹10,000.00</span>
                  </div>
                </div>

                <div className="flex justify-center">
                <button
  onClick={() => {
    setShowModal(false); // close the modal
    navigate("/rental-details"); // go to RentalPropertyDetails page
  }}
  className="bg-[#17E3B2] text-black px-4 py-2 rounded hover:bg-[#15cfa1] transition"
>
  View All Rented Property
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

export default AddRentalProperty;
