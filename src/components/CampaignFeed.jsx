
import React, {useState, useEffect} from 'react'
import { CampaignNavbar} from '../components'
import {db} from '../../firebase'
import {onSnapshot, collection, query, orderBy} from "@firebase/firestore"
import {Campaigns} from '../components'
import { useWebThreeContext } from '../context/WebThreeContext'


const CampaignFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns]=useState([])

  const {address, contract, getCampaigns} = useWebThreeContext()

// getCampaings is async function so we are going to create function 
// we are not able to call getcampaign function immediately in the useEffect function 
const fetchCampaigns = async()=>{
  setIsLoading(true)
  const data = await getCampaigns();
  setCampaigns(data);
  setIsLoading(false)
}


  useEffect(()=>{
    if(contract) {
      fetchCampaigns()
    }
  },[address, contract]);

  return (
    <div className="flex-grow flex-wrap  border-l border-r border-[#fbeeee] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
        <CampaignNavbar/>
       
       
       <Campaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
        />  
      
        

    </div>
  )
}

export default CampaignFeed
