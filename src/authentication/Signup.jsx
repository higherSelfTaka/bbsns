import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import GoogleAuth from './GoogleAuth';
import { 
  doc,
  setDoc,
  serverTimestamp,
} from "@firebase/firestore";
import {db} from '../../firebase'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const {createUser,user, setUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
      e.preventDefault()
      setError('')
      try {
        await createUser(email, password)
        navigate('/')
      } catch(e) {
      setError(e.message)
      console.log(e.message)
      }
  }


  return (

    <div className="min-h-screen w-full bg-white py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-[#872c2c] to-[#d84545] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold font-epilogue text-[#d84545]">Burgundy Butterfly  </h1>
                    <h2 className="text-2xl font-semibold  font-epilogue text-[#d84545]">ETH Crowd Funding </h2>
                    <p className=" text-[14px] font-epilogue">All Rights Reserved @BB ETH Crowd Funding  </p>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						
                       
                        {/* <p className="font-epilogue text-[15px] py-2 ">Already have an account <Link to="/Signin" className="underline">SignIn</Link></p> */}
                        <GoogleAuth/>
        	</div>
				</div>
			</div>
		</div>
	</div>
</div>

  )
}

export default Signup
