import React from 'react'

const FormField = ({labelName, placeholder, inputType, isTextArea,value, handleChange}) => {
  return (
    <label className="flex-1 w-full flex flex-col ml-5">
     {labelName && (
        <span className="font-epilogue font-medium text-[12px]  leading-[22px] text-[#ed7373] mb-[8px]">
            {labelName}
        </span>
     )}
     {isTextArea ? (
        <textarea
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        rows={3}
        placeholder={placeholder}
        className="py-[3px] sm:px-[15px] px-[5px]  mr-2 ml-2 mb-2
        outline-none border-[1px] border-[#f0d8d8] bg-transparent
        font-epilogue text-[#ed7373] text-[12px]
        placeholder:text-[#ed7373] rounded-[8px] sm:min-w-[300px]"
        />
     ):(
        <input
        required
        value={value}
        onChange={handleChange}
        type={inputType}
        step="0.01"
        placeholder={placeholder}
        className="py-[7px] sm:px-[10px] px-[5px] mr-2 ml-2 mb-2
        outline-none border-[1px] border-[#f0d8d8] bg-transparent
        font-epilogue text-[#ed7373] text-[12px]
        placeholder:text-[#ed7373] rounded-[8px] sm:min-w-[300px]"
        />
     )}
    </label>
  )
}

export default FormField