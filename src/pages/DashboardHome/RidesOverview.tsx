import { useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RidesOverview = () => {
  const [year, setYear] = useState("2024");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const yearlyData: any = {
    "2023": [120, 140, 130, 150, 170, 180, 160, 155, 165, 175, 185, 190],
    "2024": [165, 175, 160, 180, 200, 220, 210, 205, 215, 225, 235, 240],
    "2025": [180, 190, 200, 210, 230, 250, 240, 235, 245, 255, 265, 270],
  };

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Rides Overview",
        data: yearlyData[year],
        fill: true,
        borderColor: "rgba(29, 78, 216, 1)",


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: (context: any) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null; // important!

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(0, "rgba(29, 78, 216, 0.5)");
          gradient.addColorStop(1, "rgba(29, 78, 216, 0)");

          return gradient;
        },

        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // 🔥 eta add kor
      },
      title: {
        display: true,
        text: `Rides Overview (${year})`,
      },
    },
  };

  return (
<div className="p-4 sm:p-6 bg-white rounded-2xl shadow-md h-full flex flex-col">
  
  {/* Filter */}
  <div className="flex justify-end mb-4">
    <select
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="border px-3 py-1.5 rounded-md text-sm"
    >
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
    </select>
  </div>

  {/* Chart */}
  <div className="flex-1 sm:min-h-62.5 ">
    <Line className="sm:w-full h-full" data={data} options={options} />
  </div>
</div>
  );
};

export default RidesOverview;