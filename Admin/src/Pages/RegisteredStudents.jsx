import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

export const RegisteredStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/students/list`);
      if (response.data.success && Array.isArray(response.data.students)) {
        setStudents(response.data.students);
      } else {
        setStudents([]);
        toast.error(response.data.message || "No students found");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  console.log(students);

  if (!students || students.length === 0) {
    return <p>No registered students found.</p>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <p className="font-bold text-lg mb-2">Registered Students</p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Father's Name</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">Phone No</th>
            <th className="border px-3 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-3 py-2">{index + 1}</td>
              <td className="border px-3 py-2">{student.Name}</td>
              <td className="border px-3 py-2">{student.FatherName}</td>
              <td className="border px-3 py-2">{student.email}</td>
              <td className="border px-3 py-2">{student.Phone}</td>
              <td className="border px-3 py-2">{student.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
