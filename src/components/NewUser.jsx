import React, {useState, useEffect} from 'react'
import {collection,onSnapshot, query, where, orderBy,limit, snapshotEqual} from '@firebase/firestore'
import {db} from '../../firebase';
import {PostState} from '../context/PostContext'
import {useNavigate} from 'react-router-dom'

const NewUser = () => {
const [newMember, setNewMember] = useState([])
const {memberId, setMemberId} = PostState()
const navigate = useNavigate()

useEffect(()=>{
const collectionRef = collection(db, 'users')
const q = query(collectionRef, orderBy('timestamp'),limit(5))
onSnapshot(q, (snapshot)=>{
  let newMember =[]
  snapshot.docs.forEach((doc)=>{
    newMember.push({...doc.data(), id:doc.id})
  })
  console.log('new members',newMember)
  setNewMember(newMember)
})
},[db])

  return (
<div class="p-0 flex cursor-pointer border-b border-[#fbeeee]">
  
  <ul class="flex flex-col divide-y w-full">
   
  {newMember.map(newMember=>(
    <li class="flex flex-row" key={newMember.id} >
          
    <div 
        onClick={(e)=>{
          e.stopPropagation();
          setMemberId(newMember?.id);
          navigate(`/Profile/${newMember?.id}`)
        }}
    class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-1">
        <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <a href="#" class="block relative">
            <img alt="profile" src={newMember?.userImage} class="mx-auto object-cover rounded-full h-8 w-8" />
          </a>
        </div>
        <div class="flex-1 pl-1">
          <div class="text-[13px] dark:text-white text-[#b73838]">{newMember?.username}</div>
          <div class="text-gray-400 dark:text-gray-200 text-[11px]"> 
          {/* {(new Date(followed?.timestamp.toDate())).toDateString()} */}
          </div>
        </div>
        <div class="flex flex-row justify-center">
          {/* <div class="text-[#a8a8a8] dark:text-gray-200 text-[7px]">{Date(follower?.timestamp*1000).toLocaleString('YYYY-MM-DD')}</div> */}
          <button class="w-7 text-right flex justify-end">
            <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
      </div>

      </li>
    ))}

      

    </ul>
</div>
  )
}

export default NewUser
