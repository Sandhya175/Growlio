import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import Sidebar from '../components/Sidebar';
import OverviewCard from '../components/OverviewCard';
import PieChart from '../components/PieChart';
import '../styles/Dashboard.scss';
import { FaUser } from 'react-icons/fa';

const members = [
  'Bankim Doshi',
  'Nita Doshi',
  'Rashesh Doshi',
  'Jagruti Doshi',
  'Bankim Doshi HUF',
  'Rashesh Doshi HUF',
  'Pritika Doshi',
  'Krishna Doshi',
  'Talent Corner HR Services Pvt Ltd',
];

function Dashboard() {
  const [username, setUsername] = useState('');
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [overviewData, setOverviewData] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(''); // Added for error handling
  const navigate = useNavigate();
  const location = useLocation(); // Added for welcome message
  const welcomeMessage = location.state?.welcomeMessage; // Get welcome message from state

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`https://growliobackend.onrender.com/api/auth/dashboard?member=${encodeURIComponent(selectedMember)}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch dashboard data');
        }

        setOverviewData(data.overview || []);
        setTransactions(data.transactions || []);
      } catch (err) {
        setError(err.message);
        if (err.message.includes('Invalid token')) {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          navigate('/login');
        }
      }
    };

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    fetchData();
  }, [navigate, selectedMember]); // Fetch data when selectedMember changes

  const handleBack = () => {
    navigate(-1);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('username');
  //   navigate('/login');
  // };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

        {/* Topbar */}
        <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
            {/* <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button> */}
          </div>
        </div>

        {/* Back Button & Page Title */}
        <div className="flex items-center mt-6 mb-6 px-8">
          <button
            onClick={handleBack}
            className="mr-4 text-white hover:text-gray-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold">Portfolio Overview</h2>
        </div>

        {/* Main Content */}
        <div className="px-8 py-6">
          {welcomeMessage && (
            <div className="bg-green-600 text-white p-4 rounded-md mb-6 text-center">
              {welcomeMessage}
            </div>
          )}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {overviewData.map((card, index) => (
              <OverviewCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                iconColor={card.iconColor || card.icon_color} // Handle both naming conventions
                extra={card.extra}
              />
            ))}
          </div>

          {/* Asset Distribution */}
          <div className="bg-[#1B2A3B] rounded-lg p-6 mb-8">
            <div className="flex flex-wrap justify-between items-start gap-6">

              {/* Filter Dropdown */}
              <div className="flex flex-col gap-2 min-w-[180px]">
                <label className="text-sm font-medium">Filter by</label>
                <div className="relative">
                  <select
                    className="appearance-none bg-[#15202B] text-white px-4 py-2 pr-10 rounded-md border border-[#2E3A4A] w-full"
                    value={selectedMember}
                    onChange={(e) => setSelectedMember(e.target.value)}
                  >
                    {members.map((member, idx) => (
                      <option key={idx} value={member}>{member}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="flex-1 flex justify-center items-center min-w-[280px]">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">Asset Distribution Across Instruments</p>
                  <PieChart />
                </div>
              </div>

              {/* Instruments Legend */}
              <div className="border border-white rounded-lg text-white p-4 w-64 bg-[#1A2530]">
                <div className="border border-white rounded-md text-center font-bold py-1 mb-4">Instruments</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#9BD6C4] block"></span> Banks (28%)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#F9B384] block"></span> Insurance (18%)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#F48B5B] block"></span> Stocks (12%)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#6BD1B7] block"></span> Mutual Funds (32%)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#7B6BD1] block"></span> Property (7%)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#B27BD1] block"></span> Others (3%)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-[#1B2A3B] rounded-xl p-6 w-full shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-2xl font-semibold">Recent Transactions</h3>
              <Link to="/transactions" className="text-[#F5A524] text-sm font-medium hover:underline">
                View All
              </Link>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-5 text-[#B0B0B0] text-sm font-medium px-4 py-2">
              <div>Asset</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Date</div>
              <div>Status</div>
            </div>

            {/* Transactions List */}
            <div className="space-y-3 mt-2">
              {transactions.map((txn, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center bg-[#15202B] rounded-lg px-4 py-3 text-white text-sm shadow-sm"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="text-xl">{txn.icon || ''}</span> {/* Add icon if provided by backend */}
                    {txn.asset}
                  </div>
                  <div className="text-white font-medium">{txn.type}</div>
                  <div className="text-green-400 font-semibold">{txn.amount}</div>
                  <div className="text-white font-medium">{txn.date}</div>
                  <div>
                    <span className="bg-[#00c853] text-white px-3 py-1 rounded-md text-xs font-semibold">
                      {txn.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;