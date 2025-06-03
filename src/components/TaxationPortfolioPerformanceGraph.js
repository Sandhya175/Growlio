import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', value: 200 },
  { month: 'Feb', value: 410 },
  { month: 'Mar', value: 580 },
  { month: 'Apr', value: 800 },
  { month: 'May', value: 250 },
  { month: 'Jun', value: 600 },
  { month: 'Jul', value: 100 },
  { month: 'Aug', value: 610 },
  
];


const TaxationPortfolioPerformanceGraph = () => {
  return (
  
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#1B2735" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke="#334155" />
          <XAxis dataKey="month" stroke="#CBD5E1" />
          <YAxis stroke="#CBD5E1" domain={[0, 800]} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            formatter={(value) => `${value}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00D1FF"
            fill="url(#gradientFill)"
            strokeWidth={3}
            dot={{ r: 3, fill: '#00D1FF' }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    
  );
};

export default TaxationPortfolioPerformanceGraph;
