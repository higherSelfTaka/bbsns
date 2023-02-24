import React from 'react'
import {Route, Routes} from 'react-router-dom'


import {Sidebar, Feed, Widgets} from '../components'
import { UserAuth } from '../context/AuthContext'
import { ForumModal } from '../modal'
import { PostState } from "../context/PostContext";


const Forum = () => {
  const {user} = UserAuth()
  const {isOpen} = PostState()
  
  return (
    <>

    
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <Feed/>
      {/* widget */}
       
      <Widgets/>
      {/* modal */}

      {/* modal */}
      {isOpen && <ForumModal/> }

      </>
  )
}

export default Forum