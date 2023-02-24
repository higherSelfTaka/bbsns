import React from 'react'

import { Sidebar, ForumDetailFeed,Widgets } from '../components';
import { useParams } from 'react-router-dom';
import { PostState } from '../context/PostContext';
import {ForumModal} from '../modal'
const PostPage = () => {
 
const {id}=useParams()
 console.log("postId is", id)
 const {isOpen, setIsOpen} = PostState()

  return (
    <>
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <ForumDetailFeed id={id}/>
      {/* widget */}

      <Widgets/>
      {/* modal */}
     
        {/* modal */}
        {isOpen && <ForumModal/> }
      </>
  )
}

export default PostPage
