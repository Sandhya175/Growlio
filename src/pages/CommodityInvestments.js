import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {FaUser,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CommodityInvestment = () => {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
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
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">COMMODITY INVESTMENT DETAILS</h1>

 <div className="mb-6">
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

          {/* Filters */}
          <div className="flex gap-6 mb-6">
            {/* Filter by Year */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Year</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>2024-25</option>
                <option>2023-24</option>
                <option>2022-23</option>
                <option>2021-22</option>
                <option>2020-21</option>
                <option>2019-20</option>
                <option>2018-19</option>
              </select>
            </div>

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Ivestor</label>
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

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Stoarage Type </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Types</option>
              </select>
            </div>
          </div>

{/* Full Account Details Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Account Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Name of Investor</th>
        <th className="py-2 px-3 whitespace-nowrap">Type of Insurance</th>
        <th className="py-2 px-3 whitespace-nowrap">Insurance Company</th>
        <th className="py-2 px-3 whitespace-nowrap">Policy Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Policy Term</th>
        <th className="py-2 px-3 whitespace-nowrap">Type of Life Cover</th>
        <th className="py-2 px-3 whitespace-nowrap">Coverage Amt</th>
        <th className="py-2 px-3 whitespace-nowrap">Maturity Value</th>
        <th className="py-2 px-3 whitespace-nowrap">Premium Amt</th>
        <th className="py-2 px-3 whitespace-nowrap">Frequency of Payment</th>
        <th className="py-2 px-3 whitespace-nowrap">Payment Mode</th>
        <th className="py-2 px-3 whitespace-nowrap">Policy Start Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Policy Expiry Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Claim Settlement Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Login ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Password</th>
        <th className="py-2 px-3 whitespace-nowrap">Registered Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Insurance Portal URL</th>
        <th className="py-2 px-3 whitespace-nowrap">Customer ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Agent Contact</th>
        <th className="py-2 px-3 whitespace-nowrap">Bank Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Type</th>
        <th className="py-2 px-3 whitespace-nowrap">Status</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {[
        {
          investor: "Mr. Bankim Doshi",
          type: "Life",
          company: "XYZ Ltd",
          policyNo: "740181910",
          term: "20",
          cover: "Term Endowment",
          coverage: "₹ 80,000.00",
          maturity: "₹ 1,00,000.00",
          premium: "₹ 5000",
          frequency: "Monthly",
          mode: "Bank Transfer",
          start: "09/08/2023",
          expiry: "09/08/2024",
          claim: "09/08/2024",
          login: "bankimd1",
          password: "**********",
          email: "bd@gmail.com",
          url: "https://insuranceportal",
          customerId: "7498129829810",
          agent: "+91 8976543322",
          bank: "Axis Bank",
          accNo: "7498129829810",
          accType: "Savings",
          status: "ACTIVE"
        },
        {
          investor: "Mr. Bankim Doshi",
          type: "Life",
          company: "XYZ Ltd",
          policyNo: "740181910",
          term: "20",
          cover: "Term Endowment",
          coverage: "₹ 80,000.00",
          maturity: "₹ 1,00,000.00",
          premium: "₹ 5000",
          frequency: "Monthly",
          mode: "Bank Transfer",
          start: "09/08/2023",
          expiry: "09/08/2024",
          claim: "09/08/2024",
          login: "bankimd1",
          password: "**********",
          email: "bd@gmail.com",
          url: "https://insuranceportal",
          customerId: "7498129829810",
          agent: "+91 8976543322",
          bank: "Axis Bank",
          accNo: "7498129829810",
          accType: "Savings",
          status: "INACTIVE"
        },
        {
          investor: "Mr. Bankim Doshi",
          type: "Life",
          company: "XYZ Ltd",
          policyNo: "740181910",
          term: "20",
          cover: "Term Endowment",
          coverage: "₹ 80,000.00",
          maturity: "₹ 1,00,000.00",
          premium: "₹ 5000",
          frequency: "Monthly",
          mode: "Bank Transfer",
          start: "09/08/2023",
          expiry: "09/08/2024",
          claim: "09/08/2024",
          login: "bankimd1",
          password: "**********",
          email: "bd@gmail.com",
          url: "https://insuranceportal",
          customerId: "7498129829810",
          agent: "+91 8976543322",
          bank: "Axis Bank",
          accNo: "7498129829810",
          accType: "Savings",
          status: "ACTIVE"
        },
        {
          investor: "Mr. Bankim Doshi",
          type: "Life",
          company: "XYZ Ltd",
          policyNo: "740181910",
          term: "20",
          cover: "Term Endowment",
          coverage: "₹ 80,000.00",
          maturity: "₹ 1,00,000.00",
          premium: "₹ 5000",
          frequency: "Monthly",
          mode: "Bank Transfer",
          start: "09/08/2023",
          expiry: "09/08/2024",
          claim: "09/08/2024",
          login: "bankimd1",
          password: "**********",
          email: "bd@gmail.com",
          url: "https://insuranceportal",
          customerId: "7498129829810",
          agent: "+91 8976543322",
          bank: "Axis Bank",
          accNo: "7498129829810",
          accType: "Savings",
          status: "ACTIVE"
        }
      ].map((acc, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap">{acc.investor}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.type}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.company}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.policyNo}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.term}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.cover}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.coverage}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.maturity}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.premium}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.frequency}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.mode}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.start}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.expiry}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.claim}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.login}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.password}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.email}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.url}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.customerId}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.agent}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.bank}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.accNo}</td>
          <td className="py-2 px-3 whitespace-nowrap">{acc.accType}</td>
          <td className="py-2 px-3 whitespace-nowrap font-semibold text-green-400">{acc.status}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="text-red-500 hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

 {/* Documents */}
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
            <div className="mb-4">
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                <FaDownload />
                Proof_of_purchase.pdf
              </button>
            </div>
          </div>

         
          {/* Footer Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white">
              Download PDF
            </button>
           <button
  onClick={() => navigate('/commodities-dashboard')}
  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold"
>
  Go to Commodities Dashboard
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommodityInvestment;
