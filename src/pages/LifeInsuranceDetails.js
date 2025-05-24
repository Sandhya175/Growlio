import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LifeInsuranceDetails = () => {
const [showPassword, setShowPassword] = useState(false);
const [showModal, setShowModal] = useState(false);
const navigate = useNavigate();

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-10">ADD LIFE INSURANCE DETAILS</h1>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Policy Overview */}
            <h2 className="col-span-3 text-lg font-semibold">Policy Overview</h2>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Name of Investor</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Insurance Type</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Life Insurance</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Insurance Company</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Insurance Companies</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Policy Number</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Policy Term (Years)</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            {/* Coverage */}
            <h2 className="col-span-3 text-lg font-semibold mt-4">Coverage & Benefits</h2>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Type of Life Cover</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Term</option>
                <option>Whole Life</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Sum Assured/Coverage Amount</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Maturity Value(optional)</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            {/* Premium & Payment */}
            <h2 className="col-span-3 text-lg font-semibold mt-4">Premium & Payment</h2>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Premium Amount</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Frequency of Payment</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Payment Mode</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>Check</option>
                <option>UPI</option>
              </select>
            </div>

            {/* Nominee */}
            <h2 className="col-span-3 text-lg font-semibold mt-4">Nominee Details</h2>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Nominee Name</label>
              <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Relationship to Investor</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Relationship to Investor</option>
              </select>
            </div>

            {/* Policy Dates */}
            <h2 className="col-span-3 text-lg font-semibold mt-4">Policy Dates</h2>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Policy Start Date</label>
              <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Policy Expiry Date</label>
              <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
            </div>

                      {/* Access Details */}
                      <h2 className="col-span-3 text-lg font-semibold mt-4">Access Details</h2>

<div className="flex flex-col">
  <label className="mb-1 text-sm font-medium">Login ID</label>
  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
</div>

<div className="flex flex-col relative w-full">
  <label className="mb-1 text-sm font-medium text-white">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      className="bg-[#1B2735] text-white p-3 pr-14 rounded-lg w-full border border-white"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white"
    >
      {showPassword ? (
        <FaEyeSlash className="w-6 h-6" />
      ) : (
        <FaEye className="w-6 h-6" />
      )}
    </button>
  </div>
</div>

<div className="flex flex-col">
  <label className="mb-1 text-sm font-medium">Registered Email ID</label>
  <input type="email" className="bg-[#1B2735] text-white p-3 rounded-lg" />
</div>

<div className="flex flex-col">
  <label className="mb-1 text-sm font-medium">Insurance Portal URL</label>
  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
</div>

<div className="flex flex-col">
  <label className="mb-1 text-sm font-medium">Customer ID / Policy Login ID</label>
  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
</div>

            {/* Upload Section */}
            <h2 className="col-span-3 text-lg font-semibold mt-4">Upload Documents</h2>
            <label
              className="col-span-3 relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition"
            >
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files.length > 0) {
                    alert(`Selected file: ${e.target.files[0].name}`);
                  }
                }}
              />
              <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
              <div className="text-gray-300">Click to Upload Document</div>
            </label>

            {/* Status */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Status</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-3 flex justify-center mt-6">
            <button
  type="button"
  onClick={() => setShowModal(true)}
  className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white"
>
  Record Investment
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
        Insurance Investment Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your Insurance Investment has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Type of Insurance</span>
          <span>Life Insurance</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Frequency of Payment</span>
          <span>Annually</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Premium Amount</span>
          <span>₹ 5,000</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/insurance-investment-details");
          }}
          
        >
          View All MF Investments
        </button>
      </div>
    </div>
  </div>
)}
</div>  
    
  );
};

export default LifeInsuranceDetails;
