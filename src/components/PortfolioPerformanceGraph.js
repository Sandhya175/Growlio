import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { month: 'Jan', value: 35000 },
  { month: 'Feb', value: 38000 },
  { month: 'Mar', value: 37500 },
  { month: 'Apr', value: 39000 },
  { month: 'May', value: 38500 },
  { month: 'Jun', value: 40000 },
  { month: 'Jul', value: 41000 },
  { month: 'Aug', value: 42500 },
  { month: 'Sep', value: 41800 },
  { month: 'Oct', value: 43500 },
  { month: 'Nov', value: 44000 },
  { month: 'Dec', value: 45500 },
];

const PortfolioPerformanceGraph = () => {
  return (
    <div className="bg-[#111827] p-6 rounded-lg shadow-md text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 text-sm">
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis
            stroke="#9CA3AF"
            tickFormatter={(v) => `$${v.toLocaleString()}`}
            domain={[34000, 46000]}
            ticks={[34000, 36000, 38000, 40000, 42000, 44000, 46000]}
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioPerformanceGraph;
