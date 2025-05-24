import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axisLogo from '../assets/bank_logos/axis.png';
import barodaLogo from '../assets/bank_logos/baroda.png';
import indiaLogo from '../assets/bank_logos/india.png';
import maharashtraLogo from '../assets/bank_logos/maharashtra.png';
import canaraLogo from '../assets/bank_logos/canara.png';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddDeposit = () => {
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [guardianPhone, setGuardianPhone] = useState("");

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleRecordRD = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleViewAllRD = () => {
    navigate('/my-bank-investments');
  };

  const [selectedBank, setSelectedBank] = useState({
      name: 'Axis Bank',
      logo: axisLogo,
    });
    const banks = [
    { name: 'Axis Bank', logo: axisLogo },
    { name: 'Baroda Bank', logo: barodaLogo },
    { name: 'India Bank', logo: indiaLogo },
    { name: 'Maharashtra Bank', logo: maharashtraLogo },
    { name: 'Canara Bank', logo: canaraLogo },
  
    ];
const handleBankChange = (e) => {
    const bank = banks.find((b) => b.name === e.target.value);
    if (bank) {
      setSelectedBank(bank);
    }
  };
  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className={`flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60 ${showModal ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
        </div>

        <div className="flex-1 px-10 py-8">
          <h1 className="text-2xl font-bold uppercase mb-6">Add New Recurring Deposit Account Information</h1>

  {/* Bank Name with Logo */}
          <h1 className="text-l font-bold">Select Bank</h1>
          <div className="flex items-center bg-[#1B2735] px-6 py-4 rounded-lg text-lg font-semibold mb-6 max-w-md gap-4">
  <img
    src={selectedBank.logo}
    alt={selectedBank.name}
    className="w-10 h-10 object-contain"
  />
  <div className="relative w-full max-w-xs">
  <select
    value={selectedBank.name}
    onChange={handleBankChange}
    className="appearance-none w-full bg-transparent text-white font-semibold focus:outline-none pr-8"
  >
    {banks.map((bank) => (
      <option
        key={bank.name}
        value={bank.name}
        className="text-black"
      >
        {bank.name}
      </option>
    ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white">
    ▼
  </div>
</div>
</div>
      
          <form className="space-y-10">

            {/* Account Info */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Account Information</h2>
              <div className="flex flex-wrap gap-4">
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
                  <label className="block mb-1 text-white">Account Number</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded w-80" />
                </div>
              </div>
            </div>

            {/* Deposit Details */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Deposit Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-1">Start Date</label>
                  <input type="date" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
                </div>
                <div>
                  <label className="block mb-1">Maturity Date</label>
                  <input type="date" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
                </div>
                <div>
                  <label className="block mb-1">Deposit Amount (in ₹)</label>
                  <input type="number" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
                </div>
              </div>
              <div className="mt-6 max-w-md">
                <label className="block mb-1">Total Installments</label>
                <input type="number" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
              </div>
            </div>

            {/* Interest Info */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Interest & Payout Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-1">Interest Rate (%)</label>
                  <input type="number" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
                </div>
                <div>
                  <label className="block mb-1">Interest Type</label>
                  <select className="w-full p-2 bg-[#1B2735]  text-white p-3 rounded">
                    <option>Simple</option>
                    <option>Compound</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Payment Frequency</label>
                  <select className="w-full p-2 bg-[#1B2735]  text-white p-3 rounded">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Half-Yearly</option>
                    <option>Yearly</option>
                  </select>
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

  {/* Additional Info */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
  <div className="w-80">
    <label className="block mb-1">Nominee Name</label>
    <input type="text" className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" />
  </div>
  <div className="w-80">
    <label className="block mb-1">Status</label>
    <select className="w-full p-2 bg-[#1B2735] text-white p-3 rounded">
      <option>Active</option>
      <option>Matured</option>
      <option>Withdrawn</option>
    </select>
  </div>
</div>

              </div>
            </div>

 {/* Upload */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Upload Documents</h2>
              <label className="block mb-2">Upload RD Document (PDF)</label>
              <div className="w-full h-40 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center hover:bg-[#2a3b4f] cursor-pointer" onClick={handleFileClick}>
                <input type="file" accept="application/pdf" ref={fileInputRef} className="hidden" />
                <div className="text-center">
                  <span className="text-4xl text-gray-400">+</span>
                  <p className="text-gray-400 mt-2">Click to Upload</p>
                </div>
              </div>
            </div>

            
            {/* Submit */}
            <div className="mt-10 flex justify-center">
              <button type="button" onClick={handleRecordRD} className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors">
                Record RD Details
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg w-[500px] shadow-lg text-white relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">RD Details Added to Portfolio!</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl font-bold">×</button>
            </div>
            <p className="mb-6 text-sm text-gray-300">Your new Recurring Deposit details has been recorded successfully!</p>
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span>Principal Amount</span>
                <span>₹ 20,000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Interest Earned</span>
                <span>₹ 2,000</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Return</span>
                <span>₹ 22,000</span>
              </div>
            </div>
            <button onClick={handleViewAllRD} className="bg-teal-400 hover:bg-teal-500 text-black font-medium py-2 px-4 rounded w-full">
              View All RD Records
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddDeposit;
