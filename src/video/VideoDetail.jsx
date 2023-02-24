
import React, {useState, useEffect}from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {CheckCircleIcon} from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';
import {CampaignNavbar, Sidebar, Widgets} from '../components'


const VideoDetail = () => {
 const {id} = useParams()
 const location = useLocation();
 const videostate = location.state 

 console.log(videostate)

 

  return (
    <>
    <Sidebar/>
    <div className="flex-grow border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
    <CampaignNavbar/>
  
    <div className="p-3 flex cursor-poiter border-b text-[#e84b4b] border-[#fbeeee]">
    <div className="inline-block">
        <div className="p-2 font-bold">
            {videostate.title}
        </div>
        <div className="p-2 text-[13px] text-[#5a5757]">
            {videostate.description}
        </div>
    </div>
    
    </div>

    <div className="px-3 py-3 bg-[#fff1f1] rounded-[7px]">
      <ReactPlayer 
     
      url={`https://wwww.youtube.com/watch?v=${id}`}/>
    </div>
    
    </div>
    <Widgets/>
    </>
    
    
    
  )
}

export default VideoDetail
