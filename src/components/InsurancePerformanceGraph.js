import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: '2021', value: 10000 },
  { year: '2022', value: 19000 },
  { year: '2022', value: 10000 },
  { year: '2023', value: 30000 },
  { year: '2023', value: 15000 },
  { year: '2024', value: 26000 },
  { year: '2024', value: 21000 },
  { year: '2025', value: 34000 }
];

const InsurancePerformanceGraph = () => {
  return (
    <div style={{ background: '#111827', padding: 20, borderRadius: 12, color: 'white' }}>
      <h2 style={{ marginBottom: 20 }}>Total Insurance Performance</h2>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        {['1W', '1M', '6M', '1Y', '5Y', '10Y'].map((range) => (
          <span
            key={range}
            style={{
              color: range === '1Y' ? '#111827' : '#fff',
              backgroundColor: range === '1Y' ? '#FBBF24' : 'transparent',
              padding: '6px 12px',
              borderRadius: 8,
              marginLeft: 8,
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {range}
          </span>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
        >
          {/* ✅ Only horizontal grid lines */}
          <CartesianGrid strokeDasharray="6 6" stroke="#374151" vertical={false} />
          
          <XAxis
            dataKey="year"
            stroke="#D1D5DB"
            padding={{ left: 20, right: 20 }}
            allowDataOverflow={true}
          />
          <YAxis
            stroke="#D1D5DB"
            tickFormatter={(v) => `₹${v.toLocaleString()}`}
            domain={[0, 40000]}
            ticks={[0, 10000, 20000, 30000, 40000]}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            formatter={(value) => `₹${value.toLocaleString()}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FDBA74"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsurancePerformanceGraph;
