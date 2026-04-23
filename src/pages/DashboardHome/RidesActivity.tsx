
import React from 'react';

// Types for our data
interface Ride {
  id: string;
  passenger: string;
  route: string;
  status: 'in-progress' | 'completed' | 'canceled';
  driver: string;
}

interface Activity {
  id: string;
  type: string;
  details: string;
  timestamp: string;
  initial: string;
  color: string;
}

const RidesActivity: React.FC = () => {
  const activeRides: Ride[] = [
    { id: '1', passenger: 'Sarah Johnson', route: '123 Main St → City Hospital', status: 'in-progress', driver: 'James Wilson' },
    { id: '2', passenger: 'David Thompson', route: '321 Elm St → Physical Therapy Center', status: 'in-progress', driver: 'Linda Martinez' },
  ];

  const recentActivities: Activity[] = [
    { id: '1', type: 'Approved document', details: 'James Wilson - Driver License', timestamp: '2024-03-15 09:00 AM', initial: 'A', color: 'bg-blue-100 text-blue-600' },
    { id: '2', type: 'Canceled ride', details: 'RIDE-006', timestamp: '2024-03-13 03:45 PM', initial: 'J', color: 'bg-blue-100 text-blue-600' },
    { id: '3', type: 'Processed payout', details: 'Maria Garcia - $180', timestamp: '2024-03-10 03:00 PM', initial: 'S', color: 'bg-blue-100 text-blue-600' },
    { id: '4', type: 'Created admin account', details: 'Mike Support', timestamp: '2024-03-08 10:00 AM', initial: 'A', color: 'bg-blue-100 text-blue-600' },
    { id: '5', type: 'Updated rider info', details: 'Sarah Johnson', timestamp: '2024-03-15 10:30 AM', initial: 'J', color: 'bg-blue-100 text-blue-600' },
  ];

  return (
    <div className="">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Active Rides */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-6">
          <h2 className="text-[17px] sm:text-xl font-bold text-gray-800 mb-6">Active Rides</h2>
          <div className="space-y-4">
            {activeRides.map((ride) => (
              <div key={ride.id} className="bg-slate-50 rounded-xl p-2 sm:p-5 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-lg">{ride.passenger}</h3>
                    <p className="text-gray-500 text-[12px] sm:text-sm mt-1">{ride.route}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] sm:text-xs font-medium mb-2">
                      {ride.status}
                    </span>
                    <span className="text-gray-400 text-[12px] sm:text-sm">{ride.driver}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-6">
          <h2 className="text-[17px] sm:text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className=" space-y-2 sm:space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 bg-slate-50 rounded-xl p-4 transition-hover hover:bg-slate-100">
                {/* Avatar Icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${activity.color}`}>
                  {activity.initial}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-[14px]  sm:text-[20px] text-gray-800">{activity.type}</h3>
                  <p className="text-gray-500 text-[12px] sm:text-sm">{activity.details}</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs mt-1 uppercase">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RidesActivity;