import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import InsurancePerformanceGraph from '../components/InsurancePerformanceGraph';
import { HandCoins, ReceiptIndianRupee  } from 'lucide-react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Hospital } from 'lucide-react';

const Insurancedashboard = () => {
    const [username, setUsername] = useState('');
      const navigate = useNavigate();
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
          <h1 className="text-2xl font-bold"> MY INSURANCES </h1>

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
 <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
  {/* Total Policies */}
  <div className="bg-[#1B2735] h-40 w-full px-6 py-6 rounded-lg flex items-center gap-6">
   <div className="bg-white text-yellow-500 p-4 rounded-full text-2xl">
      💰
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-4xl font-bold text-white">12</p>
      <p className="text-lg text-gray-400 font-medium">Total Policies</p>
    </div>
  </div>

  {/* Total Claims */}
  <div className="bg-[#1B2735] h-40 w-full px-6 py-6 rounded-lg flex items-center gap-6">
    <div className="bg-blue-200 text-blue-600 p-4 rounded-full">
      <HandCoins size={28} />
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-4xl font-bold text-white">20</p>
      <p className="text-lg text-gray-400 font-medium">Total Claims</p>
    </div>
  </div>

  {/* Payments Made */}
  <div className="bg-[#1B2735] h-40 w-full px-6 py-6 rounded-lg flex items-center gap-6">
    <div className="bg-pink-200 text-pink-600 p-4 rounded-full">
      <ReceiptIndianRupee size={28} />
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-4xl font-bold text-white">02</p>
      <p className="text-lg text-gray-400 font-medium">Payment Mades</p>
    </div>
  </div>
</div>
          {/* Portfolio Performance */}
          <div className="bg-[#1B2735] p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Total Insurance Performance</h2>
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
              <InsurancePerformanceGraph />

            </div>
          </div>

 {/* Section Title and View All Button */}
<div className="flex justify-between items-center mb-6">
  <h2 className="text-xl font-semibold text-white">All Insurances</h2>
  <button
    onClick={() => navigate('/all-insurances')}
    className="text-[#F7A600] text-sm font-medium hover:underline"
  >
    View All
  </button>
</div>

{/* Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Life Insurance */}
  <div className="bg-[#1B2735] rounded-xl p-5 relative shadow-md border-l-8 border-teal-400">
    <div className="flex items-center gap-4 mb-4">
      <HeartPulse className="text-teal-400 w-10 h-10" />
      <h2 className="text-white text-xl font-semibold">Life Insurance</h2>
    </div>
    <div className="h-2 bg-gray-500 rounded-full mb-2">
      <div className="h-2 bg-green-400 rounded-full w-[70%]" />
    </div>
    <p className="text-white font-semibold text-sm">
      ₹ 4,500 <span className="text-gray-400 font-normal">left</span>
    </p>
  </div>

  {/* Health Insurance */}
  <div className="bg-[#1B2735] rounded-xl p-5 relative shadow-md border-l-8 border-orange-300">
    <div className="flex items-center gap-4 mb-4">
      <Hospital className="text-orange-300 w-10 h-10" />
      <h2 className="text-white text-xl font-semibold">Health Insurance</h2>
    </div>
    <div className="h-2 bg-gray-500 rounded-full mb-2">
      <div className="h-2 bg-green-400 rounded-full w-[50%]" />
    </div>
    <p className="text-white font-semibold text-sm">
      ₹ 3,500 <span className="text-gray-400 font-normal">left</span>
    </p>
  </div>

  {/* Vehicle Insurance */}
  <div className="bg-[#1B2735] rounded-xl p-5 relative shadow-md border-l-8 border-pink-400">
    <div className="flex items-center gap-4 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-400 w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4h1a1 1 0 011 1v5a1 1 0 01-1 1h-1v1a2 2 0 11-4 0v-1H8v1a2 2 0 11-4 0v-1H3a1 1 0 01-1-1v-5a1 1 0 011-1h1zm2 0h10V7H7v4zm0 2a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
      <h2 className="text-white text-xl font-semibold">Vehicle Insurance</h2>
    </div>
    <div className="h-2 bg-gray-500 rounded-full mb-2">
      <div className="h-2 bg-green-400 rounded-full w-[85%]" />
    </div>
    <p className="text-white font-semibold text-sm">
      ₹ 6,500 <span className="text-gray-400 font-normal">left</span>
    </p>
  </div>
</div>


<div className="bg-[#1B2735] p-6 rounded-lg text-white">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-semibold">Overall Insurances</h2>
    <button
      onClick={() => navigate('/insurance-investment-details')}
      className="text-[#F7A600] text-sm font-medium"
    >
      View All
    </button>
  </div>
  <div className="border border-gray-600 rounded-md overflow-hidden">
    <table className="w-full text-left text-sm">
      <thead className="bg-[#1B2735] text-gray-400">
        <tr className="border-b border-gray-600">
          <th className="p-3">Insurance Type</th>
          <th className="p-3">Company Name</th>
          <th className="p-3">Premium Amt.</th>
          <th className="p-3">Payment Frequency</th>
          <th className="p-3">Start Date</th>
          <th className="p-3">Nominee Name</th>
          <th className="p-3">Status</th>
        </tr>
      </thead>
      <tbody className="bg-[#1B2735]">
        <tr className="border-b border-gray-700">
          <td className="p-3 font-medium">Life Insurance</td>
          <td className="p-3">XYZ Co.</td>
          <td className="p-3">₹ 4528.67</td>
          <td className="p-3">Annually</td>
          <td className="p-3">02/09/2024</td>
          <td className="p-3">Mrs. Nita Doshi</td>
          <td className="p-3 text-green-400">ACTIVE</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-3 font-medium">Vehicle Insurance</td>
          <td className="p-3">XYZ Co.</td>
          <td className="p-3">₹ 4528.67</td>
          <td className="p-3">Annually</td>
          <td className="p-3">02/09/2024</td>
          <td className="p-3">Mrs. Nita Doshi</td>
          <td className="p-3 text-red-400">INACTIVE</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="p-3 font-medium">Home Insurance</td>
          <td className="p-3">PQR Co.</td>
          <td className="p-3">₹ 4528.67</td>
          <td className="p-3">Annually</td>
          <td className="p-3">02/09/2024</td>
          <td className="p-3">Mrs. Nita Doshi</td>
          <td className="p-3 text-green-400">ACTIVE</td>
        </tr>
        <tr>
          <td className="p-3 font-medium">Business Insurance</td>
          <td className="p-3">ABC Co.</td>
          <td className="p-3">₹ 4528.67</td>
          <td className="p-3">Monthly</td>
          <td className="p-3">02/09/2024</td>
          <td className="p-3">Self</td>
          <td className="p-3 text-green-400">ACTIVE</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{/* Alerts Section */}
<div className="space-y-2 mt-8">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-bold text-white">Alerts & Notifications</h3>
    <button
      onClick={() => navigate('/alerts')}
      className="text-orange-400 text-sm hover:underline"
    >
      View All
    </button>
  </div>
  <div className="bg-[#1e293b] p-6 rounded-xl shadow overflow-x-auto">
    <ul className="space-y-4">
      {/* Policy Reminder Alert with Bell Icon */}
      <li className="flex items-start gap-3">
        <span className="text-yellow-400 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C10.355 2 9.06 3.295 9.06 4.94v.39C6.27 6.15 4 8.74 4 11.74v4.13l-1.25 1.25A1.251 1.251 0 004 19h16a1.25 1.25 0 001.25-1.25l-1.25-1.25v-4.13c0-3-2.27-5.59-5.06-6.41v-.39C14.94 3.295 13.645 2 12 2zm0 20a2.5 2.5 0 002.45-2h-4.9a2.5 2.5 0 002.45 2z" />
          </svg>
        </span>
        <div>
          <p className="font-semibold text-white">Policy Updated Reminder</p>
          <p className="text-gray-300">Your home insurance policy has been updated successfully.</p>
          <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
        </div>
      </li>


      {/* Security Alert */}
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
          <p className="font-semibold text-white">Premium Payment Due</p>
          <p className="text-gray-300">Your life insurance premium is due in 3 days.</p>
          <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
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

export default Insurancedashboard;