import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar'; 
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';


const STCGDetails = () => {
      const navigate = useNavigate();
  const data = [
    {
      type: 'Gold',
      saleDate: '09/09/2024',
      bonus: 'Yes',
      acquisitionDate: '09/04/2025',
      saleAmount: '₹ 20,000',
      purchaseAmount: '₹ 20,000',
      netSTCG: '₹ 2,000',
      taxPaid: '₹ 2,000',
    },
    {
      type: 'Stocks',
      saleDate: '09/09/2024',
      bonus: 'No',
      acquisitionDate: '09/03/2025',
      saleAmount: '₹ 1,50,000',
      purchaseAmount: '₹ 1,50,000',
      netSTCG: '₹ 1,500',
      taxPaid: '₹ 1,500',
    },
    {
      type: 'Gold',
      saleDate: '09/09/2024',
      bonus: 'Yes',
      acquisitionDate: '09/02/2025',
      saleAmount: '₹ 2,78,956',
      purchaseAmount: '₹ 2,78,956',
      netSTCG: '₹ 2,789',
      taxPaid: '₹ 2,789',
    },
    {
      type: 'Mutual Funds',
      saleDate: '09/09/2024',
      bonus: 'Yes',
      acquisitionDate: '09/01/2025',
      saleAmount: '₹ 7,89,669',
      purchaseAmount: '₹ 7,89,669',
      netSTCG: '₹ 7,899',
      taxPaid: '₹ 7,899',
    },
  ];

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
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

        {/* Page Content */}
        <div className="pl-64 p-8 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">SHORT TERM CAPITAL GAIN DETAILS</h1>
          </div>

         <div className="flex gap-6 border-b border-gray-600 pb-2 mb-4 text-sm">
  <button className="pb-1">
    <span className="border-b-2 border-white inline-block px-1">STCG</span>
  </button>
  <button>
    <span className="hover:border-b-2 hover:border-transparent px-1">LTCG</span>
  </button>
  <button>
    <span className="hover:border-b-2 hover:border-transparent px-1">Income Tax</span>
  </button>
  <button>
    <span className="hover:border-b-2 hover:border-transparent px-1">GST</span>
  </button>
  <button>
    <span className="hover:border-b-2 hover:border-transparent px-1">TDS</span>
  </button>
  <button>
    <span className="hover:border-b-2 hover:border-transparent px-1">Dividends</span>
  </button>
</div>


 <div className="flex gap-4">
             <select
  className="text-sm border px-4 py-2 rounded bg-[#1E293B] text-white"
  defaultValue="FY 2022-23"
>
  {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => {
    const startYear = 2000 + i;
    const endYear = startYear + 1;
    return (
      <option key={startYear} value={`FY ${startYear}-${endYear}`}>
        FY {startYear}-{endYear}
      </option>
    );
  })}
</select>

              <span className="text-gray-400 text-sm">(Select the year to see the regime)</span>
            </div>

          <div className="flex justify-between items-center mb-4">
            
          </div>
<div className="flex justify-end mb-2">
  <button
    className="flex items-center text-sm text-yellow-300 hover:text-yellow-400"
    onClick={() => alert('Download PDF triggered')} // Placeholder
  >
    <FiDownload className="mr-1" />
    PDF
  </button>
</div>

          <div className="bg-[#1E293B] rounded-lg p-4 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-2">Asset Type</th>
                  <th>Date of Sale</th>
                  <th>Bonus Share</th>
                  <th>Date of Acquisition</th>
                  <th>Sale Amount</th>
                  <th>Purchase Amount</th>
                  <th>Net STCG</th>
                  <th>Tax Paid (in ₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#2D3748]">
                    <td className="py-2">{item.type}</td>
                    <td>{item.saleDate}</td>
                    <td>{item.bonus}</td>
                    <td>{item.acquisitionDate}</td>
                    <td>{item.saleAmount}</td>
                    <td>{item.purchaseAmount}</td>
                    <td>{item.netSTCG}</td>
                    <td>{item.taxPaid}</td>
                   <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
  <MdEdit className="hover:text-blue-400 cursor-pointer" title="Edit" />
  <MdDelete className="hover:text-red-400 cursor-pointer" title="Delete" />
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-6">
            <button
          className="bg-teal-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-teal-300 transition"
          onClick={() => navigate('/short-term-capital-gain')} 
        >
          Add New Record
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STCGDetails;
