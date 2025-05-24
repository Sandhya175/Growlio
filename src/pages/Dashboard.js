import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import OverviewCard from '../components/OverviewCard';
import PieChart from '../components/PieChart';
import '../styles/Dashboard.scss';

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

const mockData = {
  'Bankim Doshi': {
    overview: [
      { title: 'Total Value', value: '₹ 20,00,000', icon: 'fa-dollar-sign', iconColor: '[#3AC2B9]' },
      { title: 'Monthly Return', value: '₹ 46,820', icon: 'fa-money-bill-transfer', iconColor: '[#7A9CCB]' },
      { title: 'Active Instruments', value: '5', icon: 'fa-chart-bar', iconColor: '[#9B8FD1]' },
      { title: 'Risk Score', value: 'Moderate', iconColor: '[#B07A3A]', extra: '6.8/10' },
    ],
    transactions: [
      { asset: 'Bank (SBI Bank)', type: 'Fixed Deposit', amount: '20,000', date: 'Apr 15, 2025', status: 'COMPLETED' },
      { asset: 'Apple Inc', type: 'Stocks', amount: '+ 9,678', date: 'Apr 12, 2025', status: 'COMPLETED' },
    ]
  },
};

function Dashboard() {
  const [username, setUsername] = useState('');
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [overviewData, setOverviewData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = mockData[selectedMember];
    if (data) {
      setOverviewData(data.overview);
      setTransactions(data.transactions);
    }
  }, [selectedMember]);

   useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-60">
        {/* Topbar */}
       <div className="px-8 py-6 bg-gray-800 flex justify-end items-center shadow-md">
      <div className="flex items-center gap-4">
        <p className="text-white text-lg">Welcome {username}!</p>
        <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
      </div>
    </div>

        {/* Main Content */}
        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Portfolio Overview</h2>

          {/* Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {overviewData.map((card, index) => (
              <OverviewCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                iconColor={card.iconColor}
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
                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
        {/* Asset with Icon */}
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-xl">{txn.icon}</span>
          {txn.asset}
        </div>

        {/* Type */}
        <div className="text-white font-medium">{txn.type}</div>

        {/* Amount */}
        <div className="text-green-400 font-semibold">{txn.amount}</div>

        {/* Date */}
        <div className="text-white font-medium">{txn.date}</div>

        {/* Status */}
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
