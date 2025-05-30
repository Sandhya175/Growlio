import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash,FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HealthInsuranceForm = () => {
const [showPassword, setShowPassword] = useState(false);
const [showModal, setShowModal] = useState(false);
const navigate = useNavigate();
const [guardianPhone, setGuardianPhone] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setShowModal(true); // Show the modal when the form is submitted
};
const [username, setUsername] = useState('');
useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  return (
   <div className="flex w-screen max-w-full bg-gray-900 text-white min-h-screen">
      <Sidebar />
   <div className="flex flex-col flex-1 bg-gray-900 ml-60">
        {/* Topbar */}
       {/* Sticky Topbar */}
        <div className="sticky top-0 z-40 bg-gray-800 shadow-md px-8 py-6 flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 text-white bg-[#0f172a] min-h-screen">
          <h1 className="text-2xl font-bold mb-8">Add Health Insurance Details</h1>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Policy Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Policy Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
               <div className="flex flex-col">
              <label className="block text-sm mb-2">Name of Investor</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
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
  <label className="mb-1 text-sm font-medium">Type of Insurance</label>
  <input
    value="Health Insurance"
    disabled
    className="bg-[#1B2735] text-white p-3 rounded-lg w-full focus:outline-none focus:ring-0 cursor-not-allowed"
  />
</div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Insurance Company Name</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Insurance Companies</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Policy Number</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Policy Term (Years)</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
              </div>
            </div>

            {/* Coverage & Benefits */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Coverage & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Type of Health Cover</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Individual</option>
                    <option>Family Floater</option>
                    <option>Senior Citizen</option>
                    <option>Group Insurance</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Sum Assured / Coverage Amount</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Maturity Value (optional)</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Pre-existing Conditions</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Hospital Network</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Cashless Available</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Premium & Payment */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Premium & Payment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Premium Amount</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Frequency of Payment</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Payment Mode</label>
                  <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>UPI</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Nominee & Guardian Section */}
            <div className="col-span-3 mt-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Nominee Details</h2>
                <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-black font-medium px-4 py-2 rounded">
                  <span className="text-xl">+</span>
                  Add Nominee
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Nominee Name</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Relationship with Account Holder</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Date of Birth</label>
                  <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Percentage of Share</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 text-sm font-medium">Address</label>
                <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Guardian Details (if nominee is a minor)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Name of Guardian</label>
                    <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Relationship with Nominee</label>
                    <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium">Contact Number of Guardian</label>
                    <PhoneInput
                      country="in"
                      value={guardianPhone}
                      onChange={setGuardianPhone}
                      inputProps={{
                        name: "guardianPhone",
                        required: true,
                        className: "bg-[#1B2735] text-white rounded-lg w-full",
                      }}
                      containerClass="w-full mb-4"
                      buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
                      dropdownClass="custom-dropdown"
                      inputStyle={{
                        borderRadius: 0,
                        border: "none",
                        width: "100%",
                        backgroundColor: "#1B2735",
                        padding: "0.75rem",
                        color: "white",
                      }}
                      enableSearch={true}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 text-sm font-medium">Address</label>
                  <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
                <label className="block mb-2 text-sm font-medium">Nominee's ID Proof (PDF/Image)</label>
                <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                  <input type="file" accept=".pdf, image/*" hidden />
                  <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                  <div className="text-gray-300">Click to Upload</div>
                </label>
              </div>
            </div>

            <style>{`
              .flag-dropdown {
                background-color: #1B2735 !important;
                border: none !important;
              }

              .flag-dropdown .selected-flag {
                background-color: #1B2735 !important;
              }

              .flag-dropdown .selected-flag .flag {
                background-color: transparent !important;
              }

              .custom-dropdown {
                background-color: white !important;
                color: black !important;
              }

              .custom-dropdown .country {
                color: black !important;
              }

              .custom-dropdown .country:hover,
              .custom-dropdown .country.highlight {
                background-color: #f0f0f0 !important;
              }

              .custom-dropdown input {
                background-color: #fff !important;
                color: #000 !important;
                border: 1px solid #ccc;
                padding: 8px;
                margin: 8px;
                border-radius: 6px;
              }
            `}</style>

  {/* Covered family member */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Covered Family Members(Insured Individuals)</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Name of Insured Member</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>

              <div className="flex flex-col relative w-full">
  <label className="mb-1 text-sm font-medium">Relationship To Policyholder</label>
  <select className="bg-[#1B2735] text-white p-3 rounded-lg">
    <option value="">Select Relationship</option>
    <option>Spouse</option>
    <option>Son</option>
    <option>Daughter</option>
    <option>Father</option>
    <option>Mother</option>
    <option>Father-in-law</option>
    <option>Mother-in-law</option>
    <option>Brother</option>
    <option>Sister</option>
  </select>
</div>


                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Age</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />

                </div>
              </div>
            </div>

  <h2 className="col-span-3 text-lg font-semibold mt-4">Policy Dates</h2>
<div className="flex flex-wrap gap-4 w-full">
  <div className="flex flex-col flex-1 min-w-[200px]">
    <label className="mb-1 text-sm font-medium">Policy Start Date</label>
    <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
  <div className="flex flex-col flex-1 min-w-[200px]">
    <label className="mb-1 text-sm font-medium">Policy End Date</label>
    <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
  <div className="flex flex-col flex-1 min-w-[200px]">
    <label className="mb-1 text-sm font-medium">Claim Settlement Date</label>
    <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
  </div>
</div>
  

            {/* Access Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Access Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Login ID</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>

                <div className="flex flex-col relative w-full">
                  <label className="mb-1 text-sm font-medium text-white">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="bg-[#1B2735] text-white p-3 pr-14 rounded-lg w-full border border-white"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="w-6 h-6" />
                      ) : (
                        <FaEye className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Registered Email ID</label>
                  <input className="bg-[#1B2735] text-white p-3 rounded-lg w-full" />
                </div>
              </div>
            </div>

            {/* Upload Documents */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
                  <label className="block mb-0 text-sm font-medium">Upload Insurance Document</label>
              <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                <input type="file" accept="application/pdf" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                
              </label>
            </div>

            {/* Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">Status</label>
    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-96">
      <option>Active</option>
    </select>
  </div>
</div>

            {/* Submit Button */}
            <div className="col-span-3 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              >
                Record Investment
              </button>
            </div>
          </form>
        </div>
      </div>
     {/* Modal Popup */}
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
        Insurance Investment Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your Insurance Investment has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Type of Insurance</span>
          <span>Health Insurance</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Frequency of Payment</span>
          <span>Annually</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Premium Amount</span>
          <span>₹ 5,000</span>
        </div>
      </div>
      <div className="flex justify-center">
      <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/health-insurance-details");
          }}
          
        >
          View All MF Investments
        </button>
      </div>
    </div>
  </div>
)}

</div>  
    
  );
};

export default HealthInsuranceForm;
