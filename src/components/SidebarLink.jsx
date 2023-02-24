import React from 'react'

const SidebarLink = ({styles, name, Icon, isActive, disabled, memberId, handleClick}) => {
  return (
    <div className={`text-[#d84545] flex items-center justify-center 
    xl:justify-start text-xl space-x-3 hoverAnimation ${isActive ===name && "font-bold"} ${styles}`}
    onClick={handleClick}
    >
     {!isActive ? (
      <Icon className="h-5 text-bold"/>
     ):(
      <Icon className="h-5"/>
     )}
     
   
      <span className="hidden xl:inline text-[15px]">{name}</span>
    </div>
  )
}

export default SidebarLink
