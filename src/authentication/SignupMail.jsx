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
						{/* <form onSubmit={handleSubmit}>
                            <div className="relative mt-4 ">
                                <input onChange={(e)=>setEmail(e.target.value)} autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div className="relative mt-4 ">
                                <input  onChange={(e)=>setPassword(e.target.value)} autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div className="relative mt-4 ">
                                <button className="bg-[#d84545] text-white rounded-md px-2 py-1">Submit</button>
                            </div>
            </form> */}
                       
                        <p className="font-epilogue text-[15px] py-2 ">Already have an account <Link to="/Signin" className="underline">SignIn</Link></p>
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
