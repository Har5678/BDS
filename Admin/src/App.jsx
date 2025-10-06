import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Add from './Pages/Add'
import List from './Pages/List'
import AddGalleryImages from './Pages/AddGalleryImages'
import ListGallery from './Pages/ListGallery'
import { RegisteredStudents } from './Pages/RegisteredStudents'
import Login from './Components/Login'

export const backendUrl=import.meta.env.VITE_BACKEND_URL;


const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])

  return (


    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token==""?<Login setToken={setToken}/>:
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

              <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/add-gallery-images' element={<AddGalleryImages/>}/>
                <Route path='/gallery-list' element={<ListGallery/>}/>
                <Route path='/students' element={<RegisteredStudents/>}/>
              </Routes>
            </div>
          </div>
        </>
  }
  
      
    </div>
  


  )
}

export default App