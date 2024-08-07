import React, { useEffect, useState } from 'react'
import Sidebar from './component/layout/sidebar/Sidebar'
import Header from './component/layout/header/Header'
import Footer from './component/layout/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/pages/dashboard/Dashboard'

export default function AdminRoutes() {

  const [sideBar,setSideBar]=useState(true)
  useEffect(() => {
    const handleInitialScreenSize = () => {
      if (window.innerWidth < 769) {
        setSideBar(false);
      }
    };

    handleInitialScreenSize();
  }, []);

  return (
    <div className=''>
        <div className="flex min-h-screen ">
          <BrowserRouter>
              <Sidebar sideBar={sideBar}  setSideBar={setSideBar} />
              <div className="  w-full">
                  <Header sideBar={sideBar} setSideBar={setSideBar} />
                  <div className='bg-slate-50'>

                  <Routes>
                      <Route path="/dashboard" element={<Dashboard/>} />
                  </Routes>
                  </div>
              </div>
          </BrowserRouter>
        </div>
        <Footer/>
    </div>
  )
}