import React from 'react'

const CountBox = ({title, value}) => {
  return (
    <div className="flex flex-col items-center w-[120px]">
       <h4 className="font-epilogue font-bold text-[16px] p-2 text-[#ffffff]
       bg-[#d84545] rounded-t-[7px] w-full text-center truncate">
        {value}
       </h4>
       <p className="font-epilogue font-normal text-[12px] text-[#e04350]
       border border-[#d84545]  bg-[#ececec] text-center w-full rounded-b-[7px]">{title}</p>

    </div>
  )
}

export default CountBox