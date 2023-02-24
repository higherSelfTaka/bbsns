import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button
    type={btnType}
    className={
    `font-epilogue text-[16px] leading-[26px]
     text-white min-h-[52px] rounded-full
    ${styles}`
    }
    onClick={handleClick}>
     {title}
    </button>
  )
}

export default CustomButton
