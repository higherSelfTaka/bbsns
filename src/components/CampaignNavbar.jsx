import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import {MegaphoneIcon, Bars3Icon, FingerPrintIcon, MagnifyingGlassPlusIcon} from '@heroicons/react/24/outline'

import {navlinks} from '../constants'
import CustomButton from './CustomButton'


const CampaignNavbar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive]=useState('All Campaign')
  const [toggleDrawer, setToggleDrawer]=useState(false)

  const address ="0x12133"
  return (
    <div className="text-[#d84545] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50
    bg-[#ffffff] border border-[#ffe0e0] shadow-md">
    
       Burgundy Butterfly
         {/* <div
         className="w-[200px] h-full rounded-[4px] bg-[#ececec] 
         flex justify-center items-center cusor-pointer mr-[15px]">
     
          <input type="text" placeholder="Search for Campaigns"
          className="flex ml-3   w-full font-epilogue font-normal text-[14px] placeholer:text-[#4b5264]
          text-grey bg-transparent outline-none bg-[#ececec] rounde-full"
          />
       
           <MegaphoneIcon className="h-7 mr-1 text-[#d84545]" /> 
         </div> */}
         
        

        <div className="hoverAnimation w-9 h-9 flex flex-row items-center justify-center xl:px-0 ml-auto">
       
        <Bars3Icon 
        onClick={()=> setToggleDrawer(!toggleDrawer)}
        className="w-[25px] h-[25px] object-contain  text-[#ef6767]"/>

        
  
 

        </div>
    </div>
  )
}

export default CampaignNavbar