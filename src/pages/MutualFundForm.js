import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom'; 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUser } from 'react-icons/fa';

const MutualFundForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [startDate, setStartDate] = useState('');
  const [showModal, setShowModal] = useState(false); // modal toggle
  const navigate = useNavigate(); 
  const username = localStorage.getItem('username');
  const [guardianPhone, setGuardianPhone] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToHoldingsPage = () => {
    navigate('/mutual-fund-holdings');  
  };

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
          <h2 className="text-2xl font-bold">ADD NEW MUTUAL FUND INVESTMENT</h2>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">

          <div className="space-y-8">
            {/* Investor Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Investor Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
  <label className="block mb-1 text-white">Account Holder Name</label>
  <select className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" >
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
                  <label className="block text-gray-400 mb-2">Date of Purchase</label>
                  <input
                    type="date"
                    value={dateOfPurchase}
                    onChange={(e) => setDateOfPurchase(e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-md"
                  />
                </div>
              </div>
            </div>

{/* Nominee & Guardian Details */}
 <div>
      {/* Header with "Nominee Details" and "Add Nominee" Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Nominee Details</h2>
         <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-black font-medium px-4 py-2 rounded">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
</div>

<div className="mt-10">
   <h2 className="text-xl font-semibold mb-4">Guardian Details (if nominee is a minor)</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Name of Guardian</label>
            <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Relationship with Nominee</label>
            <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
          </div>
    <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Contact Number of Guardian</label>
          <PhoneInput
  country="in"
  value={guardianPhone}
  onChange={setGuardianPhone}
  inputProps={{
    name: 'guardianPhone',
    required: true,
    className: 'bg-[#1B2735] text-white rounded-lg w-full',
  }}
  containerClass="w-full mb-4"
  buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
  dropdownClass="custom-dropdown"
  inputStyle={{
    borderRadius: 0,
    border: 'none',
    width: '100%',
    backgroundColor: '#1B2735',
    padding: '0.75rem',
    color: 'white'
  }}
  enableSearch={true}
/>

<style>
{`
  .flag-dropdown {
    background-color: #1B2735 !important;
    border: none !important;
  }

  .flag-dropdown .selected-flag {
    background-color: #1B2735 !important;
  }

  .flag-dropdown .selected-flag .flag {
    background-color: transparent !important;
  }

  /* White background for the dropdown list */
  .custom-dropdown {
    background-color: white !important;
    color: black !important;
  }

  .custom-dropdown .country {
    color: black !important;
  }

  .custom-dropdown .country:hover,
  .custom-dropdown .country.highlight {
    background-color: #f0f0f0 !important;
  }

  /* Optional: Style search input inside dropdown */
  .custom-dropdown input {
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
    border-radius: 6px;
  }
`}
</style>
    </div>
  </div>

  <div className="mt-4">
    <label className="mb-1 text-sm font-medium">Address</label>
    <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
  </div>
</div>

             {/* Upload Nominee's ID Proof */}
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
          <label className="block mb-2 text-sm font-medium">Nominee's ID Proof (PDF/Image)</label>
          <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
            <input type="file" accept=".pdf, image/*" hidden />
            <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
            <div className="text-gray-300">Click to Upload</div>
          </label>
        </div>

            {/* Fund & Investment Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Fund & Investment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Fund House Name</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Folio Number(s)</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Scheme Name</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>SBI Bluechip Fund</option>
                    <option>HDFC Equity Fund</option>
                    <option>Axis Long Term Equity Fund</option>
                    <option>ICICI Prudential Value Discovery Fund</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Scheme Category</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>Large Cap</option>
                    <option>Mid Cap</option>
                    <option>Small Cap</option>
                    <option>Multi Cap</option>
                    <option>ELSS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Investment Amount (in ₹)</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Investment Mode</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>SIP</option>
                    <option>Lumpsum</option>
                    <option>STP</option>
                    <option>SWP</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-gray-400 mb-2">Units Held</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
              </div>
            </div>

            {/* Access Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Access Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Login ID</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-800 p-3 text-white rounded-md"
                    />
                    <i
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Details */}
            <div>
               
              <h2 className="text-xl font-semibold mb-4">Claim Details</h2>
              <div>
                 <div className="flex flex-col"></div>
                  <label className="block text-gray-400 mb-2">AMC Contact Name</label>
                  
                  <input type="text" className="w-96 bg-gray-800 p-3 text-white rounded-md" />
                  
                </div>
                   <div className="w-96">
            <label className="mb-1 text-sm font-medium">AMC Contact Number </label>
          <PhoneInput
  country="in"
  value={guardianPhone}
  onChange={setGuardianPhone}
  inputProps={{
    name: 'guardianPhone',
    required: true,
    className: 'bg-[#1B2735] text-white rounded-lg w-full',
  }}
  containerClass="w-full mb-4"
  buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
  dropdownClass="custom-dropdown"
  inputStyle={{
    borderRadius: 0,
    border: 'none',
    width: '100%',
    backgroundColor: '#1B2735',
    padding: '0.75rem',
    color: 'white'
  }}
  enableSearch={true}
/>
</div>
<style>
{`
  .flag-dropdown {
    background-color: #1B2735 !important;
    border: none !important;
  }

  .flag-dropdown .selected-flag {
    background-color: #1B2735 !important;
  }

  .flag-dropdown .selected-flag .flag {
    background-color: transparent !important;
  }

  /* White background for the dropdown list */
  .custom-dropdown {
    background-color: white !important;
    color: black !important;
  }

  .custom-dropdown .country {
    color: black !important;
  }

  .custom-dropdown .country:hover,
  .custom-dropdown .country.highlight {
    background-color: #f0f0f0 !important;
  }

  /* Optional: Style search input inside dropdown */
  .custom-dropdown input {
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
    border-radius: 6px;
  }
`}
</style>
 </div>

            {/* Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
              <label className="block text-gray-400 mb-2">Upload MF Statement (PDF)</label>
              <label htmlFor="fileUpload" className="border-2 border-dashed border-gray-700 rounded-md p-6 flex items-center justify-center h-32 bg-gray-800 hover:bg-gray-750 cursor-pointer">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="h-10 w-10 bg-[#4ECCA3] rounded-full flex items-center justify-center">
                      <i className="fas fa-plus text-gray-900"></i>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                </div>
                <input
                  id="fileUpload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) console.log("Uploaded file:", file);
                  }}
                />
              </label>
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-400 mb-2">Status</label>
              <select className="w-full md:w-1/3 bg-gray-800 p-3 text-white rounded-md">
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Record Investment Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                Record Investment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-gray-900 text-white rounded-lg w-full max-w-lg shadow-lg relative border border-gray-700">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">MF Investment Added to Portfolio!</h2>
        <p className="text-gray-400 mb-6">
          Your Mutual Fund Investment has been recorded successfully
        </p>

        <div className="bg-gray-800 p-5 rounded-md text-sm mb-6">
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Name</span>
            <span className="text-white font-semibold">SBI Bluechip Fund</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Investment Mode</span>
            <span className="text-white font-semibold">SIP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Investment Amount</span>
            <span className="text-white font-semibold">₹ 25,000</span>
          </div>
        </div>

        <div className="flex justify-center mt-8">
              <button
                onClick={goToHoldingsPage}  // Trigger navigation to MF Holdings page
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                View All MF Investments
              </button>
            </div>
      </div>
    </div>
  </div> 
)}
  </div>
  );
};

export default MutualFundForm;