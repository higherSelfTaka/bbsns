import {TagIcon} from "@heroicons/react/24/outline"
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {PostState} from '../context/PostContext'

function Comment({id, comment}) {
  const navigate = useNavigate()
  const {setMemberId}=PostState();
  




return (
    <div className="p-3 flex cursor-pointer border-b border-[#fdb5b5]">
    <img
      onClick={()=>{
       navigate(`/Profile/${comment.userId}`)
       setMemberId(comment.userId)
      }}
      src={comment?.userImg}
      alt=""
      className="h-11 w-11 rounded-full mr-4"
    />
    <div className="flex flex-col space-y-1 w-full">
      <div className="flex justify-between">
        <div className="text-[#e34a4a]">
          <div className="inline-block group">
            <h4 className="font-bold text-[#e34a4a] text-[12px] sm:text-sm inline-block group-hover:underline"
             onClick={()=>{
              navigate(`/Profile/${comment.userId}`)
              setMemberId(comment.userId)
             }}
            >
              {comment?.username}
            </h4>
            <span className="ml-1.5 text-[12px] sm:text-[11px]">
              @{comment?.tag}{" "}
            </span>
          </div>{" "}
          ·{" "}
          <span className="hover:underline text-[12px] sm:text-[11px]">
           {/* {new Date(comment?.timestamp.seconds*1000).toLocaleString()}     */}
       {/* 　　　  {DateTime.parse(comment?.timestamp.toDate().toString())} */}
          </span>
          <p className="text-[#e34a4a] mt-0.5 max-w-lg overflow-scroll text-[12px] sm:text-sm">
            {comment?.comment}
          </p>
        </div>
        <div className="icon group flex-shrink-0">
          <TagIcon className="h-5 text-[#e34a4a] group-hover:text-[#1d9bf0]" />
        </div>
      </div>
    </div>
  </div>
)
}

export default Comment
