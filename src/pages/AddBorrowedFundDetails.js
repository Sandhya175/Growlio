import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AddBorrowedFundDetails() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleViewBorrowings = () => {
    setShowModal(false);
    navigate("/linked-borrowings"); // Change route as needed
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
    <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

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


        {/* Page Content */}
        <div className="flex-1 p-6 md:p-10">
          {/* Title */}
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold">Add New Borrowed Fund Details</h1>
          </div>

          {/* Form Sections */}
          <form className="space-y-10">
            {/* Basic Details */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Name of Borrower</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Borrowing Type</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Personal Loan</option>
                    <option>Home Loan</option>
                    <option>Vehicle Loan</option>
                    <option>Education Loan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Source Of Borrowing</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Bank</option>
                    <option>Family</option>
                    <option>Friends</option>
                    <option>Private Company</option>
                    <option>Government Company</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Lender/Institution Name</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Bank</option>
                    <option>Financial Insititution</option>
                    <option>Individual</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Loan/Account No. (if available)</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
              </div>
            </section>

            {/* Borrowing Details */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Borrowing Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Borrowed Amount (In ₹)</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Interest Rate (%)</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Date of Borrowing</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Loan Start Date (If Bank)</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Loan Tenure</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Monthly EMI</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Loan End Date</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
              </div>
            </section>

            {/* Payment Tracker */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Payment Tracker</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Outstanding Amount</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Total Paid So Far</label>
                  <input type="number" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Next Due Date</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Repayment Status</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Active</option>
                    <option>Overdue</option>
                    <option>Close</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Auto Debit Enabled?</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Purpose/Note</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
              </div>
            </section>

            {/* Upload Documents */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Upload Documents</h2>
              <label
                className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition"
              >
                <input type="file" accept="application/pdf,image/*" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                <div className="text-gray-300">Upload Proof of Borrowing (PDF/Image)</div>
              </label>
            </section>

            {/* Record Button */}
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
                onClick={() => setShowModal(true)}
              >
                Record Borrowings
              </button>
            </div>
          </form>

          {/* Success Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-[#1B2735] text-white p-8 rounded-lg shadow-xl w-full max-w-xl relative">
                <button
                  className="absolute top-3 right-4 text-white text-xl"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-2">Borrowed Funds Added to Portfolio!</h2>
                <p className="mb-4">Your borrowed funds has been saved successfully!</p>
                <div className="bg-[#2C3A4B] p-4 rounded-md mb-4">
                  <div className="flex justify-between border-b border-gray-600 py-2">
                    <span className="font-medium">Lender name/Insititution</span>
                    <span>SBI Bank</span> {/* You can dynamically change this later */}
                  </div>
                  <div className="flex justify-between border-b border-gray-600 py-2">
                    <span className="font-medium">Borrowed Amt (In ₹)</span>
                    <span>₹5,00,000</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Repayment Frequency</span>
                    <span>Monthly</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500"
                    onClick={handleViewBorrowings}
                  >
                    View All Linked Borrowings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBorrowedFundDetails;
