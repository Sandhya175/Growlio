import React, { useState, useRef ,useEffect} from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';

const CommoditySalePage = () => {
  const [invoiceFile, setInvoiceFile] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const fileInputRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
   const [username, setUsername] = useState('');
 useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  const handleFileChange = (e) => {
    setInvoiceFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const saleValue = quantity && sellPrice ? (quantity * sellPrice).toFixed(2) : "0.00";

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

          {/* Main Content */}
          <div className="pl-6 pr-10 pt-15">
            <div className="flex items-center mb-10 px-4">
              <h1 className="text-3xl font-bold">ADD NEW SALE/DISPOSAL INFORMATION</h1>
            </div>

              <h2 className="text-2xl font-semibold mb-6 text-white">Commodity Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <label className="block mb-2 text-white">Date of Sale</label>
      <input
        type="date"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
      />
    </div>

    <div>
      <label className="block mb-2 text-white">Quantity Sold</label>
      <input
        type="number"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>

    <div>
      <label className="block mb-2 text-white">Sell Price Per Unit (In ₹)</label>
      <input
        type="number"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.value)}
      />
    </div>

    <div>
      <label className="block mb-2 text-white">Sale Value</label>
      <input
        type="text"
        value={saleValue}
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
        readOnly
      />
    </div>

    <div>
      <label className="block mb-2 text-white">Buyer/Platform Name</label>
      <input
        type="text"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
      />
    </div>

    <div>
      <label className="block mb-2 text-white">Charges (if any)</label>
      <input
        type="number"
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
      />
    </div>
  </div>

              

              {/* Upload Documents */}
              <h2 className="text-2xl font-semibold mt-8 mb-2">Upload Documents</h2>
               <label className="text-gray-400">Upload Sale Invoice (PDF/Image)</label>
              <div
                onClick={handleUploadClick}
                className="flex flex-col items-center justify-center bg-[#1B2735] rounded-xl p-10 border-2 border-dashed border-gray-600 cursor-pointer hover:bg-[#233040] transition"
              >
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <div className="flex flex-col items-center">
                  <div className="text-5xl text-[#2CD3C6] mb-2">+</div>
               
                </div>
                {invoiceFile && <p className="mt-4 text-sm text-white">{invoiceFile.name}</p>}
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-5 py-2 text-sm rounded-md hover:bg-[#2f7a6f] transition-colors mt-6 w-[220px] mx-auto block"
              >
                Record Sale Details
              </button>
           
          </div>
        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1f2a36] rounded-lg p-6 w-full max-w-xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white text-lg font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Commodity Sale Added to Portfolio!
            </h2>
            <p className="text-sm mb-4 text-gray-300">
              Your commodity sale has been recorded successfully.
            </p>

            <div className="bg-[#2c3e50] p-4 rounded-md mb-4 text-sm">
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Type of Commodity</span>
                <span className="text-white font-medium">{"Gold"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Quantity</span>
                <span className="text-white font-medium"> {sellPrice || "3"}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Total Sale Value</span>
                <span className="text-white font-medium">₹ 7,00,000</span>

              </div>
            </div>

            <div className="flex justify-center">
            <button
  onClick={() => navigate("/commodity-sale-details")}
  className="bg-[#3B9B8F] text-white px-4 py-2 rounded hover:bg-[#2f7a6f]"
>
  View All Commodity Investment
</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommoditySalePage;
