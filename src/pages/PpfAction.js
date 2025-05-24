import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const PpfAction = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const goToPpfForm = () => {
    navigate("/ppf-form");
  };

  const goToPpfContribution = () => {
    navigate("/ppf-contribution");
  };

  const goToPpfNomination = () => {
    navigate("/ppf-nomination");
  };

  const goToPpfPartialWithdrawal = () => {
    navigate("/ppf-partial-withdrawal");
  };

  const goToPpfClosure = () => {
    navigate("/ppf-closure"); // ✅ Navigate to PPF Closure/Maturity Form
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
          {/* Back Button & Title */}
          <div className="flex items-center mb-10">
          <button
  onClick={handleBack}
  className="w-10 h-10 mr-4 flex items-center justify-center bg-[#1e293b] rounded-lg hover:bg-[#334155] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>
<h2 className="text-2xl font-bold">Choose PPF Action</h2>
          </div>

          {/* PPF Action Buttons */}
          <div className="flex flex-col gap-6 max-w-md">
            <button
              onClick={goToPpfForm}
              className="bg-[#1B2735] hover:bg-[#253142] text-white px-6 py-6 rounded-xl text-lg font-semibold text-left transition"
            >
              PPF Account Opening Form
            </button>

            <button
              onClick={goToPpfContribution}
              className="bg-[#1B2735] hover:bg-[#253142] text-white px-6 py-6 rounded-xl text-lg font-semibold text-left transition"
            >
              PPF Contribution Form
            </button>

            <button
              onClick={goToPpfNomination}
              className="bg-[#1B2735] hover:bg-[#253142] text-white px-6 py-6 rounded-xl text-lg font-semibold text-left transition"
            >
              PPF Nomination Form
            </button>

            <button
              onClick={goToPpfPartialWithdrawal}
              className="bg-[#1B2735] hover:bg-[#253142] text-white px-6 py-6 rounded-xl text-lg font-semibold text-left transition"
            >
              PPF Partial Withdrawal Form
            </button>

            <button
              onClick={goToPpfClosure}
              className="bg-[#1B2735] hover:bg-[#253142] text-white px-6 py-6 rounded-xl text-lg font-semibold text-left transition"
            >
              PPF Closure/Maturity Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PpfAction;
