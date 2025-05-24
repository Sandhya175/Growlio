import React from "react";
import { FaDownload } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const BorrowedFundDetails = () => {
  const loans = [
    {
      source: "Bank",
      type: "Home Loan",
      lender: "SBI Bank",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "09/09/2034",
      tenure: "Monthly",
      status: "CLOSED",
    },
    {
      source: "Family",
      type: "Personal Loan",
      lender: "Mr. Rashesh",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "-",
      tenure: "Monthly",
      status: "OVERDUE",
    },
    {
      source: "Friends",
      type: "Personal Loan",
      lender: "Mr. Suresh",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "-",
      tenure: "Monthly",
      status: "OVERDUE",
    },
    {
      source: "Bank",
      type: "Vehicle Loan",
      lender: "PN Bank",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "09/09/2023",
      tenure: "Monthly",
      status: "ACTIVE",
    },
    {
      source: "Family",
      type: "Personal Loan",
      lender: "Mr. Rashesh",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "09/09/2025",
      tenure: "Quarterly",
      status: "OVERDUE",
    },
    {
      source: "Friends",
      type: "Personal Loan",
      lender: "Mr. Suresh",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "-",
      tenure: "Quarterly",
      status: "OVERDUE",
    },
    {
      source: "Bank",
      type: "Education Loan",
      lender: "SBI Bank",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "09/09/2034",
      tenure: "Monthly",
      status: "OVERDUE",
    },
    {
      source: "Bank",
      type: "Vehicle Loan",
      lender: "SBI Bank",
      amount: "₹4,00,000.00",
      rate: "7.5%",
      emi: "₹15,230",
      due: "09/09/2034",
      tenure: "Monthly",
      status: "CLOSED",
    },
  ];

  const statusColors = {
    CLOSED: "bg-red-500 text-white",
    OVERDUE: "bg-yellow-400 text-black",
    ACTIVE: "bg-green-500 text-white",
  };

  const handleDownloadPDF = () => {
    // TODO: Replace with real PDF download logic
    alert("Download PDF clicked!");
  };

  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
  {/* Topbar */}
  <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">

  <div className="flex items-center gap-4">
    <p className="text-white text-lg">Welcome Bankim Doshi!</p>
    <img
      src="https://i.pravatar.cc/60?img=1"
      className="w-12 h-12 rounded-full border-2 border-white"
      alt="Profile"
    />
  </div>
</div>


        {/* Main Content */}
        <div className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-6">BORROWED FUND DETAILS</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <p className="mb-1 text-sm">Filter by Loan Type</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>All Types of Loans</option>
              </select>
            </div>
            <div>
              <p className="mb-1 text-sm">Filter by Status</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>All Status</option>
              </select>
            </div>
            <div>
              <p className="mb-1 text-sm">Filter by Lender</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>All Lender</option>
              </select>
            </div>
          </div>

          {/* Download Button Positioned Outside */}
          <div className="flex justify-end mb-2">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-[#2f3e54] hover:bg-[#3f5066] text-red-400 font-medium px-4 py-2 rounded-md"
              title="Download PDF"
            >
              <FaDownload size={16} />
              PDF
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-700 rounded-md">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#1B2735] text-white">
                <tr>
                  <th className="px-4 py-2">Source</th>
                  <th className="px-4 py-2">Loan Type</th>
                  <th className="px-4 py-2">Lender Name</th>
                  <th className="px-4 py-2">Loan Amount</th>
                  <th className="px-4 py-2">Interest Rate</th>
                  <th className="px-4 py-2">EMI</th>
                  <th className="px-4 py-2">Due Date</th>
                  <th className="px-4 py-2">Loan Tenure</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-[#0D1520]" : "bg-[#1B2735]"}
                  >
                    <td className="px-4 py-2">{loan.source}</td>
                    <td className="px-4 py-2">{loan.type}</td>
                    <td className="px-4 py-2">{loan.lender}</td>
                    <td className="px-4 py-2">{loan.amount}</td>
                    <td className="px-4 py-2">{loan.rate}</td>
                    <td className="px-4 py-2">{loan.emi}</td>
                    <td className="px-4 py-2">{loan.due}</td>
                    <td className="px-4 py-2">{loan.tenure}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`inline-block w-24 text-center px-3 py-1 text-xs font-semibold rounded-md ${statusColors[loan.status]}`}
                      >
                        {loan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Borrowings
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Borrowings Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedFundDetails;