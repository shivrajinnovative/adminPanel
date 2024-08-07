import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import sidebarData from '../../../utils/sidebar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const SideNav = ({ Icon, name, link, dropdown }) => {
    const location = useLocation();
    const [showDropDown, setShowDropDown] = useState(false);
  
    const handleDropdownToggle = () => {
      setShowDropDown(prev => !prev);
    };
  
    const isActive =  location.pathname.startsWith(link);
  
    return (
      <div className={`ps-7 border-l-4 ${isActive ? 'border-green-500' : 'border-transparent'} my-3 me-5`}>
        <Link to={link} onClick={handleDropdownToggle} className={`py-3 rounded-lg px-4 text-green-500 font-bold flex items-center justify-between cursor-pointer ${isActive ? 'bg-emerald-100' : ''}`}>
          <span className="flex items-center">
            {Icon && <Icon className="me-2" />}
            {name}
          </span>   
          {dropdown && dropdown.length > 0 && <ExpandMoreIcon />}
        </Link>
        {dropdown && showDropDown && (
          <div className="pl-4">
            {dropdown.map((subItem, index) =>{
              const isActive =  location.pathname===subItem.link;
              return <Link key={index} to={subItem.link} className={`block py-2 border-b ${isActive?"border-b-2 border-green-700":""} text-gray-700 hover:text-green-500`}>
                {subItem.name}
              </Link>
            } )}
          </div>
        )}
      </div>
    );
  };

  
export default function Sidebar({sideBar,setSideBar}) {
    return (
        <div className={`py-5 bg-white shadow-lg overflow-hidden fixed z-10 h-full  lg:static ${sideBar?`lg:w-2/12 h-screen`:`w-0`} `}>
          <div className='lg:hidden text-end m-3' >
            <CancelRoundedIcon fontSize="large" onClick={()=>setSideBar(!sideBar)} />
          </div>
          <h1 className="text-5xl text-center py-10">LOGO</h1>
          {sidebarData.map((data, index) => (
            <SideNav
              key={index}   
              Icon={data.Icon}
              name={data.name}
              link={data.link}
              dropdown={data.dropdown}
            />
          ))}
        </div>
      );
}
