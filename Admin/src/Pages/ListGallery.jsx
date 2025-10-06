import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const ListGallery = () => {
  const [images, setImages] = useState([]); // make sure default is empty array

  const fetchGallery = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/gallery/list`);
      console.log(response.data);

      if (response.data.success && Array.isArray(response.data.gallery)) {
        setImages(response.data.gallery); // ensure it's an array
      } else {
        setImages([]); // fallback empty array
        toast.error(response.data.message || "No images found");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  if (!images || images.length === 0) {
    return <p>No images found.</p>;
  }

  return (
    <div>
      <p className="font-bold text-lg mb-2">Gallery Images</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((item, index) => {
          const imgSrc = item?.image || null; // prevent empty string
          if (!imgSrc) return null; // skip if no image
          return (
            <div key={index} className="w-full h-48 border flex items-center justify-center overflow-hidden">
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListGallery;
