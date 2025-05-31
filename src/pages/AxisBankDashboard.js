import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaWallet, FaDownload, FaArrowUp ,FaUser} from "react-icons/fa";
import axisLogo from '../assets/bank_logos/axis.png';
import barodaLogo from '../assets/bank_logos/baroda.png';
import indiaLogo from '../assets/bank_logos/india.png';
import maharashtraLogo from '../assets/bank_logos/maharashtra.png';
import canaraLogo from '../assets/bank_logos/canara.png';

import {BarChart,Bar,XAxis,Tooltip,ResponsiveContainer,LabelList, Cell} from "recharts";

const chartData = [
  { month: "Jan", value: 14000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 11000 },
  { month: "Apr", value: 2780 },
  { month: "May", value: 12500 },
  { month: "Jun", value: 1890 },
  { month: "Jul", value: 2390 },
  { month: "Aug", value: 3490 },
  { month: "Sep", value: 13000 },
  { month: "Oct", value: 2100 },
  { month: "Nov", value: 3400 },
  { month: "Dec", value: 4100 },
];


function CustomMayLabel(props) {
  const { x, y, index, value } = props;
  if (chartData[index]?.month === "May") {
    return (
      <text
        x={x + 5}
        y={y - 10}
        fill="#facc15"
        fontSize={14}
        fontWeight="bold"
      >
        {value.toLocaleString()}
      </text>
    );
  }
  return null;
}

export default function AxisBankDashboard() {

// Investor roles
const investorNames = [
  "Mr. Bankim Doshi",
  "Mrs. Nita Doshi",
  "Mr. Rashesh Doshi",
  "Mrs. Jagruti Doshi",
  "Bankim Doshi HUF",
  "Rashesh Doshi HUF",
  "Mrs. Pritika Doshi",
  "Mr. Krishna Doshi",
  "Talent Corner HR Services Pvt Ltd."
];
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
  const [username, setUsername] = useState('');
  return (
    <div className="min-h-screen w-screen max-w-full overflow-x-hidden bg-gray-900 text-white flex">
      <Sidebar activeMenu="My Investments" />

      <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
  {/* Topbar */}
 <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
  <div className="flex items-center gap-4">
    <p className="text-white text-lg">Welcome {username}!</p>
    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
      <FaUser className="text-2xl" />
    </div>
  </div>
</div>



        <div className="px-8 py-6 space-y-8">
          {/* Page Heading */}
          <div>
            <h1 className="text-2xl font-bold">MY BANK INVESTMENTS</h1>
          </div>

       {/* Bank Name with Logo */}
<div className="max-w-md">
  <h1 className="text-sm font-bold mb-2 text-white">Select Bank</h1>
  <div className="flex items-center bg-[#1B2735] px-6 py-4 rounded-lg text-lg font-semibold gap-4">
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
</div>


{/* Dropdown under Axis Bank */}
<div className="relative w-96">
  <select
    className="w-full bg-[#1e293b] text-white px-4 py-2 pr-10 rounded-lg border border-gray-600 shadow-inner focus:outline-none appearance-none"
  >
    {investorNames.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400 text-sm">
    ▼
  </div>
</div>

          {/* Overview Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ label: "Total Balance", value: "₹ 12,750", icon: <FaWallet />, color: "bg-yellow-500" }, 
              { label: "Deposits", value: "₹ 5,600", icon: <FaArrowUp />, color: "bg-blue-500" }, 
              { label: "Expenses", value: "₹ 3,460", icon: <FaDownload />, color: "bg-pink-500" }, 
              { label: "Total Savings", value: "₹ 7,920", icon: <FaWallet />, color: "bg-green-500" }].map((item, idx) => (
                <button key={idx} className="bg-[#1e293b] p-4 rounded-xl flex items-center shadow hover:scale-[1.02] transition">
                  <div className={`p-2 rounded-full ${item.color} mr-4`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                </button>
            ))}
          </div>

          {/* Investment Status */}
<div>
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">Investment Status</h2>
    <button className="bg-[#00CDB4] hover:bg-[#00b39d]  text-white font-medium py-2 px-4 rounded-lg shadow">
      + New Investment
    </button>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {[
      { label: "Linked Bank Accounts", amount: "₹ 15,00,000", subtitle: "15 Bank Accounts", color: "bg-blue-500", path: "/all-bank-accounts" },
      { label: "On Hold", amount: "₹ 20,00,000", subtitle: "12 Investments", color: "bg-teal-500", path: "/onhold" },
      { label: "Matured", amount: "₹ 2,00,000", subtitle: "8 Investments", color: "bg-yellow-500", path: "/matured-deposit-details" }
    ].map((item, idx) => (
      <div
        key={idx}
        onClick={() => item.path && (window.location.href = item.path)}
        className={`relative bg-[#1e293b] p-6 rounded-xl shadow flex flex-col justify-center ${
          item.path ? "cursor-pointer hover:bg-gray-800 transition" : ""
        }`}
      >
        <span className={`absolute left-0 top-0 h-full w-1 rounded-l-md ${item.color}`} />
        <p className="text-sm text-gray-400">{item.label}</p>
        <p className="text-2xl font-semibold mt-1">{item.amount}</p>
        <p className="text-xs text-gray-400 mt-2">{item.subtitle}</p>
      </div>
    ))}
  </div>
</div>


          {/* Transactions Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Transactions</h3>
              <button className="text-orange-400 text-sm hover:underline">View All</button>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-gray-400 border-b border-gray-700">
                  <tr>
                    <th className="pb-2">Description</th>
                    <th className="pb-2">Transaction ID</th>
                    <th className="pb-2">Type</th>
                    <th className="pb-2">Card</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Amount</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ desc: "Spotify Subscription", id: "#12548796", type: "Shopping", card: "**** 6594", date: "28 Jan, 2025", amount: "-₹2,500", status: "Pending" }, 
                    { desc: "Sales", id: "#12548796", type: "Transfer", card: "**** 9465", date: "25 Jan, 2025", amount: "+₹750", status: "Completed" }, 
                    { desc: "Mobile Service", id: "#12548796", type: "Service", card: "**** 9465", date: "20 Jan, 2025", amount: "-₹150", status: "Pending" }, 
                    { desc: "Wilson", id: "#12548796", type: "Transfer", card: "**** 6594", date: "15 Jan, 2025", amount: "-₹1,050", status: "Pending" }, 
                    { desc: "Emily", id: "#12548796", type: "Transfer", card: "**** 6594", date: "14 Jan, 2025", amount: "+₹840", status: "Completed" }].map((t, i) => (
                    <tr key={i} className="border-b border-gray-700 last:border-0">
                      <td className="py-3">{t.desc}</td>
                      <td className="py-3">{t.id}</td>
                      <td className="py-3">{t.type}</td>
                      <td className="py-3">{t.card}</td>
                      <td className="py-3">{t.date}</td>
                      <td className={`py-3 ${t.amount.startsWith("-") ? "text-red-400" : "text-green-400"}`}>{t.amount}</td>
                      <td className="py-3">
                        <span className={`inline-flex justify-center w-20 py-1 rounded text-xs ${t.status === "Completed" ? "bg-green-700" : "bg-red-500"}`}>{t.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

         {/* Monthly Balance Chart */}
<div className="mt-6">
  <h3 className="text-lg font-bold mb-2 text-white">Expenses</h3>
  <div className="bg-[#1e293b] p-6 rounded-xl shadow">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData}>
        <XAxis dataKey="month" stroke="#cbd5e1" />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.month === "May" ? "#facc15" : "#6b7280"}
            />
          ))}
          <LabelList dataKey="value" content={<CustomMayLabel />} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
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
                    <p className="font-semibold">New Features Available</p>
                    <p className="text-gray-300">
                      UPI AutoPay is now available for all accounts
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
                    <p className="font-semibold">Security Alert</p>
                    <p className="text-gray-300">
                      Please update your mobile number for better security
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
}

