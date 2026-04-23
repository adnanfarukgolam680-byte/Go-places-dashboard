import { Check, Image as ImageIcon, X, FileText, GraduationCap, Car, ShieldCheck } from "lucide-react";


const getIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('document')) return <FileText size={18} />;
  if (lowerTitle.includes('training')) return <GraduationCap size={18} />;
  if (lowerTitle.includes('driving')) return <Car size={18} />;
  if (lowerTitle.includes('mndot')) return <ShieldCheck size={18} />;
  return <FileText size={18} />;
};

export const DocumentFileCard = ({ name, type, date, imageUrl, title }: { name: string, type: string, date: string, imageUrl?: string, title: string }) => {

  
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      {/* Title Section (Image e jemon blue border thake) */}
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all cursor-pointer bg-white
         'border-slate-100 text-slate-700 hover border-slate-200`}>
        <span className={'text-slate-400'}>
          {getIcon(title)}
        </span>
        <span className="font-bold text-base">{title}</span>
      </div>

      {/* Main Card Section */}
      <div className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 transition-all hover:shadow-lg">
        
        {/* Image Preview */}
        <div className="relative h-44 bg-slate-100 overflow-hidden cursor-pointer">
          {imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <ImageIcon className="text-slate-300" size={32} />
              <span className="text-[10px] text-slate-400 font-medium">No Image Available</span>
            </div>
          )}
        </div>

        {/* Card Footer / Details */}
        <div className="p-3.5 border-t border-slate-50">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-slate-800 truncate leading-none mb-1.5">
                {name}
              </h4>
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded uppercase tracking-wider">
                  {type}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {date}
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              {/* Accept */}
              <button
                title="Approve"
                className="p-2 text-slate-400 hover:text-white hover:bg-emerald-500 rounded-lg border border-slate-100 hover:border-emerald-500 transition-all shadow-sm"
              >
                <Check size={14} strokeWidth={3} />
              </button>

              {/* Reject */}
              <button
                title="Decline"
                className="p-2 text-slate-400 hover:text-white hover:bg-red-500 rounded-lg border border-slate-100 hover:border-red-500 transition-all shadow-sm"
              >
                <X size={14} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};