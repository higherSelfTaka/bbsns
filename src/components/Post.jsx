
import React,{useState, useEffect} from 'react'
import {db} from '../../firebase'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc,} from "@firebase/firestore";
import {HeartIcon,TrashIcon} from '@heroicons/react/24/outline'
import {HeartIcon as HeartIconFilled,} from '@heroicons/react/24/outline'
import {BookmarkIcon,UserIcon,ChatBubbleBottomCenterIcon} from '@heroicons/react/24/outline'
// auth 
import { UserAuth } from '../context/AuthContext'
import {PostState} from '../context/PostContext'
import { useNavigate } from 'react-router-dom';

import {Loader} from '../components'


const Post = ({id, post, postPage}) => {
const {user} = UserAuth()
const {isOpen, setIsOpen, postId, setPostId,  setMemberId} = PostState()

const navigate = useNavigate()    

const [comments, setComments]=useState([])
const [likes, setLikes] = useState([]);
const [liked, setLiked] = useState(false);

console.log(user)

useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
    (snapshot) => {
      setComments(snapshot.docs)
    }
      ),
    [db, id]
  );

useEffect(
    ()=> onSnapshot(collection(db, "posts", id, "likes"), (snapshot)=>
    setLikes(snapshot.docs)
    ), [db, id]
  )

  useEffect(()=>
  setLiked(
    likes.findIndex((like)=>like.id===user?.uid)!==-1
  ),
[likes]);  

const likePost= async()=>{
    if(liked){
       await deleteDoc(doc(db,"posts",id,"likes",user.uid))
    } else {
       await setDoc(doc(db, "posts",id,"likes",user.uid),{
       username:user.displayName,
       });
    }
   };



  return (
  <div className="p-2 flex cursor-poiter border-b border-[#fbeeee]"
   onClick={()=>navigate(`/Forum/${id}`)}>
     
      {!postPage && (
        <img src={post?.userImg} alt="" className="h-11 w-11 rounded-full mr-3"/>
      )}
      <div className="flex flex-col space-y-0 w-full">
          <div className={`flex ${!postPage && "justify-between"}`}>
           {
            postPage && (
                <img src={post?.userImg} alt="Profile Pic" className="h-11 w-11 rounded-full mr-3"/>
            )}
            <div className="text-[#2e2a2a]">
               <div className="inline-block group">
                  <h4 
                  onClick={(e)=>{
                    e.stopPropagation();
                    setMemberId(post?.id);
                    navigate(`/Profile/${post?.id}`)
                  }}
                  className={`font-bold text-[12px] sm:text-sm
                  group-hover:underline text-[#d84545]
                  ${!postPage && "inline-block"}`}>{post?.username ? (post?.username):("anonymous user")}</h4>
                 
                 <span className="hover:underline text-sm sm:text-[11px] text-[#928d8d]">
                  {/* <div> {new Date(post?.timestamp.seconds*1000).toDateString()}</div>   */}
                 </span>
               </div>
               
                {!postPage && (
                    <p className="text-[#877b7b] text-[12px]  sm:text-sm mt-0.5 mb-0">
                      {post?.text}
                    </p>
                )}
                   {postPage && (
            <p className="text-[#877b7b] text-[12px] sm:text-sm mt-0.5 mb-0">{post?.text}</p>
            )}
                <img src={post?.image} alt="" className="rounded-2x1 max-h-[700px] object-contain"/>
            </div>
          </div>


    <div className={`text-[#6e767d] flex justify-between w-10/12 
      ${postPage && "mx-auto"}`}>
        <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatBubbleBottomCenterIcon className="h-4 group-hover:text-[#1d9bf0]" /> 
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-[12px]">
                {comments.length}
              </span>
            )} 
        </div> 

          {user.uid === post?.id ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                deleteDoc(doc(db, "posts", id));
               // navitate("/");
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                 <TrashIcon className="h-4 group-hover:text-red-600" /> 
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-green-500/10">
                 <BookmarkIcon className="h-4 group-hover:text-green-500" /> 
              </div>
            </div>
          )}

         <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div className="icon group-hover:bg-pink-600/10">
                {liked ? (
                  <HeartIconFilled className="h-4 text-pink-600" />
                ) : (
                  <HeartIcon className="h-4 group-hover:text-pink-600" />
                )}
            </div>
                {likes.length > 0 && ( 
                  <span
                    className={`group-hover:text-pink-600 text-[11px] ${
                      liked && "text-pink-600"
                    }`}
                  >
                     {likes.length} 
                  </span>
                )} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
