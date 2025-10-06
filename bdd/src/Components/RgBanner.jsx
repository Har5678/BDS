import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import assets from "../assets/Assets";
import { backendUrl } from "../App";

const RgBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const courses = ["BA LLB", "LLB", "LLM", "Cyberlaw"];
  const currentYear = new Date().getFullYear();
  const session = `${currentYear}-${currentYear + 1}`;

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // create FormData object

      console.log(formData);
      

      // send to backend
      const response= await axios.post(`${backendUrl}/api/students/add`, formData, {
        
      });
      if(response.data.success){

      setMessage("✅ Registration Successful!");
      toast.success("Registration successful!");

      
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        fatherName: "",
        address: "",
      });
    }else{
      setMessage("❌ Something went wrong. Please try again.");
      toast.error("Something went wrong")
    }
    } catch (err) {
      console.error(err);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-[2000px] min-h-[480px] flex flex-col md:flex-row items-center justify-center 
                 bg-gradient-to-b from-[#6e091b] via-[#920C24] to-[#b71c2f] px-4 md:px-6 py-10 md:py-16 gap-10"
    >
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left text-white gap-4 px-2 md:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={assets.Logo1}
            alt="BDS School Logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
          />
          <h2 className="text-2xl md:text-3xl font-bold">BDS School of Law</h2>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold max-w-full md:max-w-lg leading-snug drop-shadow-lg">
          Legacy of 23+ years in practice & professional legal education
        </h1>

        <div className="flex flex-wrap gap-2 md:gap-3 mt-2 mb-2">
          {courses.map((course) => (
            <span
              key={course}
              className="px-3 py-1 md:px-4 md:py-2 bg-white/20 rounded-full text-sm md:text-base font-semibold 
                         hover:bg-white hover:text-[#920C24] transition cursor-pointer shadow-md"
            >
              {course}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-lg drop-shadow-md">Session: {session}</p>

        <div className="mt-2 px-3 md:px-4 py-2 border-2 border-[#FFD700] rounded-xl inline-block shadow-lg">
          <p className="text-sm md:text-base font-semibold italic">
            “Join us to earn a Career, not just a degree!”
          </p>
        </div>
      </div>

      {/* Right Side - Glass Form */}
      <div
        className="w-full md:w-1/3 flex flex-col items-center justify-center px-6 md:px-10 py-6 md:py-10 
                   bg-white/10 backdrop-blur-xl rounded-2xl 
                   shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] border border-white/20 relative z-10"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white drop-shadow-md">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 md:gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md 
                       outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md 
                       outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md 
                       outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md 
                       outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
          <textarea
            name="address"
            placeholder="Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white text-gray-800 border border-gray-200 shadow-md 
                       outline-none focus:ring-2 focus:ring-[#FFD700] resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-8 md:px-10 py-3 bg-[#FFD700] text-[#920C24] font-bold rounded-xl 
                       shadow-lg hover:shadow-2xl hover:bg-white hover:text-[#920C24] transition uppercase"
          >
            {loading ? "Submitting..." : "Register"}
          </button>

          {message && (
            <p className="text-center mt-3 text-white font-semibold">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default RgBanner;
