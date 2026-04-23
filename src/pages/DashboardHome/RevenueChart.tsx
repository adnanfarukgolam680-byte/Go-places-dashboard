import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface RevenueData {
  month: string;
  revenue: number;
}

const data: RevenueData[] = [
  { month: 'Oct', revenue: 12500 },
  { month: 'Nov', revenue: 14500 },
  { month: 'Dec', revenue: 13500 },
  { month: 'Jan', revenue: 17000 },
  { month: 'Feb', revenue: 17500 },
  { month: 'Mar', revenue: 17500 },
  { month: 'Apr', revenue: 15500 },
  { month: 'May', revenue: 15500 },
  { month: 'June', revenue: 1500 },
];

const RevenueChart: React.FC = () => {


  const formatYAxis = (value: number) => {
    return `$${value / 1000}k`;
  };

  return (
    <div className="w-full bg-white p-2 sm:p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Revenue Trend</h2>
      
      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={0}
          >
      
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#E5E7EB" 
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              tickFormatter={formatYAxis}
              axisLine={true}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 18000]}
              ticks={[0, 5000, 9000, 14000, 18000]}
            />

            <Tooltip 
              cursor={{ fill: 'transparent' }} 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />

            <Bar 
              dataKey="revenue" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]} 
              barSize={80} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;