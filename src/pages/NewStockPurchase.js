import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaUser } from 'react-icons/fa';

const NewPurchaseStock = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  const handleStockHoldings = () => {
  setShowModal(false);
  navigate('/stock-holdings');
};

const [guardianPhone, setGuardianPhone] = useState('');

  const InputField = ({ label, value, onChange, readOnly = false }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <input
      type="number"
      className="bg-[#1B2735] text-white p-3 rounded-lg"
      placeholder={`Enter ${label}`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

 const [shares, setShares] = useState("");
  const [price, setPrice] = useState("");
   const [charges, setCharges] = useState("");
  const [brokerage, setBrokerage] = useState("");
const totalValue = (parseFloat(shares) || 0) * (parseFloat(price) || 0);
 const total = (parseFloat(charges) || 0) + (parseFloat(brokerage) || 0);

 const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

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

    {/* Back Button & Page Title */}
        <div className="flex items-center mt-6 mb-6">
          <button
            onClick={handleBack}
            className="mr-4 text-white hover:text-gray-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold"> ADD NEW STOCK PURCHASE INFORMATION</h2>
        </div>
    

        {/* Page Content */}
        <div className="flex-1 p-6 md:p-10">

          {/* Dropdowns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  <div>
    <label className="block mb-1 text-white">Industry Name</label>
    <select className="w-full bg-[#1B2735] border border-transparent rounded px-3 py-2 focus:outline-none focus:ring-0 hover:bg-[#1B2735]">
      <option>Technology</option>
      <option>Financial</option>
      <option>Healthcare</option>
      <option>Consumer goods</option>
      <option>Energy</option>
      <option>Others</option>
    </select>
  </div>
  <div>
    <label className="block mb-1 text-white">Company Names</label>
    <select className="w-full bg-[#1B2735] border border-transparent rounded px-3 py-2 focus:outline-none focus:ring-0 hover:bg-[#1B2735]">
      <option>TCS</option>
      <option>Infosys</option>
      <option>Wipro</option>
    </select>
  </div>
  <div>
    <label className="block mb-1 text-white">Stock Names</label>
    <select className="w-full bg-[#1B2735] border border-transparent rounded px-3 py-2 focus:outline-none focus:ring-0 hover:bg-[#1B2735]">
      <option>TCHS</option>
    </select>
  </div>
</div>


         {/* Investor & Broker Details */}
<div className="mb-10">
  <h2 className="text-xl font-semibold mb-4">Investor & Broker Details</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* Name of Investor - Dropdown */}
    <div>
      <label className="block mb-1 text-white">Name of Investor</label>
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
      <label className="block mb-1 text-white">Name of Broker</label>
      <input
        type="text"
        className="w-full p-3 bg-[#1B2735] text-white rounded"
      />
    </div>
    <div>
      <label className="block mb-1 text-white">Trading Account Number</label>
      <input
        type="text"
        className="w-full p-3 bg-[#1B2735] text-white rounded"
      />
    </div>
    <div>
      <label className="block mb-1 text-white">Demat Account Number</label>
      <input
        type="text"
        className="w-full p-3 bg-[#1B2735] text-white rounded"
      />
    </div>
    <div>
      <label className="block mb-1 text-white">Depository Participant</label>
      <input
        type="text"
        className="w-full p-3 bg-[#1B2735] text-white rounded"
      />
    </div>
  </div>
</div>


 {/* Header with "Nominee Details" and "Add Nominee" Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Nominee Details</h2>
        <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-black font-medium px-4 py-2 rounded">
          <span className="text-xl">+</span>
          Add Nominee
        </button>
      </div>

         {/* Nominee Fields */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">Nominee Name</label>
    <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">Relationship with Account Holder</label>
    <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">Date of Birth</label>
    <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">Percentage of Share</label>
    <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
</div>

      {/* Address */}
      <div className="mt-4">
        <label className="mb-1 text-sm font-medium">Address</label>
        <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
      </div>


          {/* Guardian Details */}
        <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Guardian Details (if Nominee is minor)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Name of Guardian</label>
          <input
            type="text"
            className="bg-[#1B2735] text-white p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Relationship with Nominee</label>
          <input
            type="text"
            className="bg-[#1B2735] text-white p-3 rounded-lg"
           
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Contact Number</label>
          <PhoneInput
            country="in"
            value={guardianPhone}
            onChange={setGuardianPhone}
            inputProps={{
              name: 'guardianPhone',
              required: true,
              className: 'bg-[#1B2735] text-white rounded-lg w-full',
            }}
            containerClass="w-full"
            buttonClass="bg-[#1B2735] rounded-l-lg"
            dropdownClass="bg-[#1B2735] text-white"
            inputStyle={{
              borderRadius: 0,
              border: 'none',
              width: '100%',
              backgroundColor: '#1B2735',
              padding: '0.75rem',
              color: 'white'
            }}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1 text-sm font-medium">Address</label>
        <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
      </div>

      {/* Upload Nominee's ID Proof */}
      <div className="mt-6">
         <h2 className="text-lg font-semibold mb-4">Upload Documents</h2>
        <label className="block mb-2 text-sm font-medium">Nominee's ID Proof (PDF/Image)</label>
        <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
          <input type="file" accept=".pdf, image/*" hidden />
          <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
          <div className="text-gray-300">Click to Upload</div>
        </label>
      </div>
    </div>
  
   <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Stock Purchase Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">Date of Purchase</label>
      <input
        type="date"
        className="bg-[#1B2735] text-white p-3 rounded-lg"
      />
    </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Number of Shares</label>
          <input
            type="number"
            className="bg-[#1B2735] text-white p-3 rounded-lg"
            value={shares}
            onChange={(e) => setShares(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Purchase Price (Per Share)</label>
          <input
            type="number"
            className="bg-[#1B2735] text-white p-3 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Total Purchase Value</label>
          <input
            type="number"
            className="bg-[#1B2735] text-white p-3 rounded-lg"
            value={totalValue}
            readOnly
          />
        </div>
      </div>
    </div>
  
          {/* Transaction Details */}
         <div className="mb-10">
      <h2 className="text-lg font-semibold mb-4">Transaction Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Charges"
          value={charges}
          onChange={(e) => setCharges(e.target.value)}
        />
        <InputField
          label="Brokkerage"
          value={brokerage}
          onChange={(e) => setBrokerage(e.target.value)}
        />
        <InputField
          label="Total value"
          value={total}
          readOnly={true}
        />
      </div>
    </div>

         {/* Upload document */}
      <div className="mt-6">
         <h2 className="text-lg font-semibold mb-4">Upload Documents</h2>
        <label className="block mb-2 text-sm font-medium">Uplad Stock Contract Note (PDF)</label>
        <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
          <input type="file" accept=".pdf, image/*" hidden />
          <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
          <div className="text-gray-300">Click to Upload</div>
        </label>
      </div>
   

          {/* Submit Button */}
           <div className="mt-10 flex justify-center">
            <button
              className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              onClick={() => setShowModal(true)}
            >
              Record Purchase
            </button>
          </div>

          {/* Success Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-[#1B2735] text-white p-8 rounded-lg shadow-xl w-full max-w-xl relative">
                <button className="absolute top-3 right-4 text-white text-xl" onClick={() => setShowModal(false)}>
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-2">Stock Added To Portfolio!</h2>
                <p className="mb-4">Your stock purchase details have been recorded successfully!</p>
                <div className="bg-[#2C3A4B] p-4 rounded-md mb-4">
                  <div className="flex justify-between border-gray-600 py-2">
                    <span className="font-medium">Company Name </span>
                    <span>Adani Group</span>
                  </div>
                  <div className="flex justify-between border-gray-600 py-2">
                    <span className="font-medium">Stock Name</span>
                    <span>Adani Green Energy Ltd.</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Total Purchase Value</span>
                    <span>₹ 22,000</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500"
                    onClick={handleStockHoldings}
                  >
                    View All Stock Holdings
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

export default NewPurchaseStock;