import React,{ useState, useEffect} from 'react'
import {
    collection,where,getDocs,onSnapshot,query,orderBy
  } from "@firebase/firestore";
import { db } from "../../firebase";
import { CampaignNavbar, SupporterCard} from '../components'



const SupporterFeed = () => {

    const [supporters, setSupporters]=useState([])


useEffect(
()=>
onSnapshot(
    query(collection(db, "users"), where('role', '==', '2')),
    (snapshot)=>{
    setSupporters(snapshot.docs.map((doc)=>({
        ...doc.data()
    })))
    }
),[db])

console.log('supporters are ',supporters)


  return (
    <div className="flex-grow border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
       <CampaignNavbar/>

       
       {supporters.map((items, index)=>(
            <SupporterCard 
            id={items.id}
            username={items.username} 
            description={items.description} 
            occupation={items.occupation}
            userImage={items.userImage}
            />
       )   
       )}
       

    </div>
    
  )
}

export default SupporterFeed
