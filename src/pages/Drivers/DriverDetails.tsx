

import {
    Award,
    Shield,
    Truck,
    User
} from 'lucide-react';
import React from 'react';
import { DocumentFileCard } from './DocumentFileCard';
import { DocumentItem } from './DocumentItem';
import { driver } from './DriverTypes';
import { InfoRow } from './InforRow';




// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: any }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
      {Icon && <Icon size={18} className="text-slate-400" />}
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <div className="p-6">{children}</div>
  </div>
);






const DriverDetails: React.FC = () => {
  return (
    <div className=" bg-slate-50   sm:p-3 text-slate-900">
      <div className="">
        
        {/* Header Section */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">{driver.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-slate-400 font-bold uppercase text-[11px] tracking-[0.2em]">
                Driver ID: <span className="text-slate-800">{driver.id}</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300"></span>
              <span className="text-emerald-600 font-bold uppercase text-[11px] tracking-widest flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> {driver.status}
              </span>
            </div>
          </div>
   
        </header>

        {/* 4-Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <Card title="Personal Information" icon={User}>
            <InfoRow label="Full Name" value={driver.name} />
            <InfoRow label="Date of Birth" value={driver.dob} />
            <InfoRow label="Phone" value={driver.phone} />
            <InfoRow label="Email" value={driver.email} />
            <InfoRow label="Address" value={driver.address} />
            <InfoRow label="Status" value={driver.status} isStatus />
          </Card>

          <Card title="Licensing & Certification" icon={Award}>
            <InfoRow label="License Number" value={driver.licenseNumber} />
            <InfoRow label="Issuing State" value={driver.issuingState} />
            <InfoRow label="DOT Medical Expiration" value={driver.dotExpiration} />
            <InfoRow label="Insurance Expiration" value={driver.insuranceExpiration} />
          </Card>

          <Card title="Document Checklist" icon={Shield}>
            <DocumentItem label="Driver's License" />
            <DocumentItem label="DOT Medical Certificate" />
            <DocumentItem label="Proof of Insurance" />
            <DocumentItem label="Vehicle Registration" />
          </Card>

          <Card title="Vehicle Information" icon={Truck}>
            <InfoRow label="Make" value={driver.vehicle.make} />
            <InfoRow label="Model" value={driver.vehicle.model} />
            <InfoRow label="Year" value={driver.vehicle.year} />
            <InfoRow label="License Plate" value={driver.vehicle.plate} />
            <InfoRow label="Color" value={driver.vehicle.color} />
          </Card>
        </div>


        {/* --- NEW SECTION: Document Gallery --- */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Attached Documents</h2>
            <span className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">View All Files</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DocumentFileCard title='General Document' name="Commercial_License_Front.jpg" type="IMAGE" date="Jan 12, 2024" />
            <DocumentFileCard title='General Training' name="DOT_Medical_Form.jpg" type="IMAGE" date="Feb 05, 2024" />
            <DocumentFileCard title='Driving Record' name="Insurance_Policy_2024.jpg" type="IMAGE" date="Mar 20, 2024" />
            <DocumentFileCard title='MnDot Training' name="Registration_Card.jpg" type="IMAGE" date="Jan 15, 2024" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default DriverDetails;