import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const AddPropertyPurchase = () => {
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [loanAvailed, setLoanAvailed] = useState("No");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Placeholder summary (you can later make this dynamic from form data)
  const [purchaseSummary] = useState({
    propertyType: "Flat",
    sellerName: "Mr. Ramesh Shah",
    purchaseValue: "₹ 85,00,000",
  });

  const handleFileClick = () => fileInputRef.current.click();
  const handleImageClick = () => imageInputRef.current.click();
  const handleLoanAvailedChange = (e) => {
    setLoanAvailed(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const inputClass = "bg-[#1B2735] rounded px-4 py-2 w-full disabled:opacity-50";

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

     <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
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


        {/* Page Content */}
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold mb-10">
            ADD NEW PROPERTY PURCHASE INFORMATION
          </h1>

          <form className="max-w-full" onSubmit={handleSubmit}>
            {/* Ownership Details */}
            <h2 className="text-lg font-semibold mb-6">Ownership Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Name of Seller</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Property Type</label>
                <select className={inputClass}>
                  <option>Flat</option>
                  <option>Plot</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2">Full Property Address</label>
              <textarea rows="3" className={inputClass}></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block mb-2">City</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Country</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Date of Purchase</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Purchase Value (in ₹)</label>
                <input type="number" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Name of Builder</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Mode of Ownership</label>
                <select className={inputClass}>
                  <option>Single</option>
                  <option>Joint</option>
                  <option>Inherited</option>
                </select>
              </div>
            </div>

            {/* Legal & Documentation */}
            <h2 className="text-lg font-semibold mb-6">Legal & Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block mb-2">Property Registration Number</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Registration Date</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Property ID/Survey Number</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2">Loan Availed?</label>
                <select
                  className={inputClass}
                  value={loanAvailed}
                  onChange={handleLoanAvailedChange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Loan Amount (if applicable)</label>
                <input
                  type="number"
                  className={inputClass}
                  disabled={loanAvailed === "No"}
                />
              </div>
              <div>
                <label className="block mb-2">Bank Name (if loaned)</label>
                <input
                  type="text"
                  className={inputClass}
                  disabled={loanAvailed === "No"}
                />
              </div>
            </div>

            {/* Upload Section */}
            <h2 className="text-lg font-semibold mb-6">Upload Documents</h2>
            <div className="mb-6">
              <label className="block text-sm mb-2">
                Upload Registration Document (PDF)
              </label>
              <input type="file" accept=".pdf" className="hidden" ref={fileInputRef} />
              <div
                onClick={handleFileClick}
                className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
              >
                <span className="text-3xl text-[#17E3B2] font-bold">+</span>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sm mb-2">
                Upload Property Image (Optional)
              </label>
              <input type="file" accept="image/*" className="hidden" ref={imageInputRef} />
              <div
                onClick={handleImageClick}
                className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
              >
                <span className="text-3xl text-[#17E3B2] font-bold">+</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium py-2 px-4 rounded-md hover:bg-[#2f7a6f] transition-colors block mx-auto"
              >
                Record Investment
              </button>
            </div>
          </form>
        </div>
      </div>

     {/* Modal */}
{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-[#1B2735] p-6 rounded-lg w-[500px] shadow-xl relative">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-3 text-white text-xl hover:text-gray-300"
      >
        &times;
      </button>

      <h2 className="text-xl font-bold mb-4 text-white">
        Property Purchase Added to Portfolio!
      </h2>
      <p className="text-sm text-gray-300 mb-6">
        Your Property Purchase has been recorded successfully!
      </p>

      <div className="bg-[#2A3748] p-4 rounded-lg mb-6">
        <div className="flex justify-between text-sm text-gray-200 mb-2">
          <span>Type of Property</span>
          <span className="font-semibold text-white">
          {purchaseSummary.propertyType}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-200 mb-2">
          <span>Name of Property</span>
          <span className="font-semibold text-white">
            Seaviews Apartment {/* Hardcoded name here */}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-200">
          <span>Total Purchase Value</span>
          <span className="font-semibold text-white">
  {10000000.00.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
</span>

        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            setShowModal(false);
            navigate("/all-property-purchases"); // Update this path as needed
          }}
          className="bg-[#17E3B2] text-black px-4 py-2 rounded hover:bg-[#15cfa1] transition"
        >
          View All Purchased Property
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default AddPropertyPurchase;
