import { useState } from 'react';
import { AlertCircle, Car, ChevronDown, FileText, GraduationCap, ShieldCheck, Upload } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';

type props = {

  type: string
}

const DocumentUploadForm = ({ type }: props) => {


  const [driver, setDriver] = useState<string>("");
  const [category, setCategory] = useState<string>("General Document");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const allCategories = [
    { id: 'general', name: 'General Document', icon: <FileText size={20} />, showFor: ['Driver', 'Rider'] },
    { id: 'training', name: 'General Training', icon: <GraduationCap size={20} />, showFor: ['Driver'] },
    { id: 'record', name: 'Driving Record', icon: <Car size={20} />, showFor: ['Driver'] },
    { id: 'mndot', name: 'MnDOT Training', icon: <ShieldCheck size={20} />, showFor: ['Driver'] },
    { id: 'enrollment', name: 'Enrollment Agreement', icon: <FileText size={20} />, showFor: ['Rider'] },
  ]

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setErrors(prev => ({ ...prev, file: "" }));
    }


  };



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check validation
    const newErrors: { [key: string]: string } = {};
    if (!driver || driver === "") newErrors.driver = "Please select a driver";
    if (!category) newErrors.category = "Please select a category";
    if (!file) newErrors.file = "Please upload a valid document";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Validation failed:", newErrors);
    } else {
      setErrors({});


      console.log("--- Form Submitted ---");
      console.log("Driver Name:", driver);
      console.log("Category Type:", category);
      console.log("File Selected:", file?.name);
      console.log("Status: OK");

      alert("Document uploaded successfully! Check console for details.");
    }
  };

  return (
    <div className="space-y-6 sm:max-w-3xl ">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Driver Section */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Select {type== 'Driver' ? 'Driver' : 'Rider'} </h2>
          <div className="relative">
            <select
              value={driver}
              onChange={(e) => {
                setDriver(e.target.value);
                setErrors(prev => ({ ...prev, driver: "" }));
              }}
              className={`w-full appearance-none bg-gray-50 border ${errors.driver ? 'border-red-500' : 'border-gray-200'} text-gray-700 py-3 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer`}
            >
              <option value="">Choose a {type == 'Driver' ? 'driver' : 'rider'} ...</option>
              <option value="driver1">Adnan Chowdhury</option>
              <option value="driver2">Rimon Ahmed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <ChevronDown size={18} />
            </div>
          </div>
          {errors.driver && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={14} /> {errors.driver}</p>}
        </div>

        {/* Category Section */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">Document Category</h2>
            <p className="text-sm text-gray-400 mt-1">{type=='Driver' ? 'Driver' : 'Rider'} have additional upload categories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allCategories
              .filter(cat => cat.showFor.includes(type)) // Type check kore filter koro
              .map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setCategory(cat.name)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${category === cat.name
                      ? 'border-blue-500 bg-blue-50/50 text-blue-600 shadow-sm'
                      : 'border-gray-100 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <span className={`${category === cat.name ? 'text-blue-500' : 'text-gray-400'}`}>
                    {cat.icon}
                  </span>
                  <span className="font-semibold">{cat.name}</span>
                </button>
              ))}
          </div>
        </div>

        {/* File Section */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Upload File</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">File (PDF, JPEG, PNG)</label>
              <div className={`flex items-center w-full bg-gray-50 border ${errors.file ? 'border-red-500' : 'border-gray-200'} rounded-xl overflow-hidden`}>
                <label className="cursor-pointer bg-gray-100 px-4 py-3 text-sm text-gray-700 border-r border-gray-200 hover:bg-gray-200">
                  Choose file
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
                <span className="px-4 text-sm text-gray-500 truncate">{file ? file.name : "No file chosen"}</span>
              </div>
              {errors.file && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={14} /> {errors.file}</p>}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.99]"
            >
              <Upload size={20} />
              Upload Document
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentUploadForm;