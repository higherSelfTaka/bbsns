import React,{useState, useEffect} from 'react'
import {UserAuth} from '../context/AuthContext'
import { PostState } from '../context/PostContext'
import {
    onSnapshot,
    doc,
    setDoc,
    serverTimestamp,
    addDoc,
    collection,
    query,
    orderBy,
    where,
    getDoc,
    deleteDoc,
    getCountFromServer,
    getDocs, 
  } from "@firebase/firestore";
import { db } from "../../firebase";
import { ChartBarSquareIcon,  } from "@heroicons/react/24/outline";
import {annoymous} from '../assets/'

const ProfileHeader = () => {

const {user} = UserAuth()
const [currentUser, setCurrentUser] = useState()
const {memberId, isProfleEdit, setIsProfileEdit} = PostState()
const [followedButtom, setFollowedButtom] = useState(false)
const [numbOffollowing, setNumOffollowing] = useState('')
const [numOffollowed, setNumOffollowed] = useState('')


useEffect(()=>{
    try{
    if(user.uid===memberId){
        onSnapshot(doc(db,"users",user.uid),(snapshot)=>{
            setCurrentUser(snapshot.data());
        })
    } else {
        onSnapshot(doc(db,"users",memberId), (snapshot)=>{
            setCurrentUser(snapshot.data());
        })
        checkfollowed();
       
     
    }
    } catch(error){
        console.error(error)
    }
    checkNumofFollowing();
    checkNumofFollowed();
},[db, memberId, user.uid, followedButtom])


// check to see if member is followed by user
const checkfollowed = async ()=>{
 
    const docRef = doc(db,'users', user.uid, 'following', memberId);
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
         setFollowedButtom(true);
         console.log("this member is followed");
         console.log(followedButtom)
     } else {
        console.log("this member is not followed");
        setFollowedButtom(false);
     }
}   

// check follower and follwed counter 
const checkNumofFollowing = async () =>{
    const docRef = collection(db,'users', memberId, 'following');
    const snapshot = await getCountFromServer(docRef);
    console.log('count for following', snapshot.data().count)
    setNumOffollowing(snapshot.data().count);
   
    
}

const checkNumofFollowed = async ()=>{
    const docRef = collection(db, 'users',memberId, 'followed');
    const snapshot=await getCountFromServer(docRef)
    console.log('count for followed', snapshot.data().count)
    setNumOffollowed(snapshot.data().count)
   
}

// add follower
const followMember =async(e)=>{
       e.preventDefault();
        try {
           if(user.uid!==memberId){
                setFollowedButtom(true);
                await setDoc(doc(db,'users', user.uid, 'following', memberId),{
                    id:currentUser.id, 
                    username:currentUser.username,
                    following:user.uid,
                    userImage:currentUser.userImage,
                    timestamp:serverTimestamp(),
                })
                await setDoc(doc(db, 'users', memberId, 'followed', user.uid),{
                    id:user.uid,
                    username:user.displayName,
                    followed:currentUser.id,
                    userImage:user.photoURL,
                    timestamp:serverTimestamp(), 
                })
           } 
           checkNumofFollowing();
           checkNumofFollowed();
        } catch(error){console.error(error)}
}

// delete 
const unfollowMember = async(e)=>{
    e.preventDefault();
    try {
        if(user.uid!==memberId){
           setFollowedButtom(false);
           await deleteDoc(doc(db,'users', user.uid, 'following', memberId))
           await deleteDoc(doc(db, 'users', memberId, 'followed', user.uid))
        }
        checkNumofFollowing();
        checkNumofFollowed();
    } catch(e) {console.log(e.message)}

}


return (
    <div>
    {/* Header part */}    
<div className='bg-[#ffffff]'>
   <div className="w-full bg-cover bg-no-repeat bg-center h-100" >
       <img className="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x100" alt=""/>
   </div>
   <div className="p-4">
       <div className="relative flex w-full">
           
           <div className="flex flex-1">
               <div className="mt-(-10)">
                   <div className="flex flex-row md rounded-full relative avatar h-[120px] w-[500px]">
                       <img  className="md rounded-full relative border-4 h-[120px] w-[120px] border-[#f3d6d6]"  src={currentUser?.userImage ? (currentUser?.userImage):(annoymous)}  alt=""/>
                      <div className="flex flex-col ml-[5px]">
                      <h2 className="text-xl leading-6 font-bold text-[#d84545]  ml-[10px]">{currentUser?.username}</h2>
                       <p className="text-[#aeadad] text-[12px] leading-tight mb-2 ml-[10px] ">
                       {currentUser?.occupation}
                        </p>
                        <p className="text-[#aeadad] text-[14px] leading-tight mb-2 ml-[10px] ">
                       {currentUser?.description}
                        </p>
                      </div>
                       
                       
                   </div>
               </div>
           </div>
           
           <div className="flex flex-col text-right">
            {user.uid===currentUser?.id && (
               <button 
               className="justify-center  max-h-max whitespace-nowrap 
               focus:outline-none  focus:ring max-w-max border bg-[#d84545] border-[#d84545] text-white hover:border-[#d84545]
                flex items-center hover:shadow-lg font-bold py-1 px-4 rounded-full mr-0 ml-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('click profile')
                  setIsProfileEdit(true);
                  console.log(isProfleEdit)
                 }}
                >
                Edit Profile
               </button>
            )}
            {user.uid!==currentUser?.id && !followedButtom && (
                <button 
               className="justify-center  max-h-max whitespace-nowrap 
               focus:outline-none  focus:ring max-w-max border bg-[#d84545] border-[#d84545] text-white hover:border-[#d84545]
                flex items-center hover:shadow-lg font-bold py-1 px-4 rounded-full mr-0 ml-auto"
                onClick={followMember}
                >
                Follow
               </button>
            )}
            {user.uid!==currentUser?.id && followedButtom &&  (
               <button 
               className="justify-center  max-h-max whitespace-nowrap 
               focus:outline-none  focus:ring max-w-max border bg-[#d84545] border-[#d84545] text-white hover:border-[#d84545]
                flex items-center hover:shadow-lg font-bold py-1 px-4 rounded-full mr-0 ml-auto"
                onClick={unfollowMember}
                >
                Followed
               </button>
            )}
           </div>
       </div>

       
       <div className="space-y-1 justify-center w-full mt-3 ml-3">
           
           <div>
           </div>
           
           <div className="mt-3">
             
               <div className="text-gray-600 flex">
                   <span className="flex mr-2">
                  
                   <ChartBarSquareIcon className="w-5 h-5 text-[#c03b3b] mr-2"/>
                    <p className="text-[#c03b3b] text-[12px]"> www.raisondetre.tokyo  </p>  
                   </span>
                
               </div>
           </div>
          
           {user.uid===user.uid ? (
           <div className="pt-3 flex justify-start items-start w-full divide-x divide-[#d84545] divide-solid">
               <div className="text-center pr-4">
                   <span className="text-[#d84545] text-[15px]">
                    {numbOffollowing}
                   </span>
                   <span className="text-[#d84545]">  following</span>
               </div>
                <div className="text-center px-4">
                   <span className="text-[#d84545] text-[15px]">
                    {numOffollowed}
                   </span>
                   <span className="text-[#d84545]">  follower</span>
               </div>
           </div>
           ):(
           <div className="pt-3 flex justify-start items-start w-full divide-x divide-[#d84545] divide-solid">
               <div className="text-center pr-4">
                   <span className="text-[#d84545] text-[15px]" >
                    {numbOffollowing} 
                   </span>
                   <span className="text-[#d84545]">  following</span>
               </div>
                <div className="text-center px-4">
                   <span className="text-[#d84545] text-[15px]">
                     {numOffollowed}
                   </span>
                   <span className="text-[#d84545]">  follower</span>
               </div>
           </div>
           )}
       </div>
   </div>
   <hr className="border-[#d84545]"/>
</div>

</div>
  )
}

export default ProfileHeader