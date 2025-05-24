import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axisLogo from '../assets/bank_logos/axis.png';
import barodaLogo from '../assets/bank_logos/baroda.png';
import indiaLogo from '../assets/bank_logos/india.png';
import maharashtraLogo from '../assets/bank_logos/maharashtra.png';
import canaraLogo from '../assets/bank_logos/canara.png';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { FaUser } from 'react-icons/fa';

const AddBankAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleViewAccounts = () => {
    setShowModal(false);
    navigate('/linked-accounts');
  };

const [guardianPhone, setGuardianPhone] = useState('');

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

  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

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

        {/* Page Content */}
        <div className="flex-1 p-6 md:p-10">
          {/* Title */}
          <div className="flex items-center mb-8">
            <h1 className="text-2xl font-bold">Add New Bank Account Information</h1>
          </div>

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

      {/* Sections */}
<div className="space-y-10">
  {[
    {
      title: "Account Information",
      fields: [
        "Account Holder Name",
        "Branch Name",
        "Account Type",
        "Account Number",
        "IFSC Code",
      ],
      isSelect: [true, false, true, false, false], 
      options: [
        ["Mr. Bankim Doshi", "Mrs. Nita Doshi","Mr. Rashesh Doshi","Mrs.Jagruti Doshi","Bankim Doshi HUF","Rashesh Doshi HUF","Mrs. Pritika Doshi","Mr. Krishna Doshi","Talent Corner HR Services Pvt Ltd."], 
        [],
        ["Saving", "Current"],
        [],
        [],
      ],
      showLabels: [true, true, false, true, true],
    },
    {
      title: "Account Status",
      fields: ["Date of Account Opening", "Current Status"],
      isSelect: [false, true],
      options: [[], ["Active", "Dormant","Closed"]],
      showLabels: [true, true],
    },
{
  title: "Nominee Details",
  customJSX: ( 
    <div>
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
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Guardian Details (if nominee is a minor)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      </div>
    </div>
  )
},
    {
      title: "Contact & KYC Details",
      fields: [
        "Registered Mobile Number",
        "Registered Email ID",
        "Linked PAN Number",
        "Linked Aadhar Number",
      ],
      isSelect: [false, false, false, false],
      showLabels: true,
    },
    {
  title: "Upload Documents",
  customJSX: (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left upload */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Upload Passbook Copy/Bank Statement (PDF)
          </label>
          <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
            <input type="file" accept="application/pdf" hidden />
            <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
            <div className="text-gray-300">Click to Upload</div>
          </label>
        </div>

        {/* Right upload */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Upload Account Opening Form (PDF)
          </label>
          <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
            <input type="file" accept="application/pdf" hidden />
            <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
            <div className="text-gray-300">Click to Upload</div>
          </label>
        </div>
      </div>
    </div>
  ),
},

    {
      title: "Other Details",
      fields: ["Net Banking Enabled?", "UPI Linked?"],
      isSelect: [true, true],
      options: [["Yes", "No"], ["Yes", "No"]],
    },
  ].map((section, i) => (
    <section key={i}>
      {section.customJSX ? (
        <div>{section.customJSX}</div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.fields.map((field, idx) => {
              const showLabel = Array.isArray(section.showLabels)
                ? section.showLabels[idx]
                : section.showLabels;

              if (section.isFile) {
                return (
                  <label
                    key={idx}
                    className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition"
                  >
                    <input type="file" accept="application/pdf" hidden />
                    <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                    <div className="text-gray-300">Click to Upload</div>
                  </label>
                );
              } else if (section.isSelect?.[idx]) {
                return (
                  <div key={idx} className="flex flex-col">
                    <label className="mb-1 text-sm text-white font-medium">{field}</label>
                    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                      {section.options?.[idx]?.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                );
              } else if (field.toLowerCase().includes("date")) {
  return (
    <div key={idx} className="flex flex-col">
      <label className="mb-1 text-sm text-white font-medium">{field}</label>
      <input
        type="date"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
      />
    </div>
  );
}
else if (showLabel) {
                return (
                  <div key={idx} className="flex flex-col">
                    <label className="mb-1 text-sm text-white font-medium">{field}</label>
                    <input
                      type="text"
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>
                );
              } else {
                return (
                  <input
                    key={idx}
                    type="text"
                    placeholder={field}
                    className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                  />
                );
              }
            })}
          </div>
        </div>
      )}
    </section>
  ))}
</div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button
              className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              onClick={() => setShowModal(true)}
            >
              Record New Account
            </button>
          </div>

          {/* Success Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-[#1B2735] text-white p-8 rounded-lg shadow-xl w-full max-w-xl relative">
                <button
                  className="absolute top-3 right-4 text-white text-xl"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-2">Bank Account Added to Portfolio!</h2>
                <p className="mb-4">Your new Bank Account details have been recorded successfully!</p>
                <div className="bg-[#2C3A4B] p-4 rounded-md mb-4">
                  <div className="flex justify-between border-b border-gray-600 py-2">
                    <span className="font-medium">Bank Name</span>
                    <span>HDFC Bank</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-600 py-2">
                    <span className="font-medium">Account Type</span>
                    <span>Savings Account</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Branch Name</span>
                    <span>Ghatkopar (W)</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500"
                    onClick={handleViewAccounts}
                  >
                    View All Linked Accounts
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

export default AddBankAccount;
