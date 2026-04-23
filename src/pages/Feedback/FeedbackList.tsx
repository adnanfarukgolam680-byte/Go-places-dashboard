import React from 'react';
import { Star, Flag } from 'lucide-react';

interface Review {
  from: string;
  type: 'Rider' | 'Driver';
  rating: number;
  comment: string;
  about: string;
  date: string;
  isFlagged: boolean;
}

const reviews: Review[] = [
  { from: 'Sarah Johnson', type: 'Rider', rating: 5, comment: 'James was very professional and on time!', about: 'James Wilson', date: '2024-03-14', isFlagged: false },
  { from: 'Michael Chen', type: 'Rider', rating: 4, comment: 'Good service, slightly late pickup', about: 'Maria Garcia', date: '2024-03-14', isFlagged: false },
  { from: 'Angela Rivera', type: 'Rider', rating: 2, comment: 'Driver was rude and car was dirty', about: 'Kevin Brown', date: '2024-03-13', isFlagged: true },
  { from: 'James Wilson', type: 'Driver', rating: 5, comment: 'Rider was ready on time, great communication', about: 'Sarah Johnson', date: '2024-03-14', isFlagged: false },
  { from: 'David Thompson', type: 'Rider', rating: 5, comment: 'Excellent service, very comfortable ride', about: 'Linda Martinez', date: '2024-03-12', isFlagged: false },
];

const FeedbackList: React.FC = () => {
  return (
    <div className="">
      
      {/* --- Stats Section --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">4.2</h2>
          <p className="text-gray-500 text-sm font-medium">Average Rating</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">5</h2>
          <p className="text-gray-500 text-sm font-medium">Total Reviews</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="text-red-500 bg-red-50 p-2 rounded-lg">
            <Flag size={24} fill="currentColor" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">1</h2>
            <p className="text-gray-500 text-sm font-medium">Flagged</p>
          </div>
        </div>
      </div>

      {/* --- Responsive Container --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Table View: Only visible on md and up */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-5">From</th>
                <th className="px-6 py-5">Type</th>
                <th className="px-6 py-5">Rating</th>
                <th className="px-6 py-5">Comment</th>
                <th className="px-6 py-5">About</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5 text-right">Flagged</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reviews.map((review, idx) => (
                <tr key={idx} className={`${review.isFlagged ? 'bg-red-50/40' : 'hover:bg-gray-50/50'} transition-colors`}>
                  <td className="px-6 py-4 font-semibold text-gray-800">{review.from}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tight ${
                      review.type === 'Rider' ? 'bg-gray-100 text-gray-500' : 'bg-blue-50 text-blue-500'
                    }`}>
                      {review.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm leading-relaxed max-w-62.5">{review.comment}</td>
                  <td className="px-6 py-4 font-medium text-gray-700 text-sm">{review.about}</td>
                  <td className="px-6 py-4 text-gray-400 text-xs whitespace-nowrap">{review.date}</td>
                  <td className="px-6 py-4 text-right">
                    {review.isFlagged && <Flag size={18} className="text-red-500 inline-block" fill="currentColor" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card View: Visible on mobile (below md) */}
        <div className="md:hidden divide-y divide-gray-100">
          {reviews.map((review, idx) => (
            <div key={idx} className={`p-5 ${review.isFlagged ? 'bg-red-50/60' : 'bg-white'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-800">{review.from}</h3>
                  <span className={`text-[10px] font-bold uppercase p-1 rounded ${
                    review.type === 'Rider' ? 'bg-gray-100 text-gray-500' : 'bg-blue-50 text-blue-500'
                  }`}>
                    {review.type}
                  </span>
                </div>
                {review.isFlagged && <Flag size={18} className="text-red-500" fill="currentColor" />}
              </div>
              
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-3 italic">"{review.comment}"</p>
              
              <div className="flex justify-between items-end border-t border-gray-50 pt-3">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">About</p>
                  <p className="text-sm font-medium text-gray-700">{review.about}</p>
                </div>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FeedbackList;