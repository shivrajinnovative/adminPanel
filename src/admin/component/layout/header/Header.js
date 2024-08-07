import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function Header({sideBar,setSideBar}) {
  return (
    <div className='flex md:px-5 md:py-1 w-full bg-white flex-wrap-reverse justify-center my-3 lg:justify-between'>
        <span onClick={()=>setSideBar(!sideBar)} className="bg-green-100 hover:bg-green-500 hover:text-green-100 text-green-500 p-3 rounded-xl me-4 cursor-pointer "><MenuRoundedIcon/></span>
        <input type="text" placeholder='Search here' className='p-3 px-7 bg-slate-50 rounded-lg md:w-[300px] lg:w-8/12' />
        <div className='md:flex hidden space-x-2 my-3 md:m-0  '>
          <Link to="/notification" className="bg-blue-100 hover:bg-blue-500 hover:text-blue-100 text-blue-500 p-1 md:p-3 rounded-xl ms-9"><NotificationsNoneOutlinedIcon/></Link>
          <Link to="/message" className="bg-blue-100 hover:bg-blue-500 hover:text-blue-100 text-blue-500 p-1 md:p-3 rounded-xl "><MessageOutlinedIcon/></Link>
          <Link to="/cart" className="bg-slate-200 text-slate-500 hover:bg-slate-500 hover:text-slate-100 p-1 md:p-3 rounded-xl "><CardGiftcardOutlinedIcon/></Link>
        </div>
    </div>
  )
}
