import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Assets from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App'; // backend URL

const Add = () => {
  const [image, setImage] = useState(null);
  const [newsType, setNewsType] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("newsType", newsType);
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("image", image); // key must match multer single("image")

      const response = await axios.post(`${backendUrl}/api/news/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setNewsType("");
        setTitle("");
        setSubtitle("");
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
    <form onSubmit={submitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Image Upload */}
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="imageInput">
            <img
              className="w-20 h-20 object-cover border border-gray-300"
              src={!image ? Assets.Upload : URL.createObjectURL(image)}
              alt="upload preview"
            />
            <input
              type="file"
              id="imageInput"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* News Type */}
      <div className="w-full">
        <p className="mb-2">News Type</p>
        <input
          type="text"
          placeholder="Enter news type (e.g., Sports, Politics, Tech)"
          value={newsType}
          onChange={(e) => setNewsType(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Title */}
      <div className="w-full">
        <p className="mb-2">Title</p>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded"
          required
        />
      </div>

      {/* Subtitle (Optional) */}
      <div className="w-full">
        <p className="mb-2">Subtitle (Optional)</p>
        <input
          type="text"
          placeholder="Enter subtitle (optional)"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded"
        />
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white rounded">
        ADD
      </button>
    </form>
  );
};

export default Add;
