import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {ethers} from 'ethers'
import {CampaignNavbar, CountBox, CustomButton} from '../components'
import {useWebThreeContext} from '../context/WebThreeContext'
import { calculateBarPercentage, daysLeft } from '../utils'
import {logo2} from '../assets'

const CampaignDetailFeed = () => {
  const {state} = useLocation();
  const {donate, getDonations, contract, address} = useWebThreeContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators]=useState([]);

  console.log('state : ', state)

const remainingDays = daysLeft(state.deadline);

const fetchDonators = async ()=>{
  const data = await getDonations(state.pId);
  setDonators(data);
}

useEffect(()=>{
  if(contract) fetchDonators();
},[contract, address])


const handleDonate =async()=>{
  setIsLoading(true);
  await donate(state.pId, amount);
  setIsLoading(false)
}

  return (
    <div className="flex-grow border-l border-r border-[#fdb5b5] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      
    <CampaignNavbar/>
   
     {isLoading && <Loader/>}
     <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
       <div className="flex-1 flex-col">
        <img src={state.image} alt="campaign"
        className="ml-[2.5%] w-[95%] h-[250px] object-cover rounded-[7px]"/>
        {/* percentage bar */}
        <div className=" ml-[2.5%] w-[95%] relative  h-[9px] rounded-full bg-[#cdcdd1] mt-2">
           <div className="absolute h-full bg-[#272182]"
           style={{width:`${calculateBarPercentage(state.tagert, state.amountCollected)}%`, maxWidth:'100%'}}
           ></div>
        </div>
       </div>

       {/* Three boxes */}
       <div className="flex md:w-[150px] w-full flex-wrap justify-between ">
          <CountBox title="Days Left" value={remainingDays}/>
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected}/>
          <CountBox title="Total Backers" value={donators.length}/>
       </div>
     </div>

   {/* user info */}
   <div className="mt-[5px] flex lg:flex-row flex-col gap-5">
    <div className="flex-[2] flex flex-col gap-[5px]">
       <div>
       <h4 className="font-epilogue font-semibold text-[15px]  text-[#d84545]
       p-3 uppercase">
       CAMPAIGN OWNWER
       </h4>
       <div className="mt-[0px] flex flex-row items-center flex-wrap gap-[5px]">
          <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full cursor-pointer">
             <img src={logo2} alt="user" className="w-[60%] h-[60%] object-contain rounded-full"/> 
          </div>
          <div>
            <h4 className="text-[#d84545] text-[12px] font-epilogue"
            >Campaign Owner : {state.owner}</h4>
            <p></p>
          </div>
       </div>
       </div>
          

    <div className="border border-[#fdecec] mx-[12px] bg-[#ffffff] rounded-[5px]">
       <h4 className="font-epilogue font-semibold text-[15px]  text-[#d84545]
       p-3 uppercase">
       STORY 
       </h4>

       <div className="mt-[4px]">
            <p className="mt-[2px] font-epilogue font-normal 
            text-[14px] text-[#808191] leading-[21px] text-justify mx-[12px]">
              {state.description}
            </p>
       </div>

      

     </div>
         
      <div className="mx-[10px] mt-[5px] flex flex-col gap-4">
       <div className="bg-[#ffffff] border-[#f69f9f] border rounded-[5px]">
       <h4 className="text-[#d84545] text-[12px] font-epilogue ml-[5px]">Donations</h4>
            {donators.length>0 ? donators.map((item,index)=>(
                <div key={`${item.donator}-${index}`} className="flex justify-between items-center gap-4">
              
                <p className="font-epilogue ml-[5px] font-normal text-[12px] text-[#d84545] leading-[17px] break-all truncate">
                  {index + 1}. {item.donator}
                  </p>
                </div>
            )):(
              <p className="mt-[2px] font-epilogue font-normal 
              text-[14px] text-[#ffffff] leading-[21px] text-justify mx-[12px]">
                No Donators yet ! Be the First One
              </p>
            )}        
        </div>
      </div>
          
    <div className="flex-1">
    <h4 className="font-epilogue font-semibold text-[15px]  text-[#d84545] p-3 uppercase">
        FUND
     </h4>

     <div className="mt-[0px] mx-[10px] flex flex-col p-4 bg-[#d84545] rounded-[5px]">
    <p className="font-epilogue mb-[5px] font-medium text-[16px] leading-[10px] text-center text-[#ffffff]">
      Fund the Campaign
    </p>
    <div className="mt-[5px] flex flex-row">
            <input 
                type="number"
                placeholder="ETH 0.1"
                step="0.01"
                className="w-full mr-[10px] py-[10px] sm:px-[10px] px-[10px] outline-none border-[1px] 
                border-[#ed7777] bg-transparent font-epilogue text-white text-[14px] 
                leading-[10px] placeholder:text-[#ffffff] rounded-[10px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            
              <CustomButton 
                btnType="button"
                title="Fund Campaign"
                styles="w-full bg-[#d84545] ml-[10px] border border-[#ed7777]"
               handleClick={handleDonate}
              />
            </div>
     </div>

    </div>



    </div>
   </div>
</div>
  )
}

export default CampaignDetailFeed