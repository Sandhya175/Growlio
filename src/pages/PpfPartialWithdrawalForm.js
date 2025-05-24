import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const PpfPartialWithdrawalForm = () => {
  const [formData, setFormData] = useState({
    ppfAccountNumber: "",
    branchName: "",
    dateOfAccountOpening: "",

    fullName: "",
    dob: "",
    mobile: "",
    email: "",
    pan: "",
    aadhar: "",
    address: "",

    withdrawAmount: "",
    withdrawReason: "Education",
    otherReason: "",

    bankName: "",
    bankBranch: "",
    accountNumber: "",
    ifsc: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const investorData = {
      fullName: "Bankim Doshi",
      dob: "1985-06-15",
      mobile: "9876543210",
      email: "bankim@example.com",
      pan: "ABCDE1234F",
      aadhar: "123456789012",
      address: "123, Green Avenue, Mumbai",
    };

    setFormData(prev => ({ ...prev, ...investorData }));
  }, []);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    openPopup(); // <-- Show popup on submit
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-2xl font-bold mb-10">PPF PARTIAL WITHDRAWAL FORM</h2>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* PPF Account Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">PPF Account Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">PPF Account Number</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Branch Name</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Date of Account Opening</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Account Holder Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Account Holder's Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Full Name", "Date of Birth", "Mobile Number", "Email", "PAN", "Aadhar Number"].map((label, index) => (
                  <div className="flex flex-col" key={index}>
                    <label className="mb-1 text-sm font-medium">{label}</label>
                    <input
                      readOnly
                      className="bg-[#1B2735] text-white p-3 rounded-lg"
                      value={
                        label === "Full Name" ? formData.fullName :
                        label === "Date of Birth" ? formData.dob :
                        label === "Mobile Number" ? formData.mobile :
                        label === "Email" ? formData.email :
                        label === "PAN" ? formData.pan :
                        formData.aadhar
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Address Details</h3>
              <label className="mb-1 text-sm font-medium">Residential Address</label>
              <textarea readOnly rows={3} value={formData.address} className="bg-[#1B2735] text-white w-full p-3 rounded-lg" />
            </div>

            {/* Withdrawal Request */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Withdraw Request Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Amount to be Withdrawn (₹)</label>
                  <input
                    className="bg-[#1B2735] text-white p-3 rounded-lg"
                    value={formData.withdrawAmount}
                    onChange={(e) =>
                      setFormData({ ...formData, withdrawAmount: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Reason for Withdrawal</label>
                  {formData.withdrawReason === "Others (please specify)" ? (
                    <input
                      className="bg-[#1B2735] text-white p-3 rounded-lg"
                      placeholder="Please specify your reason"
                      value={formData.otherReason}
                      onChange={(e) =>
                        setFormData({ ...formData, otherReason: e.target.value })
                      }
                    />
                  ) : (
                    <select
                      className="bg-[#1B2735] text-white p-3 rounded-lg"
                      value={formData.withdrawReason}
                      onChange={(e) =>
                        setFormData({ ...formData, withdrawReason: e.target.value })
                      }
                    >
                      <option>Education</option>
                      <option>Medical Emergency</option>
                      <option>Marriage</option>
                      <option>Home</option>
                      <option>Renovation</option>
                      <option>Others (please specify)</option>
                    </select>
                  )}
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Bank Name", "Branch Name", "Account Number", "IFSC Code"].map((label, index) => (
                  <div className="flex flex-col" key={index}>
                    <label className="mb-1 text-sm font-medium">{label}</label>
                    <input className="bg-[#1B2735] text-white p-3 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>

            {/* Upload */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>
              <label className="mb-2 block text-sm font-medium">Upload Approval/Receipt</label>
              <label
                className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition"
              >
                <input type="file" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                <div className="text-gray-300">Click to Upload</div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
  <button type="submit" className="bg-[#3B9B8F] text-white px-6 py-3 rounded-md hover:bg-[#2f7a6f]">
    Record Details
  </button>
</div>
          </form>
        </div>

       {/* Popup */}
       {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-[#1B2735] rounded-lg p-8 w-[500px] relative">
              <button
                className="absolute top-2 right-4 text-white text-2xl"
                onClick={closePopup}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Partial Withdrawal Added Added to Portfolio!</h2>
              <p className="text-sm mb-6">
                Your PPF nomination details have been recorded successfully!
              </p>

              <div className="bg-gray-800 rounded-md p-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Withdrawal Amt(In ₹)</span>
                  <span className="font-bold">₹ 20,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Reason for Withdrawal</span>
                  <span className="font-bold">Medical Emergency</span>
                </div>
                <div className="flex justify-between">
                  <span>Date of Withdrawal</span>
                  <span className="font-bold">09/09/2024</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
              <button
  className="bg-[#3B9B8F] px-6 py-2 rounded-md hover:bg-[#2f7a6f]"
  onClick={() => navigate('/ppf-withdrawal-details')}
>
  View All Withdrawals
</button>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PpfPartialWithdrawalForm;