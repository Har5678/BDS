import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const List = () => {
  const [newsList, setNewsList] = useState([]);

  // Fetch all news
  const fetchNews = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/news/list`);
      if (response.data.success) {
        setNewsList(response.data.news);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Delete news by ID
  const deleteNews = async (id) => {
    
    try {
        
      const response = await axios.post(`${backendUrl}/api/news/delete`,{id});
      if (response.data.success) {
        toast.success(response.data.message);
        // Update frontend list after deletion
        setNewsList(newsList.filter(item => item._id !== id));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <p className='mb-2 font-bold'>All News List</p>
      <div className='flex flex-col gap-2'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_2fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm font-semibold'>
          <span>Image</span>
          <span>News Type</span>
          <span>Title</span>
          <span>Subtitle</span>
          <span>Action</span>
        </div>

        {/* News Items */}
        {newsList.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr_2fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
          >
            {/* Image */}
            <img
              className='w-12 h-12 object-cover'
              src={item.image}
              alt={item.title}
            />

            {/* News Type */}
            <p>{item.newsType}</p>

            {/* Title */}
            <p>{item.title}</p>

            {/* Subtitle */}
            <p>{item.subtitle ? item.subtitle : "-"}</p>

            {/* Action */}
            <p
              className='text-right md:text-center cursor-pointer text-lg text-red-500'
              onClick={() => deleteNews(item._id)}
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
