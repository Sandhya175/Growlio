import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import { MdEdit, MdDelete } from 'react-icons/md';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const StockHoldings = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
 
const accounts = [
  {
    industry: "Technology",
    company: "TCS",
    stock: "TCSH",
    investorName: "Mr. Bankim Doshi",
    brokerName: "Mr. XYZ KKK",
    tradingAccNo: "HDFC000001",
    dematAccNo: "34562655",
    depository: "Mr. GSG YDSHI",
    dateOfPurchase: "09/08/2024",
    shares: 455,
    pricePerShare: " 8000",
    purchaseValue: " 77,909.00",
    charges: " 77,909.00",
    brokerage: "7,909.00",
    totalValue: " 77,909.00",
  },
  {
    industry: "Technology",
    company: "TCS",
    stock: "TCSH",
    investorName: "Mr. Bankim Doshi",
    brokerName: "Mr. XYZ KKK",
    tradingAccNo: "HDFC000001",
    dematAccNo: "34562655",
    depository: "Mr. GSG YDSHI",
    dateOfPurchase: "09/08/2024",
    shares: 455,
    pricePerShare: " 8000",
    purchaseValue: " 77,909.00",
    charges: " 77,909.00",
    brokerage: "7,909.00",
    totalValue: " 77,909.00",
  },
   {
    industry: "Technology",
    company: "TCS",
    stock: "TCSH",
    investorName: "Mr. Bankim Doshi",
    brokerName: "Mr. XYZ KKK",
    tradingAccNo: "HDFC000001",
    dematAccNo: "34562655",
    depository: "Mr. GSG YDSHI",
    dateOfPurchase: "09/08/2024",
    shares: 455,
    pricePerShare: " 8000",
    purchaseValue: " 77,909.00",
    charges: " 77,909.00",
    brokerage: "7,909.00",
    totalValue: " 77,909.00",
  },
  {
    industry: "Technology",
    company: "TCS",
    stock: "TCSH",
    investorName: "Mr. Bankim Doshi",
    brokerName: "Mr. XYZ KKK",
    tradingAccNo: "HDFC000001",
    dematAccNo: "34562655",
    depository: "Mr. GSG YDSHI",
    dateOfPurchase: "09/08/2024",
    shares: 455,
   pricePerShare: " 8000",
    purchaseValue: " 77,909.00",
    charges: " 77,909.00",
    brokerage: "7,909.00",
    totalValue: " 77,909.00",
  }
];
 
return (
     <div className="min-h-screen bg-[#0D1520] text-white flex">
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

        {/* Page content */}
       <div className="px-10 py-8">
        {/* Header */}
<div className="mb-8 flex items-center justify-left">
  <button
    onClick={() => navigate(-1)}
    className="text-white hover:text-gray-400 transition"
    aria-label="Go Back"
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

  <h1 className="text-2xl font-bold text-white">STOCK HOLDINGS</h1>
   <div style={{ width: 24 }}></div>
</div>

 <div>
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

{/* Filter Dropdowns */}
<div className="flex items-center gap-10 mb-10">
  {/* Filter by Year */}
  <div className="flex flex-col">
    <label className="text-sm text-gray-400 mb-2">Filter by Year</label>
    <select className="px-6 py-2 rounded-md bg-[#0D1520] text-white border border-gray-600 w-96">
      <option>2022-23</option>
      <option>2021-22</option>
      <option>2020-21</option>
    </select>
  </div>

  {/* Filter by Industry */}
  <div className="flex flex-col">
    <label className="text-sm text-gray-400 mb-2">Filter by Industry</label>
    <select className="px-6 py-2 rounded-md bg-[#0D1520] text-white border border-gray-600 w-96">
      <option>All Industries</option>
      <option>Technology</option>
      <option>Finance</option>
      <option>Healthcare</option>
    </select>
  </div>

  {/* Filter by Company */}
  <div className="flex flex-col">
    <label className="text-sm text-gray-400 mb-2">Filter by Company</label>
    <select className="px-6 py-2 rounded-md bg-[#0D1520] text-white border border-gray-600 w-96">
      <option>All Companies</option>
      <option>Infosys</option>
      <option>Reliance</option>
      <option>TCS</option>
    </select>
  </div>
</div>

{/* Full Account Details Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Account Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Industry Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Company Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Stock Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Name of Invester</th>
        <th className="py-2 px-3 whitespace-nowrap">Name of Broker</th>
        <th className="py-2 px-3 whitespace-nowrap">Trading Acc No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Demat Acc No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Depository Participant</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Purchase</th>
        <th className="py-2 px-3 whitespace-nowrap">Number of Shares</th>
        <th className="py-2 px-3 whitespace-nowrap">Purchase Price(per share)</th>
        <th className="py-2 px-3 whitespace-nowrap">Total Purchase value</th>
        <th className="py-2 px-3 whitespace-nowrap">Charges</th>
        <th className="py-2 px-3 whitespace-nowrap">Brokerage</th>
        <th className="py-2 px-3 whitespace-nowrap">Total Value</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
   <tbody>
  {accounts.map((acc, idx) => (
    <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
      <td className="py-2 px-3 whitespace-nowrap">{acc.industry}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.company}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.stock}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.investorName}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.brokerName}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.tradingAccNo}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.dematAccNo}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.depository}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.dateOfPurchase}</td>
      <td className="py-2 px-3 whitespace-nowrap">{acc.shares}</td>
      <td className="py-2 px-3 whitespace-nowrap">₹{acc.pricePerShare.toLocaleString()}</td>
      <td className="py-2 px-3 whitespace-nowrap">₹{acc.purchaseValue.toLocaleString()}</td>
      <td className="py-2 px-3 whitespace-nowrap">₹{acc.charges.toLocaleString()}</td>
      <td className="py-2 px-3 whitespace-nowrap">₹{acc.brokerage.toLocaleString()}</td>
      <td className="py-2 px-3 whitespace-nowrap font-bold text-green-400">₹{acc.totalValue.toLocaleString()}</td>
      <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
        <MdEdit className="hover:text-blue-400 cursor-pointer" />
        <MdDelete className="text-red-500 hover:text-red-400 cursor-pointer" />
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
                nomineeid.pdf
              </button>
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded">
                <FaDownload />
                stockcontract.pdf
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
      onClick={() => navigate('/stock-dashboard')}
    >
      Go to Stocks Dashboard
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockHoldings;