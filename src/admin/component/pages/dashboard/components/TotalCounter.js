import React from 'react'
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

const TotalComponent=({icon,count,name,number,colorr})=>{
    return (
        <div className='w-full md:w-3/12 p-2 cursor-pointer hover:scale-105 ' >
            <div className={`bg-${colorr}-100 rounded-2xl  p-4  hover:shadow`}>
                <span className={`bg-${colorr}-400 text-white p-2 mb-4 rounded-full w-10 flex justify-center items-center`}  >
                    {icon}
                </span> 
                <h1 className='font-bold text-2xl text-blue-950' >{count}</h1>
                <p className=' font-medium' >Total {name}</p>
                <p className='text-xs text-blue-600' >+{number}% from yesterday</p>
            </div>  
        </div>
    )
}

export default function TotalCounter() {
  return (
    <div className='p-4 bg-white shadow  rounded-lg my-3'>
        <h1 className='text-xl font-bold'>Total Sales</h1>
        <div className="flex flex-wrap justify-center ">
            <TotalComponent icon={<InsertChartRoundedIcon/>} name="Sales" count="$1K" number="8"  colorr="red"  />
            <TotalComponent icon={<InsertChartRoundedIcon/>} name="Sales" count="200" number="8" colorr='slate' />
            <TotalComponent icon={<InsertChartRoundedIcon/>} name="Sales" count="100" number="8" colorr='green' />
            <TotalComponent icon={<PersonAddAlt1RoundedIcon/>} name="Sales" count="510   " number="8" colorr="violet" />
        </div>
    </div>
  )
}

