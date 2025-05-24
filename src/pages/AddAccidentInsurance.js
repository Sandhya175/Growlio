import React, { useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddAccidentInsurance = () => {
  const insuranceFileRef = useRef(null);
  const medicalFileRef = useRef(null);
  const proofFileRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
   const navigate = useNavigate();
  const handleInsuranceFileClick = () => insuranceFileRef.current.click();
  const handleMedicalFileClick = () => medicalFileRef.current.click();
  const handleProofFileClick = () => proofFileRef.current.click();

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-60">
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
          <h1 className="text-2xl font-bold mb-10">ADD ACCIDENT INSURANCE DETAILS</h1>
          
          <form className="space-y-10" onSubmit={(e) => {
  e.preventDefault();
  setShowModal(true);
}}>
            {/* Policy Overview */}
<section>
  <h2 className="text-lg font-semibold mb-6">Policy Overview</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      "Name of Investor", "Type of Insurance", "Insurance Company Name", 
      "Occupation", "Date of Birth", "Gender", 
      "Policy Number", "Policy Term (in Years)"
    ].map((label) => (
      <div key={label}>
        <label className="block text-sm mb-2">{label}</label>
        {["Insurance Company Name", "Policy Term (in Years)", "Gender"].includes(label) ? (
          <select className="bg-[#1B2735] w-full rounded px-4 py-2 text-white">
            {label === "Insurance Company Name" && <option>Insurance Companies</option>}
            {label === "Policy Term (in Years)" &&
              Array.from({ length: 151 }, (_, i) => 1900 + i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            {label === "Gender" &&
              ["Male", "Female", "Other"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
          </select>
        ) : (
          <input
            type={label === "Date of Birth" ? "date" : "text"}
            defaultValue={label === "Type of Insurance" ? "Accident Insurance" : ""}
            className="bg-[#1B2735] w-full rounded px-4 py-2 text-white"
          />
        )}
      </div>
    ))}
  </div>
</section>

            {/* Coverage & Benefits */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Coverage & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Type of Coverage", "Accidental Death Benefit", "Medical Expenses Coverage",
                  "Disability Benefit (Partial)", "Disability Benefit (Total)", "Hospitalization Expenses",
                  "Permanent Disability Cover", "Temporary Disability Cover"
                ].map((label) => (
                  <div key={label}>
                    <label className="block text-sm mb-2">{label}</label>
                    {label.includes("Cover") ? (
                      <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    ) : (
                      <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Premium & Payment */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Premium & Payment</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Premium Amount</label>
                  <input type="" className="bg-[#1B2735] w-full rounded px-4 py-2" />
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
                  <label className="block text-sm mb-2">Payment made</label>
                  <select className="bg-[#1B2735] w-full rounded px-4 py-2">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Nominee Details */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Nominee Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Nominee Name (Optional)</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Relationship to Policyholder</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Insurance Agent/Advisor Contact</label>
                  <input type="text" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
              </div>
            </section>

            {/* Policy Dates */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Policy Dates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm mb-2">Policy Start Date</label>
                  <input type="date" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Policy Expiry Date</label>
                  <input type="date" className="bg-[#1B2735] w-full rounded px-4 py-2" />
                </div>
              </div>
            </section>

            {/* Access Details */}
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

            {/* Upload Documents */}
            <section>
              <h2 className="text-lg font-semibold mb-6">Upload Documents</h2>
              <div className="space-y-6">
                {[
                  { label: "Upload Insurance Document", ref: insuranceFileRef, onClick: handleInsuranceFileClick },
                  { label: "Upload Medical Reports", ref: medicalFileRef, onClick: handleMedicalFileClick },
                  { label: "Upload Proof of Occupation", ref: proofFileRef, onClick: handleProofFileClick }
                ].map(({ label, ref, onClick }) => (
                  <div key={label}>
                    <label className="block text-sm mb-2">{label}</label>
                    <input type="file" className="hidden" ref={ref} />
                    <div
                      onClick={onClick}
                      className="cursor-pointer border border-dashed border-gray-500 bg-[#1B2735] h-36 flex items-center justify-center rounded-lg hover:bg-[#253142] transition"
                    >
                      <span className="text-3xl text-[#17E3B2] font-bold">+</span>
                    </div>
                  </div>
                ))}
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
          <span>Accident Insurance</span>
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
            navigate("/insurance-investment-details");
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

export default AddAccidentInsurance;