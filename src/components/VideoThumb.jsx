import React from 'react'
import {logo2} from '../assets'

const VideoThumb = ({title, medium, resourceId}) => {
  return (
    <div className="hover:bg-[#821a1a] hover:bg-opacity-[0.03]
    px-1 py-2 cursor-pointer transition duration-200 border-b  border-[#ebe9e9]
    ease-out flex items-center justify-between w-full">

   <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
   <img src={medium.url}  alt="playlist" className="ml-2 h-[40px] w-[70px] rounded-[8px] shadow-sm"/>
   </a>
    
      <div className="space-y-0.5">
     
          <h6 className="text-[#6e767d] max-w-[180px] text-xs font-epilogue  truncate">
            {title}
          </h6>
        <h6 className="font-epilogue max-w-[200px] text-[10px] truncate">
        The Status of Weekly Review for My Economic Abuses in Japan I made some minor modification yet very important function for any SNS: following and followed function with neat counter and the list of people !
        </h6>
        <p>

        </p>
      </div>
     
    </div>
  )
}

export default VideoThumb
