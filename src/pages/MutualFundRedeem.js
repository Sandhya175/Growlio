import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const MutualFundRedeem = () => {
  const [selectedScheme, setSelectedScheme] = useState('SBI Bluechip Fund');
  const [selectedCategory, setSelectedCategory] = useState('Large Cap');
  const [selectedMode, setSelectedMode] = useState('SIP');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [dateOfRedemption, setDateOfRedemption] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [guardianPhone, setGuardianPhone] = useState("");

useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
      <div className="space-y-8">
        {/* Topbar */}
         <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">REDEEM MUTUAL FUND INVESTMENT</h1>

         
          {/* Investor & Mutual Fund Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Investor & Mutual Fund Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Name of Investor</label>
                <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
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
                <label className="block text-sm mb-2">Scheme Name</label>
                <div className="relative">
                  <select 
                    className="w-96 bg-gray-800 border-none rounded p-3 pr-8 text-sm "
                    value={selectedScheme}
                    onChange={(e) => setSelectedScheme(e.target.value)}
                  >
                    <option>SBI Bluechip Fund</option>
                    <option>HDFC Top 100 Fund</option>
                    <option>Axis Midcap Fund</option>
                    <option>ICICI Prudential Value Discovery</option>
                  </select>
            
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Scheme Category</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-800 border-none rounded p-2 pr-8 text-sm"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option>Large Cap</option>
                    <option>Mid Cap</option>
                    <option>Small Cap</option>
                    <option>Multi Cap</option>
                    <option>Value</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fund & Investment Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Fund & Investment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Folio Number(s)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Investment Mode</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-800 border-none rounded p-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                  >
                    <option>SIP</option>
                    <option>Lumpsum</option>
                    <option>ELSS</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Date of Purchase</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={dateOfPurchase}
                    onChange={(e) => setDateOfPurchase(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sale Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sale Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Date of Redemption</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={dateOfRedemption}
                    onChange={(e) => setDateOfRedemption(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Units Redeemed</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                 
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Net Asset Value at Redemption (in ₹)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Total Redemption Value</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                 
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Exit Load Charges (%)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Exit Load Amount (in ₹)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Net Payout</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
            </div>
          </div>
          
          {/* Tax Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tax Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Capital Gain Amount</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Tax Deducted at Source (TDS)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                
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


          {/* Upload Documents */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
          <label className="block mb-2 text-sm font-medium">Upload Redemption Proof (PDF/Image)</label>
          <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
            <input type="file" accept=".pdf, image/*" hidden />
            <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
            <div className="text-gray-300">Click to Upload</div>
          </label>
        </div>
        
          
          {/* Action Button */}
          <div className="flex justify-center mt-10">
          <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                Record Investment
              </button>
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
        <h2 className="text-2xl font-bold mb-2">MF Redemption Added to Portfolio!</h2>
        <p className="text-gray-400 mb-6">
          Your Mutual Fund Redemption has been recorded successfully
        </p>

        <div className="bg-gray-800 p-5 rounded-md text-sm mb-6">
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Name</span>
            <span className="text-white font-semibold">SBI Bluechip Fund</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Catogory</span>
            <span className="text-white font-semibold">Large Cap</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Redemption Value</span>
            <span className="text-white font-semibold">₹ 25,000</span>
          </div>
        </div>

        <div className="text-center">
        <button
  onClick={() => {
    setShowModal(false);
    navigate('/redeemed-funds'); // This will navigate to the RedeemedFunds page
  }}
  className="bg-[#00E0B8] hover:bg-[#00cfa9] text-gray-900 font-medium py-2 px-6 rounded"
>
  View All MF Investments
</button>

        </div>
      </div>
    </div>
  </div> 
)}
    </div>
    </div>

  );
}

export default MutualFundRedeem;