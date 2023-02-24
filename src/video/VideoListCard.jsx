import React from 'react'
import logo2 from '../assets/logo2.png'
import annoymous from '../assets/google.png'
import { useNavigate } from 'react-router-dom'

const VideoListCard = ({id, title, medium, channelTitle, description}) => {
 console.log(title, channelTitle,  )
 
 const navigate = useNavigate()
 
 
return (
  
    <div class="flex flex-col divide-y w-full border-b border-[#f2efef]">    
        <div class="flex flex-row" >   
            <div 
                onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/Streaming/${id}`,{state: {title,channelTitle, description}})
                }}
            class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-3">
                <div class="flex flex-col w-200 h-100 justify-center items-center mr-4">
                    <a href="#" class="block relative">
                        <img alt="profile" src={medium.url} className="mx-auto object-cover rounded-[5px] h-11 w-15" />
                    </a>
                </div>
                <div class="flex-1 pl-1">
                    <div class="text-[13px] dark:text-white text-[#b73838]">
                       {title}
                    </div>
                    <div class="text-gray-400 dark:text-gray-200 text-[11px]"> 
                    {description}
                    </div>
                </div>
                <div class="flex flex-row justify-center">
                    {/* <div class="text-[#a8a8a8] dark:text-gray-200 text-[7px]">{Date(follower?.timestamp*1000).toLocaleString('YYYY-MM-DD')}</div> */}
                    <button class="w-7 text-right flex justify-end">
                        <svg width="15" fill="currentColor" height="15" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>

  )
}

export default VideoListCard