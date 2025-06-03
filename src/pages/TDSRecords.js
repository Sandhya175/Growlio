import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar'; 
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const gstPdf = "/sample.pdf"; 


const TDSRecords = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const tdsData = [
  {
    section: "194A",
    amountPaid: "₹ 20,000",
    tdsDeducted: "₹ 10,000",
    paymentDate: "02/08/2024",
    deductionDate: "05/11/2024",
    depositDate: "05/11/2024",
    challanNumber: "HDA3819190",
    bsrCode: "92849729892",
    depositMode: "Online",
    netPayable: "₹ 10,000"
  },
  {
    section: "194A",
    amountPaid: "₹ 20,000",
    tdsDeducted: "₹ 10,000",
    paymentDate: "02/08/2024",
    deductionDate: "05/11/2024",
    depositDate: "05/11/2024",
    challanNumber: "HDA3819190",
    bsrCode: "92849729892",
    depositMode: "Offline",
    netPayable: "₹ 10,000"
  },
  {
    section: "194C",
    amountPaid: "₹ 20,000",
    tdsDeducted: "₹ 10,000",
    paymentDate: "02/08/2024",
    deductionDate: "05/11/2024",
    depositDate: "05/11/2024",
    challanNumber: "HDA3819190",
    bsrCode: "92849729892",
    depositMode: "Online",
    netPayable: "₹ 10,000"
  },
  {
    section: "194H",
    amountPaid: "₹ 20,000",
    tdsDeducted: "₹ 10,000",
    paymentDate: "02/08/2024",
    deductionDate: "05/11/2024",
    depositDate: "05/11/2024",
    challanNumber: "HDA3819190",
    bsrCode: "92849729892",
    depositMode: "Online",
    netPayable: "₹ 10,000"
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
            <h1 className="text-2xl font-bold">TAX DEDUCTED AT SOURCE DETAILS</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-gray-600 pb-2 mb-4 text-sm">
            <button><span className="hover:border-b-2 hover:border-transparent px-1">STCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">LTCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">Income Tax</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">GST</span></button>
            <button><span className="border-b-2 border-white inline-block px-1">TDS</span></button>
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

{/* TDS Data Table */}
<div className="bg-[#1E293B] rounded-lg p-4 overflow-x-auto mt-6">
  <table className="w-full text-sm text-left">
    <thead>
      <tr className="text-gray-400 border-b border-gray-700">
        <th className="py-2">TDS Section</th>
        <th>Amount Paid</th>
        <th>TDS Deducted</th>
        <th>Date of Payment</th>
        <th>Date of Deduction</th>
        <th>Date of Deposit</th>
        <th>Challan Number</th>
        <th>Bank BSR Code</th>
        <th>Mode of Deposit</th>
        <th>Net Payable Amount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tdsData.map((item, index) => (
        <tr key={index} className="border-b border-gray-700 hover:bg-[#2D3748] text-white">
          <td className="py-2">{item.section}</td>
          <td>{item.amountPaid}</td>
          <td>{item.tdsDeducted}</td>
          <td>{item.paymentDate}</td>
          <td>{item.deductionDate}</td>
          <td>{item.depositDate}</td>
          <td>{item.challanNumber}</td>
          <td>{item.bsrCode}</td>
          <td>{item.depositMode}</td>
          <td>{item.netPayable}</td>
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
              onClick={() => navigate('/record-gst')}
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

export default TDSRecords;
