import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom'; 

const MutualFundForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [startDate, setStartDate] = useState('');
  const [showModal, setShowModal] = useState(false); // modal toggle
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToHoldingsPage = () => {
    navigate('/mutual-fund-holdings');  // Navigate to MutualFundHoldings page
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
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

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold mb-8">ADD NEW MUTUAL FUND INVESTMENT</h1>

          <div className="space-y-8">
            {/* Investor Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Investor Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Name of Investor</label>
                  <input type="text" className="w-full bg-gray-800 border-none rounded-md p-3 text-white" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Date of Purchase</label>
                  <input
                    type="date"
                    value={dateOfPurchase}
                    onChange={(e) => setDateOfPurchase(e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Fund & Investment Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Fund & Investment Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Fund House Name</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Folio Number(s)</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Scheme Name</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>SBI Bluechip Fund</option>
                    <option>HDFC Equity Fund</option>
                    <option>Axis Long Term Equity Fund</option>
                    <option>ICICI Prudential Value Discovery Fund</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Scheme Category</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>Large Cap</option>
                    <option>Mid Cap</option>
                    <option>Small Cap</option>
                    <option>Multi Cap</option>
                    <option>ELSS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-gray-800 text-white p-3 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Investment Amount (in ₹)</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Investment Mode</label>
                  <select className="w-full bg-gray-800 p-3 text-white rounded-md">
                    <option>SIP</option>
                    <option>Lumpsum</option>
                    <option>STP</option>
                    <option>SWP</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Access Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Access Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Login ID</label>
                  <input type="text" className="w-full bg-gray-800 p-3 text-white rounded-md" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-800 p-3 text-white rounded-md"
                    />
                    <i
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Claim Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Claim Details</h2>
              <label className="block text-gray-400 mb-2">AMC Contact/Agent for Claims</label>
              <textarea className="w-full bg-gray-800 p-3 text-white h-24 rounded-md" />
            </div>

            {/* Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
              <label className="block text-gray-400 mb-2">Upload MF Statement (PDF)</label>
              <label htmlFor="fileUpload" className="border-2 border-dashed border-gray-700 rounded-md p-6 flex items-center justify-center h-32 bg-gray-800 hover:bg-gray-750 cursor-pointer">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="h-10 w-10 bg-[#4ECCA3] rounded-full flex items-center justify-center">
                      <i className="fas fa-plus text-gray-900"></i>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF (MAX. 10MB)</p>
                </div>
                <input
                  id="fileUpload"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) console.log("Uploaded file:", file);
                  }}
                />
              </label>
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-400 mb-2">Status</label>
              <select className="w-full md:w-1/3 bg-gray-800 p-3 text-white rounded-md">
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
                <option>Closed</option>
              </select>
            </div>

            {/* Record Investment Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                Record Investment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-gray-900 text-white rounded-lg w-full max-w-lg shadow-lg relative border border-gray-700">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">MF Investment Added to Portfolio!</h2>
        <p className="text-gray-400 mb-6">
          Your Mutual Fund Investment has been recorded successfully
        </p>

        <div className="bg-gray-800 p-5 rounded-md text-sm mb-6">
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Name</span>
            <span className="text-white font-semibold">SBI Bluechip Fund</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Investment Mode</span>
            <span className="text-white font-semibold">SIP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Investment Amount</span>
            <span className="text-white font-semibold">₹ 25,000</span>
          </div>
        </div>

        <div className="flex justify-center mt-8">
              <button
                onClick={goToHoldingsPage}  // Trigger navigation to MF Holdings page
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                View All MF Investments
              </button>
            </div>
      </div>
    </div>
  </div> 
)}
  </div>
  );
};

export default MutualFundForm;