import { Calendar, MapPin, Send, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

// Define the form data types
type DispatchFormData = {
    rider: string;
    driver: string;
    pickup: string;
    destination: string;
    date: string;
    time: string;
    rideType: string;
    notes?: string;
};

const DispatchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DispatchFormData>();

    const onSubmit = (data: DispatchFormData) => {
        console.log("Form Submitted:", data);
        alert("Ride Dispatched Successfully! Check Console.");
    };

    return (
        <div className="  flex  ">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl space-y-6">

                {/* Section 1: Rider & Driver */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <User className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">Rider & Driver</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Select Rider *</label>
                            <select
                                {...register("rider", { required: "Please select a rider" })}
                                className={`w-full p-3 bg-gray-50 border ${errors.rider ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                            >
                                <option value="">Choose rider...</option>
                                <option value="john_doe">John Doe</option>
                            </select>
                            {errors.rider && <p className="text-red-500 text-xs mt-1">{errors.rider.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Assign Driver *</label>
                            <select
                                {...register("driver", { required: "Please assign a driver" })}
                                className={`w-full p-3 bg-gray-50 border ${errors.driver ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                            >
                                <option value="">Choose driver...</option>
                                <option value="driver_smith">Driver Smith</option>
                            </select>
                            {errors.driver && <p className="text-red-500 text-xs mt-1">{errors.driver.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Section 2: Route Details */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <MapPin className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">Route Details</h2>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Pickup Location *</label>
                            <input
                                {...register("pickup", { required: "Pickup address is required" })}
                                placeholder="Enter pickup address"
                                className={`w-full p-3 bg-gray-50 border ${errors.pickup ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Destination *</label>
                            <input
                                {...register("destination", { required: "Destination address is required" })}
                                placeholder="Enter destination address"
                                className={`w-full p-3 bg-gray-50 border ${errors.destination ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Section 3: Schedule */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">Schedule</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Date</label>
                            <input
                                type="date"
                                {...register("date", { required: "Date is required" })}
                                className={`w-full p-3 bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-500`}
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Time</label>
                            <input
                                type="time"
                                {...register("time", { required: "Time is required" })}
                                className={`w-full p-3 bg-gray-50 border ${errors.time ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-500`}
                            />
                            {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Ride Type</label>
                            <select
                                {...register("rideType", { required: "Select ride type" })}
                                className={`w-full p-3 bg-gray-50 border ${errors.rideType ? 'border-red-500' : 'border-gray-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                            >
                                <option value="Medical">Medical</option>
                                <option value="Standard">Standard</option>
                                <option value="Executive">Executive</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Notes</label>
                        <textarea
                            {...register("notes")}
                            rows={4}
                            placeholder="Special instructions..."
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>
                </div>

                {/* Action Button */}
                <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-[#007bff] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg active:scale-95 w-full md:w-auto"
                >
                    <Send className="w-5 h-5 fill-current" />
                    Dispatch Ride
                </button>

            </form>
        </div>
    );
};

export default DispatchForm;