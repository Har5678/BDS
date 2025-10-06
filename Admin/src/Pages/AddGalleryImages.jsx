import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../App';
import Assets from '../assets/assets';

const AddGalleryImage = () => {
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(`${backendUrl}/api/gallery/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        toast.success("Image added successfully");
        setImage(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 w-full">
      <p className="font-bold text-lg">Add Gallery Image</p>

      <label className="w-48 h-48 flex items-center justify-center border cursor-pointer relative">
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={image ? URL.createObjectURL(image) : Assets.Upload}
          alt="preview"
          className="w-full h-full object-cover"
        />
        {image && (
          <span
            className="absolute top-1 right-1 cursor-pointer text-red-500 font-bold text-lg"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
            }}
          >
            X
          </span>
        )}
      </label>

      <button
        type="submit"
        className="w-32 py-3 bg-black text-white rounded mt-4 hover:bg-gray-800 transition"
      >
        Upload
      </button>
    </form>
  );
};

export default AddGalleryImage;
