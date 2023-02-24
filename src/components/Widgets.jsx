import React ,{useEffect, useState}from 'react'
import {ChevronDoubleRightIcon} from '@heroicons/react/24/outline'
import { NewUser} from '../components'
import {VideoThumbSite} from '../video'
import {collection,where,onSnapshot,query} from "@firebase/firestore";
import { db } from "../../firebase";




function Widgets() {


const [psycho, setPsycho] = useState([])

useEffect(
      ()=>
      onSnapshot(
            query(collection(db,'users'),where('role','==','2')),
            (snapshot)=>{
                  setPsycho(snapshot.docs.map((doc)=>({
                        ...doc.data()
                  })))
            }
      ),[db])



return (
 <div className="hidden lg:inline ml-8 xl:w-[400px] border-b py-1 space-y-5">
      <div className="sticky top-0 py-0
            z-50 w-11/12 xl:w-9/12">
            <div className="flex items-center bg-[#ffffff] border border-[#ffeaea] p-3 rounded-[8px] relative shadow-md">
                  <ChevronDoubleRightIcon className="text-[#f56464] h-5 z-50" /> 
                  <input type="text" className="bg-transparent placeholder-gray-50 outline-none
                  text-[#a4344e] absolute inset-0 pl-11 border border-transparent w-full
                  rounded-[8px] focus:bg-[#eb3a3a]
                  focus:shadow-lg focus:rounded-[8px]"/>
                  </div> 
      </div>
      <div className="text-[#d84545] space-y-0 bg-[#ffffff] border border-[#f8ecec] pt-3  w-11/12 xl:w-9/12">
        <h4 className="font-bond text-[15px] px-3"> Clinical Psychologists</h4>

        {/* Psychologist */}

        {psycho && psycho.map((items,index)=>(
             <VideoThumbSite key={items.id} 
             id={items.id} 
             username={items.username} 
             description={items.description} 
             occupation={items.occupation}
             userImage={items.userImage}/>
              
        ))}
          
        {/* 
           {data && data.map((item)=>{
            console.log('item', item);
            const {id, snippet={}} = item;  
            const  {title, thumbnails={}, resourceId} = snippet;
            const {medium={}} =thumbnails;
          
            return (
                 <VideoThumb key={id} title={title} medium={medium} resourceId={resourceId}/>
               )
                     
           })}    */}

       <button className="hover:bg-[#821a1a] hover:bg-opacity-[0.03]
       px-4 py-3 cursor-pointer transition duration-200
       ease-out flex items-center justify-between w-full text-[#736f6f] text-[13px]
       font-light">Show more
       </button>


      </div>


      <div className="text-[#d84545] space-y-0 bg-[#ffffff] border border-[#f8ecec] pt-3  w-11/12 xl:w-9/12">
        <h4 className="font-bond text-[15px] px-3"> New Users</h4>

        {/* User List */}
         <NewUser/>
       
       <button className="hover:bg-[#821a1a] hover:bg-opacity-[0.03]
       px-4 py-3 cursor-pointer transition duration-200
       ease-out flex items-center justify-between w-full text-[#736f6f] text-[13px]
       font-light">Show more
       </button>


      </div>



</div>
 
)
}

export default Widgets