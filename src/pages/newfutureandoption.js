import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar";

const NewFutureAndOption = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

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

        <div className="px-10 py-6">
          <h1 className="text-2xl font-bold mb-8">ADD NEW FUTURE & OPTIONS INFORMATION</h1>

          {/* General Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 text-sm">Contract Type</label>
                <input
                  type="text"
                  value="Future & Options"
                  disabled
                  className="w-full px-6 py-2 rounded bg-gray-800 border border-gray-700 text-gray-400 cursor-not-allowed font-semibold"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Strike Price</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Option Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none">
                  <option>Call</option>
                  <option>Put</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Expiry Date</label>
                <input type="date" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Contract Size</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Premium Paid</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Open Interest</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
            </div>
          </section>

          {/* Execution & P/L */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Execution & Profit/Loss</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Similar input fields */}
              <div>
                <label className="block mb-1 text-sm">Entry Price</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Exit Price</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Target Price</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Stop Loss Price</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Order Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none">
                  <option>Regular</option>
                  <option>Intraday</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Brokerage Fees</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Slippage</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Total Cost</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Capital Used</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Realized Profit/Loss</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Unrealized Profit/Loss</label>
                <input type="text" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" />
              </div>
            </div>
          </section>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500"
              onClick={() => setShowModal(true)}
            >
              Record F&Q
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1B2735] text-white p-8 rounded-lg shadow-xl w-full max-w-xl relative">
            <button className="absolute top-3 right-4 text-white text-xl" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">F&O Details Added To Portfolio!</h2>
            <p className="mb-4">Your F&O details have been recorded successfully!</p>
            <div className="bg-[#2C3A4B] p-4 rounded-md mb-4">
              <div className="flex justify-between border-gray-600 py-2">
                <span className="font-medium">Contract Type</span>
                <span>Future & Options</span>
              </div>
              <div className="flex justify-between border-gray-600 py-2">
                <span className="font-medium">Expiry Date</span>
                <span>09/08/2024</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">Premium Paid</span>
                <span>₹ 8000.00</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-teal-400 text-black px-6 py-2 rounded hover:bg-teal-500"
                onClick={() => navigate("/fo-details-table")}
              >
                View All F&O Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewFutureAndOption;
