import React, {useState, useEffect} from 'react'
import { CampaignNavbar, Input, Post, Tab, ProfileHeader, FollowerList, FollowedList} from '../components'
import {db} from '../../firebase'
import {onSnapshot, collection, query, orderBy, getDocs} from "@firebase/firestore"
import {PostState} from '../context/PostContext'


const Feed = () => {
 
  const [posts, setPosts] = useState([]);
  const {isStory, isFollower, isFollowing}  = PostState()

// post 
useEffect(()=>
  onSnapshot(
    query(collection(db, "posts"), orderBy("timestamp","desc")),
    (snapshot) =>{
      setPosts(snapshot.docs);
    }
  ),[db])

  return (
    <div className="flex-grow border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
        <CampaignNavbar/>
      
       
       <ProfileHeader/>
       
        <Tab/>
       

       {isStory && (
        <>
        <Input/>
        <div className="pb-72">
        {posts.map(post=>(
          <Post key={post.id} id={post.id} post={post.data()}/>
        ))}
       </div>
       </>
       )}

       
        
       {isFollower && (
        <div className="pb-72">
          <FollowerList/>
           
        </div>
       )}      

        {isFollowing && (
        <div className="pb-72">
            <FollowedList/>
        
        </div>
       )}        

    </div>
  )
}

export default Feed