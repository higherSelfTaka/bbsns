import React from 'react'
import {Route, Routes} from 'react-router-dom'


import {Sidebar, Widgets} from '../components'
import {VideoFeed} from '../video'
import { UserAuth } from '../context/AuthContext'
import { ForumModal } from '../modal'
import { PostState } from "../context/PostContext";


const Streaming = () => {
  const {user} = UserAuth()
  const {isOpen} = PostState()
  
  return (
    <>

    
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <VideoFeed/>

      {/* widget */} 
      <Widgets/>
      {/* modal */}

      {/* modal */}
      {isOpen && <ForumModal/> }

      </>
  )
}

export default Streaming