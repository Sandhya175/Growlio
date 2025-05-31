import React, { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Comparisonstudy() {
  const [investment, setInvestment] = useState({
    amount: '',
    duration: '',
    risk: 'Low',
    stockPrice: '',
    mutualFundPrice: '',
  });
  const [username, setUsername] = useState('');
const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

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

        {/* Main Form */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">COMPARISON STUDY</h1>

    {/* Investment Details */}
<h1 className="text-2xl font-bold mb-6">Investment Details</h1>

<section className="flex flex-wrap gap-4 mb-8">
  <div>
    <label className="block mb-1">Investment Amount (in ₹)</label>
    <input
      type="number"
      className="w-96 p-2 bg-[#1B2735] text-white rounded border border-gray-600"
      value={investment.amount}
      onChange={(e) => setInvestment({ ...investment, amount: e.target.value })}
    />
  </div>
  <div>
    <label className="block mb-1">Investment Duration (in Years)</label>
    <input
      type="number"
      className="w-96 p-2 bg-[#1B2735] text-white rounded border border-gray-600"
      value={investment.duration}
      onChange={(e) => setInvestment({ ...investment, duration: e.target.value })}
    />
  </div>
</section>


          {/* Investment Types */}
          <section className="mb-8">

{/* Investment Types Label and Checkboxes */}
<label className="text-2xl font-bold mb-6">Investment Types</label>
<div className="flex flex-col space-y-3 mt-2 mb-4">
  <label className="flex items-center text-lg">
    <input type="checkbox" className="mr-2 w-5 h-5" /> Stocks
  </label>
  <label className="flex items-center text-lg">
    <input type="checkbox" className="mr-2 w-5 h-5" /> Mutual Funds
  </label>
</div>


            <div>
              <label className="block mb-1">Risk Profile</label>
              <select
                className="w-96 p-2 bg-[#1B2735] text-white rounded border border-gray-600"
                value={investment.risk}
                onChange={(e) => setInvestment({ ...investment, risk: e.target.value })}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </section>

          {/* Stocks Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Stocks</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              <select className="p-2 bg-[#1B2735] text-white rounded border border-gray-600">
                <option>Technology</option>
                 <option>Healthcare</option>
                  <option>Financials</option>
                   <option>Consumer Goods</option>
                   <option>Energy</option>
                   <option>Other</option>
              </select>
              <select className="p-2 bg-[#1B2735] text-white rounded border border-gray-600">
                <option>TCS</option>
              </select>
              <select className="p-2 bg-[#1B2735] text-white rounded border border-gray-600">
                <option>TCHS</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Current Market Price (in ₹)</label>
              <input
                type="number"
                className="w-96 p-2 bg-[#1B2735] text-white rounded border border-gray-600"
                value={investment.stockPrice}
                onChange={(e) => setInvestment({ ...investment, stockPrice: e.target.value })}
              />
            </div>
          </section>

         {/* Mutual Funds Section */}
<section className="mb-8">
  <h2 className="text-2xl font-bold mb-6">Mutual Funds</h2>

  <div className="grid md:grid-cols-3 gap-6">
    <div>
      <label className="block mb-1">Select Fund Cap</label>
      <select className="p-2 bg-[#1B2735] text-white rounded border border-gray-600 w-full">
        <option>Large Cap</option>
        <option>Mid Cap</option>
        <option>Small Cap</option>
      </select>
    </div>

    <div>
      <label className="block mb-1">Company Name</label>
      <select className="p-2 bg-[#1B2735] text-white rounded border border-gray-600 w-full">
        <option>Axis BlueChip Fund</option>
      </select>
    </div>

    <div>
      <label className="block mb-1">Current Market Price (in ₹)</label>
      <input
        type="number"
        className="p-2 bg-[#1B2735] text-white rounded border border-gray-600 w-full"
        value={investment.mutualFundPrice}
        onChange={(e) => setInvestment({ ...investment, mutualFundPrice: e.target.value })}
      />
    </div>
  </div>
</section>

<div className="flex justify-center mb-12 pb-10">
  <button
    type="button"
    onClick={() => setShowModal(true)}
    className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-2 font-semibold text-white"
  >
    Calculate
  </button>
</div>

        </main> 
      </div>
    
      { showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#1e293b] text-white rounded-xl p-8 w-[600px] relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
             Comparison Study Results
            </h2>
            <p className="text-center mb-6">
              Your Results has been recorded successfully!
            </p>
            <div className="bg-[#334155] p-4 rounded-lg mb-6">
              <div className="flex justify-between py-1">
                <span className="font-medium">Expected Results</span>
                <span>12%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Risk </span>
                <span>2%</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Investment Duration</span>
                <span>5 years</span>
              </div>
               <div className="flex justify-between py-1">
                <span className="font-medium">Net % Return </span>
                <span>61%</span>
              </div>
               <div className="flex justify-between py-1">
                <span className="font-medium">Final Value </span>
                <span>₹ 16,10,000</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
                onClick={() => {
                  setShowModal(false);
                  navigate("/comparison-study");
                }}
              >
                Start new calculation
              </button>
            </div>
          </div>
        </div>
)}   
</div>
  );
}

export default Comparisonstudy;
