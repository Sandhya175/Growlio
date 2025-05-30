import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';

const NewCommodityInvestment = () => {
  const [formData, setFormData] = useState({
    quantity: "",
    purchasePrice: "",
    totalPurchaseValue: "", 
  });

  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    // Auto-calculate total purchase value
    if (name === "quantity" || name === "purchasePrice") {
      const quantity = parseFloat(name === "quantity" ? value : formData.quantity);
      const purchasePrice = parseFloat(name === "purchasePrice" ? value : formData.purchasePrice);

      if (!isNaN(quantity) && !isNaN(purchasePrice)) {
        updatedData.totalPurchaseValue = (quantity * purchasePrice).toFixed(2);
      } else {
        updatedData.totalPurchaseValue = "";
      }
    }

    setFormData(updatedData);
  };

  return (
    <>
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

          {/* Page Content */}
          <div className="flex-1 p-6 md:p-10">
            <div className="flex items-center mb-8">
              <h1 className="text-2xl font-bold">Add New Commodity Investment</h1>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-semibold mb-4">Commodity Details</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                   <label className="block mb-1 text-white">Name of Investor</label>
  <select className="w-full p-2 bg-[#1B2735] text-white p-3 rounded" >
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

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Type of Commodity</label>
                    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                      {["Gold", "Silver", "Platinum", "Natural Gas", "Crude Oil"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Mode of Holding</label>
                    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                      {["Physical", "Digital", "ETF"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Purity/Grade</label>
                    <input
                      type="text"
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Date of Purchase</label>
                    <input
                      type="date"
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">
                      Purchase Price Per Unit (in ₹)
                    </label>
                    <input
                      type="number"
                      name="purchasePrice"
                      value={formData.purchasePrice}
                      onChange={handleChange}
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Total Purchase Value</label>
                    <input
                      type="text"
                      value={formData.totalPurchaseValue}
                      readOnly
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full cursor-not-allowed"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Source/Platform/Dealer</label>
                    <input
                      type="text"
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Storage & Ownership</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Storage Type</label>
                    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                      {["Bank Locker", "Home", "Vault", "Digital Wallet"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Ownership Status</label>
                    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                      {["Self", "Joint", "Gifted", "Inheritance"].map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Certificate/Invoice Number</label>
                    <input
                      type="text"
                      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
                 <label className="mb-1 text-sm font-medium">Upload Proof Of Purchase(PDF/Image)</label>
                <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                  
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    className="hidden"
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                  <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                  <div className="text-gray-300">Click to Upload</div>
                </label>
              </section>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-6 py-2 text-sm rounded-md hover:bg-[#2f7a6f] transition-colors"
              >
                Record Investment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup goes here */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1f2a36] rounded-lg p-6 w-full max-w-xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white text-lg font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-2 text-white">Commodity Investment Added to Portfolio!</h2>
            <p className="text-sm mb-4 text-gray-300">
              Your Commodity Investment has been recorded successfully!
            </p>

            <div className="bg-[#2c3e50] p-4 rounded-md mb-4 text-sm">
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Type of Commodity</span>
                <span className="text-white font-medium">Gold</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Mode of Holding</span>
                <span className="text-white font-medium">Physical</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Total Purchase Value</span>
                <span className="text-white font-medium">₹ {formData.totalPurchaseValue || "0.00"}</span>
              </div>
            </div>

            <div className="flex justify-center">
            <button
  onClick={() => navigate("/commodity-investments")}
  className="bg-[#3B9B8F] text-white px-4 py-2 rounded hover:bg-[#2f7a6f]"
>
  View All Commodity Investments
</button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewCommodityInvestment;
