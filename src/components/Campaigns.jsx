import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Loader} from '../components'
import FundCard  from './FundCard'

const Campaigns = ({title, isLoading, campaigns}) => {
    const navigate = useNavigate()


const handleNavigate = (campaign)=>{
    navigate(`/campaign-details/${campaign.title}`,{state:campaign})
}

  return (
  <div className="">
    
    <h1 className="font-epilogue font-semibold text-[14px] text-[#d84545] text-left mt-2 ml-2">
        {title} ({campaigns.length})
    </h1>
    {/* <div className="flex flex-col flex-warap mt-[10px] gap-[10px] ml-[10px]"> */}
    <div className="flex flex-col space-y-1 w-full">
       
        {isLoading && (
          <Loader/>
        )}

        {!isLoading && campaigns.length === 0 && (
            <p className="ml-2 font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                we have not created any campaigns yet
            </p>
        )}

        {!isLoading &&  campaigns.length >0 && campaigns.map((campaign)=>
        <FundCard
        key={campaign.id}
        {...campaign}
        handleClick={()=> handleNavigate(campaign)}
        />
        )}
        
    </div>
   </div>

  )
}

export default Campaigns
