import React from 'react';
import { Navigation, Car, Clock, User } from 'lucide-react';

// --- Types ---
interface Trip {
  id: number;
  passenger: string;
  destination: string;
  driver: string;
  startTime: string;
}

interface Driver {
  id: number;
  name: string;
  car: string;
  color: string;
  isOnline: boolean;
}


const activeTrips: Trip[] = [
  { id: 1, passenger: "Sarah Johnson", destination: "City Hospital", driver: "James Wilson", startTime: "09:30 AM" },
  { id: 2, passenger: "David Thompson", destination: "Physical Therapy Center", driver: "Linda Martinez", startTime: "10:45 AM" },
];

const onlineDrivers: Driver[] = [
  { id: 1, name: "James Wilson", car: "2022 Toyota Camry", color: "Silver", isOnline: true },
  { id: 2, name: "Maria Garcia", car: "2023 Honda Accord", color: "Black", isOnline: true },
  { id: 3, name: "Linda Martinez", car: "2023 Chevrolet Malibu", color: "Blue", isOnline: true },
];

const ActiveAndOnlineDrivers: React.FC = () => {
  return (
    <div className=" ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Active Trips Section */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Navigation className="text-emerald-500 w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-800">Active Trips</h2>
          </div>

          <div className="space-y-4">
            {activeTrips.map((trip) => (
              <div key={trip.id} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:bg-slate-50 transition-colors">
                <div className="shrink-0 w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Navigation className="text-emerald-500 w-5 h-5 rotate-45" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {trip.passenger} <span className="text-slate-400">→</span> {trip.destination}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Driver: {trip.driver}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>Started {trip.startTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Online Drivers Section */}
        <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Car className="text-blue-500 w-5 h-5" />
            <h2 className="text-xl font-bold text-slate-800">Online Drivers</h2>
          </div>

          <div className="space-y-4">
            {onlineDrivers.map((driver) => (
              <div key={driver.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <User className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{driver.name}</h3>
                    <p className="text-sm text-slate-500">{driver.car} · {driver.color}</p>
                  </div>
                </div>
                {driver.isOnline && (
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ActiveAndOnlineDrivers;