import React,{useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import {SidebarLink} from "../components"
import { Bars3Icon} from "@heroicons/react/24/outline"
import {navlinks} from '../constants'
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton'
// auth 
import { UserAuth } from '../context/AuthContext'
//context
import { useWebThreeContext } from '../context/WebThreeContext'
import {PostState} from '../context/PostContext'

const Sidebar = () => {
const navigate = useNavigate()
const {user, logout} = UserAuth()
const [isActive, setIsActive] = useState('Campaign');
const {connect, address}=useWebThreeContext();

const {setMemberId, memberId}=PostState();

useEffect(()=>{
  if(!user) navigate('/Signin')
},[user])


const handleLogout =async()=>{
   try {
     await logout()
     navigate('/Signin')
   } catch(e) {
    console.log(e.message)
   }
}

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px]
     p-2 fixed h-full">
      <div className="flex item-center justify-center w-14 h-14 hoverAnimation
      p-0 xl:ml-24" >
        {/* <img src={logo2} className="h-50 w-50 rounded-full"/> */}
      </div>

      <div className="space-y-2.5 mt-2 mb-2 xl:ml-24">
      
        {navlinks.map((link)=>(
          <SidebarLink 
          key={link.name}
          {...link}
         
          isActive={isActive}
          handleClick={()=>{
            if(!link.disabled) {
              setIsActive(link.name);
              navigate(link.link)
            }
            if(link.link=='/Profile' && !link.disabled){
              setMemberId(user?.uid);
              setIsActive(link.name);
              navigate(`/Profile/${user?.uid}`)
              console.log(memberId)
            }
          }}
          />
        ))}
      </div>

    
     

      <CustomButton
          btnType="button"
          title={address ? 'Alreay Connected' : 'Connect'}
          styles={address ? 'hidden xl:inline ml-auto border border-[#d84545] text-[#d84545] rounded-full w-56 h-[52px] text-sm font-bold shadow-md hover:bg-[#e8d9d9] hover:text-[#ececec] hover:border-0 ' 
          : 'hidden xl:inline ml-auto border border-[#d84545] text-[#d84545] rounded-full w-56 h-[52px] text-sm font-bold shadow-md hover:bg-[#e8d9d9] hover:text-[#ffffff] hover:border-0 '}
          handleClick ={()=>{
             if(address) navigate('/Profile')
             else connect()
           }}
         /> 
    
      <div 
      onClick={handleLogout}
      className="text-[#d9d9d9] flex items-center justify-center hoverAnimation border border-[#f8bfbf]
      xl:ml-auto xl:-mr-5 mt-auto" >
           <img src={user?.photoURL}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"/>
            <div className="hidden xl:inline leading-5 mr-3">
                <h4 className="font-bold text-[14px] ml-[3px] mr-[20px] text-[#d84545]">Your Name</h4>
                <p className="text-[#9c9a9a] text-[13px] ml-[3px]  mr-[20px] truncate">{user?.displayName ? (user?.displayName):(user?.email)}</p>
            </div>

            <Bars3Icon className="h-8 hidden xl:inline mi-10 text-[#d84545]"/>
      </div>

</div>
  )
}

export default Sidebar;
