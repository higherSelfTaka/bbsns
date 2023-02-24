

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {XMarkIcon } from "@heroicons/react/24/outline";
import {onSnapshot, doc, addDoc, collection, serverTimestamp} from "@firebase/firestore";
import { db } from "../../firebase";

import {useNavigate} from 'react-router-dom';
import {ethers} from 'ethers';
import {checkIfImage} from '../utils'
import {FormField} from "../modal";
import {money} from "../assets"

import {useWebThreeContext} from '../context/WebThreeContext'

import { CustomButton, Loader } from "../components";

function CreateCampaignM() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {createCampaign} = useWebThreeContext();
    const [form, setForm]=useState({
      name:'',
      title:'',
      description:'',
      target:'',
      deadline:'',
      image:''
    });

    const {isOpen, setIsOpen} = useWebThreeContext();

   const handleFormFieldChange =(fieldName, e)=>{
    setForm({...form, [fieldName]: e.target.value})

   }


    const handleSubmit =async(e)=>{
     e.preventDefault();

      checkIfImage(form.image, async(exists)=>{
      if(exists){
            setIsLoading(true)
            await createCampaign({...form, target:ethers.utils.parseUnits(form.target, 18)})
            console.log(form);
            setIsLoading(false);
            setIsOpen(false);
        } else {
          alert('Provide valid image URL')
          setForm({...form, image:''})
        }
      })
    
    }

  return (
     <Transition.Root show={isOpen} as={Fragment}>
        
      <Dialog as="div" className="fixed z-50 inset-0 pt-8"onClose={() => setIsOpen(false)}> 
    
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
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
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
             <div className="flex items-center px-1.5 py-2 border-b  border-[#f1d3d3]">
              <div 
                  className="hoverAnimation w-9 h-9 flex
                  items-center justify-center xl:px-0"
                   onClick={()=>setIsOpen(false)}
                  >
                 <XMarkIcon className="h-[22px] text-[#ff5353]"/>
                </div>
             </div>
             
             <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
                  <div className="w-full">
                 {/* <div className="text-[#cbbebe] flex gap-x-3 relative"> */}
               
                 <div className="bg-[#ffffff] flex justify-center items-center flex-col rounded-[5px] sm:p-0 p-0">
   
                 {isLoading && <Loader/>}
                 <div className="flex justify-center items-center p-[10px] sm:min-w[380px] rounded-[10px]">
                    <h1 className="font-epilogue font-bold sm:text-[15px] text-[15px] leading-[38px] text-[#ee6d6d]">
                    Start a Campaign For Your Cause
                    </h1>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full mt-[10px] flex flex-col gap-[5px]">
                    <div className="flex flex-wrap gap-[5px]"> 
                       <FormField
                       labelName="Your Name *"
                       placeholder = "John Doe"
                       inputType="text"
                       value={form.name}
                       handleChange={(e)=>handleFormFieldChange('name',e)}
                       />
                        <FormField
                       labelName="Campaign Title *"
                       placeholder = "Type a title of campaign"
                       inputType="text"
                       value={form.title}
                       handleChange={(e)=>handleFormFieldChange('title',e)}
                       />
                        <FormField
                       labelName="Campaign Description *"
                       placeholder = "Description about your campaign and cause"
                       isTextArea={true}
                       inputType="text"
                       value={form.description}
                       handleChange={(e)=>handleFormFieldChange('description',e)}
                       />

                      
                    </div>

                    <div className="mx-5 mb-5 flex justify-start items-center p-2 h-[30px] rounded-[8px] bg-[#ee6d6d]">
                        <img src={money} alt="money" className="w-[20px] h-[20px] object-contain"/>
                        <h4 className="font-epilogue font-bold text-[12px] text-[#f0bdbd] ml-[14px]">
                        You will get 100% of raised amount !!! 
                        </h4>
                    </div>

                    <div className="flex flex-wrap gap-[3px] text-[#f0bdbd]">
                        <FormField
                        labelName="Your Goal"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={(e)=>handleFormFieldChange('target', e)}
                        />
                        <FormField
                        labelName="End Date *"
                        placeholder="End Date"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e)=>handleFormFieldChange('deadline', e)}
                        />
                        <FormField
                        labelName="Campaign Image *"
                        placeholder="Place image URL of your campaign"
                        inputType="url"
                        value={form.image}
                        handleChange={(e)=>handleFormFieldChange('image', e)}
                        />
                    </div>

                    <div className="flex justify-center items-center mt-[10px] text-[#f0bdbd]">
                    <CustomButton
                    btnType="submit"
                    title="Submit"
                    styles="bg-[#ee6d6d] mb-5 px-10"
                    />

                    </div>

                  </form>



                   




                 </div>
               </div>
             </div>
            
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CreateCampaignM;
