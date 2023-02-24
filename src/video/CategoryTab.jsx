import React,{useState, useEffect} from 'react'
import { abuse_category, psychosis_category, treatment_category } from '../constants'
import VideoListCard from './VideoListCard'
import {CheckCircleIcon} from '@heroicons/react/24/outline'

const YOUTUBE_PLAYLIST_ITEMS_API ='https://www.googleapis.com/youtube/v3/search'


const CategoryTab = () => {

const [abuse, setAbuse] = useState(true)
const [psychosis, setPsychosis]=useState(false)
const [treatment, setTreatment]=useState(false)

//video 
const [videos, setVideos]=useState([])
const [selectedCategory, setSelectedCategory]=useState('A victim of economic abuse in Japan')



useEffect(()=>{
  FetchAPI()
},[selectedCategory])

const FetchAPI =async()=>{
  const res= await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&q=${selectedCategory}&maxResult=50&key=`)
  const data = await res.json()
  setVideos(data.items)
  
  console.log('YOUTUBE DATA *****', data);
  console.log('YOUTUBE DATA.items *****', data.items);
  console.log(selectedCategory)
 // setVideos(data.items)
}


  return (
<>    
<div class="border-b border-[#f94b4b]">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-[#d84545] ">
       
        {/*  Story  */}

        <li class="mr-2"
        onClick={()=>{
            setAbuse(true)
            setPsychosis(false)
            setTreatment(false)
        }}>
        <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] dark:text-[#f94b4b]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Abuses 
            </a>
        </li>

        <li class="mr-2"
          onClick={()=>{
            setAbuse(false)
            setPsychosis(true)
            setTreatment(false)
        }}>
            <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                Psychosis
            </a>
        </li>
        <li class="mr-2"
         onClick={()=>{
            setAbuse(false)
            setPsychosis(false)
            setTreatment(true)
        }}>
           <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
               Treatment
            </a>
        </li>
    </ul>
</div>

<div class="border-b border-[#f94b4b]">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-[#d84545] ">
       
        {/*  Story  */}

        {abuse && abuse_category.map((abuse, index)=>(
            <li class="mr-2 mt-2 mb-2"
            onClick={()=>{
               setSelectedCategory(abuse.name)
            }}>    
           
           <div className="flex flex-row bg-[#cd3535] hover:bg-gray-500 text-white text-[10px]
            cursor-pointer items-center border border-[#f19595] rounded-full text-center px-2 py-0">
           <CheckCircleIcon className='w-4 h-4 mr-1'/>    
           <h3 className="">
               
              {abuse.name}
            </h3>
           </div>
            
            </li>
        ))}

       {psychosis && psychosis_category.map((psychosis, index)=>(
            <li class="mr-2 mt-2 mb-2"
            onClick={()=>{
              setSelectedCategory(psychosis.name)
           }}>       
           <div className="flex flex-row bg-[#cd3535] hover:bg-gray-500 text-white text-[10px]
            cursor-pointer items-center border border-[#f19595] rounded-full text-center px-2 py-0">
           <CheckCircleIcon className='w-4 h-4 mr-1'/>    
           <h3 className="">
              {psychosis.name}
            </h3>
           </div>
            </li>
        ))}

        {treatment && treatment_category.map((treatment, index)=>(
            <li class="mr-2 mt-2 mb-2"
            onClick={()=>{
              setSelectedCategory(treatment.name)
           }}>         
             <div className="flex flex-row bg-[#cd3535] hover:bg-gray-500 text-white text-[10px]
            cursor-pointer items-center border border-[#f19595] rounded-full text-center px-2 py-0">
           <CheckCircleIcon className='w-4 h-4 mr-1'/>    
           <h3 className="">
              {treatment.name}
            </h3>
           </div>
            </li>
        ))}
    </ul>
</div>

<div className="p-0 flex cursor-poiter border-b border-[#fbeeee]">
    <div className="flex flex-col space-y-0 w-full">
    {videos && videos.map((item)=>{
      const {id, snippet={}} = item
      const {title, thumbnails={}, channelTitle, description} = snippet;
      const {medium={}}=thumbnails
      return (
        <VideoListCard id={id.videoId} title={title} medium={medium} channelTitle={channelTitle} description={description} />
      )
    })}
    
    
     {/* <VideoListCard videos={videos}/> */}
    </div>
</div>
</>
  )
}

export default CategoryTab
