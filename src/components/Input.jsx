import {React, useState, useRef} from 'react'
import {XCircleIcon, PhotoIcon, ChartBarIcon, RadioIcon, CalendarIcon} from '@heroicons/react/24/solid'
//firebase
import {db, storage} from '../../firebase';
import {addDoc, collection, doc, serverTimestamp, updateDoc} from '@firebase/firestore';
import {getDownloadURL,  ref, uploadString} from '@firebase/storage';
// auth 
import { UserAuth } from '../context/AuthContext'



function Input() {

  const {user} = UserAuth()

const [input, setInput] = useState("");
const [selectedFile, setSelectedFile]=useState(null)
const [showEmojis, setShowEmojis]=useState(false)
const [loading, setLoading] =useState(false)
const filePickerRef = useRef(null)

const sendPost = async ()=>{
if(loading) return; 
setLoading(true)

const docRef= await addDoc(collection(db,'posts'),{
   id:user.uid,
   username: user.displayName,
   userImg: user.photoURL,
   useremail: user.email,
   text:input,
  timestamp:serverTimestamp(),
});

const imageRef = ref(storage, `posts/${docRef.id}/image`)
if(selectedFile){
  await uploadString(imageRef, selectedFile, "data_url").then(async ()=>{
    const downloadURL=await getDownloadURL(imageRef);
    await updateDoc(doc(db, "posts", docRef.id),{
      image: downloadURL,
    });
  });
}

setLoading(false)
setInput("");
setSelectedFile(null);


}

const addImageToPost=(e)=>{

const reader = new FileReader();
    if(e.target.files[0]){
    reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) =>{
    setSelectedFile(readerEvent.target.result);
    };
};

const addEmoji=()=>{

}

return (
<div className={`border-b border-[#febaba] p-3 flex space-x-3 overflow-y-scroll 
    ${loading && "opacity-60"}`}>
    
     <img src={user.photoURL} alt="" className="h-11 w-11 rounded-full cursor-pointer"/> 
     <div className="w-full divide-y divide-[#febaba]">
      
       <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
        <textarea 
        value={input}  
        onChange={(e)=> setInput(e.target.value)}
        rows="2"
        placeholder="What's on your story ? tell us !?"
        className="bg-transparent outline-none text-[#d84545] text-[15px]
         placeholder-gray-500 tracking-wide w-full min-h-[50px]"/>

            {selectedFile && (
            <div className="relative">
                    <div className="absolute w-8 h-8 bg-[#15181c]
                    hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center
                    justify-center top-1 left-1 cursor-pointer"
                    onClick={()=>setSelectedFile(null)}
                    >
                    <XCircleIcon className="text-white h-5"/>
                    </div>
                <img 
                src={selectedFile} 
                alt="" 
                className="rounded-2xl max-h-80 mb-3 object-contain"
                />
            </div>
            )}
       </div>

  {!loading && (
        <div　className="flex items-center justify-between pt-2.5">
        <div className="flex items-center">
          <div className="icon" 
          onClick={()=>filePickerRef.current.click()}
          >
            <PhotoIcon className="h-[22px] text-[#d84545]"/>
            <input 
            type="file" 
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
            />
          </div>

          <div className="icon rotate-90">
          <ChartBarIcon className="text-[#d84545] h-[22px]"/>
          </div>

          <div className="icon" onClick={()=>setShowEmojis(!showEmojis)}>
          <RadioIcon className="text-[#d84545] h-[22px]"/>
          </div>

          <div className="icon">
          <CalendarIcon className="text-[#d84545] h-[22px]"/>
          </div>

        </div>

        <button className="bg-[#d84545] text-white rounded-full px-4 py-1.5 
        font-bold shadow-md hover:bg-[#f73838]
        disabled:hover:bg-gray-800 disabled:opacity-50
        disabled:cursor-default" disabled={!input.trim() && 
        !selectedFile}
        onClick={sendPost}
        >
        Tell Your Story
        </button>

        </div>
  )}

     
     </div>
</div>
    
  )
}

export default Input


