import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaDownload } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import axisLogo from "../assets/bank_logos/axis.png";

const WithdrawnInvestments = () => {
  const [showModal] = useState(false);
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate(-1);
  };

  const nomineeData = [
    { name: 'Mrs. Nita Doshi', relation: 'Wife', dob: '08/07/1968', share: '50%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mr. Rakesh Doshi', relation: 'Son', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mr. Rakesh Doshi', relation: 'Daughter', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mr. Rakesh Doshi', relation: 'Daughter', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mrs. Jagriti Doshi', relation: 'Daughter', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mrs. Nita Doshi', relation: 'Wife', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mrs. Jagriti Doshi', relation: 'Daughter', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' },
    { name: 'Mrs. Jagriti Doshi', relation: 'Daughter', dob: '08/07/1998', share: '25%', address: 'Adibat Apt, Ghatkopar (W)' }
  ];

  const guardianData = [
    { guardian: 'Mrs. Nita Doshi', relation: 'Wife', contact: '+91 7888897177', address: 'Adibat Apt, Ghatkopar (W)', proof: 'VIEW DOCUMENT' },
    { guardian: 'Mr. Rakesh Doshi', relation: 'Son', contact: '+91 7888897177', address: 'Adibat Apt, Ghatkopar (W)', proof: 'UPLOAD OR VIEW' },
    { guardian: 'Mr. Rakesh Doshi', relation: 'Son', contact: '+91 7888897177', address: 'Adibat Apt, Ghatkopar (W)', proof: 'VIEW DOCUMENT' }
  ];

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className={`flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60 ${showModal ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
        </div>

        {/* Recurring Deposit Content */}
        <div className="flex-1 p-10">
          <div className="max-w-7xl mx-auto">
            {/* Back Button and Title */}
            <div className="flex items-center mb-4">
              <button onClick={handleBack} className="mr-4 hover:text-gray-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold">WITHDRAWAL DETAILS</h1>
            </div>

            <div className="flex flex-col gap-1 mb-4">
  <div className="flex items-center gap-4
  ">
    <img src={axisLogo} alt="Axis Bank" className="h-16" />
    <span className="text-2xl font-semibold">Axis Bank</span>
  </div>
  <p className="text-2xl font-semibold text-white">Investment Status</p>
</div>


            <div className="grid md:grid-cols-1 gap-4 mb-6 flex items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-gray-800 p-3 rounded w-52 h-30 flex flex-col gap-2">
                  <select className="bg-gray-700 text-xs text-gray-200 rounded px-2 py-1.5">
                    <option>On Hold</option>
                    <option>Matured</option>
                    <option>Withdrawn</option>
                  </select>
                  <p className="text-xl font-bold leading-tight">₹ 20,00,000</p>
                  <p className="text-sm text-gray-400 leading-tight">15 Investments</p>
                </div>

                <input
                  className="rounded px-4 py-2 bg-gray-700 text-sm leading-tight h-12 w-96" 
                  placeholder="Search..."
                />
                <select
                  className="rounded px-4 py-2 bg-gray-700 text-sm leading-tight h-12 w-96"
                >
                  <option>Recurring Deposit</option>
                </select>
              </div>
            </div>
            </div>

           <Section
  title={
    <div className="text-white text-2xl font-semibold pb-4">
      Bank & Withdrawal Details
    </div>
  }
  headers={[
    'Acc Holder Name',
    'Account Number',
    'Account Type',
    'Withdrawal Amount',
    'Date of Withdrawal',
    'Mode of Withdrawal',
    'Purpose of Withdrawal',
    'Actions'
  ]}
  data={Array(8).fill({
    name: 'Mr. Bankim Doshi',
    accNum: '**** **** 8888',
    type: 'Savings',
    amount: '₹ 70,000',
    date: '18/05/2024',
    mode: 'NEFT',
    purpose: 'Medical Emergency'
  })}
  rowRender={(row, idx) => (
    <tr
      key={idx}
      className="border-t border-gray-700 text-sm text-gray-200 h-12"
    >
      <td className="pl-4 pr-2 py-2">{row.name}</td>
      <td className="pr-2 py-2">{row.accNum}</td>
      <td className="pr-2 py-2">{row.type}</td>
      <td className="pr-2 py-2">{row.amount}</td>
      <td className="pr-2 py-2">{row.date}</td>
      <td className="pr-2 py-2">{row.mode}</td>
      <td className="pr-2 py-2">{row.purpose}</td>
      <td className="pr-4 py-2">
        <div className="flex items-center justify-center gap-3 text-white">
          <FaEdit className="cursor-pointer hover:text-blue-400" />
          <FaTrash className="cursor-pointer text-red-500" />
        </div>
      </td>
    </tr>
  )}
/>

            <Section
              title="Nominee Details"
              data={nomineeData}
              headers={['Nominee Name', 'Relationship with Acc Holder', 'DOB', 'Percentage Share', 'Address', 'Actions']}
              rowRender={(row, idx) => (
                <tr key={idx} className="border-t border-gray-700">
                  <td className="p-2">{row.name}</td>
                  <td>{row.relation}</td>
                  <td>{row.dob}</td>
                  <td>{row.share}</td>
                  <td>{row.address}</td>
                  <td className="flex gap-2 justify-center p-2"><FaEdit /><FaTrash /></td>
                </tr>
              )}
            />

            <Section
              title="Guardian Details (If Nominee is a minor)"
              data={guardianData}
              headers={['Name of Guardian', 'Relationship with Nominee ', 'Contact No. Of Guardian', 'Address', 'Nominee ID Proof','Actions']}
              rowRender={(row, idx) => (
                <tr key={idx} className="border-t border-gray-700">
                  <td className="p-2">{row.guardian}</td>
                  <td>{row.relation}</td>
                  <td>{row.contact}</td>
                  <td>{row.address}</td>
                  <td className="text-blue-300 cursor-pointer">{row.proof}</td>
                  <td className="flex gap-2 justify-center p-2"><FaEdit /><FaTrash /></td>
                </tr>
              )}
            />

            {/* Documents */}
            <h2 className="text-xl font-semibold mb-4">Documents</h2>
            <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
              <div className="mb-4">
                <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                  <FaDownload />
                  Nominee_ID_Proof.pdf
                </button>
                <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded">
                  <FaDownload />
                  Bank_Statement.pdf
                </button>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-center gap-6 mb-6">
              <button className="bg-[#30D5C8] text-[#0B101B] font-semibold px-6 py-2 rounded hover:bg-[#28b1a8]">
                Download PDF
              </button>
              <button
                className="bg-transparent border border-white px-6 py-2 rounded font-semibold"
                onClick={() => navigate('/axis-bank-dashboard')}
              >
                Go to Bank Dashboard
              </button>
            </div>

          </div>
        </div>
      </div>
   
  );
};

const Section = ({ title, data, headers, rowRender }) => (
  <section className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="overflow-auto">
      <table className="w-full text-sm bg-gray-800 rounded">
        <thead className="bg-gray-800 text-white text-sm font-semibold h-12">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className={`py-3 text-left ${
                  idx === 0 ? 'pl-4 pr-2' : idx === headers.length - 1 ? 'pr-4' : 'pr-2'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(rowRender)}
        </tbody>
      </table>
    </div>
  </section>
);

export default WithdrawnInvestments;
