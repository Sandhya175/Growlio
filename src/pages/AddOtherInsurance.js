import React, { useRef, useState ,useEffect} from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash ,FaUser} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddOtherInsurance = () => {
  const insuranceFileRef = useRef(null);
  const proofFileRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleInsuranceFileClick = () => insuranceFileRef.current.click();
  const handleProofFileClick = () => proofFileRef.current.click();
  const [guardianPhone, setGuardianPhone] = useState("");
  const [username, setUsername] = useState('');
   useEffect(() => {
         const storedUsername = localStorage.getItem('username');
         if (storedUsername) {
           setUsername(storedUsername);
         }
       }, []);

  return (
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
        <div className="flex-1 p-10">
          <h1 className="text-2xl font-bold mb-10">ADD OTHER INSURANCE DETAILS</h1>

          <form className="space-y-10" onSubmit={(e) => {
  e.preventDefault();
  setShowModal(true);
}}>
           {/* Section: Policy Overview */}
<section>
  <h2 className="text-lg font-semibold mb-6">Policy Overview</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      "Name of Investor",
      "Type of Insurance",
      "Insurance Company Name",
      "Policy Number",
      "Policy Term (in Years)",
      "Insured Item / Entity Name",
      "Insured Item Type",
      "Coverage Area"
    ].map((label) => (
      <div key={label}>
        <label className="block text-sm mb-2">{label}</label>
         {label === "Name of Investor" ? (
  
    <select className="w-full p-3 bg-[#1B2735] text-white rounded">
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
  
  ):label === "Insurance Company Name" ||(
          label === "Policy Term (in Years)" ||
          label === "Insured Item Type") ? (
          <select className="bg-[#1B2735] text-white w-full rounded px-4 py-2">
            {label === "Insurance Company Name" &&
              ["Insurance Companies"].map((opt) => <option key={opt}>{opt}</option>)}
            {label === "Policy Term (in Years)" &&
              Array.from({ length: 201 }, (_, i) => 1900 + i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            {label === "Insured Item Type" &&
              ["Car", "Property", "Jewelry"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
          </select>
        ) : (
          <input
            type="text"
            defaultValue={label === "Type of Insurance" ? "Other Insurance" : ""}
            className="bg-[#1B2735] text-white w-full rounded px-4 py-2"
          />
        )}
      </div>
    ))}
  </div>
</section>

            {/* Section: Coverage & Benefits */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Coverage & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Type of Coverage</label>
                  <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                    <option>Liability Coverage</option>
                    <option>Collision Coverage</option>
                    <option>Comprehensive Coverage</option>
                    <option>Personal Injury Protection (PIP)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Insured Value</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Loss of Use Benefit</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Theft / Damage Coverage</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Accidental Damage Coverage</label>
                  <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section: Premium & Payment */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Premium & Payment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Premium Amount</label>
                  <input type="number" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Frequency of Payment</label>
                  <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Payment Mode</label>
                  <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                    <option>Cheque</option>
                    <option>UPI</option>
                  </select>
                </div>
              </div>
            </section>

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
            
           {/* Policy Dates */}
<section>
  <h2 className="text-xl font-semibold mb-4">Policy Dates</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">Policy Start Date</label>
      <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-96" />
    </div>
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">Policy Expiry Date</label>
      <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-96" />
    </div>
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium">Claim Settlement Date</label>
      <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg w-96" />
    </div>
  </div>
</section>

            {/* Section: Access Details */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Access Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Login ID</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                
                <div className="flex flex-col relative w-full">
  <label className="mb-1 text-sm font-medium text-white">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      className="bg-[#1B2735] text-white p-3 pr-14 rounded-lg w-full border border-white"
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
                <div>
                  <label className="block text-sm mb-2">Registered Email ID</label>
                  <input type="email" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Insurance Portal URL</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Customer ID / Policy Login ID</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
              </div>
            </section>

{/* Section: Upload Documents */}
<section>
  <h2 className="text-lg font-semibold mb-6">Upload Documents</h2>
  <div className="space-y-6">
    <div>
      <label className="block text-sm mb-2">Upload Insurance Document</label>
      <input type="file" className="hidden" ref={insuranceFileRef} />
      <div
        onClick={handleInsuranceFileClick}
        className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
      >
        <span className="text-3xl text-[#17E3B2] font-bold">+</span>
      </div>
    </div>
    <div>
      <label className="block text-sm mb-2">Upload Proof of Ownership</label>
      <input type="file" className="hidden" ref={proofFileRef} />
      <div
        onClick={handleProofFileClick}
        className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
      >
        <span className="text-3xl text-[#17E3B2] font-bold">+</span>
      </div>
    </div>
  </div>

  <div className="mt-6 w-60">
    <label className="block text-sm mb-2">Status</label>
    <select className="bg-[#1B2735] w-full rounded px-4 py-2">
      <option>Active</option>
      <option>Inactive</option>
    </select>
  </div>
</section>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
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
          <span>Other Insurance</span>
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
            navigate("/other-insurance-details");
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

export default AddOtherInsurance;