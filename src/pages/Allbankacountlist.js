import React from 'react';
import Sidebar from '../components/Sidebar';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Allbankacountlist = () => {
  const navigate = useNavigate();
 
const accounts = [
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "HDFC000001",
    openingDate: "09/08/2024",
    status: "Active",
    mobile: "+91 9568726301",
    email: "nitadoshi@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: true,
    netBanking: true,
    upiLinked: true,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Vikroli (W)",
    type: "Current",
    number: "**** **** **** 7884",
    ifsc: "SBI000001",
    openingDate: "09/08/2024",
    status: "Closed",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: false,
    openingForm: false,
    netBanking: true,
    upiLinked: true,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
    status: "Dormant",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
     status: "Closed",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
    status: "Dormant",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
    status: "Active",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
    status: "Dormant",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
  {
    name: "Mr. Bankim Doshi",
    branch: "Ghatkopar (W)",
    type: "Savings",
    number: "**** **** **** 7884",
    ifsc: "ICICI00001",
    openingDate: "09/08/2024",
   status: "Active",
    mobile: "+91 9568726301",
    email: "doshi123@gmail.com",
    pan: "AWN8991233",
    aadhaar: "**** **** 9900",
    passbookDoc: true,
    openingForm: false,
    netBanking: false,
    upiLinked: false,
  },
];

const statusColors = {
  Active: "bg-green-600",
  Closed: "bg-red-600",
  Dormant: "bg-yellow-600",
};

  return (
     <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

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

        {/* Page content */}
       <div className="px-10 py-8">
          {/* Header */}
          <div className="mb-8">
  <div className="flex items-center gap-4">
    <button
      onClick={() => navigate(-1)}
      className="mr-4 text-white hover:text-gray-400 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <h1 className="text-2xl font-bold">Your Linked Bank Accounts</h1>
  </div>
  <p className="text-gray-400 text-lg font-semibold mt-4 ml-14">
    All your bank accounts at a glance!
  </p>
  </div>

        {/* Top section */}
<div className="flex items-center gap-6 mb-8 max-w-full">
  {/* Balance */}
  <div className="bg-[#16202C] p-6 rounded-lg min-w-[220px]">
    <p className="text-gray-400 text-sm mb-2">Total Balance</p>
    <h2 className="text-2xl font-bold mb-1">₹12,00,00,000</h2>
    <p className="text-gray-400 text-sm">8 Bank Accounts</p>
  </div>

  {/* Search and Filter */}
  <div className="flex items-end gap-6">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search Bank Account..."
      className="px-6 py-3 rounded-lg bg-[#0D1520] border border-gray-700 text-xl text-white w-96"
    />

    {/* Filter with label above */}
    <div className="flex flex-col">
      <label htmlFor="filter" className="text-white text-sm font-semibold mb-1">
        Filter By
      </label>
      <select
        id="filter"
        className="px-6 py-3 rounded-lg bg-[#0D1520] border border-gray-700 text-xl text-white w-96"
        defaultValue="all"
      >
        <option value="all">All Banks</option>
        <option value="hdfc">HDFC Bank</option>
        <option value="axis">Axis Bank</option>
        <option value="icici">ICICI Bank</option>
      </select>
    </div>
  </div>
</div>

{/* Full Account Details Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Account Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Acc Holder Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Branch Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Type</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Number</th>
        <th className="py-2 px-3 whitespace-nowrap">IFSC Code</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Account Opening</th>
        <th className="py-2 px-3 whitespace-nowrap">Current Status</th>
        <th className="py-2 px-3 whitespace-nowrap">Registered Mob No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Registered Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Linked PAN Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Linked Aadhaar Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Passbook/Bank Statement Copy</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Opening Form</th>
        <th className="py-2 px-3 whitespace-nowrap">Net Banking Enabled?</th>
        <th className="py-2 px-3 whitespace-nowrap">UPI Linked?</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {accounts.map((acc, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 font-semibold whitespace-nowrap">{acc.name}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.branch}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.type}</td>
          <td className="py-2 px-3 font-mono tracking-widest whitespace-nowrap">{acc.number}</td>
          <td className="py-2 px-3 font-semibold whitespace-nowrap">{acc.ifsc}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.openingDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-semibold text-white ${
                statusColors[acc.status] || "bg-gray-600"
              }`}
            >
              {acc.status.toUpperCase()}
            </span>
          </td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.mobile}</td>
          <td className="py-2 px-3 underline cursor-pointer text-blue-400 whitespace-nowrap">{acc.email}</td>
          <td className="py-2 px-3 font-semibold whitespace-nowrap">{acc.pan}</td>
          <td className="py-2 px-3 font-mono tracking-widest whitespace-nowrap">{acc.aadhaar}</td>
          <td
            className={`py-2 px-3 cursor-pointer font-semibold whitespace-nowrap ${
              acc.passbookDoc ? "text-green-400" : "text-yellow-500"
            }`}
          >
            {acc.passbookDoc ? "VIEW DOCUMENT" : "NOT UPLOADED"}
          </td>
          <td
            className={`py-2 px-3 cursor-pointer font-semibold whitespace-nowrap ${
              acc.openingForm ? "text-green-400" : "text-yellow-500"
            }`}
          >
            {acc.openingForm ? "VIEW DOCUMENT" : "NOT UPLOADED"}
          </td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.netBanking ? "Yes" : "No"}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.upiLinked ? "Yes" : "No"}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Nominee Details Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Nominee Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="p-4">Nominee Name</th>
        <th className="p-4">Relationship with Acc Holder</th>
        <th className="p-4">DOB</th>
        <th className="p-4">Percentage Share</th>
        <th className="p-4">Address</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: "Mrs. Nita Doshi", relation: "Wife", dob: "09/07/1998", share: "50%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mrs. Nita Doshi", relation: "Wife", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mrs. Jagruti Doshi", relation: "Daughter", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mrs. Jagruti Doshi", relation: "Daughter", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
      ].map((nominee, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="p-4">{nominee.name}</td>
          <td className="p-4">{nominee.relation}</td>
          <td className="p-4">{nominee.dob}</td>
          <td className="p-4">{nominee.share}</td>
          <td className="p-4">{nominee.address}</td>
          <td className="p-4 flex gap-3 text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Guardian Details Table */}
<h2 className="text-xl font-semibold mb-4">Guardian Details (if Nominee is a minor)</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-sm text-left">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="p-4">Name of Guardian</th>
        <th className="p-4">Relationship with Nominee</th>
        <th className="p-4">Contact No. of Guardian</th>
        <th className="p-4">Address</th>
        <th className="p-4">Nominee ID Proof</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mrs. Nita Doshi</td>
        <td className="p-4">Wife</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4 text-[#FFD966] font-medium cursor-pointer">VIEW DOCUMENT</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mr. Rashesh Doshi</td>
        <td className="p-4">Son</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4">
  <label className="text-gray-400 font-medium cursor-pointer hover:underline">
    UPLOAD FILE HERE
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
  </label>
</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mr. Rashesh Doshi</td>
        <td className="p-4">Son</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4 text-[#FFD966] font-medium cursor-pointer">VIEW DOCUMENT</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
    </tbody>
  </table>
</div>

          {/* Documents */}
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
            <div className="mb-4">
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                <FaDownload />
                passbookcopy.pdf
              </button>
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded">
                <FaDownload />
                accopeningform.pdf
              </button>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-center gap-6">
            <button className="bg-[#30D5C8] text-[#0B101B] font-semibold px-6 py-2 rounded hover:bg-[#28b1a8]">
              Download PDF
            </button>
            <button
      className="bg-transparent border border-white px-6 py-2 rounded font-semibold"
      onClick={() => navigate('axis/bank-dashboard')}
    >
      Go to Bank Dashboard
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allbankacountlist;