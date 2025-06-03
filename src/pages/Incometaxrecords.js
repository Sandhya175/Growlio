import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar'; 
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const gstPdf = "/sample.pdf"; 

const Incometaxrecords = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

const taxationData = [
  {
    investor: "Mr. Anil",
    year: "2024–25",
    salary: "₹10,00,000",
    houseIncome: "₹1,20,000",
    otherIncome: "₹50,000",
    businessIncome: "₹0",
    totalIncome: "₹11,70,000",
    deductions: "₹1,50,000",
    regime: "New",
    taxableIncome: "₹10,20,000",
    taxPayable: "₹76,000",
    taxPaid: "₹80,000",
  },
  {
    investor: "Mr. Anil",
    year: "2024–25",
    salary: "₹6,50,000",
    houseIncome: "₹0",
    otherIncome: "₹25,000",
    businessIncome: "₹1,00,000",
    totalIncome: "₹7,75,000",
    deductions: "₹50,000",
    regime: "New",
    taxableIncome: "₹7,25,000",
    taxPayable: "₹42,500",
    taxPaid: "₹30,000",
  },
  {
    investor: "Mr. Suni",
    year: "2024–25",
    salary: "₹4,00,000",
    houseIncome: "₹0",
    otherIncome: "₹0",
    businessIncome: "₹0",
    totalIncome: "₹4,00,000",
    deductions: "₹1,00,000",
    regime: "Old",
    taxableIncome: "₹3,00,000",
    taxPayable: "₹0",
    taxPaid: "₹0",
  },
  {
    investor: "Mr. Ajay",
    year: "2024–25",
    salary: "₹6,50,000",
    houseIncome: "₹0",
    otherIncome: "₹0",
    businessIncome: "₹0",
    totalIncome: "₹7,75,000",
    deductions: "₹50,000",
    regime: "New",
    taxableIncome: "₹7,25,000",
    taxPayable: "₹0",
    taxPaid: "₹0",
  },
];



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
        <div className="p-8 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">INCOME TAX DETAILS</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-gray-600 pb-2 mb-4 text-sm">
            <button><span className="hover:border-b-2 hover:border-transparent px-1">STCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">LTCG</span></button>
            <button><span className="border-b-2 border-white inline-block px-1">Income Tax</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">GST</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">TDS</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">Dividends</span></button>
          </div>

          {/* Year Dropdown */}
          <div className="flex gap-4">
            <select
              className="text-sm border px-4 py-2 rounded bg-[#1E293B] text-white"
              defaultValue="FY 2022-23"
            >
              {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => {
                const startYear = 2000 + i;
                const endYear = startYear + 1;
                return (
                  <option key={startYear} value={`FY ${startYear}-${endYear}`}>
                    FY {startYear}-{endYear}
                  </option>
                );
              })}
            </select>
            <span className="text-gray-400 text-sm">(Select the year to see the regime)</span>
          </div>

          {/* Download PDF */}
          <div className="flex justify-end mb-2 mt-4">
            <a
              href={gstPdf}
              download
              className="flex items-center text-sm text-yellow-300 hover:text-yellow-400"
            >
              <FiDownload className="mr-1" />
              PDF
            </a>
          </div>

{/* Taxation Information Table */}
<div className="bg-[#1E293B] rounded-lg p-4 overflow-x-auto mt-6">
  <table className="w-full text-sm text-left">
    <thead>
      <tr className="text-gray-400 border-b border-gray-700">
        <th className="py-2">Investor Name</th>
        <th>Assessment Year</th>
        <th>Salary Income</th>
        <th>House Property Income</th>
        <th>Other Income</th>
        <th>Business Income</th>
        <th>Total Income</th>
        <th>Deductions Claimed</th>
        <th>Tax Regime</th>
        <th>Taxable Income</th>
        <th>Tax Payable</th>
        <th>Tax Paid</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {taxationData.map((item, index) => (
        <tr key={index} className="border-b border-gray-700 hover:bg-[#2D3748] text-white">
          <td className="py-2">{item.investor}</td>
          <td>{item.year}</td>
          <td>{item.salary}</td>
          <td>{item.houseIncome}</td>
          <td>{item.otherIncome}</td>
          <td>{item.businessIncome}</td>
          <td>{item.totalIncome}</td>
          <td>{item.deductions}</td>
          <td>{item.regime}</td>
          <td>{item.taxableIncome}</td>
          <td>{item.taxPayable}</td>
          <td>{item.taxPaid}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" title="Edit" />
            <MdDelete className="hover:text-red-400 cursor-pointer" title="Delete" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Add New Record */}
             <div className="flex justify-center mt-6 gap-6">
            <button
              className="bg-teal-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-teal-300 transition"
              onClick={() => navigate('/incometax')}
            >
              Add New Record
            </button>
            <button
      className="bg-transparent border border-white py-3 px-8  rounded font-semibold"
      onClick={() => navigate('/taxation-dashboard')}
    >
      Go to Taxation Dashboard
    </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Incometaxrecords;
