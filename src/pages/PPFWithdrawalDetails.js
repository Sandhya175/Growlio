
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUser ,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from 'react-icons/md';

const PPFWithdrawalDetails = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  const withdrawalRequests = [
  {
    name: "Mr. Bankim Doshi",
    accountNumber: "1234567890",
    branch: "Ghatkopar (W)",
    openingDate: "09/09/2028",
    dob: "12/05/1992",
    mobile: "9876543210",
    email: "doshi@gmail.com",
    pan: "AQWPL1234E",
    aadhar: "123456789012",
    address: "101, Green Park, Delhi",
    withdrawAmount: "10,000",
    reason: "Education",
    specify: "University Fees",
    withdrawalDate: "15/05/2025",
    bank: "HDFC",
    bankAccount: "123456789012",
    ifsc: "HDFC0001234"
  },
  {
    name: "Mrs. Nita Doshi",
    accountNumber: "2345678901",
    branch: "Ghatkopar (W)",
    openingDate: "09/09/2032",
    dob: "01/01/1990",
    mobile: "9988776655",
    email: "doshi@gmail.com",
    pan: "BNGPV9876K",
    aadhar: "234567890123",
    address: "23B, Sector 21, Chandigarh",
    withdrawAmount: "15,000",
    reason: "Medical",
    specify: "Hospital Fees",
    withdrawalDate: "12/05/2025",
    bank: "SBI",
    bankAccount: "445566778899",
    ifsc: "SBIN0005678"
  },
  {
    name: "Mr. Rashesh Doshi",
    accountNumber: "3456789012",
    branch: "Camp Road",
    openingDate: "09/09/2032",
    dob: "30/09/1998",
    mobile: "9001122334",
    email: "doshi@gmail.com",
    pan: "CVTPM2233Z",
    aadhar: "345678901234",
    address: "88, Koregaon Park, Pune",
    withdrawAmount: "7,500",
    reason: "Emergency",
    specify: "Medical Bills",
    withdrawalDate: "10/05/2025",
    bank: "ICICI",
    bankAccount: "665544332211",
    ifsc: "ICIC0009876"
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

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">PPF A/c. WITHDRAWALS DETAILS</h1>

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
             <label className="mb-2 text-sm text-white">Filter by Year</label>
              <select className="w-96 bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 text-white">
                <option>2022-23</option>
              </select>
            </div>

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Bank Name  </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Banks</option>
              </select>
            </div>
         

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Branch</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>Ghatkopar</option>
            </select>
            </div>
            </div>

   <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1600px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Account Holder Name</th>
        <th className="py-2 px-3 whitespace-nowrap">PPF Account Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Branch Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Account Opening</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Birth</th>
        <th className="py-2 px-3 whitespace-nowrap">Mobile No</th>
        <th className="py-2 px-3 whitespace-nowrap">Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">PAN Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Aadhar Number</th>
        <th className="py-2 px-3 whitespace-nowrap">Residential Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Amount to be Withdrawn</th>
        <th className="py-2 px-3 whitespace-nowrap">Reason for Withdrawal</th>
        <th className="py-2 px-3 whitespace-nowrap">Specify Option</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Withdrawal</th>
        <th className="py-2 px-3 whitespace-nowrap">Bank Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Account Number</th>
        <th className="py-2 px-3 whitespace-nowrap">IFSC Code</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {withdrawalRequests.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap font-semibold">{item.name}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.accountNumber}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.branch}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.openingDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.dob}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.mobile}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.email}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.pan}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.aadhar}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.address}</td>
          <td className="py-2 px-3 whitespace-nowrap">₹{item.withdrawAmount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.reason}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.specify}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.withdrawalDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.bank}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.bankAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.ifsc}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="text-red-400 cursor-pointer" />
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
                     withdrawal_approval.pdf
                    </button>
                    
                  </div>
                </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Download PDF
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to PPF Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPFWithdrawalDetails;