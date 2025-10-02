import React from 'react'
import { Link } from 'react-router-dom'
import Assets from '../assets/assets';




const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <Link to="/add" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={Assets.Add} alt="" />
            <p className='hidden md:block'>Add News</p>
            </Link>
            <Link to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={Assets.Order} alt="" />
            <p className='hidden md:block'>List News</p>
            </Link>
            <Link to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={Assets.Order} alt="" />
            <p className='hidden md:block'>Add Gallery Images</p>
            </Link>
            <Link to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={Assets.Order} alt="" />
            <p className='hidden md:block'>List Gallery</p>
            </Link>
            <Link to="/list" className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l">
            <img src={Assets.Order} alt="" />
            <p className='hidden md:block'>List Students</p>
            </Link>
            </div>
        </div>

    )
}

export default Sidebar;