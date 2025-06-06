import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';

export default function IntradayFormSection() {
  const [showModal, setShowModal] = useState(false);

  const handleRecordTrade = () => {
    setShowModal(true);
  };
const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

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

        <div className="px-10 py-6">
          <h1 className="text-2xl font-bold mb-8">
            ADD NEW INTRADAY TRADING INFORMATION
          </h1>

          {/* General Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 text-sm">Trader Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Trade Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Broker Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Account Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Trade Details */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Trade Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-1 text-sm">Trade Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none">
                  <option>Buy</option>
                  <option>Sell</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Stock Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Quantity</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Price Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none">
                  <option>Market</option>
                  <option>Limit</option>
                  <option>Stop Loss</option>
                  <option>Trailing Stop</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Order Type</label>
                <select className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none">
                  <option>Regular</option>
                  <option>Cover Order</option>
                  <option>Bracket</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm">Execution Time</label>
                <input
                  type="time"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-400 focus:text-white focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleRecordTrade}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded shadow-md transition"
            >
              Record Trade
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
         <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl relative">

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Intraday Trading Added to Portfolio!
            </h2>
            <p className="text-gray-400 mb-6">
              Your Intraday Trading has been recorded successfully!
            </p>
            <div className="bg-gray-700 p-4 rounded mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Trader Name</span>
                <span className="text-white">Mr. Bankim Doshi</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Trade Date</span>
                <span className="text-white">09/08/2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Execution Time</span>
                <span className="text-white">09:22</span>
              </div>
            </div>
            <div className="flex justify-center">
 <button
  onClick={() => navigate("/intraday-tradings")}
  className="bg-teal-400 hover:bg-teal-500 px-4 py-1 rounded-md text-sm text-black font-medium"
>
  View All Intraday Tradings
</button>

</div>

          </div>
        </div>
      )}
    </div>
  );
}