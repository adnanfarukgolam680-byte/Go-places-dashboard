import React, { useState, useMemo } from 'react';

interface LogEntry {
  id: string;
  timestamp: string;
  admin: string;
  action: string;
  target: string;
  type: 'Document' | 'Ride' | 'Payment' | 'Account' | 'Rider';
}

const initialLogs: LogEntry[] = [
  { id: '1', timestamp: '2024-03-15 09:00 AM', admin: 'Admin Super', action: 'Approved document', target: 'James Wilson - Driver License', type: 'Document' },
  { id: '2', timestamp: '2024-03-13 03:45 PM', admin: 'John Operations', action: 'Canceled ride', target: 'RIDE-006', type: 'Ride' },
  { id: '3', timestamp: '2024-03-10 03:00 PM', admin: 'Sarah Finance', action: 'Processed payout', target: 'Maria Garcia - $180', type: 'Payment' },
  { id: '4', timestamp: '2024-03-08 10:00 AM', admin: 'Admin Super', action: 'Created admin account', target: 'Mike Support', type: 'Account' },
  { id: '5', timestamp: '2024-03-15 10:30 AM', admin: 'John Operations', action: 'Updated rider info', target: 'Sarah Johnson', type: 'Rider' },
  { id: '6', timestamp: '2024-03-14 02:00 PM', admin: 'Admin Super', action: 'Verified insurance', target: 'Linda Martinez', type: 'Document' },
];

const AuditLogTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const filteredLogs = useMemo(() => {
    return initialLogs.filter((log) => {
      const matchesSearch = 
        log.admin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.target.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDate = dateFilter ? log.timestamp.includes(dateFilter) : true;
      return matchesSearch && matchesDate;
    });
  }, [searchTerm, dateFilter]);

  const typeStyles: Record<string, string> = {
    Document: 'bg-blue-50 text-blue-600',
    Ride: 'bg-slate-50 text-slate-600',
    Payment: 'bg-teal-50 text-teal-600',
    Account: 'bg-indigo-50 text-indigo-600',
    Rider: 'bg-gray-50 text-gray-600',
  };

  return (
    <div className=" bg-gray-50 ">
      <div className=" bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Responsive Search & Filter Bar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-72">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text"
              placeholder="Search logs..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <input
            type="date"
            className="w-full sm:w-auto px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>

        {/* --- MOBILE VIEW (Visible only on small screens) --- */}
        <div className="block md:hidden">
          {filteredLogs.map((log) => (
            <div key={log.id} className="p-4 border-b border-gray-100 last:border-0">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-400">{log.timestamp}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${typeStyles[log.type]}`}>
                  {log.type}
                </span>
              </div>
              <div className="font-semibold text-gray-800 text-sm">{log.admin}</div>
              <div className="text-sm text-gray-600 mt-1">
                <span className="font-medium text-blue-600">{log.action}:</span> {log.target}
              </div>
            </div>
          ))}
        </div>

        {/* --- DESKTOP VIEW (Visible only on medium screens and up) --- */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-xs font-semibold uppercase tracking-wider border-b border-gray-50">
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Admin</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4 text-right">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">{log.admin}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.action}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{log.target}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeStyles[log.type]}`}>
                      {log.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="p-10 text-center text-gray-400 text-sm">
            No results found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditLogTable;