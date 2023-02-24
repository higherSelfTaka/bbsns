import React from 'react'
import {Route, Routes} from 'react-router-dom'


import {Sidebar, UserFeed, Widgets} from '../components'
import { UserAuth } from '../context/AuthContext'
import { ForumModal, ProfileInfo} from '../modal'
import { PostState } from "../context/PostContext";



const Profile = () => {
  const {user} = UserAuth()
  const {isOpen, isProfleEdit} = PostState()
  
  return (
    <>

      {/* sidebar */}
      <Sidebar/>
      {/* feed */}


      <UserFeed/>
      {/* widget */}
       
      <Widgets/>
      {/* modal */}

      {/* modal */}
      {isOpen && <ForumModal/> }
       {/* modal */}
       {isProfleEdit && <ProfileInfo/> }

      </>
  )
}

export default Profile