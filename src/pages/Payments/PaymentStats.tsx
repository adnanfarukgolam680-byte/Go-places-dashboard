import React from "react";

import type { LucideIcon } from "lucide-react";
import { payMentstatsType } from "./PaymentsType";


type StatItem = {
  key: string;
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
};

const PaymentStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {payMentstatsType.map((item: StatItem) => {
        const Icon = item.icon;

        // bg-[#FFFFFF] border border-[#E2E4E9] rounded-xl shadow-sm
        return (
          <div
            key={item.key}
            className="sm:p-6 p-4 bg-[#FFFFFF] border border-[#E2E4E9] rounded-xl shadow-sm flex items-center gap-4"
          >
            {/* Icon */}
            <div className={`p-3 rounded-xl ${item.color}`}>
              <Icon size={20} />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-lg font-semibold">{item.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentStats;