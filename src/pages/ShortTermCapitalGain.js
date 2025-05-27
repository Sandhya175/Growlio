import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const ShortTermCapitalGain = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [isBonus, setIsBonus] = useState("Yes");
  const [form, setForm] = useState({
    assetType: "Mutual Funds",
    bonusTransaction: "Yes",
    costOfAcquisition: "",
    indexedCostOfAcquisition: "",
    costOfImprovement: "",
    indexedCostOfImprovement: "",
  });

  useEffect(() => {
    if (isBonus === "Yes") {
      setForm((prev) => ({
        ...prev,
        costOfAcquisition: "0",
        indexedCostOfAcquisition: "0",
        costOfImprovement: "0",
        indexedCostOfImprovement: "0",
      }));
    }
  }, [isBonus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-screen max-w-full bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-4">RECORD SHORT TERM CAPITAL GAIN</h1>
          <p className="text-sm mb-6 text-gray-400">For investments held &lt; 12 months</p>

          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Asset Details */}
            <h2 className="col-span-3 text-lg font-semibold mb-2">Asset Details</h2>

            <div className="flex flex-col">
              <label>Type of Asset Sold</label>
              <select
                className="bg-[#1B2735] p-3 rounded-lg"
                name="assetType"
                value={form.assetType}
                onChange={handleChange}
              >
                <option>Shares</option>
                <option>Mutual Funds</option>
                <option>Properties</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Is this a Bonus Share Transaction?</label>
              <select
                className="bg-[#1B2735] p-3 rounded-lg"
                value={isBonus}
                onChange={(e) => setIsBonus(e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label>Date of Acquisition</label>
              <input type="date" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Date of Sale</label>
              <input type="date" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Full Value of Consideration (Sale Price)</label>
              <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Cost of Acquisition (Purchase Price)</label>
              <input
                type="text"
                className="bg-[#1B2735] p-3 rounded-lg"
                name="costOfAcquisition"
                value={form.costOfAcquisition}
                onChange={handleChange}
                disabled={isBonus === "Yes"}
              />
            </div>

<div className="flex flex-col">
  <label>Expenses on Transfer</label>
  <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
</div>

<div className="flex flex-col">
  <label>CII of Acquisition Year</label>
  <select className="bg-[#1B2735] p-3 rounded-lg">
    <option>2023-2024</option>
    <option>2024-2025</option>
    <option>2025-2026</option>
  </select>
</div>

<div className="flex flex-col">
  <label>CII of Sale Year</label>
  <select className="bg-[#1B2735] p-3 rounded-lg">
    <option>2023-2024</option>
    <option>2024-2025</option>
    <option>2025-2026</option>
  </select>
</div>

            <div className="flex flex-col">
              <label>Indexed Cost of Acquisition</label>
              <input
                type="text"
                className="bg-[#1B2735] p-3 rounded-lg"
                name="indexedCostOfAcquisition"
                value={form.indexedCostOfAcquisition}
                onChange={handleChange}
                disabled={isBonus === "Yes"}
              />
            </div>

            <div className="flex flex-col">
              <label>Cost of Improvement (If any)</label>
              <input
                type="text"
                className="bg-[#1B2735] p-3 rounded-lg"
                name="costOfImprovement"
                value={form.costOfImprovement}
                onChange={handleChange}
                disabled={isBonus === "Yes"}
              />
            </div>

            <div className="flex flex-col">
              <label>Indexed Cost of Improvement</label>
              <input
                type="text"
                className="bg-[#1B2735] p-3 rounded-lg"
                name="indexedCostOfImprovement"
                value={form.indexedCostOfImprovement}
                onChange={handleChange}
                disabled={isBonus === "Yes"}
              />
            </div>

            <h2 className="col-span-3 text-lg font-semibold">Short Term Capital Gain Computation</h2>

            <div className="flex flex-col">
              <label>Net STCG</label>
              <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Whether STT Paid?</label>
              <select className="bg-[#1B2735] p-3 rounded-lg">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <h2 className="col-span-3 text-lg font-semibold">Tax Calculation</h2>

            <div className="flex flex-col">
              <label>Taxable LTCG</label>
              <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Applicable Tax Rate</label>
              <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label>Final Tax Payable</label>
              <input type="text" className="bg-[#1B2735] p-3 rounded-lg" />
            </div>

            <div className="col-span-3 flex justify-center mt-4">
              <button
                type="button"
                  onClick={() => setShowModal(true)}
               className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white"
              >
                Record Details 
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-[#1e293b] text-white rounded-xl p-8 w-[600px] relative shadow-lg">
      <button
        className="absolute top-4 right-4 text-white text-xl"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">
        STGC Details Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your STGC Details has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Type of Asset Sold</span>
          <span>Mutual Funds</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Net STGC</span>
          <span>₹ 2000</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Final Tax Payable</span>
          <span>₹ 22,000</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/stcg-details");
          }}
          
        >
          View All STGC Details
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ShortTermCapitalGain;