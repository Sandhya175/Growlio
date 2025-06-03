import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PieChart from "../components/PieChart";
import BorrowingsPortfolioPerformanceGraph from '../components/BorrowingsPortfolioPerformanceGraph';
import { BarChart3, HandCoins, CreditCard } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Borrowingsdashboard = () => {
    const [username, setUsername] = useState('');
      const navigate = useNavigate();
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
  // Sample data for PieChart matching your sector allocation
  const pieData = [
    { label: "Technology", value: 28, color: "#3b82f6" },
    { label: "Healthcare", value: 19, color: "#fde68a" },
    { label: "Financials", value: 12, color: "#fb923c" },
    { label: "Consumer Goods", value: 22, color: "#a78bfa" },
    { label: "Energy", value: 7, color: "#ef4444" },
    { label: "Others", value: 3, color: "#f3f4f6" }
  ];

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#0D1520] ml-60">
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
        <div className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold"> MY BORROWINGS INVESTMENTS </h1>

            <div>
  <select className="w-80 p-2 bg-[#1B2735] text-white p-3 rounded" >
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

{/* Summary Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Total Loan Amount */}
  <div className="bg-[#1B2735] p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-cyan-100 p-3 rounded-full">
        <BarChart3 className="text-teal-500" size={24} />
      </div>
      <div>
        <p className="text-l text-gray-400">Total Loan Amount</p>
        <p className="text-lg font-semibold text-white">₹ 20,00,000</p>
      </div>
    </div>
  </div>

  {/* Overall Gain/Loss */}
  <div className="bg-[#1B2735] p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-orange-100 p-3 rounded-full">
        <HandCoins className="text-orange-500" size={24} />
      </div>
      <div>
        <p className="text-l text-gray-400">Overall Gain/Loss</p>
        <p className="text-lg font-semibold text-green-500">₹ 5,00,000</p>
      </div>
    </div>
  </div>

  {/* Cash Balance */}
  <div className="bg-[#1B2735] p-4 rounded-lg flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <CreditCard className="text-purple-500" size={24} />
      </div>
      <div>
        <p className="text-l text-gray-400">Cash Balance</p>
        <p className="text-lg font-semibold text-white">₹ 15,00,000</p>
      </div>
    </div>
  </div>
</div>

          {/* Portfolio Performance */}
          <div className="bg-[#1B2735] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Portfolio Performance</h2>
              <div className="flex space-x-2 text-sm">
          <button className="bg-[#1f2937] text-white px-2 py-1 rounded">1W</button>
          <button className="bg-[#1f2937] text-white px-2 py-1 rounded">1M</button>
          <button className="bg-[#1f2937] text-white px-2 py-1 rounded">6M</button>
          <button className="bg-yellow-500 text-black px-2 py-1 rounded">1Y</button>
          <button className="bg-[#1f2937] text-white px-2 py-1 rounded">5Y</button>
          <button className="bg-[#1f2937] text-white px-2 py-1 rounded">10Y</button>
              </div>
            </div>
            <div className="w-full h-74 bg-gradient-to-b from-[#1B2735] to-[#0D1520] rounded-lg p-4">
              <BorrowingsPortfolioPerformanceGraph />

            </div>
          </div>

{/* Borrowings Details */}
<div className="bg-[#1B2735] p-6 rounded-lg text-white">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Borrowings Details</h2>
    <button
      onClick={() => navigate('/linked-borrowings')}
      className="text-[#F7A600] text-sm font-medium"
    >
      View All
    </button>
  </div>
  <div className="rounded-md overflow-hidden">
    <table className="w-full text-left text-sm">
      <thead className="text-gray-400">
        <tr>
          <th className="p-3">Outstanding Amount (₹)</th>
          <th className="p-3">Total Paid (₹)</th>
          <th className="p-3">Next Due Date</th>
          <th className="p-3">Auto Debit Enabled</th>
          <th className="p-3">Purpose/Note</th>
          <th className="p-3">Repayment Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3 font-medium">₹ 35,00,000</td>
          <td className="p-3">₹ 10,00,000</td>
          <td className="p-3">01/06/2025</td>
          <td className="p-3">Yes</td>
          <td className="p-3">Home purchase in Mumbai</td>
          <td className="p-3">
            <span className="inline-block w-24 text-center bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Closed
            </span>
          </td>
        </tr>
        <tr>
          <td className="p-3 font-medium">₹ 1,50,000</td>
          <td className="p-3">₹ 3,50,000</td>
          <td className="p-3">15/06/2025</td>
          <td className="p-3">No</td>
          <td className="p-3">Wedding Expenses</td>
          <td className="p-3">
            <span className="inline-block w-24 text-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              OVERDUE
            </span>
          </td>
        </tr>
        <tr>
          <td className="p-3 font-medium">₹ 6,20,000</td>
          <td className="p-3">₹ 2,30,000</td>
          <td className="p-3">20/06/2025</td>
          <td className="p-3">Yes</td>
          <td className="p-3">Purchase of new car</td>
          <td className="p-3">
            <span className="inline-block w-24 text-center bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              OVERDUE
            </span>
          </td>
        </tr>
        <tr>
          <td className="p-3 font-medium">₹ 35,00,000</td>
          <td className="p-3">₹ 10,00,000</td>
          <td className="p-3">01/06/2025</td>
          <td className="p-3">Yes</td>
          <td className="p-3">Home purchase in Pune</td>
          <td className="p-3">
            <span className="inline-block w-24 text-center bg-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
              ACTIVE
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


          {/* Sector Allocation */}
<div className="bg-[#1B2735] p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">

{/* LEFT: Heading + Pie Chart */}
<div className="flex flex-row justify-start items-start space-x-4">
  <h2 className="text-white text-2xl font-semibold whitespace-nowrap mt-0">
    Loan Allocation
  </h2>
  <div className="mt-10">
    <PieChart data={pieData} />
  </div>
</div>

 {/* RIGHT: Filter + Breakdown - Centered */}
<div className="flex flex-col items-center w-full max-w-sm ml-auto mr-4">
  {/* Filter Dropdown */}
  <div className="w-full mb-4">
    <label htmlFor="filter" className="block text-l text-gray-300 mb-1 text-left">
      Filter by Financial Year
    </label>
    <select
      id="filter"
      className="w-full bg-[#0D1520] border border-gray-600 rounded px-3 py-2 text-white"
    >
      <option>2024-25</option>
      <option>2025-26</option>
    </select>
  </div>

{/* Breakdown Box */}
<div className="border border-gray-400 rounded-md w-full bg-[#1E293B]">
  <div className="text-center border-b border-gray-400 py-1 font-semibold text-white bg-transparent">
    Breakdown
  </div>
  <div className="p-4 space-y-4 text-white rounded-b-md">
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 rounded bg-[#86CFC2]" />
      <span className="font-medium">Home Loan (50%)</span>
    </div>
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 rounded bg-[#F7B36B]" />
      <span className="font-medium">Personal Loan (25%)</span>
    </div>
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 rounded bg-[#F59C6B]" />
      <span className="font-medium">Vehicle Loan(15%)</span>
    </div>
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 rounded bg-[#63A9E0]" />
      <span className="font-medium">Others(10%)</span>
    </div>
  </div>
</div>
      </div>
          </div>

          {/* Alerts Section */}
          <div className="space-y-2 mt-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Alerts & Notifications</h3>
              <button className="text-orange-400 text-sm hover:underline">
                View All
              </button>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow overflow-x-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-4a1 1 0 00-.993.883L9 7v4a1 1 0 001.993.117L11 11V7a1 1 0 00-1-1zm0 8a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Payment Reminder</p>
                    <p className="text-gray-300">
                      Personal Loan of ₹40,000 on 12/04/2025 to Mr.Suresh is Pending.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.68-1.36 3.445 0l6.518 11.593c.75 1.333-.213 3.008-1.722 3.008H3.461c-1.51 0-2.473-1.675-1.723-3.008L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">Alert</p>
                    <p className="text-gray-300">
                      Interest rates on Home Loan have increase by 10%.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrowingsdashboard;