import React from 'react'
import {daysLeft} from '../utils'
import {logo2} from '../assets'
import {UserAuth} from '../context/AuthContext'



const FundCard = ({owner, title, description, target,
deadline, amountCollected, image, handleClick }) => {
  
  const remainingDays = daysLeft(deadline)
  const {user} = UserAuth()
  
    return (
<div class="flex flex-col divide-y w-full" onClick={handleClick}>
<div class="flex flex-row" >  
<div class="select-none cursor-pointer hover:bg-[#ff9a9a0f] flex flex-1 items-center p-1">
      <div class="flex flex-col w-200 h-100 justify-center items-center mr-4">
            <a href="#" class="block relative">
            <img className="mx-auto object-cover rounded-[4px] h-15 w-20" src={image} title="title"/>
            </a>
      </div>
      <div class="flex-1 pl-1">
            <div class="text-[13px]text-bold mb-1 dark:text-white text-[#d94646]">
              {title}
            </div>
            <div class="text-gray-400 dark:text-gray-200 text-[12px]"> 
            {description}
            </div>
            <div className="mt-1 justify-between flex flex-row w-full text-sm  border-t border-[#dddcdc] px-1 py-0">
              <p className="text-[#d84545] mt-1 text-[11px]">Collected {amountCollected} ETH</p>
              <p className="text-[#d84545] mt-1 text-[11px]">  Target {target} Ethereum</p>
              <p className="text-[#d84545] mt-1 text-[11px]"> {remainingDays} days left</p>
            </div>
        </div>

        <div class="flex flex-row justify-center">
            <button class="w-7 text-right flex justify-end">
                <svg width="12" fill="currentColor" height="12" class="hover:text-[#fd8080] dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
            </button>
        </div>        
      </div>
  </div>
</div>



  
  )
}

export default FundCard