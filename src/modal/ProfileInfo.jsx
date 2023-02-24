import React from 'react'
import {PhotoIcon,  ChartBarSquareIcon, CalendarDaysIcon,XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {PostState} from '../context/PostContext'
import {UserAuth} from '../context/AuthContext'
import {
  doc,
  setDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../../firebase";
const ProfileInfo = () => {
const  {setIsProfileEdit, isProfleEdit} = PostState()
const {user} = UserAuth()
const [occupation, setOccupation]=useState("")
const [description, setDescription]=useState("")

const [selected, setSelected] = useState("option");

  // set selector of role 
  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };




 
const UserDataEntry = async(e)=>{
  e.preventDefault();

await setDoc(doc(db, "users", user.uid),{
  id:user.uid,
  username: user.displayName,
  timestamp: serverTimestamp(),
  occupation:occupation,
  description:description,
  role:selected
 },{merge:true})
  
 setIsProfileEdit(false)
setOccupation("")
setDescription("")

router.push(`/Profile`);
};

 
  return (
    <Transition.Root show={isProfleEdit} as={Fragment}>
        
    <Dialog as="div" className="fixed z-50 inset-0 pt-8"onClose={() => setIsProfileEdit(false)}> 
  
      <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-[#000000] bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="inline-block align-bottom bg-[#ffffff] rounded-2xl 
          text-left overflow-hidden shadow-xl transform transition-all
          sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
          
       
         {/* Modal */}
         <div className="flex items-center px-1.5 py-2 border-b border-[#fdc6c6]">
                   <div className="hoverAnimation w-9 h-9 flex
                   items-center justify-center xl:px-0 "
                   onClick={()=>setIsProfileEdit(false)}
                   >
                    <XMarkIcon className="h-[22px] text-[#ee6d6d]"/>
                   </div>
              </div>

              <div class="flex px-4 pt-5 pb-2.5 sm:px-6">
              <div className="w-full">
                        <label htmlFor="helper-text" className=" block mb-2 text-sm font-medium text-[#ee6d6d] dark:text-white">Are you a victim or a supporter</label>
                         <select  id="small" value={selected} onChange={handleChange}
                         className="form-select 
                              form-select-sm mb-3 
                              block
                              w-full
                              px-4
                              py-2
                              text-sm
                              font-normal
                              text-[#6a6969]
                              bg-[#ffffff] bg-clip-padding bg-no-repeat
                              border border-solid border-[#fdc6c6]
                              rounded-lg
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-500 focus:bg-[#e1e0e0]] focus:border-[#ee6d6d] focus:outline-none" aria-label=".form-select-lg example">
                            <option defaultValue>Open this select menu</option>
                            <option value="1">Victim</option>
                            <option value="2">Supporter : clinical Psychologist</option>
                            <option value="3">Supporter : NPO </option>
                            <option value="4">Supporter : Government related</option>
                            <option value="5">Supporter : Others</option>
                            <option value="6">Donaor </option>
                            <option value="7">Others</option>
                        </select>


                          <label for="helper-text" className=" block mb-2 mt-2 text-sm font-medium text-[#ee6d6d] dark:text-white">
                            Profession
                          </label>
                          <input type="text" id="helper-text" aria-describedby="helper-text-explanation" 
                          className="bg-[#ffffff] border border-[#fdc6c6] text-gray-800 text-sm rounded-lg
                            focus:ring-[#ee6d6d] focus:border-[#ee6d6d] block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-[#ee6d6d] dark:text-white dark:focus:ring-[#ee6d6d] dark:focus:border-[#ee6d6d]" 
                            placeholder="your profession"
                            onChange={(e)=>setOccupation(e.target.value)}
                           />
 

                          <label for="helper-text" className=" block mb-2 mt-2 text-sm font-medium text-[#ee6d6d] dark:text-white">
                            Your Description
                          </label>
                          <textarea type="text" id="helper-text" aria-describedby="helper-text-explanation" 
                          className="bg-[#ffffff]  border border-[#fdc6c6] text-gray-800 text-sm rounded-lg
                            focus:ring-[#ee6d6d] focus:border-[#ee6d6d] block  w-full p-2.5  dark:bg-[#ee6d6d] dark:border-[#ee6d6d]
                            dark:placeholder-[#ee6d6d] dark:text-white dark:focus:ring-[#ee6d6d] dark:focus:border-[#ee6d6d]" 
                            placeholder="Describe who you are!"
                            onChange ={(e)=>setDescription(e.target.value)}
                            />
                </div>
                </div>

                     {/* footer */}
                <div className="flex items-center justify-between pt-2.5">
                        <button
                          className="bg-[#ee6d6d] text-white rounded-full ml-3 mb-3 px-4 py-1.5 font-bold shadow-md
                            hover:bg-[#a0a7ab] disabled:hover:bg-[#dbdbdb] disabled:opacity-50 disabled:cursor-default"
                          type="submit"
                          onClick={UserDataEntry}
                        >
                          Register
                        </button>
                 </div>
             
          
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
  )
}

export default ProfileInfo