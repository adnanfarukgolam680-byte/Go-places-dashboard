import React from 'react';
import { InfoRow } from '../Drivers/InforRow';
import { DocumentFileCard } from '../Drivers/DocumentFileCard';

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
    <div className="px-6 py-5 border-b border-slate-100">
      <h3 className="text-[17px] font-semibold text-slate-800">{title}</h3>
    </div>
    <div className="px-6 py-2">
      {children}
    </div>
  </div>
);



const RiderDetails = () => {
  return (
    <div className=" bg-[#f8fafc] p-2 md:p-3">
      <div className="">

        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl font-black text-[#1e293b]">Sarah Johnson</h1>
          <p className="text-slate-400 text-[13px] mt-1 font-medium">
            Rider ID: R001 • PMI: PMI-20234
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Personal Information */}
          <Card title="Personal Information">
            <InfoRow label="Full Name" value="Sarah Johnson" />
            <InfoRow label="Date of Birth" value="1985-03-15" />
            <InfoRow label="PMI Number" value="PMI-20234" />
            <InfoRow label="Phone" value="(555) 123-4567" />
            <InfoRow label="Email" value="sarah.j@email.com" />
            <InfoRow label="Status" value="active" isStatus />
          </Card>

          {/* Case Management */}
          <Card title="Case Management">
            <InfoRow label="Case Manager" value="Dr. Emily Watson" />
            <InfoRow label="Email" value="e.watson@care.com" />
            <InfoRow label="Phone" value="(555) 890-1234" />
          </Card>

          {/* Service Details */}
          <Card title="Service Details">
            <InfoRow label="Service Start" value="2024-01-15" />
            <InfoRow label="Service End" value="2025-01-15" />
            <InfoRow label="Registered" value="2024-01-15" />
          </Card>

          {/* Transportation Authorization */}
          <Card title="Transportation Authorization">
            <InfoRow label="One-Way Transport Cost" value="$45" />
            <InfoRow label="Mileage Reimbursement Rate" value="$0.67/mile" />
          </Card>

        </div>



        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Attached Documents</h2>
            <span className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">View All Files</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DocumentFileCard title='General Document' name="Commercial_License_Front.jpg" type="IMAGE" date="Jan 12, 2024" />
            <DocumentFileCard title='Enrollment Agreement' name="DOT_Medical_Form.jpg" type="IMAGE" date="Feb 05, 2024" />
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default RiderDetails;