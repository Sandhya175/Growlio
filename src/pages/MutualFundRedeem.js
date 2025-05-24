import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


const MutualFundRedeem = () => {
  const [selectedScheme, setSelectedScheme] = useState('SBI Bluechip Fund');
  const [selectedCategory, setSelectedCategory] = useState('Large Cap');
  const [selectedMode, setSelectedMode] = useState('SIP');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [dateOfRedemption, setDateOfRedemption] = useState('');
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false); // modal toggle 
  const navigate = useNavigate();


  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
      <div className="space-y-8">
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
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">REDEEM MUTUAL FUND INVESTMENT</h1>

         
          {/* Investor & Mutual Fund Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Investor & Mutual Fund Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Name of Investor</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Scheme Name</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-800 border-none rounded p-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    value={selectedScheme}
                    onChange={(e) => setSelectedScheme(e.target.value)}
                  >
                    <option>SBI Bluechip Fund</option>
                    <option>HDFC Top 100 Fund</option>
                    <option>Axis Midcap Fund</option>
                    <option>ICICI Prudential Value Discovery</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Scheme Category</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-800 border-none rounded p-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option>Large Cap</option>
                    <option>Mid Cap</option>
                    <option>Small Cap</option>
                    <option>Multi Cap</option>
                    <option>Value</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fund & Investment Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Fund & Investment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Folio Number(s)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Investment Mode</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-800 border-none rounded p-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                  >
                    <option>SIP</option>
                    <option>Lumpsum</option>
                    <option>ELSS</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Date of Purchase</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={dateOfPurchase}
                    onChange={(e) => setDateOfPurchase(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sale Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sale Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2">Date of Redemption</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={dateOfRedemption}
                    onChange={(e) => setDateOfRedemption(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Units Redeemed</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                 
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Net Asset Value at Redemption (in ₹)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter NAV"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Total Redemption Value</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter total value"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Exit Load Charges (%)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter percentage"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Exit Load Amount (in ₹)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Net Payout</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  
                />
              </div>
            </div>
          </div>
          
          {/* Tax Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tax Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Capital Gain Amount</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter capital gain"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Tax Deducted at Source (TDS)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border-none rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter TDS amount"
                />
              </div>
            </div>
          </div>
          
          {/* Upload Documents */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <div>
              <label className="block text-sm mb-2">Upload Redemption Proof (PDF/Image)</label>
              <div 
                className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:border-teal-400 transition-colors"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFile(e.target.files[0]);
                    }
                  }}
                />
                {file ? (
                  <div className="text-teal-400">
                    <i className="fas fa-file-alt text-3xl mb-2"></i>
                    <p>{file.name}</p>
                  </div>
                ) : (
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 mb-4">
                      <i className="fas fa-plus text-teal-400 text-xl"></i>
                    </div>
                    <p className="text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm mt-1">PDF, JPG or PNG (max. 10MB)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center mt-10">
          <button
                onClick={() => setShowModal(true)}
                className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-button text-sm font-medium cursor-pointer"
              >
                Record Investment
              </button>
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
        <h2 className="text-2xl font-bold mb-2">MF Redemption Added to Portfolio!</h2>
        <p className="text-gray-400 mb-6">
          Your Mutual Fund Redemption has been recorded successfully
        </p>

        <div className="bg-gray-800 p-5 rounded-md text-sm mb-6">
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Name</span>
            <span className="text-white font-semibold">SBI Bluechip Fund</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-400">Scheme Catogory</span>
            <span className="text-white font-semibold">Large Cap</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Redemption Value</span>
            <span className="text-white font-semibold">₹ 25,000</span>
          </div>
        </div>

        <div className="text-center">
        <button
  onClick={() => {
    setShowModal(false);
    navigate('/redeemed-funds'); // This will navigate to the RedeemedFunds page
  }}
  className="bg-[#00E0B8] hover:bg-[#00cfa9] text-gray-900 font-medium py-2 px-6 rounded"
>
  View All MF Investments
</button>

        </div>
      </div>
    </div>
  </div> 
)}
    </div>
    </div>

  );
}

export default MutualFundRedeem;