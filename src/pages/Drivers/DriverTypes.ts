

export interface DriverData {
  id: string;
  name: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';
  licenseNumber: string;
  issuingState: string;
  dotExpiration: string;
  insuranceExpiration: string;
  vehicle: {
    make: string;
    model: string;
    year: number;
    plate: string;
    color: string;
  };
}



export const driver: DriverData = {
  id: "D001",
  name: "James Wilson",
  dob: "1980-05-20",
  phone: "(555) 111-2222",
  email: "j.wilson@email.com",
  address: "123 Oak St, Springfield, IL",
  status: "active",
  licenseNumber: "DL-IL-789456",
  issuingState: "Illinois",
  dotExpiration: "2025-06-15",
  insuranceExpiration: "2025-03-20",
  vehicle: {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    plate: "IL-ABC-1234",
    color: "Silver"
  }
};