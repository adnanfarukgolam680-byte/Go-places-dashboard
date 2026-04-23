import { Calendar } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Area,AreaChart,CartesianGrid,ResponsiveContainer,Tooltip,
  XAxis,
  YAxis
} from 'recharts';

// Types
interface RideData {
  month: string;
  rides: number;
  year: string;
}

const DATA: RideData[] = [
  // 2023 Data
  { month: 'Jan', rides: 120, year: '2023' },
  { month: 'Feb', rides: 145, year: '2023' },
  { month: 'Mar', rides: 130, year: '2023' },
  { month: 'Apr', rides: 160, year: '2023' },
  { month: 'May', rides: 175, year: '2023' },
  { month: 'Jun', rides: 150, year: '2023' },
  { month: 'Jul', rides: 185, year: '2023' },
  { month: 'Aug', rides: 195, year: '2023' },
  { month: 'Sep', rides: 165, year: '2023' },
  { month: 'Oct', rides: 140, year: '2023' },
  { month: 'Nov', rides: 168, year: '2023' },
  { month: 'Dec', rides: 155, year: '2023' },

  // 2024 Data (কিছু স্যাম্পল ভ্যালু)
  { month: 'Jan', rides: 190, year: '2024' },
  { month: 'Feb', rides: 205, year: '2024' },
  { month: 'Mar', rides: 180, year: '2024' },
  { month: 'Apr', rides: 210, year: '2024' },
  { month: 'May', rides: 195, year: '2024' },
  { month: 'Jun', rides: 215, year: '2024' },
  { month: 'Jul', rides: 185, year: '2024' },
  { month: 'Aug', rides: 170, year: '2024' },
  { month: 'Sep', rides: 190, year: '2024' },
  { month: 'Oct', rides: 200, year: '2024' },
  { month: 'Nov', rides: 220, year: '2024' },
  { month: 'Dec', rides: 195, year: '2024' },
];

const MonthlyRidesChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  // Filter logic
  const filteredData = useMemo(() => {
    return DATA.filter(item => item.year === selectedYear);
  }, [selectedYear]);

  return (
    <div className="w-full  p-6 h-full bg-white rounded-2xl border border-gray-100 shadow-sm">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-xl font-bold text-gray-800">Monthly Rides</h2>
        
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
          <Calendar size={16} className="text-gray-500" />
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer"
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-75 sm:h-3/4 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRides" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={true} 
              horizontal={true} 
              stroke="#f0f0f0" 
            />
            
            <XAxis 
              dataKey="month" 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={true} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              domain={[0, 220]}
              ticks={[0, 55, 110, 165, 220]}
            />
            
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            
            <Area
              type="monotone"
              dataKey="rides"
              stroke="#3b82f6"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorRides)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyRidesChart;