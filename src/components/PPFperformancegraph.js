import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// Updated data to match the chart image visually
const data = [
  { month: 'Jan', value: 34500 },
  { month: 'Feb', value: 38000 },
  { month: 'Mar', value: 37000 },
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

const PPFperformancegraph = () => {
  return (
    <div style={{ background: '#111827', padding: 20, borderRadius: 12, color: 'white' }}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#0f172a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis
            stroke="#9CA3AF"
            tickFormatter={(v) => `$${v.toLocaleString()}`}
            domain={[34000, 46000]}
            tickCount={7} // Ensures approx 2k gap
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            formatter={(value) => `$${value.toLocaleString()}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            fill="url(#gradientFill)"
            strokeWidth={3}
            dot={{ r: 4, fill: '#6366F1' }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PPFperformancegraph;
