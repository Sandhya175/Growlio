import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const NewStockSale = () => {
  const [date, setDate] = useState(null);
  const [cost, setCost] = useState("");
  const [charges, setCharges] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const totalSaleValue =
    (parseFloat(cost) || 0) +
    (parseFloat(charges) || 0) +
    (parseFloat(brokerage) || 0);

  const handleRecordSale = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-[#0D1520] text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-[#0D1520] ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-[#1B2735] shadow-md flex justify-end items-center sticky top-0 z-50">
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
        <main className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold mb-8">Add New Stock Sale Information</h1>

          {/* Stock Info */}
          <section className="space-y-6 mb-10">
            <h2 className="text-xl font-semibold mb-2">Stock Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Industry Name</label>
                <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                  <option value="technology">Technology</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Company Name</label>
                <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                  <option value="tcs">TCS</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Stock Name</label>
                <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                  <option value="tchs">TCHS</option>
                </select>
              </div>
            </div>
          </section>

          {/* Sale Info */}
          <section className="space-y-6 mb-10">
            <h2 className="text-xl font-semibold mb-2">Stock Sell Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Date of Purchase</label>
                <input
                  type="date"
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                  value={date || ""}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Number of Shares Sold</label>
                <input
                  type="number"
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Total Value</label>
                <input
                  type="number"
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* Transaction Details */}
          <section className="space-y-6 mb-10">
            <h2 className="text-xl font-semibold mb-2">Transaction Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Cost of Purchase</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Charges</label>
                <input
                  type="number"
                  value={charges}
                  onChange={(e) => setCharges(e.target.value)}
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Brokerage</label>
                <input
                  type="number"
                  value={brokerage}
                  onChange={(e) => setBrokerage(e.target.value)}
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Total Sale Value</label>
                <input
                  type="number"
                  value={totalSaleValue}
                  readOnly
                  className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <button
              className="bg-teal-500 hover:bg-teal-600 px-10 py-3 rounded-lg font-semibold text-white transition"
              onClick={handleRecordSale}
            >
              Record Sale
            </button>
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
                  Stock Sales Added to Portfolio!
                </h2>
                <p className="text-gray-400 mb-6">
                  Your Stock Sale has been recorded successfully!
                </p>
                <div className="bg-gray-700 p-4 rounded mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Industry Name</span>
                    <span className="text-white">Technology</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Company Name</span>
                    <span className="text-white">TCS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Stock Name</span>
                    <span className="text-white">TCHS</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => navigate("/stocksale-information")}
                    className="bg-teal-400 hover:bg-teal-500 px-4 py-1 rounded-md text-sm text-black font-medium"
                  >
                    View All Sold Stocks
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NewStockSale;
