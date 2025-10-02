import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Add from './Pages/Add'
import List from './Pages/List'


const App = () => {

  // const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");

  // useEffect(() => {
  //   localStorage.setItem("token", token)
  // }, [token])

  return (


    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      
        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
              </Routes>
            </div>
          </div>
        </>
      
    </div>


  )
}

export default App