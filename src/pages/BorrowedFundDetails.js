import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUser ,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from 'react-icons/md';

const BorrowedFundDetails = () => {
   const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
const borrowings = [
  {
    borrower: "Mrs. Nita",
    type: "Home Loan",
    source: "Bank",
    lender: "HDFC Bank",
    amount: "4,00,000",
    loanAccount: "HDFC-LOAN-2021-234",
    interestRate: "8.5",
    dateOfBorrowing: "09/09/2034",
    startDate: "01/04/2021",
    endDate: "01/04/2031",
    tenure: "Monthly",
    emi: "44,000"
  },
  {
    borrower: "Mr. Rashesh",
    type: "Personal Loan",
    source: "Family",
    lender: "Bajaj Finserv",
    amount: "45,00,000",
    loanAccount: "BJF-PERSNL-9987",
    interestRate: "7.5",
    dateOfBorrowing: "01/04/2021",
    startDate: "15/07/2022",
    endDate: "15/07/2024",
    tenure: "Monthly",
    emi: "24,000"
  },
  {
    borrower: "Mr. Suresh",
    type: "Personal Loan",
    source: "NBFC",
    lender: "SBI",
    amount: "8,50,000",
    loanAccount: "SBI-CAR-2023-672",
    interestRate: "13.2",
    dateOfBorrowing: "15/07/2022",
    startDate: "20/01/2023",
    endDate: "20/01/2028",
    tenure: "Monthly",
    emi: "44,000"
  },
  {
    borrower: "Mr. Rashesh",
    type: "Vehicle Loan",
    source: "Bank",
    lender: "Bajaj Finserv",
    amount: "5,00,000",
    loanAccount: "BJF-PERSNL-9988",
    interestRate: "9.2",
    dateOfBorrowing: "09/09/2023",
    startDate: "09/09/2023",
    endDate: "09/09/2023",
    tenure: "Monthly",
    emi: "18,000"
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
          <h1 className="text-2xl font-semibold mb-6">BORROWED FUND DETAILS</h1>

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
              <label className="text-sm text-gray-400 mb-1">Filter by Loan Type</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Types of Loans</option>
               
              </select>
            </div>

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Status </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Status</option>
              </select>
            </div>
         

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Lender</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>All Lenders</option>
            </select>
            </div>
            </div>

<h2 className="text-xl font-semibold mb-4 text-gray-200">Borrowing Details</h2>

<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Name of Borrower</th>
        <th className="py-2 px-3 whitespace-nowrap">Borrowing Type</th>
        <th className="py-2 px-3 whitespace-nowrap">Source of Borrowing</th>
        <th className="py-2 px-3 whitespace-nowrap">Lender/Institution</th>
        <th className="py-2 px-3 whitespace-nowrap">Borrowed Amt (₹)</th>
        <th className="py-2 px-3 whitespace-nowrap">Loan/Account No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Interest Rate (%)</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Borrowing</th>
        <th className="py-2 px-3 whitespace-nowrap">Loan Start Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Loan End Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Loan Tenure</th>
        <th className="py-2 px-3 whitespace-nowrap">Monthly EMI (₹)</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {borrowings.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap font-semibold">{item.borrower}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.type}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.source}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.lender}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.amount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.loanAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.interestRate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.dateOfBorrowing}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.startDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.endDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.tenure}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.emi}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    

<div className="bg-[#1f2937] text-white p-6 shadow-lg rounded-xl mt-6">
  <h2 className="text-xl font-semibold mb-4">Payment Tracker</h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border-separate border-spacing-y-4">
      <thead>
  <tr className="text-left text-sm text-gray-300 border-b border-gray-600">
    <th className="px-4 py-2">Outstanding Amount (₹)</th>
    <th className="px-4 py-2">Total Paid (₹)</th>
    <th className="px-4 py-2">Next Due Date</th>
    <th className="px-4 py-2">Auto Debit Enabled</th>
    <th className="px-4 py-2">Purpose/Note</th>
    <th className="px-4 py-2">Repayment Status</th>
    <th className="px-4 py-2">Actions</th>
  </tr>
</thead>

      <tbody>
        {[
          {
            outstanding: "35,00,000",
            paid: "10,00,000",
            dueDate: "01/06/2025",
            autoDebit: "Yes",
            purpose: "Home purchase in Mumbai",
            status: "CLOSED"
          },
          {
            outstanding: "1,50,000",
            paid: "3,50,000",
            dueDate: "15/06/2025",
            autoDebit: "No",
            purpose: "Wedding Expenses",
            status: "OVERDUE"
          },
          {
            outstanding: "6,20,000",
            paid: "2,30,000",
            dueDate: "20/06/2025",
            autoDebit: "Yes",
            purpose: "Purchase of new car",
            status: "OVERDUE"
          },
          {
            outstanding: "35,00,000",
            paid: "10,00,000",
            dueDate: "01/06/2025",
            autoDebit: "Yes",
            purpose: "Home purchase in Pune",
            status: "ACTIVE"
          }
        ].map((row, idx) => (
          <tr key={idx} className="">
            <td className="px-4 py-4 rounded-l-xl">{row.outstanding}</td>
            <td className="px-4 py-4">{row.paid}</td>
            <td className="px-4 py-4">{row.dueDate}</td>
            <td className="px-4 py-4">{row.autoDebit}</td>
            <td className="px-4 py-4">{row.purpose}</td>
            <td className="px-4 py-4">
             <span className={`
  w-20 text-center px-2 py-1 text-xs font-semibold rounded-md inline-block
  ${row.status === "CLOSED" ? "bg-red-600 text-white" :
    row.status === "OVERDUE" ? "bg-yellow-400 text-black" :
    "bg-green-500 text-white"}
`}>
  {row.status}
</span>

            </td>
            <td className="px-4 py-4 rounded-r-xl flex gap-3 justify-center text-gray-400">
              <MdEdit className="hover:text-blue-400 cursor-pointer" />
              <MdDelete className="text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

{/* Documents */}
                <h2 className="text-xl font-semibold mb-4">Documents</h2>
                <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
                  <div className="mb-4">
                    <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                      <FaDownload />
                      Borrowing_Proof.pdf
                    </button>
                    
                  </div>
                </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Borrowings
            </button>
             <button
      onClick={() => navigate('/borrowings-dashboard')}
      className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold"
    >
      Go to Borrowings Dashboard
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedFundDetails;