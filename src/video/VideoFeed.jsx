import React, {useState, useEffect} from 'react'
import { CampaignNavbar} from '../components'
import {CategoryTab, Tab } from './index'

const VideoFeed = () => {



  return (
    <div className="flex-grow border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <CampaignNavbar/>
   
      <CategoryTab/>
       
    </div>
  )
}

export default VideoFeed
