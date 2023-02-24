import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Home, Forum, CampaignDetails, PostPage, YourCampaign, Profile, Streaming, Supporter} from './pages'
import {Signup, Signin, } from './authentication'
import {VideoDetail} from './video'


import {Post,} from './components'
import "./index.css"

import { AuthContextProvider } from './context/AuthContext'
import { PostContextProvider } from './context/PostContext'
import ProtectedRoute from './routeprotection/ProtectedRoute'

const App = () => {
  return (
    <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
    
    <AuthContextProvider>
    <PostContextProvider>
    <Routes>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Signin" element={<Signin/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="/Forum" element={<Forum/>}/>
     <Route path="/Forum/:id" element={<PostPage/>}/>
     <Route path="/Your_Campaign" element={<YourCampaign/>}/>
     <Route path="/Campaign-details/:id" element={<CampaignDetails/>}/>
     <Route path="/Profile" element={<Profile/>}/>
     <Route path="/Profile/:id" element={<Profile/>}/>
     <Route path="/Streaming/:id" element={<VideoDetail/>}/>
     <Route path="/Streaming" element={<Streaming/>}/>
     <Route path="/Supporter" element={<Supporter/>}/>
     {/* <Route path="/Post/:id" element={<Post/>}/> */}
     
     
     
    </Routes>
    </PostContextProvider>
    </AuthContextProvider>
    
 

      {/* modal */}
    </main>
  )
}

export default App

