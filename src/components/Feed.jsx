import React, {useState, useEffect} from 'react'
import { CampaignNavbar, Input, Post, Tab} from '../components'
import {db} from '../../firebase'
import {onSnapshot, collection, query, orderBy} from "@firebase/firestore"





const Feed = () => {
 
  const [posts, setPosts] = useState([]);

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
        <Input/>

      

         
          <div className="pb-72">
            {posts.map(post=>(
              <Post key={post.id} id={post.id} post={post.data()}/>
            ))}
          </div>
                  

    </div>
  )
}

export default Feed
