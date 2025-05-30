import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar'; 
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const gstPdf = "/sample.pdf"; 


const Dividenddetails = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

 const dividendData = [
  {
    investor: "Mr. Anil",
    receiptDate: "02/08/2024",
    investmentType: "Mutual Funds",
    company: "XYZ Pvt Ltd.",
    unitsHeld: "77 Units",
    dividendType: "Interim",
    dividendPerUnit: "₹ 22,000",
    totalAmount: "₹ 22,000",
    taxRate: "18%",
    netAmount: "₹ 10,000"
  },
  {
    investor: "Mr. Anil",
    receiptDate: "02/08/2024",
    investmentType: "ETFs",
    company: "XYZ Pvt Ltd.",
    unitsHeld: "77 Units",
    dividendType: "Final",
    dividendPerUnit: "₹ 22,000",
    totalAmount: "₹ 22,000",
    taxRate: "18%",
    netAmount: "₹ 10,000"
  },
  {
    investor: "Mr. Suni",
    receiptDate: "02/08/2024",
    investmentType: "Mutual Funds",
    company: "XYZ Pvt Ltd.",
    unitsHeld: "77 Units",
    dividendType: "Interim",
    dividendPerUnit: "₹ 22,000",
    totalAmount: "₹ 22,000",
    taxRate: "18%",
    netAmount: "₹ 10,000"
  },
  {
    investor: "Mr. Ajay",
    receiptDate: "02/08/2024",
    investmentType: "Bonds",
    company: "XYZ Pvt Ltd.",
    unitsHeld: "77 Units",
    dividendType: "Quarterly",
    dividendPerUnit: "₹ 22,000",
    totalAmount: "₹ 22,000",
    taxRate: "18%",
    netAmount: "₹ 10,000"
  }
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
            <h1 className="text-2xl font-bold">DIVIDEND DETAILS</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-gray-600 pb-2 mb-4 text-sm">
            <button><span className="hover:border-b-2 hover:border-transparent px-1">STCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">LTCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">Income Tax</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">GST</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">TDS</span></button>
            <button><span className="border-b-2 border-white inline-block px-1">Dividends</span></button>
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

{/* Dividend Information Table */}
<div className="bg-[#1E293B] rounded-lg p-4 overflow-x-auto mt-6">
  <table className="w-full text-sm text-left">
    <thead>
      <tr className="text-gray-400 border-b border-gray-700">
        <th className="py-2">Investor Name</th>
        <th>Date of Receipt</th>
        <th>Type of Investment</th>
        <th>Company/Fund Name</th>
        <th>Number of Units/Shares Held</th>
        <th>Dividend Type</th>
        <th>Dividend per Share/Unit</th>
        <th>Total Amount Received</th>
        <th>Tax Rate (%)</th>
        <th>Net Dividend Amount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {dividendData.map((item, index) => (
        <tr key={index} className="border-b border-gray-700 hover:bg-[#2D3748] text-white">
          <td className="py-2">{item.investor}</td>
          <td>{item.receiptDate}</td>
          <td>{item.investmentType}</td>
          <td>{item.company}</td>
          <td>{item.unitsHeld}</td>
          <td>{item.dividendType}</td>
          <td>{item.dividendPerUnit}</td>
          <td>{item.totalAmount}</td>
          <td>{item.taxRate}</td>
          <td>{item.netAmount}</td>
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
          <div className="flex justify-center mt-6">
            <button
              className="bg-teal-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-teal-300 transition"
              onClick={() => navigate('/record-gst')}
            >
              Add New Record
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dividenddetails;
