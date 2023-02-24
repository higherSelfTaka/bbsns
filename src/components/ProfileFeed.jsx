import React,{useEffect, useState} from 'react'
import { CampaignNavbar, CustomButton, Campaigns} from '../components'
import {CreateCampaignM} from '../modal'
import {useWebThreeContext} from '../context/WebThreeContext'

const ProfileFeed = () => {

  const {isOpen, setIsOpen} = useWebThreeContext();

  const [isLoading, setIsLoading]=useState(false);
  const [campaigns, setCampaigns]=useState([])

  const {address, contract, getUserCampaigns} = useWebThreeContext()


const fetchCampaigns = async()=>{
  setIsLoading(true)
  const data = await getUserCampaigns();
  setCampaigns(data);
  setIsLoading(false)
}


  useEffect(()=>{
    if(contract) {
      fetchCampaigns()
    }
  },[address, contract]);


  return (
    <div className="flex-grow border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
        <CampaignNavbar/>

        <div className="text-[#d84545] flex items-right sm:justify-between py-2 px-3 sticky top-0 z-50
       bg-[#ffffff] border-b border-[#fdb5b5]">
                  <CustomButton
                    btnType="submit"
                    title="Create a Campaign"
                    styles="bg-[#ffffff] px-8 border border-[#fdb5b5] 
                    text-[#d84545] rounded-full hover:bg-[#e8d9d9] hover:text-[#ffffff]
                    hover:border-0"
                    handleClick={()=>{
                      setIsOpen(true)
                      console.log(isOpen)
                    }}/>
        </div> 

       {isOpen && <CreateCampaignM/>} 
       
       <Campaigns 
        title="Your Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
        />  
    </div>
  )
}

export default ProfileFeed
