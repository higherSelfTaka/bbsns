import React from 'react'
import {useLocation} from 'react-router-dom'

import { useEffect, useState } from "react";
import { Post, Comment} from '../components'

import { db } from "../../firebase";
// context 
import { useAuth } from '@thirdweb-dev/react';
import { PostState } from '../context/PostContext';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import {ArrowLeftIcon} from "@heroicons/react/24/solid"
import {useNavigate} from 'react-router-dom'
import {Loader} from '../components'

const ForumDetailFeed = ({id}) => {
 const navigate= useNavigate()
 const {user} = useAuth()
 const {isOpen, setIsOpen} = PostState()
 const [post, setPost] = useState();
 const [comments, setComments] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

  console.log('id : ', id)
 // console.log("isOpen", isOpen)

useEffect(()=>
 onSnapshot(doc(db, "posts", id), (snapshot)=>{
  setIsLoading(true)
  setPost(snapshot.data());
  setIsLoading(false)
 }),
 [db]
);


useEffect(
  ()=>
  onSnapshot(
      query(
          collection(db,"posts",id,"comments"),
          orderBy("timestamp","desc")
         ), 
      (snapshot)=>setComments(snapshot.docs)
  ),
[db,id]
);


  return (
   
    <div className="flex-grow border-l border-r border-[#fdb5b5]
    max-w-2xl sm:ml-[73px] xl:ml-[370px]">


      <div className="flex items-center px-1.5 py-2 border-b
      border-r border-[#fdb5b5] text-[#ffffff] font-semibold text-xl
      gap-x-4 sticky top-0 z-50 bg-[#d84545]">
      
       
          <div className="hoverAnimation w-9 h-9 flex items-center 
          justify-center xl:px-0"
          onClick={()=>navigate('/Forum')}
          >
              <ArrowLeftIcon className="h-5 text-white"/>
          </div>
         {post?.username}'s Story 
      </div>
      <Post id={id} post={post} postPage/>
      
      {comments.length > 0 && (
          <div className="pb-72">
              {comments.map(comment=>(
                  <Comment key={comment.id} id={comment.id}
                  comment={comment.data()}/>
              ))}
          </div>
      )}
    </div>
     
  )
}

export default ForumDetailFeed
