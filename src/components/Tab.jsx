import React from 'react'
import {PostState} from '../context/PostContext'

const Tab = () => {
 const {isStory, setIsStory, setIsFollowing, setIsFollower}  = PostState()






    return (
    <div class="border-b border-[#f94b4b]">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-[#d84545]">
       
        {/*  Story  */}

        <li class="mr-1"
        onClick={()=>{
            setIsStory(true)
            setIsFollower(false)
            setIsFollowing(false)
        }}
        >
        <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] dark:text-[#f94b4b]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Your Story
            </a>
        </li>

        <li class="mr-1"
          onClick={()=>{
            setIsStory(false)
            setIsFollower(true)
            setIsFollowing(false)
        }}
        
        >
            <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                Following
            </a>
        </li>
        <li class="mr-1"
         onClick={()=>{
            setIsStory(false)
            setIsFollower(false)
            setIsFollowing(true)
        }}>
           <a href="#" class="inline-flex p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-[#f94b4b] dark:hover:text-[#f94b4b] group">
                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-[#d84545] group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
               Follower
            </a>
        </li>
     
       
    </ul>
</div>
  )
}

export default Tab