import { AnimatePresence, motion } from 'framer-motion';
import { Send, Trash2, X } from 'lucide-react';
import { useState } from 'react';

const CustomNotification = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample Data
    const notifications = [
        {
            id: 1,
            title: 'Ride Reminder',
            message: 'Your ride is scheduled for tomorrow at 9:30 AM',
            target: 'All Drivers',
            type: 'Announcement',
            sentAt: '2024-03-14 06:00 PM',

        },
        {
            id: 2,
            title: 'Service Update',
            message: 'New ride types available in your area',
            target: 'All Riders',
            type: 'Announcement',
            sentAt: '2024-03-12 12:00 PM',

        },
        {
            id: 3,
            title: 'Document Expiring',
            message: 'Your driving license will expire in 5 days. Please update it.',
            target: 'All Drivers',
            type: 'Alert',
            sentAt: '2024-03-13 09:00 AM',

        },
        {
            id: 4,
            title: 'Payment Processed',
            message: 'Your weekly payout of $450.00 has been sent to your bank.',
            target: 'All Users',
            type: 'Alert',
            sentAt: '2024-03-11 04:30 PM',

        },
        {
            id: 5,
            title: 'System Maintenance',
            message: 'Scheduled maintenance tonight at 2 AM. App may be slow.',
            target: 'All Users',
            type: 'Announcement',
            sentAt: '2024-03-10 11:00 AM',

        },
        {
            id: 6,
            title: 'New Feature Alert',
            message: 'Now you can book multi-stop rides! Try it now.',
            target: 'All Riders',
            type: 'Update',
            sentAt: '2024-03-08 10:00 AM',

        },
        {
            id: 7,
            title: 'Account Verification',
            message: 'Your identity documents have been successfully verified.',
            target: 'All Drivers',
            type: 'Alert',
            sentAt: '2024-03-05 02:15 PM',

        },
        {
            id: 8,
            title: 'Promo Code',
            message: 'Use code "RIDE50" to get 50% off on your next trip.',
            target: 'All Users',
            type: 'Update',
            sentAt: '2024-03-01 09:00 AM',

        },
        {
            id: 9,
            title: 'Unusual Login',
            message: 'New login detected from a Chrome browser on Windows.',
            target: 'All Users',
            type: 'Alert',
            sentAt: '2024-02-28 11:45 PM',

        },
        {
            id: 10,
            title: 'Safety Standard Update',
            message: 'We have updated our safety policies for all drivers.',
            target: 'All Drivers',
            type: 'Update',
            sentAt: '2024-02-25 08:00 AM',

        }
    ];

    return (
        <div className="bg-[#f8fafc] ">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
                    <p className="text-slate-500">Manage and send global notifications to users</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
                >
                    <Send size={18} />
                    <span>Send Notification</span>
                </button>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-xl border border-slate-200 overflow-hidden shadow-sm">

                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50 border-b border-slate-200">
                            <tr>
                                {['Title', 'Message', 'Target', 'Type', 'Sent At', 'Actions'].map((head) => (
                                    <th key={head} className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {notifications.map((n) => (
                                <tr key={n.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 font-medium text-slate-700">{n.title}</td>
                                    <td className="p-4 text-slate-600 max-w-xs truncate">{n.message}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wide ${n.target === 'All Users' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                            n.target === 'All Drivers' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                                                n.target === 'All Riders' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                                    'text-slate-600 font-medium'
                                            }`}>
                                            {n.target}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${n.type === 'Announcement' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                                n.type === 'Alert' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                                                    n.type === 'Update' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' :
                                                        'bg-slate-50 text-slate-500 border-slate-100'
                                            }`}>
                                            {n.type}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-500 text-sm">{n.sentAt}</td>
                                    <td className="p-4 text-center">
                                        <button

                                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            title="Delete Notification"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden grid grid-cols-1 divide-y divide-slate-100">
                    {notifications.map((n) => (
                        <div key={n.id} className="p-4 space-y-3">
                            <div className="flex justify-between items-start">
                                <h3 className="font-bold text-slate-800">{n.title}</h3>
                                <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold uppercase">{n.type}</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{n.message}</p>
                            <div className="flex justify-between items-center text-xs pt-2">
                                <span className="text-slate-400">{n.sentAt}</span>
                                <span className="font-medium text-blue-500 italic">To: {n.target}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Send Notification Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                <h2 className="text-xl font-bold text-slate-800">New Global Notification</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <form className="p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Notification Title</label>
                                    <input type="text" placeholder="e.g. System Maintenance" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message Content</label>
                                    <textarea rows={3} placeholder="Write your message here..." className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Target Audience</label>
                                        <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                            <option>All Users</option>
                                            <option>Drivers Only</option>
                                            <option>Riders Only</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Type</label>
                                        <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                            <option>Announcement</option>
                                            <option>Alert</option>
                                            <option>Update</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                                        Cancel
                                    </button>
                                    <button type="submit" className="flex-1 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 shadow-md shadow-blue-200 flex justify-center items-center gap-2">
                                        <Send size={16} /> Broadcast Now
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomNotification;