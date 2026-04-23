import { CheckCircle2 } from "lucide-react";

export const DocumentItem = ({ label }: { label: string }) => (
  <div className="flex justify-between py-3 border-b border-slate-50 last:border-0 items-center">
    <span className="text-slate-600 text-sm">{label}</span>
   <div className="flex items-center gap-1.5 bg-[#D1FAE5] text-[#075843] px-3 py-1 rounded-full border border-transparent self-center">
      {/* The solid icon with white checkmark */}
      <CheckCircle2
        size={20} 
        className="text-[#ffffff] fill-[#065F46]" 
      />
      <span className="text-sm font-semibold tracking-tight">
        Verified
      </span>
    </div>
  </div>
);