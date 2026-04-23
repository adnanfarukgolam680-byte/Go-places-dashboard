export const InfoRow = ({ label, value, isStatus = false }: { label: string, value: string | number, isStatus?: boolean }) => (
  <div className="flex justify-between py-3 border-b border-slate-50 last:border-0 items-center">
    <span className="text-slate-500 text-sm font-medium">{label}</span>
    {isStatus ? (
      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
        {value}
      </span>
    ) : (
      <span className="text-slate-900 font-semibold text-sm">{value}</span>
    )}
  </div>
);
