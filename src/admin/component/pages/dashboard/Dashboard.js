import React from 'react'
import TotalCounter from './components/TotalCounter'
import MyChart from './components/MyChart'
import MyBarChart from './components/MyBarChart'
import CircularProgressBar from './components/CircularProgressBar'
import MyPieChart from './components/MyPieChart'

export default function Dashboard() {
  return (
    <div className='p-5' >
        <h1 className='text-3xl  font-bold' >Dashboard</h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-7/12">
          <TotalCounter/>
          </div>
          <div className="w-full lg:w-5/12">
          <MyChart/>
          </div>
          <div className="w-full lg:w-6/12">
          <MyBarChart/>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12">
          <CircularProgressBar/>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12">
          <MyPieChart />
          </div>
        </div>
    </div>
  )
}
